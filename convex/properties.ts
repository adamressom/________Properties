import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import {
  cleanHttpsUrl,
  cleanNonNegativeNumber,
  cleanOptionalText,
  cleanSlug,
  cleanText,
  requireAdmin,
} from "./security";

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("properties").collect();
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const slug = cleanSlug(args.slug);

    return await ctx.db
      .query("properties")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
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
    await requireAdmin(ctx);

    return await ctx.db.insert("properties", {
      title: cleanText(args.title, "Title", 120),
      location: cleanText(args.location, "Location", 160),
      price: cleanText(args.price, "Price", 60),
      type: cleanText(args.type, "Type", 60),
      status: cleanText(args.status, "Status", 40),
      beds: cleanNonNegativeNumber(args.beds, "Beds"),
      baths: cleanNonNegativeNumber(args.baths, "Baths"),
      sqft: cleanText(args.sqft, "Square footage", 40),
      image: cleanHttpsUrl(args.image, "Image"),
      slug: cleanSlug(args.slug),
      description: cleanOptionalText(args.description, "Description", 2000),
      featured: args.featured,
      createdAt: Date.now(),
    });
  },
});
