import Link from "next/link";
import { Check } from "lucide-react";
import YouTubePlayer from "@/components/YouTubePlayer";

const GITHUB = "https://github.com/tabetant/worlded";

const stats = [
  { num: "40%", label: "Less Client-Side JS" },
  { num: "70%", label: "Less API Traffic" },
  { num: "Gemini 1.5", label: "AI Engine" },
  { num: "LaTeX", label: "Content Rendering" },
];

const techStack = [
  "Next.js 15",
  "React 18",
  "PostgreSQL",
  "Gemini 1.5 Flash",
  "Drizzle ORM",
  "LaTeX (KaTeX)",
];

const features = [
  {
    title: "Eddi — AI Learning Assistant",
    desc: "Powered by Gemini 1.5 Flash with function calling. Users query in natural language and Eddi navigates them using fuzzy search in a closed-loop agent workflow.",
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
];

export default function WorldEdPage() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/#projects"
            className="text-zinc-400 hover:text-white text-sm transition-colors mb-8 inline-block"
          >
            ← All Projects
          </Link>
          <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight mt-6 mb-4">
            WorldEd
          </h1>
          <p className="text-zinc-400 text-xl mb-8 max-w-2xl leading-relaxed">
            A full-stack educational platform that transforms STEM learning through intelligent
            course delivery, real-time progress tracking, and an AI learning assistant.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Next.js 15", "React 18", "PostgreSQL", "Gemini 1.5 Flash", "Drizzle ORM"].map((tag) => (
              <span
                key={tag}
                className="bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={GITHUB}
              target="_blank"
              className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              View on GitHub →
            </Link>
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
                    A full-stack educational platform that transforms STEM learning through
                    intelligent course delivery, real-time progress tracking, and an AI learning
                    assistant.
                  </p>
                  <p>
                    Built to tackle a problem I care about: making quality STEM education more
                    accessible and engaging. WorldEd is a complete learning management system with
                    LaTeX-rendered content, embedded video lectures, interactive quizzes, and a
                    gamified streak system. RSCs cut client-side JS by 40%, while optimised DB
                    indexes reduce API traffic by roughly 70%.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-zinc-900 text-2xl font-bold border-l-4 border-violet-600 pl-4 mb-6">
                  Demo
                </h2>
                <YouTubePlayer videoId="Z-Jti-oaPSQ" title="WorldEd Demo" className="mb-10" />
              </div>

              <div>
                <h2 className="text-zinc-900 text-2xl font-bold border-l-4 border-violet-600 pl-4 mb-6">
                  Key Features
                </h2>
                <div className="space-y-4">
                  {features.map((f) => (
                    <div
                      key={f.title}
                      className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm flex gap-4"
                    >
                      <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
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
                      <div className="w-2 h-2 rounded-full bg-violet-600 shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-6">
                <h3 className="text-zinc-900 font-bold text-lg mb-4">Links</h3>
                <Link
                  href={GITHUB}
                  target="_blank"
                  className="block w-full text-center bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm"
                >
                  View on GitHub →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT ── */}
      <section className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/projects/nexus"
            className="group flex items-center justify-between hover:opacity-80 transition-opacity"
          >
            <span className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">
              Up Next
            </span>
            <span className="text-white font-bold text-2xl group-hover:text-violet-400 transition-colors">
              N3XU$ Identity Protocol
            </span>
            <span className="text-violet-400 text-2xl">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
