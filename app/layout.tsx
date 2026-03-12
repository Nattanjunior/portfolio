import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nattan Junior — Desenvolvedor Backend",
  description:
    "Portfólio de Nattan Junior, Desenvolvedor Backend especialista em Node.js, TypeScript, NestJS, microserviços e sistemas SaaS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
