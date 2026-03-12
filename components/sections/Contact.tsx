"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CONTACT_LINKS } from "@/data";

export default function Contact() {
  return (
    <section
      id="contato"
      style={{
        padding: "120px 48px",
        maxWidth: "1100px", margin: "0 auto", textAlign: "center",
      }}
    >
      <AnimatedSection>
        <span style={{ fontSize: "11px", color: "#63d39e", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          05 — Contato
        </span>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(36px, 6vw, 72px)",
            marginTop: "16px", letterSpacing: "-0.03em", lineHeight: 1.1,
          }}
        >
          Vamos construir<br />
          <span style={{ color: "#63d39e" }}>algo juntos?</span>
        </h2>

        <p style={{ color: "rgba(232,232,228,0.45)", fontSize: "14px", marginTop: "24px", lineHeight: 1.8 }}>
          Aberto a novas oportunidades e projetos desafiadores.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "48px", flexWrap: "wrap" }}>
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              data-hover
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "14px 24px",
                border: "1px solid rgba(99,211,158,0.2)",
                color: "rgba(232,232,228,0.7)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px", textDecoration: "none",
                transition: "all 0.2s", letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#63d39e";
                e.currentTarget.style.color = "#63d39e";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(99,211,158,0.2)";
                e.currentTarget.style.color = "rgba(232,232,228,0.7)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
