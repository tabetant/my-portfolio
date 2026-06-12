import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import YouTubePlayer from "@/components/YouTubePlayer";
import ShareButtons from "@/components/ShareButtons";
import AnimatedSection from "@/components/AnimatedSection";

export interface CaseStudyProps {
  /** Small mono line above the title, e.g. "Production System" */
  kicker?: string;
  title: string;
  subtitle: string;
  tags: string[];
  /** GitHub URL — rendered as a mono text link. Omit for private repos. */
  github?: string;
  /** Static badge line shown instead of (or alongside) the GitHub link */
  badge?: string;
  stats: { num: string; label: string }[];
  overview: ReactNode;
  videoId?: string;
  videoTitle?: string;
  featuresTitle?: string;
  features: { title: string; desc: string }[];
  techStack: string[];
  shareTitle: string;
  next: { href: string; label: string };
}

export default function CaseStudy({
  kicker,
  title,
  subtitle,
  tags,
  github,
  badge,
  stats,
  overview,
  videoId,
  videoTitle,
  featuresTitle = "Key Features",
  features,
  techStack,
  shareTitle,
  next,
}: CaseStudyProps) {
  const featuresIndex = videoId ? "03" : "02";

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Scroll-driven reading progress */}
      <div className="reading-progress" aria-hidden="true" />

      {/* ── HERO ── */}
      <section className="bg-zinc-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/projects"
            className="font-mono text-zinc-500 hover:text-white text-xs uppercase tracking-[0.18em] transition-colors inline-flex items-center gap-2 mb-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
          >
            ← All Work
          </Link>
          {kicker && (
            <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-6">
              {kicker}
            </p>
          )}
          <h1 className="text-white font-bold tracking-tighter leading-[0.95] text-[clamp(2.8rem,9vw,7rem)] mb-8">
            {title}
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed mb-10">{subtitle}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="font-mono text-zinc-500 text-xs uppercase tracking-[0.18em]">
              {tags.join(" · ")}
            </p>
            {github && (
              <>
                <span className="hidden md:block h-px w-12 bg-zinc-800" aria-hidden="true" />
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-white hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
                >
                  GitHub
                  <ArrowUpRight className="w-3.5 h-3.5 text-violet-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </>
            )}
            {badge && (
              <>
                <span className="hidden md:block h-px w-12 bg-zinc-800" aria-hidden="true" />
                <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.18em]">
                  {badge}
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-y-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-3 pr-4">
              <span className="text-white font-bold text-2xl tracking-tight whitespace-nowrap">
                {s.num}
              </span>
              <span className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.14em] leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-16">
              <AnimatedSection>
                <h2 className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-6">
                  01 / Overview
                </h2>
                <div className="text-zinc-400 text-lg leading-relaxed space-y-4">{overview}</div>
              </AnimatedSection>

              {videoId && (
                <AnimatedSection>
                  <h2 className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-6">
                    02 / Demo
                  </h2>
                  <YouTubePlayer videoId={videoId} title={videoTitle ?? `${title} Demo`} />
                </AnimatedSection>
              )}

              <AnimatedSection>
                <h2 className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-2">
                  {featuresIndex} / {featuresTitle}
                </h2>
                <div>
                  {features.map((f, i) => (
                    <div
                      key={f.title}
                      className="border-t border-zinc-800 first:border-t-0 first:pt-0 py-6 flex gap-6"
                    >
                      <span className="font-mono text-violet-400 text-sm shrink-0 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-white font-semibold text-lg tracking-tight mb-1.5">
                          {f.title}
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              <AnimatedSection delay="80ms">
                <h3 className="font-mono text-zinc-500 text-xs uppercase tracking-[0.18em] mb-5">
                  Stack
                </h3>
                <ul className="space-y-3">
                  {techStack.map((tech) => (
                    <li key={tech} className="flex items-center gap-3 text-zinc-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay="140ms">
                <h3 className="font-mono text-zinc-500 text-xs uppercase tracking-[0.18em] mb-5">
                  Links
                </h3>
                {github ? (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-white hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
                  >
                    View on GitHub
                    <ArrowUpRight className="w-4 h-4 text-violet-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <p className="font-mono text-zinc-400 text-xs uppercase tracking-[0.14em] leading-relaxed">
                    {badge}
                  </p>
                )}
              </AnimatedSection>

              <AnimatedSection delay="200ms">
                <ShareButtons title={shareTitle} />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── UP NEXT ── */}
      <Link
        href={next.href}
        className="project-row group relative block border-t border-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-inset focus-visible:bg-violet-600/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <span className="font-mono text-zinc-500 text-xs uppercase tracking-[0.18em] shrink-0">
            Up Next
          </span>
          <span className="flex-1 text-outline text-[clamp(2.2rem,6vw,4.5rem)] font-bold tracking-tighter leading-none transition-colors duration-300 group-hover:text-white">
            {next.label}
          </span>
          <ArrowUpRight className="hidden md:block w-7 h-7 text-zinc-700 group-hover:text-violet-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 shrink-0" />
        </div>
      </Link>
    </div>
  );
}
