"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("sobre");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    NAV_LINKS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "20px 48px",
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800, fontSize: "16px",
            color: "#63d39e", letterSpacing: "0.05em",
          }}
        >
          NJ<span style={{ color: "#e8e8e4" }}>.dev</span>
        </span>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: "flex", gap: "32px" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              data-hover
              onClick={() => scrollTo(link)}
              style={{
                background: "none", border: "none",
                color: activeSection === link ? "#63d39e" : "rgba(232,232,228,0.4)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "color 0.2s", padding: "4px 0",
                borderBottom: activeSection === link ? "1px solid #63d39e" : "1px solid transparent",
                cursor: "none",
              }}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none", flexDirection: "column",
            justifyContent: "center", alignItems: "center", gap: "5px",
            background: "none", border: "none",
            padding: "4px", cursor: "none",
            width: 32, height: 32,
          }}
        >
          <span style={{
            display: "block", width: 22, height: 1.5,
            background: menuOpen ? "#63d39e" : "#e8e8e4",
            transition: "transform 0.3s, background 0.3s",
            transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
          }} />
          <span style={{
            display: "block", width: 22, height: 1.5,
            background: "#e8e8e4",
            transition: "opacity 0.3s",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block", width: 22, height: 1.5,
            background: menuOpen ? "#63d39e" : "#e8e8e4",
            transition: "transform 0.3s, background 0.3s",
            transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
          }} />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        style={{
          position: "fixed", inset: 0, zIndex: 99,
          background: "rgba(10,10,10,0.97)",
          backdropFilter: "blur(24px)",
          display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "center", gap: "4px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              background: "none", border: "none",
              color: activeSection === link ? "#63d39e" : "rgba(232,232,228,0.6)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 8vw, 42px)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              cursor: "none",
              padding: "12px 0",
              transition: "color 0.2s, transform 0.4s",
              transform: menuOpen ? "translateY(0)" : "translateY(24px)",
              transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
              borderBottom: activeSection === link
                ? "1px solid rgba(99,211,158,0.4)"
                : "1px solid transparent",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#63d39e"; }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                activeSection === link ? "#63d39e" : "rgba(232,232,228,0.6)";
            }}
          >
            {link}
          </button>
        ))}

        <div style={{
          position: "absolute", bottom: "32px",
          fontSize: "11px", color: "rgba(232,232,228,0.2)", letterSpacing: "0.12em",
        }}>
          NJ.dev
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
          nav          { padding: 20px 24px !important; }
        }
      `}</style>
    </>
  );
}
