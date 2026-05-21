import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const add = mutation({
  args: {
    userId: v.string(),
    propertyId: v.string(),
    propertyName: v.string(),
    propertyImage: v.string(),
    propertyPrice: v.string(),
    propertyLocation: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if already favourited
    const existing = await ctx.db
      .query("favorites")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("propertyId"), args.propertyId))
      .first();

    if (existing) return existing._id;

    return await ctx.db.insert("favorites", {
      ...args,
      savedAt: Date.now(),
    });
  },
});

export const remove = mutation({
  args: { userId: v.string(), propertyId: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("favorites")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("propertyId"), args.propertyId))
      .first();

    if (existing) await ctx.db.delete(existing._id);
  },
});

export const getByUser = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("favorites")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
  },
});

export const isFavorited = query({
  args: { userId: v.string(), propertyId: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("favorites")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("propertyId"), args.propertyId))
      .first();
    return !!existing;
  },
});