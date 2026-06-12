import type { Metadata } from "next";
import { Mail } from "lucide-react";
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
    index: "01",
    title: "Renovation contractor serving nonprofit housing operators",
    badge: "Paid engagement · Toronto",
    desc: "Cleaned up financial records in QuickBooks and built reporting clarity for the owner. Currently building a voice to estimate system: field staff record a voice memo at the unit, and the system drafts the estimate in QuickBooks and creates the task card for the right crew. Trained the owners and office staff to run AI workflows themselves.",
  },
  {
    index: "02",
    title: "Alarm monitoring company",
    badge: "Ongoing advisory · Ontario",
    desc: "A company with 45+ years in business and 20,000+ customers. An ongoing advisory engagement on where AI fits their operations, from customer communications to internal process mapping.",
  },
];

const tools = [
  {
    index: "01",
    title: "Doc Summarizer",
    desc: "Turns any PDF or Word document into a structured summary with key points and action items in under a minute. Built on the Claude API and demoed live in client meetings.",
  },
  {
    index: "02",
    title: "Ops Report Generator",
    desc: "Turns a CSV or spreadsheet of production data into a full operations report with key metric tables, anomaly flags, and recommended actions. Built on the Claude API and demoed live in client meetings.",
  },
];

const approach = [
  {
    index: "01",
    title: "Map the workflow",
    desc: "I sit with the people doing the work and find the choke point before writing any code.",
  },
  {
    index: "02",
    title: "Build on what they already use",
    desc: "Automations built around QuickBooks, Trello, Outlook, and the tools already in place. No rip and replace.",
  },
  {
    index: "03",
    title: "Train and hand off",
    desc: "The team runs it without me, with documentation to match.",
  },
];

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ── HERO ── */}
      <section className="bg-zinc-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-6">
            AI Consulting
          </p>
          <h1 className="text-white font-bold tracking-tighter leading-[0.95] text-[clamp(2.8rem,8vw,6.5rem)] mb-8 max-w-5xl">
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
      <section className="py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-4">
              01 / Client Work
            </p>
            <h2 className="text-white text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-tight leading-none mb-2">
              Engagements delivered
            </h2>
          </AnimatedSection>

          <div>
            {engagements.map((card, i) => (
              <AnimatedSection key={card.title} delay={`${i * 60}ms`}>
                <div className="border-t border-zinc-800 first:border-t-0 py-10 grid grid-cols-1 md:grid-cols-12 gap-6">
                  <span className="font-mono text-violet-400 text-sm md:col-span-1">
                    {card.index}
                  </span>
                  <div className="md:col-span-6">
                    <h3 className="text-white font-bold text-2xl tracking-tight mb-4">
                      {card.title}
                    </h3>
                    <p className="font-mono text-zinc-500 text-xs uppercase tracking-[0.18em]">
                      {card.badge}
                    </p>
                  </div>
                  <p className="md:col-span-5 text-zinc-400 leading-relaxed">{card.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS BUILT ── */}
      <section className="py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-4">
              02 / Tools Built
            </p>
            <h2 className="text-white text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-tight leading-none mb-2">
              What I bring to every engagement
            </h2>
          </AnimatedSection>

          <div>
            {tools.map((tool, i) => (
              <AnimatedSection key={tool.title} delay={`${i * 60}ms`}>
                <div className="border-t border-zinc-800 first:border-t-0 py-10 grid grid-cols-1 md:grid-cols-12 gap-6">
                  <span className="font-mono text-violet-400 text-sm md:col-span-1">
                    {tool.index}
                  </span>
                  <h3 className="md:col-span-6 text-white font-bold text-2xl tracking-tight">
                    {tool.title}
                  </h3>
                  <p className="md:col-span-5 text-zinc-400 leading-relaxed">{tool.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section className="py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-4">
              03 / Method
            </p>
            <h2 className="text-white text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-tight leading-none mb-14">
              How these projects get delivered
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {approach.map((step, i) => (
              <AnimatedSection key={step.title} delay={`${i * 60}ms`}>
                <div className="border-t border-zinc-800 pt-6">
                  <span className="font-mono text-violet-400 text-sm">{step.index}</span>
                  <h3 className="text-white font-bold text-xl tracking-tight mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT LINE ── */}
      <section className="py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-zinc-400 text-lg leading-relaxed flex flex-wrap items-center gap-x-3 gap-y-2">
              Working on something similar?{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
              >
                <Mail className="w-4 h-4" />
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
