import Link from "next/link";
import { withAuth } from "@workos-inc/authkit-nextjs";

export default async function ContactPage() {
  const { user } = await withAuth();

  return (
    <main style={{ minHeight: "100vh", background: "#F8F5F0", color: "#1A1A1A", fontFamily: "'Outfit', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        .nav-link { transition: color 0.2s ease; }
        .nav-link:hover { color: #1A1A1A !important; }
        .contact-btn { transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease; }
        .contact-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(26,26,26,0.08); }
      `}</style>

      <nav style={{ display: "flex", alignItems: "center", padding: "20px 44px", background: "rgba(248,245,240,0.90)", backdropFilter: "blur(20px)", borderBottom: "1px solid #EAE4DC", position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "inherit" }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "#1A1A1A", color: "#F8F5F0", fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600 }}>PG</div>
          <span className="serif" style={{ fontSize: 18, fontWeight: 500, letterSpacing: "0.06em" }}>Property Group</span>
        </Link>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 30 }}>
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Properties", href: "/properties" },
            { label: "Team", href: "/team" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link key={l.label} href={l.href} className="nav-link" style={{ fontSize: 13, color: l.label === "Contact" ? "#1A1A1A" : "#8A8078", textDecoration: "none", fontWeight: l.label === "Contact" ? 500 : 400 }}>{l.label}</Link>
          ))}
          {!user ? (
            <Link href="/sign-up" style={{ fontSize: 12, fontWeight: 500, background: "#1A1A1A", color: "#F8F5F0", borderRadius: 8, padding: "10px 22px", letterSpacing: "0.03em", textDecoration: "none", display: "inline-block" }}>Sign Up</Link>
          ) : (
            <div style={{ fontSize: 12, fontWeight: 500, background: "#EDE8E0", color: "#5C4A3A", borderRadius: 8, padding: "10px 16px", letterSpacing: "0.03em" }}>Signed In</div>
          )}
        </div>
      </nav>

      <section style={{ padding: "96px 24px 72px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 760, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ width: 28, height: 1, background: "#C4A882" }} />
            <span style={{ fontSize: 11, fontWeight: 500, color: "#8A8078", letterSpacing: "0.14em", textTransform: "uppercase" }}>Contact Property Group</span>
            <div style={{ width: 28, height: 1, background: "#C4A882" }} />
          </div>

          <h1 className="serif" style={{ fontSize: "clamp(46px, 6vw, 72px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 18 }}>
            Let&apos;s discuss your<br /><em style={{ color: "#C4A882" }}>next property move</em>
          </h1>

          <p style={{ maxWidth: 560, margin: "0 auto 34px", fontSize: 16, lineHeight: 1.8, color: "#8A8078", fontWeight: 300 }}>
            Reach out for property inquiries, partnerships, development conversations, or private consultations. We keep the experience direct, personal, and team-led.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 54 }}>
            <a href="mailto:hello@example.com" className="contact-btn" style={{ background: "transparent", color: "#1A1A1A", border: "1.5px solid #EAE4DC", borderRadius: 12, padding: "15px 18px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
            </a>
            <a className="contact-btn" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "#1A1A1A", border: "1.5px solid #EAE4DC", borderRadius: 12, padding: "15px 18px", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1.2" fill="#1A1A1A" stroke="none" /></svg>
            </a>
            <a className="contact-btn" href="https://calendly.com/" target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "#1A1A1A", border: "1.5px solid #EAE4DC", borderRadius: 12, padding: "15px 26px", display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.8"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 9h18" /></svg>
              Calendly
            </a>
          </div>

          <div style={{ borderTop: "1px solid #EAE4DC", paddingTop: 38, maxWidth: 520, margin: "0 auto" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "#B5A99A", textTransform: "uppercase", marginBottom: 14 }}>Stay in the loop</p>
            {user ? (
              <>
                <p style={{ fontSize: 16, color: "#5C4A3A", marginBottom: 8 }}>You&apos;re already signed in.</p>
                <p style={{ fontSize: 13, color: "#8A8078", lineHeight: 1.7 }}>You&apos;ll be able to receive updates and access future member features once you finish wiring up your flows.</p>
              </>
            ) : (
              <>
                <p style={{ fontSize: 15, color: "#8A8078", lineHeight: 1.8, marginBottom: 22 }}>Create an account to stay connected with updates, listings, and future releases.</p>
                <Link href="/sign-up" className="contact-btn" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#1A1A1A", color: "#F8F5F0", textDecoration: "none", borderRadius: 999, padding: "14px 28px", fontSize: 14, fontWeight: 500 }}>Sign Up</Link>
              </>
            )}
          </div>

          <p style={{ fontSize: 12, color: "#C4B8AA", marginTop: 28, letterSpacing: "0.04em" }}>Usually responds within 24 hours</p>
        </div>
      </section>
    </main>
  );
}