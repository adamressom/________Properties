import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import {
  checkRateLimit,
  cleanOptionalText,
  normalizeEmail,
  requireAdmin,
} from "./security";

export const add = mutation({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const email = normalizeEmail(args.email);
    const name = cleanOptionalText(args.name, "Name", 100);
    const identity = await ctx.auth.getUserIdentity();

    await checkRateLimit(ctx, `signup:${email}`, {
      limit: 3,
      windowMs: 60 * 60 * 1000,
    });

    const existing = await ctx.db
      .query("signups")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (existing) return existing._id;

    return await ctx.db.insert("signups", {
      email,
      name,
      userId: identity?.tokenIdentifier,
      createdAt: Date.now(),
    });
  },
});

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return await ctx.db.query("signups").order("desc").collect();
  },
});
