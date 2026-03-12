"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Tag from "@/components/ui/Tag";
import { SKILLS } from "@/data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "100px 48px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontSize: "11px", color: "#63d39e", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              04 — Tecnologias
            </span>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: "clamp(32px, 4vw, 48px)",
                marginTop: "12px", letterSpacing: "-0.02em",
              }}
            >
              Skills
            </h2>
          </div>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          {Object.entries(SKILLS).map(([category, items], i) => (
            <AnimatedSection key={category} delay={i * 80}>
              <SkillCell category={category} items={items} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCell({ category, items }: { category: string; items: string[] }) {
  return (
    <div
      style={{ padding: "32px", background: "#0a0a0a", transition: "background 0.2s" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(99,211,158,0.03)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#0a0a0a"; }}
    >
      <div style={{ fontSize: "11px", color: "#63d39e", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
        {category}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {items.map((skill) => <Tag key={skill}>{skill}</Tag>)}
      </div>
    </div>
  );
}
