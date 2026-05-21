import Link from "next/link";
import { notFound } from "next/navigation";

const propertyPages = {
  "example-estate": {
    title: "Example Estate",
    address: "400 Example Ridge Drive, Template City, ST 00000",
    location: "Template City",
    price: "$X,XXX,XXX",
    type: "Luxury",
    status: "Open",
    beds: "5",
    baths: "4",
    sqft: "X,XXX",
    hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1536&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1536&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1536&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1536&q=80",
    ],
    details: [
      ["Year Built", "20XX"],
      ["Lot Size", "X.XX acres"],
      ["Parking", "3-car garage"],
      ["Type", "Estate home"],
      ["Area", "Template City"],
    ],
    highlights: ["Private suite", "Chef kitchen", "Outdoor terrace", "Flexible office", "Media room", "Transit access"],
    description:
      "A polished luxury template page for a spacious estate-style property. Replace this copy with market-specific notes, finishes, neighborhood context, and showing instructions when the listing is ready.",
  },
  "waterfront-estate": {
    title: "Waterfront Concept",
    address: "800 Harbor Concept Way, Metro District, ST 00000",
    location: "Metro District",
    price: "Coming Soon",
    type: "Mixed-Use",
    status: "Closed",
    beds: "4",
    baths: "3",
    sqft: "X,XXX",
    hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1536&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1536&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1536&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1536&q=80",
    ],
    details: [
      ["Phase", "Concept"],
      ["Use", "Retail + residential"],
      ["Parking", "Structured"],
      ["Type", "Mixed-use"],
      ["Area", "Metro District"],
    ],
    highlights: ["Ground-floor retail", "Residential floors", "Waterfront access", "Public plaza", "Flexible layouts", "Future leasing"],
    description:
      "A concept listing template for a future mixed-use development. Use this page to describe the opportunity, project timeline, planned amenities, and availability once finalized.",
  },
  "suburban-family-home": {
    title: "Suburban Family Home",
    address: "210 Template Lane, Template County, ST 00000",
    location: "Template County",
    price: "$XXX,XXX",
    type: "Residential",
    status: "Open",
    beds: "4",
    baths: "3",
    sqft: "X,XXX",
    hero: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1536&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1536&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1536&q=80",
      "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1536&q=80",
    ],
    details: [
      ["Year Built", "20XX"],
      ["Lot Size", "X.XX acres"],
      ["Parking", "2-car garage"],
      ["Type", "Single-family"],
      ["Area", "Template County"],
    ],
    highlights: ["Open kitchen", "Large yard", "Primary suite", "Bonus room", "Storage", "Nearby parks"],
    description:
      "A residential listing template for a comfortable suburban property. Add school, commute, renovation, and neighborhood details when this page becomes a real listing.",
  },
  "mountain-view-retreat": {
    title: "Mountain View Retreat",
    address: "75 Vista Template Road, Template City, ST 00000",
    location: "Template City",
    price: "$X,XXX,XXX",
    type: "Luxury",
    status: "Open",
    beds: "5",
    baths: "4",
    sqft: "X,XXX",
    hero: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1536&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1536&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1536&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1536&q=80",
    ],
    details: [
      ["Year Built", "20XX"],
      ["Lot Size", "X.XX acres"],
      ["Parking", "3-car garage"],
      ["Type", "Retreat home"],
      ["Area", "Template City"],
    ],
    highlights: ["View deck", "Fireplace", "Guest suite", "Wellness room", "Privacy", "Trail access"],
    description:
      "A retreat-style property page with room for lifestyle copy, long-view amenities, outdoor features, and premium finishes.",
  },
  "urban-loft-residence": {
    title: "Urban Loft Residence",
    address: "55 Template Center Avenue, Template Center, ST 00000",
    location: "Template Center",
    price: "$XXX,XXX",
    type: "Modern",
    status: "Closed",
    beds: "2",
    baths: "2",
    sqft: "X,XXX",
    hero: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1536&q=80",
    images: [
      "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1536&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1536&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1536&q=80",
    ],
    details: [
      ["Year Built", "20XX"],
      ["HOA Fees", "$XXX/mo"],
      ["Parking", "Reserved space"],
      ["Type", "Loft residence"],
      ["Area", "Template Center"],
    ],
    highlights: ["High ceilings", "City access", "Modern kitchen", "Secure entry", "Amenity lounge", "Low maintenance"],
    description:
      "A compact urban listing template for lofts, condos, or high-density residential inventory. Add building amenities, dues, and transit context here.",
  },
  "arlington-commons": {
    title: "Urban Commons",
    address: "120 Template Commons, Template Borough, ST 00000",
    location: "Template Borough",
    price: "$XXX,XXX",
    type: "Affordable",
    status: "Open",
    beds: "3",
    baths: "2",
    sqft: "X,XXX",
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1536&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1536&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1536&q=80",
      "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1536&q=80",
    ],
    details: [
      ["Year Built", "20XX"],
      ["HOA Fees", "$XXX/mo"],
      ["Parking", "Assigned"],
      ["Type", "Residential"],
      ["Area", "Template Borough"],
    ],
    highlights: ["Efficient plan", "Community access", "Updated finishes", "Nearby transit", "Shared green", "Move-in ready"],
    description:
      "A template page for an accessible residential property. Replace with affordability notes, qualification details, and neighborhood positioning.",
  },
  "mixed-use-quarter": {
    title: "Mixed-Use Quarter",
    address: "300 Template Quarter, Template Harbor, ST 00000",
    location: "Template Harbor",
    price: "Coming Soon",
    type: "Mixed-Use",
    status: "Closed",
    beds: "0",
    baths: "0",
    sqft: "Retail + Residential",
    hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1536&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1536&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1536&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1536&q=80",
    ],
    details: [
      ["Phase", "Planning"],
      ["Use", "Retail + residential"],
      ["Parking", "Planned"],
      ["Type", "Mixed-use"],
      ["Area", "Template Harbor"],
    ],
    highlights: ["Retail frontage", "Residential access", "Public realm", "Phased delivery", "Flexible units", "Leasing pipeline"],
    description:
      "A future mixed-use property template for development storytelling, leasing interest, community benefits, and availability updates.",
  },
};

