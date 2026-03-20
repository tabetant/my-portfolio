import Link from "next/link";
import { Check } from "lucide-react";

const GITHUB = "https://github.com/tabetant/cs-ticket-system";

const stats = [
  { num: "35%", label: "Latency Reduced" },
  { num: "5", label: "Apps Built" },
  { num: "1,000+", label: "Requests / Day" },
  { num: "Production", label: "Deployment" },
];

const techStack = [
  "Next.js (React)",
  "TypeScript",
  "Supabase (PostgreSQL)",
  "Tailwind CSS",
];

const features = [
  {
    title: "Performance Optimization",
    desc: "Refactored legacy API endpoints using efficient SQL joins and indexing in Supabase. Implemented caching and SSR in Next.js, resulting in a measurable 35% reduction in backend latency.",
  },
  {
    title: "Internal Tooling",
    desc: "Architected and deployed 5 internal full-stack applications that automated manual data entry workflows and provided real-time analytics dashboards for the operations team.",
  },
];

export default function AspirePage() {
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
          <div className="mt-6 mb-4 inline-flex items-center gap-2 rounded-full border border-violet-600/30 bg-violet-600/10 px-3 py-1 text-sm text-violet-300">
            Software Engineering Internship
          </div>
          <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Aspire Web Suite
          </h1>
          <p className="text-zinc-400 text-xl mb-8 max-w-2xl leading-relaxed">
            Full-stack engineering for high-growth scale-ups — optimising performance and building
            internal tooling during a production internship in Beirut.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Next.js", "TypeScript", "Supabase", "Tailwind CSS"].map((tag) => (
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
                    During my internship at Aspire, the existing infrastructure was struggling to
                    keep up with user demand. Response times were sluggish due to unoptimised
                    database queries and heavy client-side rendering.
                  </p>
                  <p>
                    Additionally, the team needed rapid prototyping of internal tools to streamline
                    operations, requiring versatile full-stack engineering skills across the
                    complete product lifecycle.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-zinc-900 text-2xl font-bold border-l-4 border-violet-600 pl-4 mb-6">
                  Engineering Solutions
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

      {/* ── NEXT PROJECT (loops back) ── */}
      <section className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/projects/wealtheasy"
            className="group flex items-center justify-between hover:opacity-80 transition-opacity"
          >
            <span className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">
              Back to Start
            </span>
            <span className="text-white font-bold text-2xl group-hover:text-violet-400 transition-colors">
              WealthEasy
            </span>
            <span className="text-violet-400 text-2xl">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
