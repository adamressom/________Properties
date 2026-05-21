import type { MutationCtx, QueryCtx } from "./_generated/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const URL_RE = /^https:\/\/[^\s/$.?#].[^\s]*$/i;
const PHONE_RE = /^[+()\-\s0-9.]{7,24}$/;

type AnyCtx = MutationCtx | QueryCtx;

export async function requireUser(ctx: AnyCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (identity === null) {
    throw new Error("Not authenticated");
  }
  return identity;
}

export async function requireAdmin(ctx: AnyCtx) {
  const identity = await requireUser(ctx);
  const adminEmails = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  if (adminEmails.length === 0) {
    throw new Error("Admin access is not configured");
  }

  const email = identity.email?.toLowerCase();
  if (!email || !adminEmails.includes(email)) {
    throw new Error("Not authorized");
  }

  return identity;
}

export async function checkRateLimit(
  ctx: MutationCtx,
  key: string,
  options: { limit: number; windowMs: number },
) {
  const now = Date.now();
  const existing = await ctx.db
    .query("rateLimits")
    .withIndex("by_key", (q) => q.eq("key", key))
    .first();

  if (!existing || existing.windowStart + options.windowMs <= now) {
    if (existing) {
      await ctx.db.patch(existing._id, {
        count: 1,
        windowStart: now,
        updatedAt: now,
      });
    } else {
      await ctx.db.insert("rateLimits", {
        key,
        count: 1,
        windowStart: now,
        updatedAt: now,
      });
    }
    return;
  }

  if (existing.count >= options.limit) {
    throw new Error("Too many requests. Please try again later.");
  }

  await ctx.db.patch(existing._id, {
    count: existing.count + 1,
    updatedAt: now,
  });
}

export function normalizeEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  if (normalized.length > 254 || !EMAIL_RE.test(normalized)) {
    throw new Error("Please enter a valid email address.");
  }
  return normalized;
}

export function cleanText(value: string, field: string, maxLength: number) {
  const cleaned = value.trim().replace(/\s+/g, " ");
  if (cleaned.length === 0) {
    throw new Error(`${field} is required.`);
  }
  if (cleaned.length > maxLength || /[\u0000-\u001f\u007f]/.test(cleaned)) {
    throw new Error(`${field} is invalid.`);
  }
  return cleaned;
}

export function cleanOptionalText(
  value: string | undefined,
  field: string,
  maxLength: number,
) {
  if (value === undefined) return undefined;
  const cleaned = value.trim().replace(/\s+/g, " ");
  if (cleaned.length === 0) return undefined;
  if (cleaned.length > maxLength || /[\u0000-\u001f\u007f]/.test(cleaned)) {
    throw new Error(`${field} is invalid.`);
  }
  return cleaned;
}

export function cleanPhone(phone: string | undefined) {
  const cleaned = cleanOptionalText(phone, "Phone", 24);
  if (cleaned !== undefined && !PHONE_RE.test(cleaned)) {
    throw new Error("Phone is invalid.");
  }
  return cleaned;
}

export function cleanSlug(slug: string) {
  const cleaned = slug.trim().toLowerCase();
  if (cleaned.length > 80 || !SLUG_RE.test(cleaned)) {
    throw new Error("Slug is invalid.");
  }
  return cleaned;
}

export function cleanHttpsUrl(url: string, field: string) {
  const cleaned = cleanText(url, field, 500);
  if (!URL_RE.test(cleaned)) {
    throw new Error(`${field} must be a valid HTTPS URL.`);
  }
  return cleaned;
}

export function cleanNonNegativeNumber(value: number, field: string) {
  if (!Number.isFinite(value) || value < 0 || value > 100000) {
    throw new Error(`${field} is invalid.`);
  }
  return value;
}