type PropertySlug = keyof typeof propertyPages;

export function generateStaticParams() {
  return Object.keys(propertyPages).map((slug) => ({ slug }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = propertyPages[slug as PropertySlug];

  if (!property) {
    notFound();
  }

  return (
    <main style={{ fontFamily: "'Outfit', sans-serif", background: "#F8F5F0", color: "#1A1A1A", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');
        .serif { font-family: 'Cormorant Garamond', serif; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 28px", borderBottom: "1px solid #EAE4DC", background: "#F8F5F0" }}>
        <Link href="/properties" style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 500, background: "#1A1A1A", color: "#F8F5F0", borderRadius: 20, padding: "9px 18px", textDecoration: "none" }}>
          ← All Properties
        </Link>
        <div style={{ display: "flex", gap: 10 }}>
          <button style={{ fontSize: 13, fontWeight: 500, padding: "9px 18px", borderRadius: 20, border: "none", background: "#EAE4DC", color: "#1A1A1A", fontFamily: "'Outfit', sans-serif" }}>Share</button>
          <button style={{ fontSize: 13, fontWeight: 500, padding: "9px 18px", borderRadius: 20, border: "none", background: "#C4A882", color: "#1A1A1A", fontFamily: "'Outfit', sans-serif" }}>♡ Save</button>
        </div>
      </nav>

      <section style={{ padding: "16px 28px" }}>
        <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", background: "#fff", border: "1px solid #EAE4DC", marginBottom: 10 }}>
          <img src={property.hero} alt={property.title} style={{ width: "100%", height: 660, objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(26,26,26,0.75)", color: "#fff", fontSize: 12, fontWeight: 500, borderRadius: 999, padding: "8px 12px" }}>
            1 / {property.images.length}
          </div>
          <div style={{ position: "absolute", top: 14, right: 14, width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.96)", display: "grid", placeItems: "center", fontSize: 20 }}>♡</div>
        </div>
        <div style={{ display: "flex", gap: 8, overflowX: "auto", padding: "2px 0 6px" }}>
          {property.images.map((src, index) => (
            <div key={src} style={{ width: 92, height: 62, borderRadius: 10, overflow: "hidden", flexShrink: 0, border: index === 0 ? "2px solid #C4A882" : "2px solid transparent", background: "#fff" }}>
              <img src={src} alt={`${property.title} thumbnail ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "370px 1fr", gap: 18, padding: "0 28px 48px", alignItems: "start" }}>
        <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "#fff", border: "1px solid #EAE4DC", borderRadius: 18, padding: 22 }}>
            <div className="serif" style={{ fontSize: 34, fontWeight: 500, lineHeight: 1.1, marginBottom: 8 }}>{property.title}</div>
            <div style={{ fontSize: 18, color: "#8A8078", display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 18, lineHeight: 1.45 }}>
              📍 {property.address}
            </div>
            <div style={{ background: "#F8F5F0", borderRadius: 14, padding: "18px 18px", marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#C4A882", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{property.type}</div>
              <div style={{ fontSize: 42, fontWeight: 600, lineHeight: 1 }}>{property.price}</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              {[{ v: property.beds, l: "Beds" }, { v: property.baths, l: "Baths" }, { v: property.sqft, l: "Sq Ft" }].map((stat) => (
                <div key={stat.l} style={{ textAlign: "center", background: "#F8F5F0", borderRadius: 12, padding: "16px 8px" }}>
                  <div style={{ fontSize: 24, fontWeight: 600 }}>{stat.v}</div>
                  <div style={{ fontSize: 13, color: "#8A8078", marginTop: 4 }}>{stat.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff", border: "1px solid #EAE4DC", borderRadius: 18, padding: 22 }}>
            <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A8078", marginBottom: 16 }}>Property Details</div>
            {property.details.map(([label, value], index) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: 18, padding: "12px 0", borderBottom: index < property.details.length - 1 ? "1px solid #EAE4DC" : "none", gap: 14 }}>
                <span style={{ color: "#8A8078" }}>{label}</span>
                <span style={{ fontWeight: 600, textAlign: "right" }}>{value}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "#1A1A1A", borderRadius: 18, padding: 22, textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 600, color: "#F8F5F0", marginBottom: 6 }}>Interested in this property?</div>
            <div style={{ fontSize: 16, color: "rgba(248,245,240,0.55)", marginBottom: 18, lineHeight: 1.6 }}>Schedule a private tour with the property team</div>
            <Link href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", fontSize: 18, fontWeight: 600, background: "#C4A882", color: "#1A1A1A", borderRadius: 12, padding: 16, textDecoration: "none" }}>
              Contact Team
            </Link>
          </div>
        </aside>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: "#fff", border: "1px solid #EAE4DC", borderRadius: 14, padding: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>About This Property</div>
            <p style={{ fontSize: 13, color: "#8A8078", lineHeight: 1.7, fontWeight: 300 }}>{property.description}</p>
          </div>

          <div style={{ background: "#fff", border: "1px solid #EAE4DC", borderRadius: 14, padding: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Key Highlights</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
              {property.highlights.map((highlight) => (
                <div key={highlight} style={{ background: "#F8F5F0", borderRadius: 10, padding: 10, textAlign: "center", border: "1px solid #EAE4DC" }}>
                  <div style={{ fontSize: 16, marginBottom: 4 }}>✦</div>
                  <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>{highlight}</div>
                  <div style={{ fontSize: 10, color: "#8A8078" }}>Template feature</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff", border: "1px solid #EAE4DC", borderRadius: 14, padding: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Open House Schedule</div>
            {["Saturday, Month Day", "Sunday, Month Day", "Saturday, Month Day"].map((date, index) => (
              <div key={`${date}-${index}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 12px", background: "#F8F5F0", borderRadius: 10, border: "1px solid #EAE4DC", marginBottom: index === 2 ? 0 : 8 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{date}</div>
                  <div style={{ fontSize: 11, color: "#8A8078" }}>Time TBD</div>
                </div>
                <span style={{ fontSize: 10, fontWeight: 600, background: property.status === "Open" ? "#E8F5E9" : "#F2EDE5", color: property.status === "Open" ? "#2E7D32" : "#8A8078", padding: "4px 10px", borderRadius: 6 }}>{property.status}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", border: "1px solid #EAE4DC", borderRadius: 14, padding: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Listing Contact</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#F8F5F0", border: "1px solid #EAE4DC", borderRadius: 12, padding: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#C4A882", color: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16, flexShrink: 0 }}>AT</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Alex Taylor</div>
                <div style={{ fontSize: 11, color: "#8A8078", marginTop: 2 }}>Property Group</div>
                <div style={{ fontSize: 11, color: "#8A8078", marginTop: 6 }}>(555) 010-0005</div>
                <div style={{ fontSize: 11, color: "#8A8078" }}>agent@example.com</div>
              </div>
              <a href="mailto:agent@example.com" style={{ fontSize: 12, fontWeight: 600, background: "#1A1A1A", color: "#F8F5F0", borderRadius: 8, padding: "10px 12px", textDecoration: "none", flexShrink: 0 }}>Contact</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
