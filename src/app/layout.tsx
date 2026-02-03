import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

// 1. Sans Serif (Primary)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 2. Monospace (Code/Terminal)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// 3. Serif (Poetry)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antoine Tabet | AI Engineer & Poet",
  description: "Portfolio of Antoine Tabet - Computer Engineering Student at UofT, specializing in Multimodal AI Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-slate-950 font-sans antialiased text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200",
          inter.variable,
          jetbrainsMono.variable,
          playfair.variable
        )}
      >
        <Navbar />
        <main className="relative flex min-h-screen flex-col pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
