import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "WorldEd | Antoine Tabet",
  description: "Full-stack educational platform that transforms STEM learning through intelligent course delivery, real-time progress tracking, and an AI learning assistant.",
  openGraph: {
    title: "WorldEd | Antoine Tabet",
    description: "AI-powered adaptive learning platform with Socratic tutor, RAG pipeline, and gamified learning.",
    url: "https://antoinetabet.com/projects/worlded",
  },
};

export default function WorldEdPage() {
  return (
    <CaseStudy
      kicker="AI Project"
      title="WorldEd"
      subtitle="A full-stack educational platform that transforms STEM learning through intelligent course delivery, real-time progress tracking, and an AI learning assistant."
      tags={["Next.js 15", "React 18", "PostgreSQL", "Gemini 1.5 Flash", "Drizzle ORM"]}
      github="https://github.com/tabetant/worlded"
      stats={[
        { num: "40%", label: "Less Client-Side JS" },
        { num: "70%", label: "Less API Traffic" },
        { num: "Gemini 1.5", label: "AI Engine" },
        { num: "LaTeX", label: "Content Rendering" },
      ]}
      overview={
        <>
          <p>
            WorldEd is the platform I founded and run: a full-stack STEM learning system with
            LaTeX-rendered content, embedded video lectures, interactive quizzes, and a
            gamified streak system — built on Next.js 15, TypeScript, PostgreSQL, and
            Drizzle ORM.
          </p>
          <p>
            The headline engineering wins are measurable: React Server Components cut
            client-side JavaScript by 40%, optimised composite indexes cut query latency by
            40%, and database-level aggregation reduced API traffic by roughly 70%.
          </p>
          <p>
            At its core is Eddi, a Socratic AI tutor powered by a RAG pipeline over pgvector
            with Google Gemini function calling — students ask in natural language and Eddi
            guides them through the material instead of handing over answers.
          </p>
        </>
      }
      videoId="Z-Jti-oaPSQ"
      videoTitle="WorldEd Demo"
      features={[
        {
          title: "Eddi — Socratic AI Tutor",
          desc: "RAG pipeline over pgvector with Gemini function calling. Students query in natural language and Eddi navigates them through course material in a closed-loop agent workflow.",
        },
        {
          title: "Dynamic Progress & Streaks",
          desc: "Real-time progress tracking calculated server-side, with a gamified, timezone-aware daily streak system.",
        },
        {
          title: "Rich Academic Content",
          desc: "Full LaTeX rendering, syntax highlighting, and a structured hierarchy (Course → Module → Quiz) with JSONB schema-free questions.",
        },
        {
          title: "Enterprise-Grade Security",
          desc: "Clerk RBAC auth, rate limiting, CORS whitelisting, and rotating JWTs.",
        },
      ]}
      techStack={["Next.js 15", "React 18", "PostgreSQL", "Gemini 1.5 Flash", "Drizzle ORM", "LaTeX (KaTeX)"]}
      shareTitle="WorldEd — AI learning platform by Antoine Tabet"
      next={{ href: "/projects/nexus", label: "N3XU$ Identity Protocol" }}
    />
  );
}
