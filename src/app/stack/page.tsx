import { Code2, Blocks, Brain, Wrench } from "lucide-react";

const categories = [
  {
    name: "Languages",
    Icon: Code2,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
    skills: ["TypeScript", "Python", "C / C++", "JavaScript", "SQL"],
  },
  {
    name: "Frameworks & Libraries",
    Icon: Blocks,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    skills: ["Next.js", "React", "FastAPI", "Express.js", "Tailwind CSS", "Drizzle ORM"],
  },
  {
    name: "AI / ML",
    Icon: Brain,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
    skills: [
      "Claude API",
      "Gemini API",
      "LangChain",
      "Agentic Workflows",
      "Prompt Engineering",
    ],
  },
  {
    name: "Tools & Infrastructure",
    Icon: Wrench,
    iconColor: "text-zinc-600",
    iconBg: "bg-zinc-100",
    skills: [
      "Git / GitHub",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "Vercel",
      "Linux / Bash",
      "Arduino",
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
            and intelligent systems.
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
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-zinc-50 border border-zinc-200 text-zinc-700 text-sm font-medium px-4 py-2 rounded-full hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
