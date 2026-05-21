"use client";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";

const images = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1536&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1536&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1536&q=80",
  "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1536&q=80",
  "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1536&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1536&q=80",
];

export default function PropertyTemplatePage() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showFavPopup, setShowFavPopup] = useState(false);

  const propertyId = "laurel-ridge-townhome";

  const isFavorited = useQuery(api.favorites.isFavorited, {
    propertyId,
  });

  const addFavorite = useMutation(api.favorites.add);
  const removeFavorite = useMutation(api.favorites.remove);

  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  async function handleFav() {
    try {
      if (isFavorited) {
        await removeFavorite({ propertyId });
      } else {
        await addFavorite({
          propertyId,
          propertyName: "Sample Townhome",
          propertyImage: images[0],
          propertyPrice: "$X,XXX/mo",
          propertyLocation: "Template City",
        });
      }
    } catch {
      setShowFavPopup(true);
    }
  }

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  function goToPrevPhoto() {
    setActiveThumb((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function goToNextPhoto() {
    setActiveThumb((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  function goToPrevLightbox() {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function goToNextLightbox() {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    const activeEl = thumbRefs.current[activeThumb];
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeThumb]);

  return (
    <main
      style={{
        fontFamily: "'Outfit', sans-serif",
        background: "#F8F5F0",
        color: "#1A1A1A",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');
        .serif { font-family: 'Cormorant Garamond', serif; }
        .thumb-row::-webkit-scrollbar { display: none; }
        .thumb-row { scrollbar-width: none; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 28px",
          borderBottom: "1px solid #EAE4DC",
          background: "#F8F5F0",
        }}
      >
        <Link href="/properties">
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontSize: 13,
              fontWeight: 500,
              background: "#1A1A1A",
              color: "#F8F5F0",
              border: "none",
              borderRadius: 20,
              padding: "9px 18px",
              cursor: "pointer",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            ← All Properties
          </button>
        </Link>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 500,
              padding: "9px 18px",
              borderRadius: 20,
              cursor: "pointer",
              border: "none",
              background: "#EAE4DC",
              color: "#1A1A1A",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Share
          </button>

          <button
            onClick={handleFav}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 500,
              padding: "9px 18px",
              borderRadius: 20,
              cursor: "pointer",
              border: "none",
              background: isFavorited ? "#E53935" : "#C4A882",
              color: isFavorited ? "#fff" : "#1A1A1A",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {isFavorited ? "♥ Saved" : "♡ Save"}
          </button>
        </div>
      </nav>

      <div style={{ padding: "16px 28px" }}>
        <div
          style={{
            position: "relative",
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 10,
            background: "#fff",
            border: "1px solid #EAE4DC",
          }}
        >
          {images[activeThumb] && (
            <img
              onClick={() => openLightbox(activeThumb)}
              src={images[activeThumb]}
              alt={`Property photo ${activeThumb + 1}`}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: 720,
                display: "block",
                cursor: "pointer",
              }}
            />
          )}

          <button
            onClick={goToPrevPhoto}
            aria-label="Previous photo"
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              width: 46,
              height: 46,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.96)",
              color: "#1A1A1A",
              fontSize: 24,
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
            }}
          >
            ‹
          </button>

          <button
            onClick={goToNextPhoto}
            aria-label="Next photo"
            style={{
              position: "absolute",
              right: 14,
              top: "50%",
              transform: "translateY(-50%)",
              width: 46,
              height: 46,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.96)",
              color: "#1A1A1A",
              fontSize: 24,
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
            }}
          >
            ›
          </button>

          <div
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              background: "rgba(26,26,26,0.75)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 500,
              borderRadius: 999,
              padding: "8px 12px",
            }}
          >
            {activeThumb + 1} / {images.length}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFav();
            }}
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.96)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: 20,
            }}
          >
            {isFavorited ? "❤️" : "🤍"}
          </button>

          <button
            onClick={() => openLightbox(activeThumb)}
            style={{
              position: "absolute",
              bottom: 14,
              right: 14,
              fontSize: 12,
              fontWeight: 500,
              background: "rgba(26,26,26,0.82)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "8px 16px",
              cursor: "pointer",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            View all {images.length} photos
          </button>
        </div>

        <div
          className="thumb-row"
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            padding: "2px 0 6px",
            scrollBehavior: "smooth",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => {
                thumbRefs.current[i] = el;
              }}
              onClick={() => setActiveThumb(i)}
              style={{
                position: "relative",
                width: 92,
                height: 62,
                borderRadius: 10,
                overflow: "hidden",
                flexShrink: 0,
                cursor: "pointer",
                border: activeThumb === i ? "2px solid #C4A882" : "2px solid transparent",
                transition: "all 0.2s ease",
                background: "#fff",
              }}
            >
              <img
                src={src}
                alt={`thumb-${i}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  opacity: activeThumb === i ? 1 : 0.86,
                }}
              />

              {activeThumb === i && (
                <div
                  style={{
                    position: "absolute",
                    left: 10,
                    right: 10,
                    bottom: 4,
                    height: 4,
                    borderRadius: 999,
                    background: "#C4A882",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "370px 1fr",
          gap: 18,
          padding: "0 28px 48px",
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid #EAE4DC",
              borderRadius: 18,
              padding: 22,
            }}
          >
            <div
              className="serif"
              style={{
                fontSize: 34,
                fontWeight: 500,
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              Sample Townhome
            </div>

            <div
              style={{
                fontSize: 18,
                color: "#8A8078",
                display: "flex",
                alignItems: "flex-start",
                gap: 6,
                marginBottom: 18,
                lineHeight: 1.45,
              }}
            >
              📍 123 Example Street, Template City, ST 00000
            </div>

            <div
              style={{
                background: "#F8F5F0",
                borderRadius: 14,
                padding: "18px 18px",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#C4A882",
                  marginBottom: 4,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                For Rent
              </div>
              <div style={{ fontSize: 42, fontWeight: 600, lineHeight: 1 }}>
                $X,XXX
                <span style={{ fontSize: 24, fontWeight: 400 }}>/mo</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              {[{ v: "4", l: "Beds" }, { v: "3.5", l: "Baths" }, { v: "X,XXX", l: "Sq Ft" }].map((s) => (
                <div
                  key={s.l}
                  style={{
                    textAlign: "center",
                    background: "#F8F5F0",
                    borderRadius: 12,
                    padding: "16px 8px",
                  }}
                >
                  <div style={{ fontSize: 24, fontWeight: 600 }}>{s.v}</div>
                  <div style={{ fontSize: 13, color: "#8A8078", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #EAE4DC",
              borderRadius: 18,
              padding: 22,
            }}
          >
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#8A8078",
                marginBottom: 16,
              }}
            >
              Property Details
            </div>

            {[
              ["Year Built", "20XX"],
              ["Lot Size", "X.XX acres"],
              ["HOA Fees", "$XXX/mo"],
              ["Parking", "2-car garage"],
              ["Heating", "Forced air"],
              ["Cooling", "Central AC"],
              ["Type", "End-unit townhouse"],
              ["County", "Template County"],
            ].map(([k, v], i, arr) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 18,
                  padding: "12px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid #EAE4DC" : "none",
                  gap: 14,
                }}
              >
                <span style={{ color: "#8A8078" }}>{k}</span>
                <span style={{ fontWeight: 600, textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "#1A1A1A",
              borderRadius: 18,
              padding: "34px 22px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: "50%",
                background: "rgba(196,168,130,0.15)",
                border: "1px solid rgba(196,168,130,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 14px",
                fontSize: 24,
              }}
            >
              🎥
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: "#F8F5F0",
                marginBottom: 8,
              }}
            >
              Virtual Tour
            </div>
            <div
              style={{
                fontSize: 16,
                color: "rgba(248,245,240,0.55)",
                lineHeight: 1.6,
              }}
            >
              360° walkthrough coming soon — book a private showing below
            </div>
          </div>

          <div
            style={{
              background: "#1A1A1A",
              borderRadius: 18,
              padding: 22,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#F8F5F0",
                marginBottom: 6,
              }}
            >
              Interested in this property?
            </div>
            <div
              style={{
                fontSize: 16,
                color: "rgba(248,245,240,0.55)",
                marginBottom: 18,
                lineHeight: 1.6,
              }}
            >
              Schedule a private tour with the property team
            </div>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 7,
                width: "100%",
                fontSize: 18,
                fontWeight: 600,
                background: "#C4A882",
                color: "#1A1A1A",
                border: "none",
                borderRadius: 12,
                padding: 16,
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              📅 Book via Calendly
            </a>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid #EAE4DC",
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
              About This Property
            </div>
            <p
              style={{
                fontSize: 13,
                color: "#8A8078",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              Welcome to this exceptional end-unit townhouse nestled in the
              sought-after local school district in Template City. Spanning
              three levels and X,XXX sq ft of refined living space, this home
              blends modern elegance with everyday comfort. The gourmet kitchen
              features gleaming granite countertops, upgraded cabinetry, and
              stainless steel appliances. A dedicated home office and sunroom
              add versatility. Enjoy seamless connectivity to local highways,
              Major employment center, and commuter rail — all just minutes away.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #EAE4DC",
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>
              Key Highlights
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
              {[
                { icon: "🚗", val: "2-Car Garage", lbl: "Attached" },
                { icon: "🍳", val: "Gourmet Kitchen", lbl: "Granite counters" },
                { icon: "☀️", val: "Sunroom", lbl: "Natural light" },
                { icon: "📚", val: "Home Office", lbl: "Library/Study" },
                { icon: "🚇", val: "Transit Access", lbl: "Central Station" },
                { icon: "🛡️", val: "Major employment center", lbl: "Minutes away" },
              ].map((h) => (
                <div
                  key={h.val}
                  style={{
                    background: "#F8F5F0",
                    borderRadius: 10,
                    padding: 10,
                    textAlign: "center",
                    border: "1px solid #EAE4DC",
                  }}
                >
                  <div style={{ fontSize: 16, marginBottom: 4 }}>{h.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>
                    {h.val}
                  </div>
                  <div style={{ fontSize: 10, color: "#8A8078" }}>{h.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #EAE4DC",
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>
              Open House Schedule
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { date: "Saturday, Month Day", time: "Time TBD" },
                { date: "Sunday, Month Day", time: "Time TBD" },
                { date: "Saturday, Month Day", time: "Time TBD" },
              ].map((o, index) => (
                <div
                  key={`${o.date}-${index}`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 12px",
                    background: "#F8F5F0",
                    borderRadius: 10,
                    border: "1px solid #EAE4DC",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{o.date}</div>
                    <div style={{ fontSize: 11, color: "#8A8078" }}>{o.time}</div>
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      background: "#E8F5E9",
                      color: "#2E7D32",
                      padding: "4px 10px",
                      borderRadius: 6,
                    }}
                  >
                    Upcoming
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #EAE4DC",
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>
              Listing Agent
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "#F8F5F0",
                border: "1px solid #EAE4DC",
                borderRadius: 12,
                padding: 12,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#C4A882",
                  color: "#1A1A1A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 16,
                  flexShrink: 0,
                }}
              >
                AT
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Alex Taylor</div>
                <div style={{ fontSize: 11, color: "#8A8078", marginTop: 2 }}>
                  Property Group
                </div>
                <div style={{ fontSize: 11, color: "#8A8078", marginTop: 6 }}>
                  (555) 010-0005
                </div>
                <div style={{ fontSize: 11, color: "#8A8078" }}>
                  agent@example.com
                </div>
              </div>

              <a
                href="mailto:agent@example.com"
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  background: "#1A1A1A",
                  color: "#F8F5F0",
                  borderRadius: 8,
                  padding: "10px 12px",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            style={{
              position: "absolute",
              top: 20,
              right: 28,
              fontSize: 28,
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <button
            onClick={goToPrevLightbox}
            style={{
              position: "absolute",
              left: 28,
              top: "50%",
              transform: "translateY(-50%)",
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              fontSize: 28,
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <img
            src={images[lightboxIndex]}
            alt="full"
            style={{
              maxWidth: "88%",
              maxHeight: "74vh",
              borderRadius: 12,
              objectFit: "contain",
            }}
          />

          <button
            onClick={goToNextLightbox}
            style={{
              position: "absolute",
              right: 28,
              top: "50%",
              transform: "translateY(-50%)",
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              fontSize: 28,
              cursor: "pointer",
            }}
          >
            ›
          </button>

          <div style={{ marginTop: 16, color: "rgba(255,255,255,0.72)", fontSize: 13 }}>
            Photo {lightboxIndex + 1} of {images.length}
          </div>
        </div>
      )}

      {showFavPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: "32px 28px",
              maxWidth: 340,
              width: "90%",
              textAlign: "center",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowFavPopup(false)}
              style={{
                position: "absolute",
                top: 14,
                right: 16,
                background: "none",
                border: "none",
                fontSize: 20,
                color: "#8A8078",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <div style={{ fontSize: 36, marginBottom: 12 }}>🤍</div>
            <h3 style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>
              Sign in to save properties
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "#8A8078",
                marginBottom: 22,
                lineHeight: 1.65,
              }}
            >
              Create a free account to save your favourite listings and get
              notified about new properties.
            </p>

            <Link href="/auth/login" style={{ textDecoration: "none" }}>
              <button
                style={{
                  width: "100%",
                  fontSize: 13,
                  fontWeight: 500,
                  background: "#1A1A1A",
                  color: "#F8F5F0",
                  border: "none",
                  borderRadius: 12,
                  padding: 13,
                  cursor: "pointer",
                  marginBottom: 8,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Sign In / Create Account
              </button>
            </Link>

            <button
              onClick={() => setShowFavPopup(false)}
              style={{
                fontSize: 12,
                color: "#8A8078",
                cursor: "pointer",
                background: "none",
                border: "none",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
