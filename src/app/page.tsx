import Image from "next/image";
import { Link } from "next-view-transitions";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import HeroCanvas from "@/components/HeroCanvas";
import WorkRow from "@/components/WorkRow";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { num: "3.83", label: "Cumulative GPA" },
  { num: "35%", label: "Latency Reduced @ Aspire" },
  { num: "19", label: "Courses in Production" },
  { num: "8 yrs", label: "Leadership (Scouts du Liban)" },
];

const projects = [
  {
    index: "01",
    title: "AskAlan",
    desc: "Production RAG assistant for 19 UofT engineering courses. Zero-downtime search migration onto Postgres, ~40% faster retrieval.",
    meta: "Anthropic Claude · FastAPI · PostgreSQL",
    href: "/projects/askalan",
    gradient: "from-emerald-900 via-emerald-800 to-slate-900",
  },
  {
    index: "02",
    title: "WealthEasy",
    desc: "AI financial intelligence platform — life-event detection from transactions with compliant human-in-the-loop advisory briefs.",
    meta: "Claude API · Next.js · FastAPI",
    href: "/projects/wealtheasy",
    gradient: "from-violet-900 via-violet-800 to-slate-900",
  },
  {
    index: "03",
    title: "WorldEd",
    desc: "Adaptive AI learning platform that personalises content to each student's level and pace in real time.",
    meta: "Gemini AI · React · Node.js",
    href: "/projects/worlded",
    gradient: "from-blue-900 via-blue-800 to-slate-900",
  },
  {
    index: "04",
    title: "N3XU$ Identity",
    desc: "Identity-based academic intelligence — grades and syllabi become actionable engineering growth metrics.",
    meta: "TypeScript · PostgreSQL · Docker",
    href: "/projects/nexus",
    gradient: "from-rose-900 via-rose-800 to-slate-900",
  },
];

const marqueeRow1 = [
  "Python", "TypeScript", "Next.js", "FastAPI", "Claude API", "PostgreSQL",
];
const marqueeRow2 = [
  "Docker", "React", "Node.js", "LangChain", "C / C++", "Vercel",
];

