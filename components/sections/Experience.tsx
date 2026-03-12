"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { EXPERIENCES } from "@/data";

export default function Experience() {
  return (
    <section
      id="experiência"
      style={{ padding: "100px 48px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <AnimatedSection>
        <div style={{ marginBottom: "64px" }}>
          <span style={{ fontSize: "11px", color: "#63d39e", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            02 — Trajetória
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 48px)",
              marginTop: "12px", letterSpacing: "-0.02em",
            }}
          >
            Experiência
          </h2>
        </div>
      </AnimatedSection>

      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {EXPERIENCES.map((exp, i) => (
          <AnimatedSection key={i} delay={i * 120}>
            <ExperienceCard exp={exp} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={300}>
        <div
          style={{
            marginTop: "64px", padding: "32px",
            border: "1px solid rgba(99,211,158,0.15)",
            background: "rgba(99,211,158,0.02)",
          }}
        >
          <div style={{ fontSize: "11px", color: "#63d39e", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
            Formação
          </div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "20px" }}>
            Engenharia de Software
          </div>
          <div style={{ color: "rgba(232,232,228,0.5)", fontSize: "13px", marginTop: "6px" }}>
            FIAP — Fev 2025 até o momento
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
