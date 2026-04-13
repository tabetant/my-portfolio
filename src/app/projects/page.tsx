import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "WealthEasy",
    type: "AI Project",
    desc: "AI-powered personal finance assistant that parses bank statements and generates natural language insights using the Claude API.",
    tags: ["Claude API", "Next.js", "FastAPI"],
    href: "/projects/wealtheasy",
    gradient: "from-violet-900 via-violet-800 to-slate-900",
    glow: "group-hover:shadow-violet-900/30",
  },
  {
    title: "WorldEd",
    type: "AI Project",
    desc: "Adaptive AI learning platform that personalises educational content to each student's level and learning pace in real time.",
    tags: ["Gemini AI", "React", "Node.js"],
    href: "/projects/worlded",
    gradient: "from-blue-900 via-blue-800 to-slate-900",
    glow: "group-hover:shadow-blue-900/30",
  },
  {
    title: "N3XU$ Identity",
    type: "AI Project",
    desc: "Identity-based academic intelligence platform that turns grades and syllabi into actionable engineering growth metrics.",
    tags: ["TypeScript", "PostgreSQL", "Docker"],
    href: "/projects/nexus",
    gradient: "from-rose-900 via-rose-800 to-slate-900",
    glow: "group-hover:shadow-rose-900/30",
  },
  {
    title: "Aspire Web Suite",
    type: "Internship",
    desc: "Full-stack engineering at a high-growth scale-up — optimised backend queries to cut response latency by 35% and shipped 5 internal tooling apps to production.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    href: "/projects/aspire",
    gradient: "from-emerald-900 via-emerald-800 to-slate-900",
    glow: "group-hover:shadow-emerald-900/30",
  },
  {
    title: "Click-A-Mole",
    type: "Hardware",
    desc: "Physical Whac-A-Mole game built with Arduino, servo motors, and computer vision for real-time mole detection and scoring.",
    tags: ["Arduino", "C++", "Computer Vision"],
    href: "/projects/click-a-mole",
    gradient: "from-amber-900 via-amber-800 to-slate-900",
    glow: "group-hover:shadow-amber-900/30",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/"
            className="text-zinc-400 hover:text-white text-sm transition-colors mb-8 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
          >
            ← Home
          </Link>
          <div className="mt-6">
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.22em] mb-4">
              — Work
            </p>
            <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              All Projects
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
              A collection of AI systems, full-stack apps, and hardware builds — each one solving a real problem.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={`${i * 80}ms`}>
                <Link
                  href={project.href}
                  className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-violet-500/50 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-2xl ${project.glow} cursor-pointer`}
                >
                  {/* Gradient header */}
                  <div
                    className={`relative h-52 w-full bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)" }}
                    />
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/10 font-bold text-5xl tracking-tighter select-none">
                        {project.title}
                      </span>
                    </div>
                    {/* Type badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold bg-black/40 backdrop-blur-sm text-zinc-300 border border-white/10 px-2.5 py-1 rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-white font-bold text-xl mb-2 tracking-tight">{project.title}</h2>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-violet-400 text-sm font-medium group-hover:text-violet-300 transition-colors">
                      View Case Study
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
