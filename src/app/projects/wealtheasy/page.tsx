import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "WealthEasy | Antoine Tabet",
  description: "AI-powered financial intelligence platform that monitors client transactions, detects life events, and generates compliant advisory briefs.",
  openGraph: {
    title: "WealthEasy | Antoine Tabet",
    description: "AI-powered financial intelligence platform built with Claude API, Next.js, and PostgreSQL.",
    url: "https://antoinetabet.com/projects/wealtheasy",
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
        { num: "10×", label: "Advisor Output vs Manual Review" },
        { num: "3 days", label: "End-to-End Build (Team of 2)" },
        { num: "12", label: "REST API Routes" },
        { num: "2", label: "Human Checkpoints" },
      ]}
      overview={
        <>
          <p>
            WealthEasy scales a financial advisor&apos;s output roughly 10× over manual
            review: an end-to-end AI system that monitors client bank transactions, detects
            life events (new baby, inheritance, home purchase, marriage), and automatically
            drafts personalised financial planning briefs with the Anthropic Claude API.
          </p>
          <p>
            Compliance was the hard constraint, not an afterthought. Every brief routes
            through a mandatory advisor review portal backed by a compliance audit log — a
            two-checkpoint human-in-the-loop architecture designed strictly around Canadian
            securities regulations, with Supabase row-level security underneath.
          </p>
          <p>
            The full system — 12-route REST API, transaction signal monitor, review portal,
            and audit log — was delivered end-to-end in three days by a team of two.
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
          desc: "12-route REST API in Express alongside a Next.js 14 client shell, data managed with Supabase PostgreSQL and row-level security.",
        },
        {
          title: "Shipped Under Pressure",
          desc: "Complete end-to-end system — API, signal monitor, review portal, compliance audit log — built in 3 days as a team of 2, scaling advisor output 10× over manual review.",
        },
      ]}
      techStack={["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Claude API", "Supabase"]}
      shareTitle="WealthEasy — AI financial intelligence platform by Antoine Tabet"
      next={{ href: "/projects/worlded", label: "WorldEd" }}
    />
  );
}
