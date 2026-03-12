"use client";
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "24px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        color: "rgba(232,232,228,0.2)", fontSize: "11px", letterSpacing: "0.08em",
        position: "relative", zIndex: 1,
      }}
    >
      <span>© 2025 Nattan Junior</span>
      <span>Desenvolvedor Backend</span>
    </footer>
  );
}
