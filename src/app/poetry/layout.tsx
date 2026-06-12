import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poetry | Antoine Tabet",
  description:
    "Heartstrings Unplayed — a trilingual poetry collection by Antoine Tabet, in English, French, and Spanish.",
  openGraph: {
    title: "Poetry | Antoine Tabet",
    description: "Heartstrings Unplayed — a trilingual poetry collection.",
    url: "https://antoinetabet.vercel.app/poetry",
  },
};

export default function PoetryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
