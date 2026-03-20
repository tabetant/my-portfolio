import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a]">
      {/* Contact CTA */}
      <div className="py-28 px-6 text-center">
        <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-5">
          Get In Touch
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-5">
          Let&apos;s Build Something Together.
        </h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Open to internships, new grad roles, and research opportunities.
        </p>
        <a
          href="mailto:antoine.tabet@mail.utoronto.ca"
          className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-150"
        >
          Say Hello →
        </a>
      </div>

      {/* Divider + footer row */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span>© 2026 Antoine Tabet</span>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/tabetant"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/antoinetabet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/antoinetabet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <span>Built with Next.js &amp; Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
