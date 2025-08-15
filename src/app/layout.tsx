import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ToasterProvider } from "@/components/providers/toaster-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Natalia | Software Engineer",
  description: "Software Engineer specializing in building exceptional digital experiences with modern web technologies.",
  keywords: ["software engineer", "web developer", "react developer", "next.js developer", "frontend developer", "UI/UX designer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
