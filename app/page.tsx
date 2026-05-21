"use client";
import { useState } from "react";
import Link from "next/link";

const featuredProperties = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    badge: "For Rent · Featured",
    status: "open",
    loc: "Template City",
    name: "Sample Townhome",
    price: "$X,XXX/mo",
    beds: "4 BD", baths: "4 BA", sqft: "X,XXX SQFT",
    href: "/properties/laurel-ridge-townhome",
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    badge: "Luxury · Featured",
    status: "open",
    loc: "Template City",
    name: "Example Estate",
    price: "$X,XXX,XXX",
    beds: "5 BD", baths: "4 BA", sqft: "X,XXX SQFT",
    href: "/properties/example-estate",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    badge: "Residential · Featured",
    status: "open",
    loc: "Template County",
    name: "Suburban Family Home",
    price: "$XXX,XXX",
    beds: "4 BD", baths: "3 BA", sqft: "X,XXX SQFT",
    href: "/properties/suburban-family-home",
  },
  {
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80",
    badge: "Luxury · Featured",
    status: "open",
    loc: "Template City",
    name: "Mountain View Retreat",
    price: "$X,XXX,XXX",
    beds: "5 BD", baths: "4 BA", sqft: "X,XXX SQFT",
    href: "/properties/mountain-view-retreat",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    badge: "Mixed-Use · Featured",
    status: "closed",
    loc: "Metro District",
    name: "Waterfront Concept",
    price: "Coming Soon",
    beds: "4 BD", baths: "3 BA", sqft: "X,XXX SQFT",
    href: "/properties/waterfront-estate",
  },
];

