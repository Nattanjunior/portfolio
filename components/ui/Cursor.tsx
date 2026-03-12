"use client";
import { useState, useEffect } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    window.addEventListener("mousemove", move);
    const addListeners = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };
    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed", top: pos.y - 4, left: pos.x - 4,
          width: 8, height: 8, borderRadius: "50%",
          background: "#63d39e", pointerEvents: "none", zIndex: 9999,
          transition: "transform 0.1s",
          transform: hovered ? "scale(2)" : "scale(1)",
        }}
      />
      <div
        style={{
          position: "fixed", top: pos.y - 20, left: pos.x - 20,
          width: 40, height: 40, borderRadius: "50%",
          border: "1px solid rgba(99,211,158,0.3)", pointerEvents: "none", zIndex: 9998,
          transition: "top 0.15s, left 0.15s, transform 0.2s",
          transform: hovered ? "scale(1.5)" : "scale(1)",
        }}
      />
    </>
  );
}
