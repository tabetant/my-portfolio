import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import CursorDot from "@/components/CursorDot";
import SmoothScroll from "@/components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antoine Tabet | AI Engineer & Computer Engineering Student",
  description:
    "Portfolio of Antoine Tabet — Computer Engineering student at the University of Toronto, Dean's List Scholar, building AI integration tools.",
  openGraph: {
    title: "Antoine Tabet | AI Engineer & Founder",
    description:
      "ECE @ University of Toronto. Dean's List. 3.83 cumulative GPA. I build AI systems that ship to production.",
    url: "https://antoinetabet.vercel.app",
    siteName: "Antoine Tabet",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antoine Tabet | AI Engineer & Founder",
    description:
      "ECE @ University of Toronto. Dean's List. 3.83 cumulative GPA. I build AI systems that ship to production.",
  },
  metadataBase: new URL("https://antoinetabet.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-[#0a0a0a] font-sans antialiased text-white",
          spaceGrotesk.variable,
          jetbrainsMono.variable
        )}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        <SmoothScroll />
        <CursorDot />
        <Navbar />
        <main id="main" className="pt-16">{children}</main>
        <Analytics />
      </body>
    </html>
    </ViewTransitions>
  );
}
