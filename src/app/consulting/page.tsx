import type { Metadata } from "next";
import {
  Mail,
  Search,
  Blocks,
  GraduationCap,
  HardHat,
  BellRing,
  Wrench,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "AI Consulting | Antoine Tabet",
  description:
    "AI workflow automation for small operations heavy businesses in the Greater Toronto Area. Estimates, reports, paperwork, and follow ups, automated around the tools you already use.",
  openGraph: {
    title: "AI Consulting | Antoine Tabet",
    description:
      "AI workflow automation for small operations heavy businesses. I take the repetitive work out of running a small company.",
    url: "https://antoinetabet.vercel.app/consulting",
  },
};

const CONTACT_EMAIL = "antoine.tabet@mail.utoronto.ca";

const steps = [
  {
    Icon: Search,
    title: "Map the workflow",
    desc: "I sit with the people doing the work and find the choke point.",
  },
  {
    Icon: Blocks,
    title: "Build on what you already use",
    desc: "Automations built around QuickBooks, Trello, Outlook, and the tools already in place. No rip and replace.",
  },
  {
    Icon: GraduationCap,
    title: "Train and hand off",
    desc: "Your team runs it without me, with documentation to match.",
  },
];

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
  {
    Icon: Wrench,
    title: "Tools I bring to every engagement",
    badge: "Built on the Claude API",
    desc: "Doc Summarizer turns any PDF or Word document into a structured summary with key points and action items in under a minute. Ops Report Generator turns a CSV or spreadsheet of production data into a full operations report with key metric tables, anomaly flags, and recommended actions. Both are demoed live in client meetings.",
  },
];

function ContactButton({ label }: { label: string }) {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-violet-600/30 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <Mail className="w-4 h-4 shrink-0" />
      {label}
    </a>
  );
}

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
            AI workflow automation for small, operations heavy businesses.
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed mb-10">
            I take the repetitive work out of running a small company: estimates,
            reports, paperwork, follow ups.
          </p>
          <ContactButton label="Start a conversation" />
        </div>
      </section>

      {/* ── WHO I WORK WITH ── */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.22em] mb-3">
              Who I Work With
            </p>
            <h2 className="text-white text-4xl font-bold tracking-tight mb-8">
              Built for the people doing the work
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-4">
              Contractors and small firms serving nonprofit and supportive housing
              operators in the Greater Toronto Area, plus operations heavy small
              businesses of 10 to 200 people that are ready to automate.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
              Why this niche: public funding is pushing more renovation and housing
              work toward small specialist firms that have no software people on
              staff.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ENGAGEMENT STEPS ── */}
      <section className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-violet-600 text-xs font-semibold uppercase tracking-[0.22em] mb-3">
              How It Works
            </p>
            <h2 className="text-zinc-900 text-4xl font-bold tracking-tight mb-14">
              What an engagement looks like
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={`${i * 80}ms`}>
                <div className="bg-white border border-zinc-200 rounded-xl p-6 h-full hover:border-violet-300 hover:-translate-y-0.5 transition-all duration-200">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-violet-50 border border-violet-100 mb-5">
                    <step.Icon className="w-5 h-5 text-violet-600" />
                  </span>
                  <h3 className="text-zinc-900 font-bold text-lg mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 text-base leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK SO FAR ── */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.22em] mb-3">
              Work So Far
            </p>
            <h2 className="text-white text-4xl font-bold tracking-tight mb-14">
              Real engagements, real workflows
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* ── WHY ME ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-violet-600 text-xs font-semibold uppercase tracking-[0.22em] mb-3">
              Why Me
            </p>
            <h2 className="text-zinc-900 text-4xl font-bold tracking-tight mb-8">
              I build it, then your team owns it
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed max-w-3xl">
              Computer Engineering at the University of Toronto, Dean&apos;s List. AI
              systems research on a university wide course assistant. I build the
              automation, then I teach your team to own it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="bg-zinc-950 border-t border-zinc-800 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-white text-4xl font-bold tracking-tight mb-6">
              Have a workflow that eats your week?
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Send a short note about it. I will reply with how I would approach it.
            </p>
            <ContactButton label="Start a conversation" />
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
