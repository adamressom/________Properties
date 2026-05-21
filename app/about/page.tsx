"use client";
import { useState } from "react";
import Link from "next/link";

const timeline = [
  { year: "Year 1", title: "Founded in Template City", desc: "A founding team pooled their properties across Target Market and officially launched Property Group with a shared vision: build something that lasts." },
  { year: "Year 3", title: "First Luxury Listing", desc: "The team completed their first high-end residential development in Template City — setting the standard for quality that defines every template property today." },
  { year: "Year 5", title: "Signature Project, Metro", desc: "A landmark milestone. Property Group developed Signature Project in Metro District — a mixed-use commercial project that put the brand on the map beyond Target Market." },
  { year: "Year 8", title: "Portfolio Expands", desc: "Crossing several active properties across Template County, Template Borough, and Template Harbor, the team doubled down on affordable residential homes — making quality housing accessible." },
  { year: "Year 11", title: "Signature Project Converts", desc: "Signature Project transitions from commercial to a premium rental property — a strategic pivot that demonstrated the team's adaptability and long-term thinking." },
  { year: "Year 14", title: "Digital Transformation", desc: "Property Group launches its digital platform — bringing the team's portfolio online, making it easier than ever for clients to explore, inquire, and connect." },
  { year: "Future", title: "What's Next", desc: "With your completed properties and $XM+ in portfolio value, the team is expanding into new Metro neighborhoods and mixed-use developments. The best is still to come." },
];

const values = [
  { icon: "🤝", title: "Reliability", desc: "When we say we'll deliver, we deliver. Every deal, every time — no exceptions." },
  { icon: "🏡", title: "Client First", desc: "Every property we develop, we ask: would we want our own clients living here? If yes, it meets our standard." },
  { icon: "📍", title: "Rooted in market", desc: "We're not investors from out of state. We live here, work here, and know Target Market better than anyone." },
  { icon: "🔑", title: "Transparent Deals", desc: "No hidden fees, no surprises. We walk every client through the process personally from start to finish." },
];

const team = [
  { initials: "JL", name: "Jordan Lee", role: "Founder & Property Owner", bg: "#4A3F35", color: "#C4A882", quote: "We didn't start this to build a business. We started it to build something our team could be proud of — and our clients could trust." },
  { initials: "CM", name: "Casey Morgan", role: "Property Owner", bg: "#354A47", color: "#82C4B8", quote: "Every property we touch has our name on it. That means everything to us." },
  { initials: "RP", name: "Riley Patel", role: "Property Owner", bg: "#3A354A", color: "#A882C4", quote: "We treat every client with the same care we would expect for ourselves." },
];

