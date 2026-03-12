import { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        background: "rgba(99,211,158,0.08)",
        border: "1px solid rgba(99,211,158,0.25)",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "'JetBrains Mono', monospace",
        color: "#63d39e",
        letterSpacing: "0.03em",
      }}
    >
      {children}
    </span>
  );
}
