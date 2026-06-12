import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import LocalTime from "@/components/LocalTime";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-900 relative overflow-hidden">
      {/* Radial violet glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(109,40,217,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Contact finale */}
      <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-10">
          05 / Contact
        </p>
        <h2 className="text-white text-[clamp(2.6rem,7vw,6rem)] font-bold tracking-tighter leading-[0.95] mb-4">
          <span className="mask-line">
            <span className="mask-line-inner">Let&apos;s build</span>
          </span>
          <span className="mask-line">
            <span className="mask-line-inner text-violet-400">something.</span>
          </span>
        </h2>
        <p className="font-mono text-zinc-500 text-sm uppercase tracking-[0.18em] mb-12">
          Open to internships · New grad roles · Research
        </p>
        <a
          href="mailto:antoine.tabet@mail.utoronto.ca"
          className="group inline-flex flex-wrap items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
        >
          <span className="text-outline group-hover:text-white text-[clamp(1.1rem,3.4vw,2.8rem)] font-bold tracking-tight transition-colors duration-300 break-all">
            antoine.tabet@mail.utoronto.ca
          </span>
          <ArrowUpRight className="w-6 h-6 md:w-9 md:h-9 text-violet-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </AnimatedSection>

      {/* Meta row */}
      <div className="relative z-10 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-zinc-600 text-xs uppercase tracking-[0.14em]">
            © {new Date().getFullYear()} Antoine Tabet
          </span>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/tabetant"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/antoinetabetuoft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/antoinetabet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-zinc-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <span className="font-mono text-zinc-600 text-xs uppercase tracking-[0.14em]">
            Toronto, Canada
            <LocalTime />
          </span>
        </div>
      </div>
    </footer>
  );
}