const pillars = [
  { label: "Luxury", count: "X+", sub: "Premium developments" },
  { label: "Affordable", count: "X+", sub: "Accessible homes" },
  { label: "Mixed-Use", count: "X+", sub: "Commercial & residential" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function AboutPage() {
  const [activeYear, setActiveYear] = useState(0);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  return (
    <main style={{ fontFamily: "'Outfit', sans-serif", background: "#F8F5F0", color: "#1A1A1A", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        .nav-link { transition: color 0.2s ease; }
        .nav-link:hover { color: #1A1A1A !important; }
        .timeline-btn { transition: all 0.25s ease; cursor: pointer; border: none; background: none; font-family: 'Outfit', sans-serif; }
        .value-card { transition: all 0.25s ease; cursor: default; }
        .team-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .team-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(26,26,26,0.10); }
        .pillar-card { transition: all 0.3s ease; }
        .pillar-card:hover { transform: translateY(-3px); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.35s ease forwards; }
        @keyframes countUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .count-up { animation: countUp 0.6s ease forwards; }
        @keyframes slideIn { from { opacity: 0; width: 0; } to { opacity: 1; width: 100%; } }
      `}</style>

      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", padding: "20px 44px", background: "rgba(248,245,240,0.90)", backdropFilter: "blur(20px)", borderBottom: "1px solid #EAE4DC", position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "inherit" }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "#1A1A1A", color: "#F8F5F0", fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600 }}>PG</div>
          <span className="serif" style={{ fontSize: 18, fontWeight: 500, letterSpacing: "0.06em" }}>Property Group</span>
        </Link>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 30 }}>
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} className="nav-link" style={{ fontSize: 13, color: l.label === "About" ? "#1A1A1A" : "#8A8078", textDecoration: "none", fontWeight: l.label === "About" ? 600 : 400 }}>{l.label}</Link>
          ))}
          <Link href="/sign-up" style={{ fontSize: 12, fontWeight: 500, background: "#1A1A1A", color: "#F8F5F0", borderRadius: 8, padding: "10px 22px", letterSpacing: "0.03em", textDecoration: "none", display: "inline-block" }}>Sign Up</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "100px 44px 80px", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <div style={{ width: 28, height: 1, background: "#C4A882" }} />
          <span style={{ fontSize: 11, fontWeight: 500, color: "#8A8078", letterSpacing: "0.16em", textTransform: "uppercase" }}>Est. 20XX · Template City</span>
          <div style={{ width: 28, height: 1, background: "#C4A882" }} />
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(52px, 7vw, 88px)", fontWeight: 400, lineHeight: 1.02, marginBottom: 28, letterSpacing: "-0.02em" }}>
          A team built on<br /><em style={{ color: "#C4A882" }}>property & purpose</em>
        </h1>
        <p style={{ fontSize: 17, color: "#8A8078", lineHeight: 1.85, maxWidth: 620, margin: "0 auto 48px", fontWeight: 300 }}>
          In the founding year, a founding team from Target Market decided to turn their shared properties into something bigger — a property business rooted in trust, quality, and community. Fifteen years later, Property Group stands as one of Target Market&apos;s most reliable team-owned real estate groups.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <Link href="/properties" style={{ fontSize: 13, fontWeight: 500, background: "#1A1A1A", color: "#F8F5F0", borderRadius: 10, padding: "14px 32px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>View Properties</Link>
          <Link href="/contact" style={{ fontSize: 13, background: "transparent", color: "#1A1A1A", border: "1.5px solid #EAE4DC", borderRadius: 10, padding: "14px 32px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>Get in Touch</Link>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section style={{ padding: "0 44px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>

          {/* Large feature card */}
          <div style={{ gridColumn: "1 / 3", background: "#1A1A1A", borderRadius: 20, padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 200 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "rgba(196,168,130,0.7)", textTransform: "uppercase", marginBottom: 12 }}>Founded</div>
            <div>
              <div className="serif" style={{ fontSize: 72, fontWeight: 400, color: "#F8F5F0", lineHeight: 1 }}>20XX</div>
              <div style={{ fontSize: 13, color: "rgba(248,245,240,0.45)", marginTop: 8 }}>Template City · Founding team, one vision</div>
            </div>
          </div>

          {/* Properties card */}
          <div style={{ background: "#fff", border: "1px solid #EAE4DC", borderRadius: 20, padding: "32px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.12em", color: "#8A8078", textTransform: "uppercase", marginBottom: 12 }}>Properties Built</div>
            <div>
              <div className="serif" style={{ fontSize: 56, fontWeight: 400, color: "#1A1A1A", lineHeight: 1 }}>XX</div>
              <div style={{ fontSize: 12, color: "#8A8078", marginTop: 8 }}>Across market & Metro</div>
            </div>
          </div>

          {/* Portfolio card */}
          <div style={{ background: "#F2EDE5", border: "1px solid #EAE4DC", borderRadius: 20, padding: "32px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.12em", color: "#8A8078", textTransform: "uppercase", marginBottom: 12 }}>Portfolio Value</div>
            <div>
              <div className="serif" style={{ fontSize: 48, fontWeight: 400, color: "#1A1A1A", lineHeight: 1 }}>$8M<span style={{ fontSize: 28, color: "#C4A882" }}>+</span></div>
              <div style={{ fontSize: 12, color: "#8A8078", marginTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4CAF50", display: "inline-block" }} />
                Active & growing
              </div>
            </div>
          </div>

          {/* Property type pills */}
          {pillars.map((p) => (
            <div key={p.label} className="pillar-card" style={{ background: "#fff", border: "1px solid #EAE4DC", borderRadius: 20, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.1em", color: "#8A8078", textTransform: "uppercase" }}>{p.label}</div>
                <div style={{ background: "#F2EDE5", color: "#5C4A3A", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>{p.count}</div>
              </div>
              <div className="serif" style={{ fontSize: 22, fontWeight: 500, color: "#1A1A1A" }}>{p.sub}</div>
              <div style={{ height: 3, background: "#EAE4DC", borderRadius: 2, marginTop: 4 }}>
                <div style={{ height: "100%", borderRadius: 2, background: "#C4A882", width: p.label === "Luxury" ? "60%" : p.label === "Affordable" ? "85%" : "45%", transition: "width 0.6s ease" }} />
              </div>
            </div>
          ))}

          {/* Years active — wide card */}
          <div style={{ gridColumn: "4 / 5", gridRow: "2 / 3", background: "#C4A882", borderRadius: 20, padding: "32px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(26,26,26,0.6)", textTransform: "uppercase", marginBottom: 12 }}>Years Active</div>
            <div>
              <div className="serif" style={{ fontSize: 56, fontWeight: 400, color: "#1A1A1A", lineHeight: 1 }}>15<span style={{ fontSize: 28 }}>+</span></div>
              <div style={{ fontSize: 12, color: "rgba(26,26,26,0.6)", marginTop: 8 }}>Team owned & operated</div>
            </div>
          </div>

        </div>
      </section>

      {/* TRUST RIBBON */}
      <section style={{ padding: "0 44px 80px" }}>
        <div style={{ border: "1px solid #EAE4DC", borderRadius: 20, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
            {[
              { icon: "🏅", label: "Team Owned", sub: "Since launch" },
              { icon: "📍", label: "Template County Rooted", sub: "Target Market" },
              { icon: "🤝", label: "Direct Access", sub: "No middlemen" },
              { icon: "🏗️", label: "XX Properties", sub: "Built & delivered" },
              { icon: "⭐", label: "Trusted Brand", sub: "Client first always" },
            ].map((item, i) => (
              <div key={item.label} style={{ padding: "28px 20px", textAlign: "center", borderRight: i < 4 ? "1px solid #EAE4DC" : "none", background: "#fff" }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#1A1A1A", marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 11, color: "#8A8078", letterSpacing: "0.04em" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section style={{ padding: "0 44px 80px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 48, color: "#C4A882", lineHeight: 1, marginBottom: 24, fontFamily: "'Cormorant Garamond', serif" }}>&ldquo;</div>
          <p className="serif" style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 400, lineHeight: 1.45, color: "#1A1A1A", marginBottom: 28, fontStyle: "italic" }}>
            We didn&apos;t start this to build a business. We started it to build something our team could be proud of — and our clients could trust.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#4A3F35", color: "#C4A882", display: "grid", placeItems: "center", fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 500 }}>JL</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: "#1A1A1A" }}>Jordan Lee</div>
              <div style={{ fontSize: 12, color: "#8A8078" }}>Founder, Property Group</div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "0 44px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div style={{ width: 24, height: 1, background: "#C4A882" }} />
          <span style={{ fontSize: 11, letterSpacing: "0.14em", color: "#8A8078", textTransform: "uppercase" }}>What We Stand For</span>
        </div>
        <h2 className="serif" style={{ fontSize: 38, fontWeight: 400, marginBottom: 36 }}>Our values</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {values.map((v, i) => (
            <div
              key={v.title}
              className="value-card"
              onMouseEnter={() => setHoveredValue(i)}
              onMouseLeave={() => setHoveredValue(null)}
              style={{ background: hoveredValue === i ? "#1A1A1A" : "#fff", border: "1px solid #EAE4DC", borderRadius: 20, padding: "32px 24px" }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 10, color: hoveredValue === i ? "#F8F5F0" : "#1A1A1A", transition: "color 0.25s" }}>{v.title}</div>
              <div style={{ fontSize: 13, color: hoveredValue === i ? "rgba(248,245,240,0.6)" : "#8A8078", lineHeight: 1.7, fontWeight: 300, transition: "color 0.25s" }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE TIMELINE */}
      <section style={{ padding: "80px 44px", background: "#fff", borderTop: "1px solid #EAE4DC", borderBottom: "1px solid #EAE4DC" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div style={{ width: 24, height: 1, background: "#C4A882" }} />
          <span style={{ fontSize: 11, letterSpacing: "0.14em", color: "#8A8078", textTransform: "uppercase" }}>Our Journey</span>
        </div>
        <h2 className="serif" style={{ fontSize: 38, fontWeight: 400, marginBottom: 48 }}>15 years in the making</h2>

        <div style={{ display: "flex", gap: 0, marginBottom: 48, borderRadius: 14, overflow: "hidden", border: "1px solid #EAE4DC", width: "fit-content" }}>
          {timeline.map((t, i) => (
            <button
              key={t.year}
              className="timeline-btn"
              onClick={() => setActiveYear(i)}
              style={{ padding: "12px 20px", fontSize: 13, fontWeight: activeYear === i ? 600 : 400, color: activeYear === i ? "#F8F5F0" : "#8A8078", background: activeYear === i ? "#1A1A1A" : "transparent", borderRight: i < timeline.length - 1 ? "1px solid #EAE4DC" : "none", transition: "all 0.25s ease" }}
            >
              {t.year}
            </button>
          ))}
        </div>

        <div key={activeYear} className="fade-in" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "#C4A882", textTransform: "uppercase", marginBottom: 12 }}>{timeline[activeYear].year}</div>
            <h3 className="serif" style={{ fontSize: 42, fontWeight: 400, lineHeight: 1.1, marginBottom: 20 }}>{timeline[activeYear].title}</h3>
            <p style={{ fontSize: 15, color: "#8A8078", lineHeight: 1.85, fontWeight: 300 }}>{timeline[activeYear].desc}</p>
          </div>
          <div>
            <div style={{ background: "linear-gradient(135deg, #EDE8E0, #D8D0C4)", borderRadius: 20, height: 280, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -30, right: -30, width: 180, height: 180, borderRadius: "50%", background: "rgba(196,168,130,0.15)" }} />
              <div style={{ position: "absolute", bottom: -40, left: -20, width: 140, height: 140, borderRadius: "50%", background: "rgba(196,168,130,0.10)" }} />
              <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div className="serif" style={{ fontSize: 88, fontWeight: 400, color: "rgba(26,26,26,0.12)", lineHeight: 1 }}>{timeline[activeYear].year}</div>
                <div style={{ fontSize: 13, color: "#8A8078", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 8 }}>{timeline[activeYear].title}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 20 }}>
              {timeline.map((_, i) => (
                <button key={i} onClick={() => setActiveYear(i)} style={{ width: i === activeYear ? 24 : 8, height: 8, borderRadius: 999, background: i === activeYear ? "#1A1A1A" : "#C4A882", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONE — Signature Project */}
      <section style={{ padding: "80px 44px" }}>
        <div style={{ background: "linear-gradient(135deg, #F2EDE5, #EDE8E0)", borderRadius: 28, padding: "64px 72px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", border: "1px solid #EAE4DC" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#C4A882", borderRadius: 20, padding: "5px 14px", marginBottom: 20 }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: "#1A1A1A", letterSpacing: "0.1em", textTransform: "uppercase" }}>Signature Project</span>
            </div>
            <h2 className="serif" style={{ fontSize: 44, fontWeight: 400, lineHeight: 1.1, marginBottom: 16 }}>
              Signature Project,<br /><em style={{ color: "#8A8078" }}>Metro District</em>
            </h2>
            <p style={{ fontSize: 15, color: "#6B6560", lineHeight: 1.85, fontWeight: 300, marginBottom: 24 }}>
              One of our proudest milestones — the development of Signature Project in Metro District This mixed-use commercial project marked Property Group&apos;s expansion beyond Target Market and into the heart of the nation&apos;s capital. Now operating as a premium rental property, it stands as a testament to the team&apos;s ability to evolve with the market.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              <div>
                <div className="serif" style={{ fontSize: 28, fontWeight: 500 }}>20XX</div>
                <div style={{ fontSize: 11, color: "#8A8078", textTransform: "uppercase", letterSpacing: "0.06em" }}>Developed</div>
              </div>
              <div style={{ width: 1, background: "#EAE4DC" }} />
              <div>
                <div className="serif" style={{ fontSize: 28, fontWeight: 500 }}>20XX</div>
                <div style={{ fontSize: 11, color: "#8A8078", textTransform: "uppercase", letterSpacing: "0.06em" }}>Converted to Rental</div>
              </div>
              <div style={{ width: 1, background: "#EAE4DC" }} />
              <div>
                <div className="serif" style={{ fontSize: 28, fontWeight: 500 }}>Metro</div>
                <div style={{ fontSize: 11, color: "#8A8078", textTransform: "uppercase", letterSpacing: "0.06em" }}>Location</div>
              </div>
            </div>
          </div>
          <div style={{ background: "linear-gradient(160deg, #CBBFA8, #A89880)", borderRadius: 20, height: 320, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(26,26,26,0.15)" }} />
            <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <div className="serif" style={{ fontSize: 36, fontWeight: 400, color: "#F8F5F0", marginBottom: 6 }}>Signature Project</div>
              <div style={{ fontSize: 12, color: "rgba(248,245,240,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Metro District.</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section style={{ padding: "0 44px 80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 24, height: 1, background: "#C4A882" }} />
              <span style={{ fontSize: 11, letterSpacing: "0.14em", color: "#8A8078", textTransform: "uppercase" }}>The team</span>
            </div>
            <h2 className="serif" style={{ fontSize: 38, fontWeight: 400 }}>Meet the team</h2>
          </div>
          <Link href="/team" style={{ fontSize: 12, color: "#8A8078", borderBottom: "1px solid #EAE4DC", paddingBottom: 2, textDecoration: "none" }}>Full team page →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {team.map((t) => (
            <div key={t.name} className="team-card" style={{ background: "#fff", border: "1px solid #EAE4DC", borderRadius: 20, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: t.bg, color: t.color, display: "grid", placeItems: "center", fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 500, flexShrink: 0 }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: "#1A1A1A" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#8A8078" }}>{t.role}</div>
                </div>
              </div>
              <div style={{ width: 24, height: 2, background: "#C4A882", borderRadius: 2, marginBottom: 14 }} />
              <p className="serif" style={{ fontSize: 17, fontStyle: "italic", color: "#5C4A3A", lineHeight: 1.6, fontWeight: 400 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 44px 80px" }}>
        <div style={{ border: "1px solid #EAE4DC", borderRadius: 24, padding: "72px 60px", textAlign: "center", background: "linear-gradient(135deg,#FBF8F3,#F2EDE5)" }}>
          <h2 className="serif" style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, marginBottom: 16 }}>
            Ready to work<br /><em style={{ color: "#C4A882" }}>with the team?</em>
          </h2>
          <p style={{ fontSize: 15, color: "#8A8078", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 36px", fontWeight: 300 }}>
            Whether you&apos;re looking to rent, buy, or invest — we handle every conversation personally. No middlemen. Just clarity.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/properties" style={{ fontSize: 13, fontWeight: 500, background: "#1A1A1A", color: "#F8F5F0", borderRadius: 10, padding: "14px 32px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>Browse Properties</Link>
            <Link href="/contact" style={{ fontSize: 13, background: "transparent", color: "#1A1A1A", border: "1.5px solid #EAE4DC", borderRadius: 10, padding: "14px 32px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>Contact the Team</Link>
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
            <Link key={item.label} href={item.href} style={{ fontSize: 12, color: item.label === "About" ? "#1A1A1A" : "#8A8078", textDecoration: "none", fontWeight: item.label === "About" ? 600 : 400 }}>{item.label}</Link>
          ))}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A8078" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1.2" fill="#8A8078" stroke="none" /></svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
