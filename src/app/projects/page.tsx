import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Work | Antoine Tabet",
  description: "All projects: production AI systems, full-stack apps, and hardware builds — including AskAlan, a RAG assistant serving 19 University of Toronto courses.",
  openGraph: {
    title: "Work | Antoine Tabet",
    description: "Production AI systems, full-stack apps, and hardware builds.",
    url: "https://antoinetabet.vercel.app/projects",
  },
};
import Footer from "@/components/Footer";
import WorkRow from "@/components/WorkRow";

const projects = [
  {
    index: "01",
    title: "AskAlan",
    type: "Production System",
    desc: "Production retrieval-augmented AI assistant serving University of Toronto students across 19 courses. Led a zero-downtime migration of its search layer onto Postgres and cut retrieval latency ~40%.",
    meta: "Anthropic Claude · FastAPI · PostgreSQL",
    href: "/projects/askalan",
    gradient: "from-emerald-900 via-emerald-800 to-slate-900",
  },
  {
    index: "02",
    title: "WealthEasy",
    type: "AI Project",
    desc: "AI-powered personal finance assistant that parses bank statements and generates natural language insights using the Claude API.",
    meta: "Claude API · Next.js · FastAPI",
    href: "/projects/wealtheasy",
    gradient: "from-violet-900 via-violet-800 to-slate-900",
  },
  {
    index: "03",
    title: "WorldEd",
    type: "AI Project",
    desc: "Adaptive AI learning platform that personalises educational content to each student's level and learning pace in real time.",
    meta: "Gemini AI · React · Node.js",
    href: "/projects/worlded",
    gradient: "from-blue-900 via-blue-800 to-slate-900",
  },
  {
    index: "04",
    title: "N3XU$ Identity",
    type: "AI Project",
    desc: "Identity-based academic intelligence platform that turns grades and syllabi into actionable engineering growth metrics.",
    meta: "TypeScript · PostgreSQL · Docker",
    href: "/projects/nexus",
    gradient: "from-rose-900 via-rose-800 to-slate-900",
  },
  {
    index: "05",
    title: "Aspire Web Suite",
    type: "Internship",
    desc: "Full-stack engineering at a high-growth scale-up — optimised backend queries to cut response latency by 35% and shipped 5 internal tooling apps to production.",
    meta: "Next.js · TypeScript · Supabase",
    href: "/projects/aspire",
    gradient: "from-emerald-900 via-emerald-800 to-slate-900",
  },
  {
    index: "06",
    title: "Click-A-Mole",
    type: "Hardware",
    desc: "Physical Whac-A-Mole game built with Arduino, servo motors, and computer vision for real-time mole detection and scoring.",
    meta: "Arduino · C++ · Computer Vision",
    href: "/projects/click-a-mole",
    gradient: "from-amber-900 via-amber-800 to-slate-900",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ── HERO ── */}
      <section className="bg-zinc-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/"
            className="font-mono text-zinc-500 hover:text-white text-xs uppercase tracking-[0.18em] transition-colors inline-flex items-center gap-2 mb-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
          >
            ← Home
          </Link>
          <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-6">
            Index / Work
          </p>
          <h1 className="text-white font-bold tracking-tighter leading-[0.95] text-[clamp(3rem,10vw,8rem)] mb-8">
            All Work
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
            AI systems, full-stack apps, and hardware builds — each one solving a real problem.
          </p>
        </div>
      </section>

      {/* ── INDEX ── */}
      <section className="pb-24">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={`${i * 40}ms`}>
            <WorkRow {...project} headingLevel="h2" />
          </AnimatedSection>
        ))}
      </section>

      <Footer />
    </div>
  );
}
