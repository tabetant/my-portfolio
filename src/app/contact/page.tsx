import type { Metadata } from "next";
import { ArrowUpRight, Download } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact | Antoine Tabet",
  description: "Get in touch with Antoine Tabet — open to internships, new grad roles, and applied AI research.",
  openGraph: {
    title: "Contact | Antoine Tabet",
    description: "Get in touch — open to internships, new grad roles, and applied AI research.",
    url: "https://antoinetabet.vercel.app/contact",
  },
};

const contacts = [
  {
    label: "Email",
    value: "antoine.tabet@mail.utoronto.ca",
    href: "mailto:antoine.tabet@mail.utoronto.ca",
  },
  {
    label: "LinkedIn",
    value: "in/antoinetabetuoft",
    href: "https://linkedin.com/in/antoinetabetuoft",
  },
  {
    label: "GitHub",
    value: "github.com/tabetant",
    href: "https://github.com/tabetant",
  },
];

const opportunities = [
  "Software Engineering Internships",
  "New Grad Full-Time Roles",
  "Applied AI / ML Research",
  "Open Source Collaboration",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ── HERO ── */}
      <section className="bg-zinc-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-6">
            Contact
          </p>
          <h1 className="text-white font-bold tracking-tighter leading-[0.95] text-[clamp(3rem,10vw,8rem)] mb-8">
            Let&apos;s Talk.
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed mb-8">
            Open to internships, new grad roles, and applied AI research. Based in Toronto —
            happy to connect remotely or in person.
          </p>
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-zinc-500 text-xs uppercase tracking-[0.18em]">
              Available for{" "}
              <span className="text-emerald-400">Summer 2026 opportunities</span>
            </span>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: form */}
            <AnimatedSection>
              <h2 className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-8">
                01 / Send a Message
              </h2>
              <ContactForm />
            </AnimatedSection>

            {/* Right: direct links + looking for */}
            <div className="space-y-16">
              <AnimatedSection delay="80ms">
                <h2 className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-2">
                  02 / Reach Out Directly
                </h2>
                <div>
                  {contacts.map(({ label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="group border-t border-zinc-800 first:border-t-0 py-5 flex items-center justify-between gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-inset focus-visible:bg-violet-600/5"
                    >
                      <div>
                        <p className="font-mono text-zinc-600 text-[11px] uppercase tracking-[0.18em] mb-1">
                          {label}
                        </p>
                        <p className="text-white font-semibold tracking-tight group-hover:text-violet-300 transition-colors break-all">
                          {value}
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-zinc-700 group-hover:text-violet-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </a>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay="140ms">
                <h2 className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-6">
                  03 / What I&apos;m Looking For
                </h2>
                <div className="space-y-3">
                  {opportunities.map((item, i) => (
                    <p
                      key={item}
                      className="font-mono text-zinc-400 text-sm uppercase tracking-[0.14em] flex items-center gap-4"
                    >
                      <span className="text-violet-400">0{i + 1}</span>
                      {item}
                    </p>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay="200ms">
                <div className="border-t border-zinc-800 pt-8">
                  <p className="font-mono text-zinc-600 text-xs uppercase tracking-[0.18em] mb-4">
                    Toronto, ON · Remote-friendly
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
                    Computer Engineering at the University of Toronto. Dean&apos;s List Scholar
                    (3.83 GPA). Building AI systems that solve real problems.
                  </p>
                  <a
                    href="/Antoine_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-white hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
                  >
                    <Download className="w-4 h-4 text-violet-400" />
                    Download Resumé
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
