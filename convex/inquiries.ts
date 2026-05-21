import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import {
  checkRateLimit,
  cleanOptionalText,
  cleanPhone,
  cleanText,
  normalizeEmail,
  requireAdmin,
} from "./security";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    propertyId: v.optional(v.string()),
    propertyName: v.optional(v.string()),
    message: v.optional(v.string()),
    source: v.union(
      v.literal("contact_page"),
      v.literal("property_page"),
      v.literal("calendly"),
    ),
  },
  handler: async (ctx, args) => {
    const email = normalizeEmail(args.email);

    await checkRateLimit(ctx, `inquiry:${email}`, {
      limit: 5,
      windowMs: 60 * 60 * 1000,
    });

    return await ctx.db.insert("inquiries", {
      name: cleanText(args.name, "Name", 100),
      email,
      phone: cleanPhone(args.phone),
      propertyId: cleanOptionalText(args.propertyId, "Property ID", 100),
      propertyName: cleanOptionalText(args.propertyName, "Property name", 120),
      message: cleanOptionalText(args.message, "Message", 2000),
      source: args.source,
      createdAt: Date.now(),
    });
  },
});

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return await ctx.db.query("inquiries").order("desc").collect();
  },
});
