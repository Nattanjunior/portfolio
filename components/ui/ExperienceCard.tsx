"use client";
import { useState } from "react";

interface Experience {
  role: string;
  company: string;
  period: string;
  items: string[];
}

export default function ExperienceCard({ exp }: { exp: Experience }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-hover
      onClick={() => setOpen(!open)}
      style={{
        padding: "32px",
        border: "1px solid rgba(255,255,255,0.06)",
        marginBottom: "8px",
        background: open ? "rgba(99,211,158,0.02)" : "transparent",
        transition: "background 0.2s",
        cursor: "none",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "20px", marginBottom: "6px" }}>
            {exp.role}
          </div>
          <div style={{ color: "#63d39e", fontSize: "13px", letterSpacing: "0.05em" }}>
            {exp.company}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ fontSize: "11px", color: "rgba(232,232,228,0.35)", letterSpacing: "0.08em" }}>
            {exp.period}
          </span>
          <span
            style={{
              fontSize: "16px", color: "#63d39e",
              transform: open ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s", display: "inline-block",
            }}
          >
            +
          </span>
        </div>
      </div>

      {open && (
        <ul style={{ marginTop: "24px", paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
          {exp.items.map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: "13px", lineHeight: 1.7,
                color: "rgba(232,232,228,0.6)",
                paddingLeft: "20px",
                borderLeft: "2px solid rgba(99,211,158,0.2)",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
