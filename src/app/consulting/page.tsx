import type { Metadata } from "next";
import {
  FileText,
  BarChart3,
  HardHat,
  BellRing,
  Search,
  Blocks,
  GraduationCap,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "AI Consulting | Antoine Tabet",
  description:
    "Consulting work delivered for small operations heavy businesses in the Greater Toronto Area: workflow automation, reporting clarity, and AI tools built on the Claude API.",
  openGraph: {
    title: "AI Consulting | Antoine Tabet",
    description:
      "Consulting work delivered for small operations heavy businesses: workflow automation, reporting clarity, and AI tools built on the Claude API.",
    url: "https://antoinetabet.vercel.app/consulting",
  },
};

const CONTACT_EMAIL = "antoine.tabet@mail.utoronto.ca";

const engagements = [
  {
    Icon: HardHat,
    title: "Renovation contractor serving nonprofit housing operators",
    badge: "Paid engagement · Toronto",
    desc: "Cleaned up financial records in QuickBooks and built reporting clarity for the owner. Currently building a voice to estimate system: field staff record a voice memo at the unit, and the system drafts the estimate in QuickBooks and creates the task card for the right crew. Trained the owners and office staff to run AI workflows themselves.",
  },
  {
    Icon: BellRing,
    title: "Alarm monitoring company",
    badge: "Ongoing advisory · Ontario",
    desc: "A company with 45+ years in business and 20,000+ customers. An ongoing advisory engagement on where AI fits their operations, from customer communications to internal process mapping.",
  },
];

const tools = [
  {
    Icon: FileText,
    title: "Doc Summarizer",
    desc: "Turns any PDF or Word document into a structured summary with key points and action items in under a minute. Built on the Claude API and demoed live in client meetings.",
  },
  {
    Icon: BarChart3,
    title: "Ops Report Generator",
    desc: "Turns a CSV or spreadsheet of production data into a full operations report with key metric tables, anomaly flags, and recommended actions. Built on the Claude API and demoed live in client meetings.",
  },
];

const approach = [
  {
    Icon: Search,
    title: "Map the workflow",
    desc: "I sit with the people doing the work and find the choke point before writing any code.",
  },
  {
    Icon: Blocks,
    title: "Build on what they already use",
    desc: "Automations built around QuickBooks, Trello, Outlook, and the tools already in place. No rip and replace.",
  },
  {
    Icon: GraduationCap,
    title: "Train and hand off",
    desc: "The team runs it without me, with documentation to match.",
  },
];

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.22em] mb-4">
            AI Consulting
          </p>
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6 max-w-3xl">
            AI workflow automation, shipped for real businesses.
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
            Alongside my degree I run a small consulting practice for operations
            heavy businesses in the Greater Toronto Area: contractors, housing
            renovation firms, and other companies of 10 to 200 people. I automate
            their repetitive work: estimates, reports, paperwork, follow ups. This
            page covers what I have delivered so far.
          </p>
        </div>
      </section>

      {/* ── ENGAGEMENTS ── */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.22em] mb-3">
              Client Work
            </p>
            <h2 className="text-white text-4xl font-bold tracking-tight mb-14">
              Engagements delivered
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagements.map((card, i) => (
              <AnimatedSection key={card.title} delay={`${i * 80}ms`}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-full hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-zinc-800 border border-zinc-700 mb-5">
                    <card.Icon className="w-5 h-5 text-violet-400" />
                  </span>
                  <h3 className="text-white font-bold text-lg mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <span className="self-start text-xs font-semibold bg-black/40 text-zinc-300 border border-white/10 px-2.5 py-1 rounded-full mb-4">
                    {card.badge}
                  </span>
                  <p className="text-zinc-400 text-base leading-relaxed">{card.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS BUILT ── */}
      <section className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-violet-600 text-xs font-semibold uppercase tracking-[0.22em] mb-3">
              Tools Built
            </p>
            <h2 className="text-zinc-900 text-4xl font-bold tracking-tight mb-14">
              What I bring to every engagement
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, i) => (
              <AnimatedSection key={tool.title} delay={`${i * 80}ms`}>
                <div className="bg-white border border-zinc-200 rounded-xl p-6 h-full hover:border-violet-300 hover:-translate-y-0.5 transition-all duration-200">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-violet-50 border border-violet-100 mb-5">
                    <tool.Icon className="w-5 h-5 text-violet-600" />
                  </span>
                  <h3 className="text-zinc-900 font-bold text-lg mb-2 tracking-tight">
                    {tool.title}
                  </h3>
                  <p className="text-zinc-600 text-base leading-relaxed">{tool.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.22em] mb-3">
              Method
            </p>
            <h2 className="text-white text-4xl font-bold tracking-tight mb-14">
              How these projects get delivered
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approach.map((step, i) => (
              <AnimatedSection key={step.title} delay={`${i * 80}ms`}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-full hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-zinc-800 border border-zinc-700 mb-5">
                    <step.Icon className="w-5 h-5 text-violet-400" />
                  </span>
                  <h3 className="text-white font-bold text-lg mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-base leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT LINE ── */}
      <section className="bg-zinc-950 border-t border-zinc-800 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Working on something similar?{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-violet-400 hover:text-violet-300 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
