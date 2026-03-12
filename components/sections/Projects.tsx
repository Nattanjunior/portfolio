"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data";

export default function Projects() {
  return (
    <section
      id="projetos"
      style={{
        padding: "100px 48px",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontSize: "11px", color: "#63d39e", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              03 — Projetos
            </span>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: "clamp(32px, 4vw, 48px)",
                marginTop: "12px", letterSpacing: "-0.02em",
              }}
            >
              Projetos
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {PROJECTS.map((project, i) => (
            <AnimatedSection key={project.name} delay={i * 150}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
