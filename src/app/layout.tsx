import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antoine Tabet | AI Engineer & Computer Engineering Student",
  description:
    "Portfolio of Antoine Tabet — Computer Engineering student at the University of Toronto, Dean's List Scholar, building AI integration tools.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-[#0a0a0a] font-sans antialiased text-white",
          inter.variable,
          jetbrainsMono.variable,
          playfair.variable
        )}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
