"use client";
export default function Background() {
  return (
    <>
      <div
        style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(99,211,158,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,211,158,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        style={{
          position: "fixed", top: "-20vh", right: "-20vw",
          width: "60vw", height: "60vh",
          background: "radial-gradient(circle, rgba(99,211,158,0.06) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0,
        }}
      />
    </>
  );
}
