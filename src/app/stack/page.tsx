import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Stack | Antoine Tabet",
  description: "Languages, frameworks, and tools Antoine Tabet uses to build scalable software and intelligent systems.",
  openGraph: {
    title: "Stack | Antoine Tabet",
    description: "The tools and technologies behind Antoine's AI systems and full-stack applications.",
    url: "https://antoinetabet.com/stack",
  },
};

const categories = [
  {
    index: "01",
    name: "Languages",
    skills: [
      { name: "TypeScript", projects: ["WorldEd", "WealthEasy", "N3XU$"] },
      { name: "Python", projects: ["FastAPI backends"] },
      { name: "C / C++", projects: ["Click-A-Mole"] },
      { name: "JavaScript", projects: ["Node.js services"] },
      { name: "SQL", projects: ["PostgreSQL across all projects"] },
    ],
  },
  {
    index: "02",
    name: "Frameworks & Libraries",
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
    index: "03",
    name: "AI / ML",
    skills: [
      { name: "Claude API", projects: ["WealthEasy"] },
      { name: "Gemini API", projects: ["WorldEd", "N3XU$"] },
      { name: "RAG Pipelines", projects: ["WorldEd"] },
      { name: "Function Calling", projects: ["WorldEd (Eddi)"] },
      { name: "Prompt Engineering", projects: ["All AI projects"] },
    ],
  },
  {
    index: "04",
    name: "Tools & Infrastructure",
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
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ── HERO ── */}
      <section className="bg-zinc-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-6">
            Skills
          </p>
          <h1 className="text-white font-bold tracking-tighter leading-[0.95] text-[clamp(3rem,10vw,8rem)] mb-8">
            My Stack
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
            Languages, frameworks, and tools I reach for when building scalable software and
            intelligent systems — with the projects where I used them.
          </p>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {categories.map(({ index, name, skills }) => (
              <AnimatedSection key={name}>
                <h2 className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-2">
                  {index} / {name}
                </h2>
                <div>
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group border-t border-zinc-800 first:border-t-0 py-4 flex items-baseline justify-between gap-6"
                    >
                      <p className="text-white font-semibold tracking-tight group-hover:text-violet-300 transition-colors">
                        {skill.name}
                      </p>
                      <p className="font-mono text-zinc-600 text-xs uppercase tracking-[0.1em] text-right">
                        {skill.projects.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-20 pt-10 border-t border-zinc-900">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
            >
              See These in Action
              <ArrowUpRight className="w-4 h-4 text-violet-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
