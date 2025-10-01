import type { Metadata } from "next";
import { Preahvihear, Poppins } from "next/font/google";
import "./globals.css";

import { ToasterProvider } from "@/components/providers/toaster-provider";
import { AOSProvider } from "@/components/providers/AOSprovider";
// import HyperspeedGlobal from "./wrapper/HyperSpeedGlobal";

// Otimização de fontes com display: swap para melhor CLS
const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-preahvihear",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nattan Junior | Engenheiro de Software",
  description: "Engenheiro de software especializado em criar experiências digitais excepcionais com tecnologias web modernas.",
  keywords: ["engenheiro de software", "desenvolvedor web", "desenvolvedor react", "desenvolvedor next.js", "desenvolvedor frontend", "desenvolvedor full stack", "desenvolvedor node", "desenvolvedor", "desenvolvedor backend"],
  openGraph: {
    title: "Nattan Junior | Engenheiro de Software",
    description: "Engenheiro de software especializado em criar experiências digitais excepcionais com tecnologias web modernas.",
    images: [
      {
        url: "https://nattan-junior.vercel.app/logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`scroll-smooth dark ${preahvihear.variable} ${poppins.variable}`}>
      <head>
        {/* Preload critical resources */}
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
        {/* Preload critical CSS */}
        <link 
          rel="preload" 
          href="/styles/critical.css" 
          as="style" 
        />
        {/* Add meta for better mobile experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`font-preahvihear antialiased`}
        suppressHydrationWarning
      >
        <ToasterProvider />
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