const recentActivity = [
  { type: "New Listing", desc: "Sample Townhome listed in Template City", time: "Recently", dot: "#22C55E" },
  { type: "Under Review", desc: "Urban Commons — offer stage", time: "In review", dot: "#F59E0B" },
  { type: "Coming Soon", desc: "Waterfront Concept, Metro District", time: "Coming Soon", dot: "#8A8078" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Arrow bug fix — stop propagation so clicks don't bubble to the Link
  function handlePrev(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? featuredProperties.length - 1 : c - 1));
  }

  function handleNext(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c === featuredProperties.length - 1 ? 0 : c + 1));
  }

  const p = featuredProperties[current];

  const properties = [
    { badge: "Luxury", loc: "Template City", name: "Example Estate", price: "$X,XXX,XXX", detail: "5 bd · 4 ba · X,XXX sqft", from: "#CBBFA8", to: "#A89880", size: "large", href: "/properties/example-estate", open: true },
    { badge: "Affordable", loc: "Template Borough", name: "Urban Commons", price: "$XXX,XXX", detail: "3 bd · 2 ba · X,XXX sqft", from: "#B8C4CC", to: "#9AAAB4", size: "small", href: "/properties/arlington-commons", open: true },
    { badge: "Mixed-Use", loc: "Template Harbor", name: "Mixed-Use Quarter", price: "Coming Soon", detail: "Retail + Residential", from: "#C8B8A8", to: "#A89888", size: "small", href: "/properties/mixed-use-quarter", open: false },
  ];

  const team = [
    { initials: "JL", name: "Jordan Lee", role: "Property Owner", bg: "#4A3F35", color: "#C4A882", phone: "+1 (555) 010-0001", email: "founder@example.com", linkedin: "https://www.linkedin.com/" },
    { initials: "CM", name: "Casey Morgan", role: "Property Owner", bg: "#354A47", color: "#82C4B8", phone: "+1 (555) 010-0002", email: "operations@example.com", linkedin: "https://www.linkedin.com/" },
    { initials: "RP", name: "Riley Patel", role: "Property Owner", bg: "#3A354A", color: "#A882C4", phone: "+1 (555) 010-0003", email: "partner@example.com", linkedin: "https://www.linkedin.com/" },
  ];

  const locations = ["Template Borough", "Template Harbor", "Template County", "Northeast District", "Template Station", "Southeast District", "Northwest District"];

  const highlights = [
    { icon: "🏡", title: "Team-Owned", desc: "Every decision made with team values at the core — no corporate middlemen." },
    { icon: "📍", title: "Target Market", desc: "Deep roots across Template Borough, Template Harbor, Template County, Template Station, and Metro" },
    { icon: "🔑", title: "Full-Service", desc: "From development to leasing — we handle every step of the property journey." },
    { icon: "💼", title: "10+ Years", desc: "Over a decade of trusted development and investment across the region." },
  ];

  const stats = [
    { n: "10+", l: "Years of development" },
    { n: "XX", l: "Properties completed" },
    { n: "$XM", l: "Portfolio value" },
    { n: "100%", l: "Team owned & operated" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Properties", href: "/properties" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <main style={{ fontFamily: "'Outfit', sans-serif", background: "#F8F5F0", color: "#1A1A1A" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        .nav-link { transition: color 0.2s ease; }
        .nav-link:hover { color: #1A1A1A !important; }
        .prop-card { transition: transform 0.25s ease, box-shadow 0.25s ease; cursor: pointer; }
        .prop-card:hover { transform: translateY(-5px); box-shadow: 0 24px 60px rgba(26,26,26,0.12); }
        .hero-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .hero-card:hover { box-shadow: 0 28px 70px rgba(26,26,26,0.16) !important; transform: translateY(-2px); }
        .icon-btn { width: 34px; height: 34px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease; text-decoration: none; flex-shrink: 0; }
        .icon-btn:hover { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.3); }
        .icon-btn:hover svg { stroke: #fff !important; }
        .carousel-btn { width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.92); border: 1px solid #EAE4DC; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 16px rgba(26,26,26,0.10); }
        .carousel-btn:hover { background: #1A1A1A; }
        .carousel-btn:hover svg { stroke: #fff !important; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 22s linear infinite; }
      `}</style>

      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 44px", background: "rgba(248,245,240,0.90)", backdropFilter: "blur(20px)", borderBottom: "1px solid #EAE4DC", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "#1A1A1A", color: "#F8F5F0", fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600 }}>PG</div>
          <span className="serif" style={{ fontSize: 18, fontWeight: 500, letterSpacing: "0.06em" }}>Property Group</span>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 30 }}>
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="nav-link"
              style={{
                fontSize: 13,
                color: l.label === "Home" ? "#1A1A1A" : "#8A8078",
                textDecoration: "none",
                fontWeight: l.label === "Home" ? 600 : 400,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/sign-up"
            style={{
              fontSize: 12,
              fontWeight: 500,
              background: "#1A1A1A",
              color: "#F8F5F0",
              borderRadius: 8,
              padding: "10px 22px",
              letterSpacing: "0.03em",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "80px 44px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ width: 28, height: 1, background: "#C4A882" }} />
            <span style={{ fontSize: 11, fontWeight: 500, color: "#8A8078", letterSpacing: "0.14em", textTransform: "uppercase" }}>Target Market · Est. 20XX</span>
          </div>
          <h1 className="serif" style={{ fontSize: "clamp(44px,5vw,68px)", fontWeight: 400, lineHeight: 1.05, marginBottom: 20, letterSpacing: "-0.02em" }}>
            Where <em style={{ color: "#C4A882" }}>Legacy</em><br />Meets Modern<br />Living
          </h1>
          <p style={{ fontSize: 15, color: "#8A8078", lineHeight: 1.8, maxWidth: 400, marginBottom: 36, fontWeight: 300 }}>
            A template portfolio of luxury, affordable, and mixed-use properties across Target Market, crafted with intention, built to endure.
          </p>
          <div style={{ display: "flex", gap: 12, marginBottom: 40 }}>
            <Link href="/properties" style={{ fontSize: 13, fontWeight: 500, background: "#1A1A1A", color: "#F8F5F0", borderRadius: 10, padding: "14px 30px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>Explore Properties</Link>
            <Link href="/team" style={{ fontSize: 13, background: "transparent", color: "#1A1A1A", border: "1.5px solid #EAE4DC", borderRadius: 10, padding: "14px 30px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>Meet the Team</Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex" }}>
              {team.map((t, i) => (
                <div key={t.name} style={{ width: 32, height: 32, borderRadius: "50%", border: "2px solid #F8F5F0", background: t.bg, color: t.color, display: "grid", placeItems: "center", fontFamily: "'Cormorant Garamond', serif", fontSize: 12, fontWeight: 500, marginLeft: i === 0 ? 0 : -8 }}>{t.initials}</div>
              ))}
            </div>
            <span style={{ fontSize: 12, color: "#8A8078" }}><strong style={{ color: "#1A1A1A", fontWeight: 500 }}>The Property Team</strong> · X principals, 1 vision</span>
          </div>
        </div>

        {/* RIGHT — CATOUSEL */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ position: "relative" }}>
            <Link href={p.href} style={{ textDecoration: "none", display: "block" }}>
              <div className="hero-card" style={{ background: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 60px rgba(26,26,26,0.10)", border: "1px solid #EAE4DC" }}>
                <div style={{ height: 220, position: "relative", overflow: "hidden" }}>
                  <img
                    key={current}
                    src={p.image}
                    alt={p.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "opacity 0.3s ease" }}
                  />
                  <span style={{ position: "absolute", bottom: 12, left: 12, background: "rgba(26,26,26,0.78)", backdropFilter: "blur(8px)", color: "#fff", fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", padding: "5px 12px", borderRadius: 20 }}>{p.badge.toUpperCase()}</span>
                  <span style={{ position: "absolute", top: 12, right: 12, background: "rgba(30,30,30,0.72)", backdropFilter: "blur(10px)", color: "#F0ECE6", fontSize: 11, fontWeight: 500, letterSpacing: "0.05em", padding: "7px 13px", borderRadius: 999, display: "flex", alignItems: "center", gap: 7 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: p.status === "open" ? "#22C55E" : "#EF4444", display: "inline-block", flexShrink: 0 }} />
                    {p.status === "open" ? "Open" : "Closed"}
                  </span>
                </div>
                <div style={{ padding: "16px 20px 20px" }}>
                  <div style={{ fontSize: 11, color: "#8A8078", marginBottom: 3 }}>{p.loc}</div>
                  <div className="serif" style={{ fontSize: 20, fontWeight: 500, marginBottom: 12, lineHeight: 1.2 }}>{p.name}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 18, fontWeight: 600 }}>{p.price}</span>
                    <div style={{ display: "flex", gap: 6 }}>
                      <span style={{ fontSize: 10, fontWeight: 500, background: "#F2EDE5", color: "#5C4A3A", padding: "4px 9px", borderRadius: 6 }}>{p.beds}</span>
                      <span style={{ fontSize: 10, fontWeight: 500, background: "#F2EDE5", color: "#5C4A3A", padding: "4px 9px", borderRadius: 6 }}>{p.baths}</span>
                      <span style={{ fontSize: 10, fontWeight: 500, background: "#F2EDE5", color: "#5C4A3A", padding: "4px 9px", borderRadius: 6 }}>{p.sqft}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Arrow buttons — fixed with stopPropagation */}
            <button
              onClick={handlePrev}
              className="carousel-btn"
              style={{ position: "absolute", left: -18, top: "50%", transform: "translateY(-50%)", zIndex: 10, border: "none", background: "rgba(255,255,255,0.92)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={handleNext}
              className="carousel-btn"
              style={{ position: "absolute", right: -18, top: "50%", transform: "translateY(-50%)", zIndex: 10, border: "none", background: "rgba(255,255,255,0.92)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
            {featuredProperties.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{ width: i === current ? 20 : 7, height: 7, borderRadius: 999, background: i === current ? "#1A1A1A" : "#C4A882", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
              />
            ))}
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ flex: 1, height: 1, background: "#EAE4DC" }} />
            <span style={{ fontSize: 10, color: "#B5A99A", letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Recent Activity</span>
            <div style={{ flex: 1, height: 1, background: "#EAE4DC" }} />
          </div>

          {/* Recent Activity */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {recentActivity.map((a) => (
              <div key={a.type} style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: "1px solid #EAE4DC", borderRadius: 12, padding: "12px 16px" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: a.dot, flexShrink: 0, display: "inline-block" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 500, color: "#1A1A1A" }}>{a.type}</div>
                  <div style={{ fontSize: 11, color: "#8A8078", marginTop: 1 }}>{a.desc}</div>
                </div>
                <div style={{ fontSize: 10, color: "#B5A99A", whiteSpace: "nowrap" }}>{a.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAT */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid #EAE4DC", borderBottom: "1px solid #EAE4DC" }}>
        {stats.map((s, i) => (
          <div key={s.l} style={{ padding: "28px 44px", borderRight: i < 3 ? "1px solid #EAE4DC" : "none" }}>
            <div className="serif" style={{ fontSize: 40, fontWeight: 400, lineHeight: 1, color: "#1A1A1A" }}>{s.n}</div>
            <div style={{ fontSize: 12, color: "#8A8078", marginTop: 5, letterSpacing: "0.04em" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* MATQUEE */}
      <div style={{ overflow: "hidden", borderBottom: "1px solid #EAE4DC", padding: "14px 0", background: "#F2EDE5" }}>
        <div className="marquee-track" style={{ display: "flex", gap: 48, whiteSpace: "nowrap", width: "max-content" }}>
          {[...locations, ...locations].map((loc, i) => (
            <span key={i} style={{ fontSize: 12, color: "#8A8078", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C4A882", display: "inline-block" }} />
              {loc}
            </span>
          ))}
        </div>
      </div>

      {/* WHY RESSOM */}
      <section style={{ padding: "72px 44px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div style={{ width: 24, height: 1, background: "#C4A882" }} />
          <span style={{ fontSize: 11, letterSpacing: "0.14em", color: "#8A8078", textTransform: "uppercase" }}>Why This Template</span>
        </div>
        <h2 className="serif" style={{ fontSize: 38, fontWeight: 400, marginBottom: 36 }}>What sets us apart</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {highlights.map((h) => (
            <div key={h.title} style={{ background: "#fff", border: "1px solid #EAE4DC", borderRadius: 18, padding: "28px 24px" }}>
              <div style={{ fontSize: 28, marginBottom: 14 }}>{h.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 8, color: "#1A1A1A" }}>{h.title}</div>
              <div style={{ fontSize: 13, color: "#8A8078", lineHeight: 1.7, fontWeight: 300 }}>{h.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROPERTIES */}
      <section style={{ padding: "0 44px 72px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 24, height: 1, background: "#C4A882" }} />
              <span style={{ fontSize: 11, letterSpacing: "0.14em", color: "#8A8078", textTransform: "uppercase" }}>Featured Developments</span>
            </div>
            <h2 className="serif" style={{ fontSize: 38, fontWeight: 400 }}>Current Properties</h2>
          </div>
          <Link href="/properties" style={{ fontSize: 12, color: "#8A8078", borderBottom: "1px solid #EAE4DC", paddingBottom: 2, textDecoration: "none" }}>View all →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 16 }}>
          {properties.map((prop) => (
            <Link key={prop.name} href={prop.href} style={{ textDecoration: "none" }}>
              <div className="prop-card" style={{ background: "#fff", borderRadius: 18, overflow: "hidden", border: "1px solid #EAE4DC" }}>
                <div style={{ height: prop.size === "large" ? 280 : 200, background: "linear-gradient(160deg," + prop.from + "," + prop.to + ")", position: "relative" }}>
                  <span style={{ position: "absolute", top: 14, left: 14, fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", padding: "5px 12px", borderRadius: 20, background: "rgba(248,245,240,0.92)" }}>{prop.badge}</span>
                  <span style={{ position: "absolute", top: 14, right: 14, background: "rgba(30,30,30,0.72)", backdropFilter: "blur(10px)", color: "#F0ECE6", fontSize: 10, fontWeight: 500, letterSpacing: "0.05em", padding: "6px 11px", borderRadius: 999, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: prop.open ? "#22C55E" : "#EF4444", display: "inline-block" }} />
                    {prop.open ? "Open" : "Closed"}
                  </span>
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 11, color: "#8A8078", marginBottom: 5 }}>{prop.loc}</div>
                  <div className="serif" style={{ fontSize: 21, fontWeight: 500, marginBottom: 12, lineHeight: 1.2, color: "#1A1A1A" }}>{prop.name}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>{prop.price}</span>
                    <span style={{ fontSize: 11, color: "#8A8078" }}>{prop.detail}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT DARK STRIP */}
      <section style={{ margin: "0 44px 72px", background: "#1A1A1A", borderRadius: 24, padding: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "rgba(196,168,130,0.8)", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 20, height: 1, background: "#C4A882" }} />
            Our Story
          </div>
          <h2 className="serif" style={{ fontSize: 40, fontWeight: 400, color: "#F8F5F0", lineHeight: 1.1, marginBottom: 16 }}>
            Built by experts,<br /><em style={{ color: "#C4A882" }}>for clients</em>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(248,245,240,0.55)", lineHeight: 1.8, fontWeight: 300, marginBottom: 28 }}>
            Since launch, the property team has been transforming Target Market&apos;s landscape, one thoughtfully designed property at a time. Every development carries our name, and our reputation.
          </p>
          <Link href="/team" style={{ fontSize: 13, fontWeight: 500, background: "#C4A882", color: "#1A1A1A", borderRadius: 10, padding: "13px 28px", textDecoration: "none", display: "inline-block" }}>Meet the Team</Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {team.map((t) => (
            <div key={t.name} style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "14px 18px" }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", background: t.bg, color: t.color, display: "grid", placeItems: "center", fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 500, flexShrink: 0 }}>{t.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#F8F5F0", marginBottom: 2 }}>{t.name}</div>
                <div style={{ fontSize: 11, color: "rgba(248,245,240,0.45)", letterSpacing: "0.04em" }}>{t.role}</div>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <a href={"tel:" + t.phone.replace(/\D/g, "")} className="icon-btn" title="Call">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(248,245,240,0.6)" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l1.8-1.8a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </a>
                <a href={"mailto:" + t.email} className="icon-btn" title="Email">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(248,245,240,0.6)" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                </a>
                <a href={t.linkedin} target="_blank" rel="noreferrer" className="icon-btn" title="LinkedIn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(248,245,240,0.6)" strokeWidth="1.8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 44px 72px" }}>
        <div style={{ border: "1px solid #EAE4DC", borderRadius: 24, padding: 60, textAlign: "center", background: "linear-gradient(135deg,#FBF8F3,#F2EDE5)" }}>
          <h2 className="serif" style={{ fontSize: 44, fontWeight: 400, lineHeight: 1.1, marginBottom: 14 }}>
            Let&apos;s find your<br /><em style={{ color: "#C4A882" }}>perfect property</em>
          </h2>
          <p style={{ fontSize: 14, color: "#8A8078", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 32px", fontWeight: 300 }}>
            Schedule a meeting with the property team. We&apos;ll walk you through every option personally, no middlemen, just clarity.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", alignItems: "center" }}>
            <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 500, background: "transparent", color: "#1A1A1A", border: "1.5px solid #EAE4DC", borderRadius: 16, padding: "16px 32px", display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.8"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 9h18" /></svg>
              Calendly
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ border: "1.5px solid #EAE4DC", borderRadius: 10, padding: "14px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1.2" fill="#1A1A1A" stroke="none" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "24px 44px", borderTop: "1px solid #EAE4DC", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", background: "#1A1A1A", color: "#F8F5F0", fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontWeight: 600 }}>PG</div>
          <div>
            <div className="serif" style={{ fontSize: 15 }}>Property Group</div>
            <div style={{ fontSize: 11, color: "#8A8078", marginTop: 2 }}>© 20XX · Target Market · Metro District</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Properties", href: "/properties" },
            { label: "Team", href: "/team" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontSize: 12,
                color: item.label === "Home" ? "#1A1A1A" : "#8A8078",
                textDecoration: "none",
                fontWeight: item.label === "Home" ? 600 : 400,
              }}
            >
              {item.label}
            </Link>
          ))}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A8078" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1.2" fill="#8A8078" stroke="none" /></svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
