"use client";
import { useState } from "react";

interface Project {
  name: string;
  description: string;
  stack: string[];
  highlights: string[];
  github: string;
  live?: string;
  stars: number;
}

// Color map by tech category
const TAG_COLORS: Record<string, { bg: string; border: string; color: string }> = {
  // Frameworks
  NestJS:      { bg: "rgba(224,42,65,0.08)",   border: "rgba(224,42,65,0.3)",   color: "#e02a41" },
  "Next.js":   { bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.2)", color: "#e8e8e4" },
  React:       { bg: "rgba(97,218,251,0.07)",  border: "rgba(97,218,251,0.25)", color: "#61dafb" },
  // Languages
  TypeScript:  { bg: "rgba(49,120,198,0.1)",   border: "rgba(49,120,198,0.3)",  color: "#3178c6" },
  JavaScript:  { bg: "rgba(247,223,30,0.07)",  border: "rgba(247,223,30,0.25)", color: "#f7df1e" },
  // Databases
  PostgreSQL:  { bg: "rgba(51,103,145,0.1)",   border: "rgba(51,103,145,0.3)",  color: "#336791" },
  Redis:       { bg: "rgba(220,50,50,0.08)",   border: "rgba(220,50,50,0.25)",  color: "#dc3232" },
  Prisma:      { bg: "rgba(45,212,191,0.08)",  border: "rgba(45,212,191,0.25)", color: "#2dd4bf" },
  MongoDB:     { bg: "rgba(71,162,72,0.08)",   border: "rgba(71,162,72,0.25)",  color: "#47a248" },
  // Infra
  Docker:      { bg: "rgba(36,150,237,0.08)",  border: "rgba(36,150,237,0.25)", color: "#2496ed" },
  "AWS EC2":   { bg: "rgba(255,153,0,0.08)",   border: "rgba(255,153,0,0.25)",  color: "#ff9900" },
  "GitHub Actions": { bg: "rgba(36,41,47,0.4)", border: "rgba(255,255,255,0.15)", color: "#adbac7" },
  // Auth
  JWT:         { bg: "rgba(208,47,58,0.08)",   border: "rgba(208,47,58,0.25)",  color: "#d02f3a" },
  "OAuth 2.0": { bg: "rgba(66,133,244,0.08)",  border: "rgba(66,133,244,0.25)", color: "#4285f4" },
  CASL:        { bg: "rgba(139,92,246,0.08)",  border: "rgba(139,92,246,0.25)", color: "#8b5cf6" },
  "Passport.js":{ bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.25)", color: "#34d399" },
  // Real-time
  "Socket.IO": { bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.18)", color: "#c8c8c8" },
};

const DEFAULT_TAG = { bg: "rgba(99,211,158,0.06)", border: "rgba(99,211,158,0.2)", color: "#63d39e" };

function StackTag({ label }: { label: string }) {
  const c = TAG_COLORS[label] ?? DEFAULT_TAG;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "5px",
      padding: "5px 11px",
      background: c.bg,
      border: `1px solid ${c.border}`,
      borderRadius: "3px",
      fontSize: "11px",
      fontFamily: "'JetBrains Mono', monospace",
      color: c.color,
      letterSpacing: "0.02em",
      whiteSpace: "nowrap",
      transition: "filter 0.2s",
    }}>
      {label}
    </span>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        border: `1px solid ${hovered ? "rgba(99,211,158,0.2)" : "rgba(255,255,255,0.06)"}`,
        marginBottom: "16px",
        background: hovered ? "rgba(99,211,158,0.025)" : "#0d0d0d",
        transition: "border-color 0.3s, background 0.3s",
        overflow: "hidden",
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "2px",
        background: "linear-gradient(90deg, #63d39e, rgba(99,211,158,0.2), transparent)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
      }} />

      {/* Corner decoration */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 80, height: 80,
        background: "radial-gradient(circle at top right, rgba(99,211,158,0.07), transparent 70%)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />

      <div style={{ padding: "36px 40px 32px" }}>

        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            {/* Index label */}
            <div style={{
              fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(99,211,158,0.5)", marginBottom: "8px",
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              projeto_{String(project.stars).padStart(2, "0")}
            </div>
            <h3 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(20px, 3vw, 26px)",
              letterSpacing: "-0.02em", color: "#e8e8e4",
              transition: "color 0.2s",
            }}>
              {project.name}
            </h3>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexShrink: 0 }}>
            {project.stars > 0 && (
              <span style={{
                fontSize: "11px", color: "rgba(255,210,80,0.6)",
                letterSpacing: "0.05em", marginRight: "4px",
              }}>
                ★ {project.stars}
              </span>
            )}
            <a
              data-hover href={project.github}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "8px 16px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(232,232,228,0.6)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#e8e8e4"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(232,232,228,0.6)"; }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            {project.live && (
              <a
                data-hover href={project.live}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  padding: "8px 16px",
                  background: "rgba(99,211,158,0.1)",
                  border: "1px solid rgba(99,211,158,0.3)",
                  color: "#63d39e",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase",
                  textDecoration: "none", transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(99,211,158,0.18)"; e.currentTarget.style.borderColor = "#63d39e"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(99,211,158,0.1)"; e.currentTarget.style.borderColor = "rgba(99,211,158,0.3)"; }}
              >
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#63d39e",
                  boxShadow: "0 0 6px #63d39e",
                  animation: "pulse 2s infinite",
                }} />
                Live
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: "14px", lineHeight: 1.8,
          color: "rgba(232,232,228,0.5)",
          maxWidth: "640px", marginBottom: "28px",
        }}>
          {project.description}
        </p>

        {/* Highlights */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "10px",
          marginBottom: "28px",
        }}>
          {project.highlights.map((h, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "10px",
              padding: "12px 14px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}>
              <span style={{ color: "#63d39e", fontSize: "12px", flexShrink: 0, marginTop: "1px" }}>✓</span>
              <span style={{ fontSize: "12px", color: "rgba(232,232,228,0.5)", lineHeight: 1.5 }}>{h}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", marginBottom: "20px" }} />

        {/* Stack tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
          {project.stack.map((s) => <StackTag key={s} label={s} />)}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
