import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About | Antoine Tabet",
  description: "The story behind the work: Computer Engineering at the University of Toronto, Dean's List, eight years of scout leadership, and engineering shaped by Beirut and Toronto.",
  openGraph: {
    title: "About | Antoine Tabet",
    description: "Computer Engineering at UofT, Dean's List, and eight years of leadership.",
    url: "https://antoinetabet.com/about",
  },
};

const photos = [
  { src: "/images/about-me/me_playing_guitar.jpeg", caption: "Guitar" },
  { src: "/images/pianoedited.jpg", caption: "Piano" },
  { src: "/images/about-me/me_singing.JPG", caption: "Singing" },
  { src: "/images/about-me/food.jpeg", caption: "Good Food" },
  { src: "/images/about-me/scouts_du_liban.jpg", caption: "Scouts" },
  { src: "/images/about-me/summer_camp_counselor.jpg", caption: "Camp Counselor" },
  { src: "/images/about-me/HMUN_2024_Advisor.jpg", caption: "Harvard MUN" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ── HERO ── */}
      <section className="bg-zinc-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div>
              <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-6">
                Background
              </p>
              <h1 className="text-white font-bold tracking-tighter leading-[0.95] text-[clamp(3rem,10vw,8rem)] mb-8">
                My Story
              </h1>
              <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
                A timeline of professional experience, academic achievements, and leadership
                roles that have shaped who I am as an engineer.
              </p>
            </div>
            <div className="relative flex-shrink-0 w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden ring-1 ring-zinc-800 rotate-2">
              <Image
                src="/images/about-me/my_aesthetic.jpeg"
                alt="Antoine Tabet"
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-10">
              01 / Experience
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-zinc-800 pt-8">
              <div className="md:col-span-4">
                <p className="font-mono text-zinc-500 text-xs uppercase tracking-[0.18em] mb-2">
                  May 2025 — Aug 2025
                </p>
                <p className="font-mono text-zinc-600 text-xs uppercase tracking-[0.18em]">
                  Aspire · Beirut, Lebanon
                </p>
              </div>
              <div className="md:col-span-8">
                <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-5">
                  Software Engineering Intern
                </h2>
                <ul className="text-zinc-400 space-y-3 leading-relaxed">
                  <li className="flex gap-4">
                    <span className="text-violet-400 font-mono text-sm shrink-0 pt-0.5">→</span>
                    Optimized backend queries and database interactions, slicing response
                    latency by <strong className="text-white font-semibold">&nbsp;35%</strong>.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-violet-400 font-mono text-sm shrink-0 pt-0.5">→</span>
                    Contributed to designing and implementing scalable backend architectures
                    for enterprise applications.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-violet-400 font-mono text-sm shrink-0 pt-0.5">→</span>
                    Shipped 5 production full-stack applications (Next.js + Supabase)
                    delivering 10+ features, with RESTful APIs serving 1,000+ daily requests.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-violet-400 font-mono text-sm shrink-0 pt-0.5">→</span>
                    Hardened security with row-level security and JWT auth middleware, at 95%
                    unit test coverage.
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-10">
              02 / Education
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-zinc-800 pt-8">
              <div className="md:col-span-4">
                <p className="font-mono text-zinc-500 text-xs uppercase tracking-[0.18em] mb-2">
                  Aug 2024 — May 2029
                </p>
                <p className="font-mono text-zinc-600 text-xs uppercase tracking-[0.18em]">
                  University of Toronto · Toronto, ON
                </p>
              </div>
              <div className="md:col-span-8">
                <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-6">
                  BASc, Electrical &amp; Computer Engineering
                  <span className="block text-zinc-400 text-lg font-medium mt-1">
                    Minor in Business &amp; AI
                  </span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-xl overflow-hidden mb-6">
                  <div className="bg-[#0a0a0a] p-5">
                    <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.14em] mb-2">
                      Cumulative GPA
                    </p>
                    <p className="text-white font-bold text-2xl tracking-tight">
                      3.83 <span className="text-zinc-500 text-sm font-normal">/ 4.0</span>
                    </p>
                  </div>
                  <div className="bg-[#0a0a0a] p-5">
                    <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.14em] mb-2">
                      Fall 2025 Sessional
                    </p>
                    <p className="text-white font-bold text-2xl tracking-tight">
                      3.94 <span className="text-zinc-500 text-sm font-normal">/ 4.0</span>
                    </p>
                  </div>
                  <div className="bg-[#0a0a0a] p-5">
                    <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.14em] mb-2">
                      Honors
                    </p>
                    <p className="text-violet-400 font-bold text-lg tracking-tight pt-1">
                      Dean&apos;s List Scholar
                    </p>
                  </div>
                </div>

                <p className="text-zinc-400 leading-relaxed">
                  Dean&apos;s List 2024–2025 and Fall 2025. Coursework includes Machine
                  Learning, Data Structures &amp; Algorithms, Software Engineering, Digital
                  Systems, and Object-Oriented Programming.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-10">
              03 / Leadership
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-zinc-800 pt-8 pb-12">
              <div className="md:col-span-4">
                <p className="font-mono text-zinc-500 text-xs uppercase tracking-[0.18em] mb-2">
                  Jan 2023 · Diplomatic Commendation
                </p>
                <p className="font-mono text-zinc-600 text-xs uppercase tracking-[0.18em]">
                  Harvard Model United Nations
                </p>
              </div>
              <div className="md:col-span-5">
                <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  Advisor &amp; Delegate
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  Earned a Diplomatic Commendation representing Denmark among 300+
                  international delegates — co-authored and passed 3 resolutions through
                  structured negotiation and written advocacy.
                </p>
              </div>
              <div className="md:col-span-3">
                <div className="relative w-full h-36 rounded-xl overflow-hidden ring-1 ring-zinc-800">
                  <Image
                    src="/images/about-me/HMUN_2024_Advisor.jpg"
                    alt="Harvard Model United Nations 2024"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-zinc-800 pt-8">
              <div className="md:col-span-4">
                <p className="font-mono text-zinc-500 text-xs uppercase tracking-[0.18em] mb-2">
                  8 Years
                </p>
                <p className="font-mono text-zinc-600 text-xs uppercase tracking-[0.18em]">
                  Les Scouts du Liban
                </p>
              </div>
              <div className="md:col-span-5">
                <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  Camp Counselor &amp; Leader
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  Elected troop leader for 9 scouts — led meetings, organized camps, and
                  trained youth on outdoor technical skills across 8 years, logging 80+ hours
                  of community service through food drives, beach clean-ups, and youth
                  education programs.
                </p>
              </div>
              <div className="md:col-span-3">
                <div className="relative w-full h-36 rounded-xl overflow-hidden ring-1 ring-zinc-800">
                  <Image
                    src="/images/about-me/scouts_du_liban.jpg"
                    alt="Les Scouts du Liban"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PHOTO REEL ── */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-4">
              04 / Beyond the Code
            </p>
            <h2 className="text-white text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-tight leading-none mb-12">
              When I&apos;m Not Building
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="flex gap-5 overflow-x-auto pb-3 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {photos.map((photo, i) => (
                <div
                  key={photo.src}
                  className={`relative flex-shrink-0 w-64 rounded-xl overflow-hidden group ${
                    i % 2 === 0 ? "rotate-1" : "-rotate-1"
                  } hover:rotate-0 transition-transform duration-300`}
                  style={{ height: 300 }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="256px"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10">
                    <p className="font-mono text-zinc-300 text-xs uppercase tracking-[0.14em]">
                      <span className="text-violet-400">0{i + 1}</span> — {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute top-0 left-0 bottom-3 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 bottom-3 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
          </div>
          <p className="font-mono text-zinc-600 text-[11px] mt-5 tracking-[0.3em] uppercase">
            Scroll →
          </p>
        </div>
      </section>
    </div>
  );
}