const photos = [
  { src: "/images/about-me/me_playing_guitar.jpeg", caption: "Guitar" },
  { src: "/images/pianoedited.jpg", caption: "Piano" },
  { src: "/images/about-me/me_singing.JPG", caption: "Singing" },
  { src: "/images/about-me/food.jpeg", caption: "Good Food" },
  { src: "/images/about-me/scouts_du_liban.jpg", caption: "Scouts" },
  { src: "/images/about-me/summer_camp_counselor.jpg", caption: "Camp Counselor" },
  { src: "/images/about-me/HMUN_2024_Advisor.jpg", caption: "Harvard MUN" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO — full-bleed constellation + oversized type
      ═══════════════════════════════════════════ */}
      <section id="home" className="relative h-dvh -mt-16 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 hero-glow" />
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

        {/* Hero content */}
        <div className="hero-parallax relative z-10 h-full flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="pointer-events-auto">
              <p className="hero-badge font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-8">
                Computer Engineering @ University of Toronto
              </p>
              <h1 className="font-bold text-white tracking-tighter leading-[0.95] text-[clamp(3.2rem,11vw,9rem)]">
                <span className="mask-line">
                  <span className="hero-line block">Building</span>
                </span>
                <span className="mask-line">
                  <span className="hero-line block text-violet-400">Intelligent</span>
                </span>
                <span className="mask-line">
                  <span className="hero-line block">Systems.</span>
                </span>
              </h1>
              <div className="hero-subtitle mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <p className="font-mono text-zinc-400 text-sm uppercase tracking-[0.18em]">
                  Dean&apos;s List · AI &amp; Software Engineering
                </p>
                <span className="hidden md:block h-px w-24 bg-zinc-700" aria-hidden="true" />
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-white hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
                >
                  Selected Work
                  <ArrowDown className="w-4 h-4 text-violet-400 group-hover:translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="/Antoine_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
                >
                  Resumé
                  <ArrowUpRight className="w-4 h-4 text-violet-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats — thin editorial line pinned to hero bottom */}
        <div className="hero-stats absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-y-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-3">
                <span className="text-white font-bold text-xl tracking-tight whitespace-nowrap">{s.num}</span>
                <span className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.14em] leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SELECTED WORK — editorial index, no cards
      ═══════════════════════════════════════════ */}
      <section id="projects" className="bg-[#0a0a0a] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between">
          <AnimatedSection>
            <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-4">
              01 / Selected Work
            </p>
            <h2 className="text-white text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-tight leading-none">
              <span className="mask-line">
                <span className="mask-line-inner">What I&apos;ve Built</span>
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay="120ms" className="hidden md:block">
            <p className="font-mono text-zinc-500 text-xs uppercase tracking-[0.18em] text-right">
              2024 — {new Date().getFullYear()}
            </p>
          </AnimatedSection>
        </div>

        <div>
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={`${i * 60}ms`}>
              <WorkRow {...project} headingLevel="h3" />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="max-w-7xl mx-auto px-6 mt-12">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
          >
            All Case Studies
            <ArrowUpRight className="w-4 h-4 text-violet-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT — asymmetric editorial
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-28 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-12">
              02 / About
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <AnimatedSection className="lg:col-span-7">
              <p className="text-white text-[clamp(1.6rem,3.2vw,2.6rem)] font-medium tracking-tight leading-snug">
                From Beirut to Toronto — eight years leading
                <span className="text-violet-400"> Scouts du Liban</span> taught me
                to stay calm under pressure. Now I build
                <span className="text-violet-400"> AI systems that ship</span>,
                on the Dean&apos;s List at UofT.
              </p>
              <div className="mt-10 flex flex-col gap-3">
                {["Dean's List Scholar", "8 Years Scout Leadership", "Harvard Model UN Advisor"].map(
                  (item, i) => (
                    <p
                      key={item}
                      className="font-mono text-zinc-500 text-sm uppercase tracking-[0.14em] flex items-center gap-4"
                    >
                      <span className="text-violet-400">0{i + 1}</span>
                      {item}
                    </p>
                  )
                )}
              </div>
              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
              >
                Full Story
                <ArrowUpRight className="w-4 h-4 text-violet-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay="120ms" className="lg:col-span-5">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden -rotate-2 lg:ml-auto lg:mt-8 ring-1 ring-zinc-800">
                <Image
                  src="/images/about-me/professional.jpg"
                  alt="Antoine Tabet"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 font-mono text-zinc-300 text-xs uppercase tracking-[0.18em]">
                  Antoine Tabet — Toronto
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STACK — outlined marquee strips
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-24 border-t border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
          <AnimatedSection>
            <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-4">
              03 / Stack
            </p>
            <h2 className="text-white text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-tight leading-none">
              <span className="mask-line">
                <span className="mask-line-inner">Tools of the Trade</span>
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay="120ms" className="hidden md:block">
            <Link
              href="/stack"
              className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
            >
              Full Stack
              <ArrowUpRight className="w-4 h-4 text-violet-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="space-y-6 select-none" aria-hidden="true">
          <div className="marquee">
            <div className="marquee-track flex items-center gap-10 w-max">
              {[...marqueeRow1, ...marqueeRow1].map((item, i) => (
                <span key={`${item}-${i}`} className="flex items-center gap-10">
                  <span className="text-outline text-outline-static text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold tracking-tighter whitespace-nowrap">
                    {item}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-600 shrink-0" />
                </span>
              ))}
            </div>
          </div>
          <div className="marquee">
            <div className="marquee-track marquee-reverse flex items-center gap-10 w-max">
              {[...marqueeRow2, ...marqueeRow2].map((item, i) => (
                <span key={`${item}-${i}`} className="flex items-center gap-10">
                  <span className="text-outline text-outline-static text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold tracking-tighter whitespace-nowrap">
                    {item}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-600 shrink-0" />
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="sr-only">
          Python, TypeScript, Next.js, FastAPI, Claude API, PostgreSQL, Docker, React,
          Node.js, LangChain, C/C++, Vercel
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          BEYOND THE CODE — photo reel
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-4">
              04 / Beyond the Code
            </p>
            <h2 className="text-white text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-tight leading-none mb-12">
              <span className="mask-line">
                <span className="mask-line-inner">When I&apos;m Not Building</span>
              </span>
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

      <Footer />
    </>
  );
}
