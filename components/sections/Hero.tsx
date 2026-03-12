"use client";
export default function Hero() {
  return (
    <section
      id="sobre"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "120px 48px 80px",
        maxWidth: "1100px", margin: "0 auto",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <div
          style={{
            fontSize: "11px", letterSpacing: "0.2em", color: "#63d39e",
            textTransform: "uppercase", marginBottom: "24px",
            animation: "fadeIn 0.6s ease 0.1s both",
          }}
        >
          @ Maceió — AL, Brasil
        </div>

        <h1
          style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(48px, 7vw, 84px)",
            lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "28px",
            animation: "fadeUp 0.8s ease 0.2s both",
          }}
        >
          Nattan<br />
          <span style={{ color: "#63d39e" }}>Junior</span>
        </h1>

        <div
          style={{
            fontSize: "13px", letterSpacing: "0.08em",
            color: "rgba(232,232,228,0.45)", marginBottom: "28px",
            textTransform: "uppercase",
            animation: "fadeUp 0.8s ease 0.35s both",
          }}
        >
          ▸ Desenvolvedor Backend
        </div>

        <p
          style={{
            fontSize: "15px", lineHeight: 1.8,
            color: "rgba(232,232,228,0.65)", maxWidth: "580px",
            animation: "fadeUp 0.8s ease 0.45s both",
            borderLeft: "2px solid rgba(99,211,158,0.3)", paddingLeft: "20px",
          }}
        >
          Especialista em Node.js, TypeScript e NestJS, com foco em APIs REST escaláveis,
          microserviços e sistemas SaaS em produção. Experiência em mensageria com RabbitMQ,
          Redis, bancos relacionais e ambientes cloud na AWS.
        </p>

        <div style={{ display: "flex", gap: "16px", marginTop: "48px", flexWrap: "wrap", animation: "fadeUp 0.8s ease 0.55s both" }}>
          <a
            data-hover
            href="https://wa.me/5582996506043"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 28px", background: "#63d39e", color: "#0a0a0a",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px", letterSpacing: "0.08em",
              textDecoration: "none", fontWeight: 500, transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            → Entrar em contato
          </a>
          {[
            { label: "GitHub ↗", href: "https://github.com/nattanjunior" },
            { label: "LinkedIn ↗", href: "https://linkedin.com/in/nattanjunior" },
          ].map((btn) => (
            <a
              key={btn.label}
              data-hover
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px 28px",
                border: "1px solid rgba(99,211,158,0.3)", color: "#63d39e",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px", letterSpacing: "0.08em",
                textDecoration: "none", transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#63d39e"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(99,211,158,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute", right: "48px", top: "50%",
          transform: "translateY(-50%)",
          display: "flex", flexDirection: "column", gap: "8px", alignItems: "center",
        }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              width: i % 3 === 0 ? 24 : 8, height: 1,
              background: i % 3 === 0 ? "rgba(99,211,158,0.5)" : "rgba(99,211,158,0.15)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
