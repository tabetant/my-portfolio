import type { Metadata } from "next";
import { Mail, Github, Linkedin, MapPin, Download } from "lucide-react";
import ContactForm from "@/components/ContactForm";

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
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "in/antoinetabetuoft",
    href: "https://linkedin.com/in/antoinetabetuoft",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/tabetant",
    href: "https://github.com/tabetant",
    Icon: Github,
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
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            — Contact
          </p>
          <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Let&apos;s Talk.
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
            Open to internships, new grad roles, and applied AI research. Based in Toronto —
            happy to connect remotely or in person.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTENT
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Contact form + methods */}
            <div>
              {/* Availability indicator */}
              <div className="flex items-center gap-3 mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-zinc-500 text-sm">
                  Available for{" "}
                  <span className="text-emerald-600 font-semibold">
                    Summer 2026 opportunities
                  </span>
                </span>
              </div>

              <h2 className="text-zinc-900 text-2xl font-bold tracking-tight mb-6">
                Send a Message
              </h2>

              <ContactForm />

              <div className="mt-10 pt-8 border-t border-zinc-200">
                <h3 className="text-zinc-900 text-lg font-bold mb-4">Or reach out directly</h3>
                <div className="flex flex-col gap-3">
                  {contacts.map(({ label, value, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-200 hover:border-violet-300 hover:bg-violet-50 transition-all duration-200 cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center shrink-0 group-hover:bg-violet-200 transition-colors">
                        <Icon className="w-4 h-4 text-violet-600" />
                      </div>
                      <div>
                        <p className="text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-0.5">
                          {label}
                        </p>
                        <p className="text-zinc-900 font-medium text-sm group-hover:text-violet-700 transition-colors">
                          {value}
                        </p>
                      </div>
                      <span className="ml-auto text-zinc-300 group-hover:text-violet-400 transition-colors text-lg">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: What I'm looking for + location */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-zinc-900 text-2xl font-bold tracking-tight mb-6">
                  What I&apos;m Looking For
                </h2>
                <div className="flex flex-col gap-3">
                  {opportunities.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-zinc-600 text-[15px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6">
                <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Toronto, ON · Remote-friendly</span>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed mb-5">
                  Computer Engineering at the University of Toronto. Dean&apos;s List Scholar
                  (3.83 GPA). Building AI systems that solve real problems.
                </p>
                <a
                  href="/Antoine_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download Resumé
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
