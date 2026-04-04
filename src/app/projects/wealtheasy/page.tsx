import Link from "next/link";
import { Check } from "lucide-react";
import YouTubePlayer from "@/components/YouTubePlayer";

const GITHUB = "https://github.com/mohamadmsalman82/WealthSimple-AIBuilderProject";
const YOUTUBE_ID = "PKdqWi_MUH8";

const stats = [
  { num: "12", label: "REST API Routes" },
  { num: "2", label: "Human Checkpoints" },
  { num: "Claude API", label: "AI Engine" },
  { num: "PostgreSQL", label: "Database" },
];

const techStack = [
  "Next.js 14",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Claude API",
  "Supabase",
];

const features = [
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
];

export default function WealthEasyPage() {
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
            WealthEasy
          </h1>
          <p className="text-zinc-400 text-xl mb-8 max-w-2xl leading-relaxed">
            AI-powered financial intelligence platform that monitors client transactions, detects
            life events, and generates compliant advisory briefs.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Claude API"].map((tag) => (
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
                    Built an end-to-end AI system that monitors client bank transactions, detects
                    life events (new baby, inheritance, home purchase, marriage, etc.), and
                    automatically generates personalised financial planning briefs using the
                    Anthropic Claude API.
                  </p>
                  <p>
                    Every brief is routed through a mandatory human advisor review portal before
                    delivery — a two-checkpoint human-in-the-loop architecture designed strictly to
                    meet Canadian securities regulations.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-zinc-900 text-2xl font-bold border-l-4 border-violet-600 pl-4 mb-6">
                  Demo
                </h2>
                <YouTubePlayer videoId={YOUTUBE_ID} title="WealthEasy Demo" className="mb-10" />
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
            href="/projects/worlded"
            className="group flex items-center justify-between hover:opacity-80 transition-opacity"
          >
            <span className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">
              Up Next
            </span>
            <span className="text-white font-bold text-2xl group-hover:text-violet-400 transition-colors">
              WorldEd
            </span>
            <span className="text-violet-400 text-2xl">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
