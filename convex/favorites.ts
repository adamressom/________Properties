import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import {
  cleanHttpsUrl,
  cleanText,
  requireUser,
} from "./security";

export const add = mutation({
  args: {
    propertyId: v.string(),
    propertyName: v.string(),
    propertyImage: v.string(),
    propertyPrice: v.string(),
    propertyLocation: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await requireUser(ctx);
    const userId = identity.tokenIdentifier;
    const propertyId = cleanText(args.propertyId, "Property ID", 100);

    const existing = await ctx.db
      .query("favorites")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => q.eq(q.field("propertyId"), propertyId))
      .first();

    if (existing) return existing._id;

    return await ctx.db.insert("favorites", {
      userId,
      propertyId,
      propertyName: cleanText(args.propertyName, "Property name", 120),
      propertyImage: cleanHttpsUrl(args.propertyImage, "Property image"),
      propertyPrice: cleanText(args.propertyPrice, "Property price", 60),
      propertyLocation: cleanText(args.propertyLocation, "Property location", 160),
      savedAt: Date.now(),
    });
  },
});

export const remove = mutation({
  args: { propertyId: v.string() },
  handler: async (ctx, args) => {
    const identity = await requireUser(ctx);
    const userId = identity.tokenIdentifier;
    const propertyId = cleanText(args.propertyId, "Property ID", 100);

    const existing = await ctx.db
      .query("favorites")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => q.eq(q.field("propertyId"), propertyId))
      .first();

    if (existing) await ctx.db.delete(existing._id);
  },
});

export const getByUser = query({
  args: {},
  handler: async (ctx) => {
    const identity = await requireUser(ctx);

    return await ctx.db
      .query("favorites")
      .withIndex("by_user", (q) => q.eq("userId", identity.tokenIdentifier))
      .collect();
  },
});

export const isFavorited = query({
  args: { propertyId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) return false;

    const propertyId = cleanText(args.propertyId, "Property ID", 100);
    const existing = await ctx.db
      .query("favorites")
      .withIndex("by_user", (q) => q.eq("userId", identity.tokenIdentifier))
      .filter((q) => q.eq(q.field("propertyId"), propertyId))
      .first();
    return !!existing;
  },
});
