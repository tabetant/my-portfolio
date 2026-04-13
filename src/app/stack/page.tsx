import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Blocks, Brain, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Stack | Antoine Tabet",
  description: "Languages, frameworks, and tools Antoine Tabet uses to build scalable software and intelligent systems.",
  openGraph: {
    title: "Stack | Antoine Tabet",
    description: "The tools and technologies behind Antoine's AI systems and full-stack applications.",
    url: "https://antoinetabet.vercel.app/stack",
  },
};

const categories = [
  {
    name: "Languages",
    Icon: Code2,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
    skills: [
      { name: "TypeScript", projects: ["WorldEd", "WealthEasy", "N3XU$"] },
      { name: "Python", projects: ["FastAPI backends"] },
      { name: "C / C++", projects: ["Click-A-Mole"] },
      { name: "JavaScript", projects: ["Node.js services"] },
      { name: "SQL", projects: ["PostgreSQL across all projects"] },
    ],
  },
  {
    name: "Frameworks & Libraries",
    Icon: Blocks,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    skills: [
      { name: "Next.js", projects: ["WorldEd", "WealthEasy", "N3XU$"] },
      { name: "React", projects: ["All frontend projects"] },
      { name: "FastAPI", projects: ["N3XU$"] },
      { name: "Express.js", projects: ["WealthEasy"] },
      { name: "Tailwind CSS", projects: ["All projects"] },
      { name: "Drizzle ORM", projects: ["WorldEd", "N3XU$"] },
    ],
  },
  {
    name: "AI / ML",
    Icon: Brain,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
    skills: [
      { name: "Claude API", projects: ["WealthEasy"] },
      { name: "Gemini API", projects: ["WorldEd", "N3XU$"] },
      { name: "RAG Pipelines", projects: ["WorldEd"] },
      { name: "Function Calling", projects: ["WorldEd (Eddi)"] },
      { name: "Prompt Engineering", projects: ["All AI projects"] },
    ],
  },
  {
    name: "Tools & Infrastructure",
    Icon: Wrench,
    iconColor: "text-zinc-600",
    iconBg: "bg-zinc-100",
    skills: [
      { name: "PostgreSQL", projects: ["WorldEd", "WealthEasy", "N3XU$"] },
      { name: "Supabase", projects: ["WorldEd", "WealthEasy", "N3XU$", "Aspire"] },
      { name: "Git / GitHub", projects: ["All projects"] },
      { name: "Docker", projects: ["Deployment pipelines"] },
      { name: "Vercel", projects: ["All Next.js deployments"] },
      { name: "Linux / Bash", projects: ["Server administration"] },
      { name: "Arduino", projects: ["Click-A-Mole"] },
    ],
  },
];

export default function StackPage() {
  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            — Skills
          </p>
          <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            My Stack
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
            Languages, frameworks, and tools I reach for when building scalable software
            and intelligent systems — with the projects where I used them.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GRID
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map(({ name, Icon, iconColor, iconBg, skills }) => (
              <div key={name}>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-200">
                  <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <h2 className="text-zinc-900 text-xl font-bold">{name}</h2>
                </div>
                <div className="space-y-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-3 rounded-xl border border-zinc-100 hover:border-violet-200 hover:bg-violet-50/50 transition-colors duration-200"
                    >
                      <p className="text-zinc-900 font-semibold text-sm">{skill.name}</p>
                      <p className="text-zinc-400 text-xs mt-0.5">
                        {skill.projects.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-200 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-violet-600 hover:text-violet-500 font-medium transition-colors text-sm cursor-pointer"
            >
              See these in action →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
