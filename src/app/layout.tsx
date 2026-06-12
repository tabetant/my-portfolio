import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import CursorDot from "@/components/CursorDot";
import SmoothScroll from "@/components/SmoothScroll";
import ConsoleGreeting from "@/components/ConsoleGreeting";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antoine Tabet",
  url: "https://antoinetabet.com",
  email: "mailto:antoine.tabet@mail.utoronto.ca",
  jobTitle: "Computer Engineering Student & AI Engineer",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Toronto",
  },
  sameAs: [
    "https://github.com/tabetant",
    "https://linkedin.com/in/antoinetabetuoft",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Retrieval-Augmented Generation",
    "Software Engineering",
    "Python",
    "TypeScript",
    "PostgreSQL",
  ],
};

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
    url: "https://antoinetabet.com",
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
  metadataBase: new URL("https://antoinetabet.com"),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="grain" aria-hidden="true" />
        <SmoothScroll />
        <CursorDot />
        <ConsoleGreeting />
        <Navbar />
        <main id="main" className="pt-16">{children}</main>
        <Analytics />
      </body>
    </html>
    </ViewTransitions>
  );
}
