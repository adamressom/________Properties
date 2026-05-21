import Link from "next/link";

export default function PropertiesPage() {
  const properties = [
    { id: 1, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", title: "Example Estate", location: "Template City", price: "$X,XXX,XXX", beds: 5, baths: 4, sqft: "X,XXX", type: "Luxury", status: "open", href: "/properties/example-estate" },
    { id: 2, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", title: "Sample Townhome", location: "Template City", price: "$X,XXX/mo", beds: 3, baths: 2, sqft: "X,XXX", type: "For Rent", status: "open", href: "/properties/laurel-ridge-townhome" },
    { id: 3, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", title: "Waterfront Concept", location: "Metro District", price: "Coming Soon", beds: 4, baths: 3, sqft: "X,XXX", type: "Mixed-Use", status: "closed", href: "/properties/waterfront-estate" },
    { id: 4, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", title: "Suburban Family Home", location: "Template County", price: "$XXX,XXX", beds: 4, baths: 3, sqft: "X,XXX", type: "Residential", status: "open", href: "/properties/suburban-family-home" },
    { id: 5, image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80", title: "Mountain View Retreat", location: "Template City", price: "$X,XXX,XXX", beds: 5, baths: 4, sqft: "X,XXX", type: "Luxury", status: "open", href: "/properties/mountain-view-retreat" },
    { id: 6, image: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1200&q=80", title: "Urban Loft Residence", location: "Template Center", price: "$XXX,XXX", beds: 2, baths: 2, sqft: "X,XXX", type: "Modern", status: "closed", href: "/properties/urban-loft-residence" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Properties", href: "/properties" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <main style={{ fontFamily: "'Outfit', sans-serif", background: "#F8F5F0", color: "#1A1A1A", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        .nav-link { transition: color 0.2s ease; }
        .nav-link:hover { color: #1A1A1A !important; }
        .property-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .property-card:hover { transform: translateY(-6px); box-shadow: 0 22px 55px rgba(26,26,26,0.10); }
        .property-image { transition: transform 0.35s ease; }
        .property-card:hover .property-image { transform: scale(1.04); }
        .view-btn:hover { background: #6B4728 !important; }
      `}</style>

      <nav style={{ display: "flex", alignItems: "center", padding: "20px 44px", background: "rgba(248,245,240,0.90)", backdropFilter: "blur(20px)", borderBottom: "1px solid #EAE4DC", position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "inherit" }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "#1A1A1A", color: "#F8F5F0", fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600 }}>PG</div>
          <span className="serif" style={{ fontSize: 18, fontWeight: 500, letterSpacing: "0.06em" }}>Property Group</span>
        </Link>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 30 }}>
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} className="nav-link" style={{ fontSize: 13, color: l.label === "Properties" ? "#1A1A1A" : "#8A8078", textDecoration: "none", fontWeight: l.label === "Properties" ? 500 : 400 }}>{l.label}</Link>
          ))}
          <Link href="/sign-up" style={{ fontSize: 12, fontWeight: 500, background: "#1A1A1A", color: "#F8F5F0", borderRadius: 8, padding: "10px 22px", letterSpacing: "0.03em", textDecoration: "none", display: "inline-block" }}>Sign Up</Link>
        </div>
      </nav>

      <section style={{ padding: "88px 44px 36px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{ width: 28, height: 1, background: "#C4A882" }} />
          <span style={{ fontSize: 11, fontWeight: 500, color: "#8A8078", letterSpacing: "0.14em", textTransform: "uppercase" }}>Featured Developments</span>
          <div style={{ width: 28, height: 1, background: "#C4A882" }} />
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(46px,6vw,70px)", fontWeight: 400, lineHeight: 1.05, marginBottom: 16, letterSpacing: "-0.02em" }}>
          Explore our<br /><em style={{ color: "#C4A882" }}>current properties</em>
        </h1>
        <p style={{ maxWidth: 700, margin: "0 auto", fontSize: 15, color: "#8A8078", lineHeight: 1.85, fontWeight: 300 }}>
          A curated portfolio of homes and developments across Target Market, presented with the same thoughtful, team-led standard that defines Property Group.
        </p>
      </section>

      <section style={{ padding: "24px 44px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {properties.map((property) => (
            <div key={property.id} className="property-card" style={{ background: "#FFFFFF", borderRadius: 24, overflow: "hidden", border: "1px solid #EAE4DC", boxShadow: "0 10px 30px rgba(26,26,26,0.04)" }}>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img src={property.image} alt={property.title} className="property-image" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", top: 16, left: 16, background: "#8B5E34", color: "#F8F5F0", padding: "7px 14px", borderRadius: 999, fontSize: 11, fontWeight: 500, letterSpacing: "0.04em" }}>{property.type}</div>
                <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(30,30,30,0.72)", backdropFilter: "blur(10px)", color: "#F0ECE6", padding: "7px 13px", borderRadius: 999, fontSize: 11, fontWeight: 500, letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: property.status === "open" ? "#22C55E" : "#EF4444", display: "inline-block", flexShrink: 0 }} />
                  {property.status === "open" ? "Open" : "Closed"}
                </div>
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 22, fontWeight: 600, color: "#3E2E26", marginBottom: 8, lineHeight: 1.2 }}>{property.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#8A8078", marginBottom: 14, fontSize: 13 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A8078" strokeWidth="1.8"><path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Z" /><circle cx="12" cy="10" r="2.2" /></svg>
                      <span>{property.location}</span>
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "#8B5E34" }}>{property.price}</div>
                  </div>
                  <Link href={property.href} style={{ textDecoration: "none", flexShrink: 0 }}>
                    <div className="view-btn" style={{ background: "#8B5E34", color: "#F8F5F0", padding: "10px 20px", borderRadius: 999, fontSize: 12, fontWeight: 500, letterSpacing: "0.04em", whiteSpace: "nowrap", cursor: "pointer", marginTop: 2, transition: "background 0.2s" }}>View</div>
                  </Link>
                </div>
                <div style={{ borderTop: "1px solid #EAE4DC", paddingTop: 18, display: "flex", justifyContent: "space-between", gap: 10, color: "#7B6F66", fontSize: 13 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7B6F66" strokeWidth="1.8"><path d="M3 7h18v10H3z" /><path d="M7 17V7" /></svg>
                    <span>{property.beds} Beds</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7B6F66" strokeWidth="1.8"><path d="M4 12h16" /><path d="M6 12V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" /><path d="M5 12v5" /><path d="M19 12v5" /></svg>
                    <span>{property.baths} Baths</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7B6F66" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" /></svg>
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
