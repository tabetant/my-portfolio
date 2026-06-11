import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "AskAlan | Antoine Tabet",
  description: "Production retrieval-augmented AI assistant serving University of Toronto engineering students, re-architected for scale across a multi-database backend.",
  openGraph: {
    title: "AskAlan | Antoine Tabet",
    description: "Production retrieval-augmented AI assistant serving University of Toronto engineering students, re-architected for scale across a multi-database backend.",
    url: "https://antoinetabet.vercel.app/projects/askalan",
  },
};

const stats = [
  { num: "19", label: "Courses in Production" },
  { num: "118K", label: "Document Chunks Indexed" },
  { num: "~40%", label: "Retrieval Latency Reduced" },
  { num: "8K+", label: "Real Queries Validated" },
];

const techStack = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "ParadeDB / pgvector",
  "Elasticsearch",
  "Pinecone",
  "Anthropic Claude",
  "Voyage AI",
  "Docker",
];

const features = [
  {
    title: "Zero-Downtime Search Migration",
    desc: "Re-architected the retrieval backbone from Elasticsearch onto Postgres behind a behavior-preserving adapter, with dual-read/dual-write validation and one-flag rollback, so live courses saw no disruption.",
  },
  {
    title: "Validated at Production Scale",
    desc: "Replayed 8,000+ real student queries through both engines to prove ranking parity before cutover, and cut keyword-search latency roughly 40%.",
  },
  {
    title: "Multimodal Retrieval",
    desc: "Rebuilt the pipeline so lecture text and exam-image content surface together, re-embedding thousands of page images and fixing an embedding defect that was burying real results.",
  },
  {
    title: "Full-Stack Cost Observability",
    desc: "Instrumented every model and embedding call across five providers for per-course, per-feature cost attribution, surfaced in live faculty and developer dashboards.",
  },
  {
    title: "Streaming Latency Optimization",
    desc: "Reordered the response-streaming path to cut perceived latency about 35%, improving time-to-first-token on every conversation.",
  },
];

export default function AskAlanPage() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/projects"
            className="text-zinc-400 hover:text-white text-sm transition-colors mb-8 inline-block"
          >
            ← All Projects
          </Link>
          <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight mt-6 mb-4">
            AskAlan
          </h1>
          <p className="text-zinc-400 text-xl mb-8 max-w-2xl leading-relaxed">
            A production AI teaching assistant that gives University of Toronto engineering
            students trusted, instructor-approved access to their own course material — deployed
            across 19 courses and answering thousands of student questions.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Python", "FastAPI", "PostgreSQL", "Anthropic Claude", "RAG"].map((tag) => (
              <span
                key={tag}
                className="bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="bg-zinc-800 border border-zinc-700 text-zinc-300 font-semibold px-6 py-3 rounded-full text-sm">
              Production system · University of Toronto
            </span>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex divide-x divide-zinc-700">
            {stats.map((s) => (
              <div key={s.label} className="flex-1 py-10 text-center px-4">
                <div className="text-white font-bold text-2xl leading-none">{s.num}</div>
                <div className="text-zinc-400 text-xs mt-2 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-zinc-900 text-2xl font-bold mb-4">Overview</h2>
                <div className="text-zinc-600 text-lg leading-relaxed space-y-4">
                  <p>
                    AskAlan is a retrieval-augmented AI assistant that gives University of
                    Toronto engineering students trusted access to their instructors&apos; own
                    course material — lectures, exercises, past exams, and announcements —
                    instead of the generic, unsourced answers public chatbots give. It began as
                    a capstone project and is now a production system maintained by a
                    faculty-led team, deployed across 19 courses.
                  </p>
                  <p>
                    I led the consolidation of its retrieval stack onto Postgres. The first
                    phase migrated the keyword-search layer off Elasticsearch behind a
                    behavior-preserving adapter, mirroring roughly 118,000 document chunks
                    across all 19 courses and validating ranking parity against more than 8,000
                    real student queries before any cutover. It cut keyword-search latency by
                    about 40% and removed one of three separate datastores from the operational
                    footprint, with dual-read/dual-write safety and instant rollback throughout.
                  </p>
                  <p>
                    Beyond the migration I worked across the stack: rebuilding multimodal
                    retrieval so exam and image content surfaces correctly, instrumenting
                    end-to-end token and cost tracking across five model providers, cutting
                    streaming latency about 35%, and hardening the live deployment&apos;s secret
                    handling. The throughline is shipping reliable changes inside a real system
                    with real users and real constraints — and leaving it measurably faster and
                    cheaper to run.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-zinc-900 text-2xl font-bold border-l-4 border-emerald-600 pl-4 mb-6">
                  Key Features
                </h2>
                <div className="space-y-4">
                  {features.map((f) => (
                    <div
                      key={f.title}
                      className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm flex gap-4"
                    >
                      <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-zinc-900 font-semibold mb-1">{f.title}</p>
                        <p className="text-zinc-600 text-sm leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white border border-zinc-200 rounded-xl p-6">
                <h3 className="text-zinc-900 font-bold text-lg mb-4">Tech Stack</h3>
                <ul className="space-y-3">
                  {techStack.map((tech) => (
                    <li key={tech} className="flex items-center gap-3 text-zinc-600 text-sm">
                      <div className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-6">
                <h3 className="text-zinc-900 font-bold text-lg mb-4">Links</h3>
                <span className="block w-full text-center bg-zinc-100 border border-zinc-200 text-zinc-600 font-semibold py-2.5 px-4 rounded-lg text-sm">
                  Production system · University of Toronto
                </span>
              </div>

              <ShareButtons title="AskAlan — production AI teaching assistant by Antoine Tabet" />
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT ── */}
      <section className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/projects/wealtheasy"
            className="group flex items-center justify-between hover:opacity-80 transition-opacity"
          >
            <span className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">
              Up Next
            </span>
            <span className="text-white font-bold text-2xl group-hover:text-emerald-400 transition-colors">
              WealthEasy
            </span>
            <span className="text-emerald-400 text-2xl">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
