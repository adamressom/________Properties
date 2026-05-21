import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("properties").collect();
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("properties")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const getFeatured = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("properties")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .collect();
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    location: v.string(),
    price: v.string(),
    type: v.string(),
    status: v.string(),
    beds: v.number(),
    baths: v.number(),
    sqft: v.string(),
    image: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    featured: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("properties", {
      ...args,
      createdAt: Date.now(),
    });
  },
});