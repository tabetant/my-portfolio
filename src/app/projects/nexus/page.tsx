import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "N3XU$ Identity Protocol | Antoine Tabet",
  description: "Identity-based academic intelligence platform built with Gemini 2.0, Next.js 15, and FastAPI for UofT ECE students.",
  openGraph: {
    title: "N3XU$ Identity Protocol | Antoine Tabet",
    description: "AI-native academic telemetry dashboard with neural audit engine and resonance monitoring.",
    url: "https://antoinetabet.vercel.app/projects/nexus",
  },
};

export default function NexusPage() {
  return (
    <CaseStudy
      kicker="AI Project"
      title="N3XU$ Identity Protocol"
      subtitle="An identity-based academic intelligence platform that shifts focus from grades to becoming an engineer. Inspired by Atomic Habits, built specifically for UofT ECE."
      tags={["Next.js 15", "FastAPI", "Gemini 2.0 Flash", "PostgreSQL", "Supabase"]}
      github="https://github.com/X-Abby-X/UofTHacks26"
      stats={[
        { num: "Gemini 2.0", label: "AI Engine" },
        { num: "PDF → Roadmap", label: "Core Feature" },
        { num: "UofT ECE", label: "Built For" },
        { num: "Resonance", label: "Goal Metric" },
      ]}
      overview={
        <>
          <p>
            An identity-based academic intelligence platform that shifts focus from grades to
            becoming an engineer. Inspired by Atomic Habits, N3XU$ treats academic data as
            signal — not noise.
          </p>
          <p>
            Built specifically around the University of Toronto ECE curriculum, N3XU$
            translates complex syllabi and grades into a &ldquo;Resonance&rdquo; metric,
            ensuring students stay in-phase with their long-term goals.
          </p>
          <p>
            Under the hood: a multi-modal PDF-to-JSON &ldquo;Neural Audit&rdquo; engine on
            Gemini 2.0 Flash, a Supabase SSR identity vault managed with Drizzle ORM, and a
            real-time Recharts performance dashboard over a FastAPI backend.
          </p>
        </>
      }
      videoId="S2v6a2zS6o8"
      videoTitle="N3XU$ Demo"
      features={[
        {
          title: "Neural Audits",
          desc: "Decomposes unstructured PDF syllabi into a structured Neural Roadmap with marking schemes and milestones using Gemini 2.0.",
        },
        {
          title: "Resonance Monitoring",
          desc: "Calculates a Required Grade based on a Target GPA to show if current performance is 'in phase' with long-term goals.",
        },
        {
          title: "Telemetry Auditing",
          desc: "AI-driven feedback on technical submissions that detects anomalies like KCL sign errors or incorrect diode models.",
        },
        {
          title: "Identity Mapping",
          desc: "Assigns evolving academic personas based on technical telemetry, shifting focus from grades to becoming an engineer.",
        },
      ]}
      techStack={["Next.js 15", "FastAPI", "Gemini 2.0 Flash", "PostgreSQL", "Supabase"]}
      shareTitle="N3XU$ Identity Protocol — academic intelligence by Antoine Tabet"
      next={{ href: "/projects/click-a-mole", label: "Click-A-Mole" }}
    />
  );
}
