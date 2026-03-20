import Link from "next/link";
import { Check } from "lucide-react";

const GITHUB = "https://github.com/AG2048/click-a-mole";

const stats = [
  { num: "9", label: "Mole Modules" },
  { num: "C/C++", label: "Language" },
  { num: "Arduino Mega", label: "Platform" },
  { num: "Real-Time FSM", label: "Architecture" },
];

const techStack = [
  "C / C++",
  "Arduino Mega 2560",
  "Embedded Systems",
  "Mechatronics",
  "Finite State Machine",
];

const features = [
  {
    title: "Real-Time FSM Engine",
    desc: "C++ backend managing complex finite state machines that securely handle the full active moles lifecycle.",
  },
  {
    title: "Hardware-Software Co-Design",
    desc: "9 independent mole modules synchronized with a stepper motor, physical buttons, and analog multiplexers.",
  },
  {
    title: "Memory Optimization",
    desc: "Transferred strings to Flash memory and utilised static object pools to eradicate heap fragmentation.",
  },
  {
    title: "Non-Blocking I/O",
    desc: "Custom routines to poll serial and hardware concurrently without stuttering game logic.",
  },
];

export default function ClickAMolePage() {
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
            Click-A-Mole
          </h1>
          <p className="text-zinc-400 text-xl mb-8 max-w-2xl leading-relaxed">
            A sophisticated embedded systems project expanding the classic Whack-A-Mole arcade game
            into a high-performance mechatronic system with bare-metal hardware control.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["C/C++", "Arduino Mega 2560", "Embedded Systems", "Mechatronics"].map((tag) => (
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
                    A sophisticated, full-stack embedded systems project expanding the classic
                    arcade &ldquo;Whack-A-Mole&rdquo; into a high-performance mechatronic system.
                  </p>
                  <p>
                    Showcases bare-metal hardware control, real-time operating logic, and robust
                    object-oriented patterns strictly constrained by microcontroller memory bounds.
                  </p>
                </div>
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
            href="/projects/aspire"
            className="group flex items-center justify-between hover:opacity-80 transition-opacity"
          >
            <span className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">
              Up Next
            </span>
            <span className="text-white font-bold text-2xl group-hover:text-violet-400 transition-colors">
              Aspire Web Suite
            </span>
            <span className="text-violet-400 text-2xl">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
