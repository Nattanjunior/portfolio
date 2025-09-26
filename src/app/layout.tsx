import type { Metadata } from "next";
import { Geist, Geist_Mono, Preahvihear, Poppins} from "next/font/google";
import "./globals.css";

import { ToasterProvider } from "@/components/providers/toaster-provider";
import { AOSProvider } from "@/components/providers/AOSprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-preahvihear",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins",
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
      <body
        className={`font-preahvihear antialiased `}
        suppressHydrationWarning
      >
        <ToasterProvider />
        <AOSProvider>
          {children}
        </AOSProvider >
      </body>
    </html>
  );
}
