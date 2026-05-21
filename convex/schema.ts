import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({

  // Saved/favourited properties per user
  favorites: defineTable({
    userId: v.string(),        // WorkOS user ID
    propertyId: v.string(),    // e.g. "laurel-ridge-townhome"
    propertyName: v.string(),
    propertyImage: v.string(),
    propertyPrice: v.string(),
    propertyLocation: v.string(),
    savedAt: v.number(),       // timestamp
  }).index("by_user", ["userId"]),

  // Property inquiries / leads
  inquiries: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    propertyId: v.optional(v.string()),
    propertyName: v.optional(v.string()),
    message: v.optional(v.string()),
    source: v.string(),        // "contact_page" | "property_page" | "calendly"
    createdAt: v.number(),
  }),

  // Email signups / waitlist
  signups: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    userId: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  // Property listings (so you can manage from dashboard)
  properties: defineTable({
    title: v.string(),
    location: v.string(),
    price: v.string(),
    type: v.string(),          // "Luxury" | "For Rent" | "Mixed-Use" etc
    status: v.string(),        // "open" | "closed"
    beds: v.number(),
    baths: v.number(),
    sqft: v.string(),
    image: v.string(),
    slug: v.string(),          // URL slug e.g. "laurel-ridge-townhome"
    description: v.optional(v.string()),
    featured: v.boolean(),
    createdAt: v.number(),
  }).index("by_slug", ["slug"]).index("by_featured", ["featured"]),

});