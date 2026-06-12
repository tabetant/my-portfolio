import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "WealthEasy | Antoine Tabet",
  description: "AI-powered financial intelligence platform that monitors client transactions, detects life events, and generates compliant advisory briefs.",
  openGraph: {
    title: "WealthEasy | Antoine Tabet",
    description: "AI-powered financial intelligence platform built with Claude API, Next.js, and PostgreSQL.",
    url: "https://antoinetabet.vercel.app/projects/wealtheasy",
  },
};

export default function WealthEasyPage() {
  return (
    <CaseStudy
      kicker="AI Project"
      title="WealthEasy"
      subtitle="AI-powered financial intelligence platform that monitors client transactions, detects life events, and generates compliant advisory briefs."
      tags={["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Claude API"]}
      github="https://github.com/mohamadmsalman82/WealthSimple-AIBuilderProject"
      stats={[
        { num: "12", label: "REST API Routes" },
        { num: "2", label: "Human Checkpoints" },
        { num: "Claude API", label: "AI Engine" },
        { num: "PostgreSQL", label: "Database" },
      ]}
      overview={
        <>
          <p>
            Built an end-to-end AI system that monitors client bank transactions, detects life
            events (new baby, inheritance, home purchase, marriage, etc.), and automatically
            generates personalised financial planning briefs using the Anthropic Claude API.
          </p>
          <p>
            Every brief is routed through a mandatory human advisor review portal before
            delivery — a two-checkpoint human-in-the-loop architecture designed strictly to
            meet Canadian securities regulations.
          </p>
        </>
      }
      videoId="PKdqWi_MUH8"
      videoTitle="WealthEasy Demo"
      features={[
        {
          title: "Life Event Detection Pipeline",
          desc: "Continuously flags key financial activities and converts raw transaction signals into personalised advisory briefs.",
        },
        {
          title: "Regulatory Compliance",
          desc: "Dual-checkpoint human-in-the-loop workflow guarantees no automated advice is sent before a certified advisor approves.",
        },
        {
          title: "Full-Stack Implementation",
          desc: "12-route REST API in Express alongside a Next.js 14 client shell, data managed with Supabase PostgreSQL.",
        },
      ]}
      techStack={["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Claude API", "Supabase"]}
      shareTitle="WealthEasy — AI financial intelligence platform by Antoine Tabet"
      next={{ href: "/projects/worlded", label: "WorldEd" }}
    />
  );
}
