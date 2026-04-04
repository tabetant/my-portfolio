import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Shield, Globe, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { num: "3.83", label: "Cumulative GPA" },
  { num: "35%", label: "Latency Reduced @ Aspire" },
  { num: "5+", label: "Projects Shipped" },
  { num: "8 yrs", label: "Leadership (Scouts du Liban)" },
];

const projects = [
  {
    title: "WealthEasy",
    desc: "AI-powered personal finance assistant that parses bank statements and generates natural language insights using the Claude API.",
    tags: ["Claude API", "Next.js", "FastAPI"],
    href: "/projects/wealtheasy",
    gradient: "from-violet-900 via-violet-800 to-slate-900",
    accentColor: "group-hover:shadow-violet-900/30",
  },
  {
    title: "WorldEd",
    desc: "Adaptive AI learning platform that personalises educational content to each student's level and learning pace in real time.",
    tags: ["Gemini AI", "React", "Node.js"],
    href: "/projects/worlded",
    gradient: "from-blue-900 via-blue-800 to-slate-900",
    accentColor: "group-hover:shadow-blue-900/30",
  },
  {
    title: "N3XU$ Identity",
    desc: "Blockchain-backed identity protocol enabling secure, self-sovereign digital credentials for decentralised applications.",
    tags: ["TypeScript", "PostgreSQL", "Docker"],
    href: "/projects/nexus",
    gradient: "from-rose-900 via-rose-800 to-slate-900",
    accentColor: "group-hover:shadow-rose-900/30",
  },
  {
    title: "Click-A-Mole",
    desc: "Physical Whac-A-Mole game built with Arduino, servo motors, and computer vision for real-time mole detection and scoring.",
    tags: ["Arduino", "C++", "Computer Vision"],
    href: "/projects/click-a-mole",
    gradient: "from-amber-900 via-amber-800 to-slate-900",
    accentColor: "group-hover:shadow-amber-900/30",
  },
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

const techStack = [
  { name: "Python",      category: "Languages"  },
  { name: "C / C++",     category: "Languages"  },
  { name: "TypeScript",  category: "Languages"  },
  { name: "JavaScript",  category: "Languages"  },
  { name: "Next.js",     category: "Frameworks" },
  { name: "FastAPI",     category: "Frameworks" },
  { name: "React",       category: "Frameworks" },
  { name: "Node.js",     category: "Frameworks" },
  { name: "Claude API",  category: "AI / ML"    },
  { name: "Gemini AI",   category: "AI / ML"    },
  { name: "LangChain",   category: "AI / ML"    },
  { name: "PostgreSQL",  category: "AI / ML"    },
  { name: "Git",         category: "Tools"      },
  { name: "Docker",      category: "Tools"      },
  { name: "Vercel",      category: "Tools"      },
  { name: "Arduino",     category: "Tools"      },
];

const categoryStyle: Record<string, string> = {
  "Languages":  "text-blue-600",
  "Frameworks": "text-violet-600",
  "AI / ML":    "text-emerald-600",
  "Tools":      "text-amber-600",
};

const achievements = [
  { Icon: GraduationCap, label: "Dean's List Scholar"      },
  { Icon: Shield,        label: "8 Years Scout Leadership" },
  { Icon: Globe,         label: "Harvard Model UN Advisor" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section id="home" className="relative h-screen -mt-16">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-me/professional.jpg"
            alt="Antoine Tabet"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          {/* Dark-left → transparent-right gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
          {/* Bottom fade for stats bar legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <p className="hero-badge text-violet-400 text-xs font-semibold uppercase tracking-[0.22em] mb-5">
                Computer Engineering @ University of Toronto
              </p>
              <h1 className="hero-title text-[clamp(3rem,7vw,4.75rem)] font-bold text-white leading-[1.05] mb-6 tracking-tight">
                Building Intelligent Systems.
              </h1>
              <p className="hero-subtitle text-zinc-300 text-xl mb-10 leading-relaxed">
                Dean&apos;s List Scholar&nbsp;·&nbsp;3.83 GPA&nbsp;·&nbsp;AI &amp; Software Engineering
              </p>
              <div className="hero-ctas flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-violet-600/30 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  View My Work
                </a>
                <a
                  href="/Antoine_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/40 hover:border-white/80 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Download Resumé
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row — pinned to the bottom of the hero */}
        <div className="hero-stats absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex divide-x divide-white/10">
              {stats.map((s) => (
                <div key={s.label} className="flex-1 py-5 text-center px-2">
                  <div className="text-white font-bold text-2xl leading-none tracking-tight">{s.num}</div>
                  <div className="text-zinc-400 text-xs mt-2 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED PROJECTS
      ═══════════════════════════════════════════ */}
      <section id="projects" className="bg-[#0a0a0a] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.22em] mb-3">
              — Featured Work
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-14">
              What I&apos;ve Built
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={`${i * 80}ms`}>
                <Link
                  href={project.href}
                  className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-violet-500/50 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-2xl ${project.accentColor} cursor-pointer`}
                >
                  {/* Gradient header */}
                  <div
                    className={`relative h-52 w-full bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}
                  >
                    {/* Hover shimmer */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)" }}
                    />
                    {/* Decorative grid */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/10 font-bold text-5xl tracking-tighter select-none">
                        {project.title}
                      </span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-white font-bold text-xl mb-2 tracking-tight">{project.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-violet-400 text-sm font-medium group-hover:text-violet-300 transition-colors">
                      View Case Study
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 font-medium transition-colors text-sm"
            >
              View All Case Studies
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════ */}
      <section className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: photo with violet accent ring */}
            <AnimatedSection>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden ring-4 ring-violet-600 -rotate-2 shadow-2xl shadow-violet-600/20">
                  <Image
                    src="/images/about-me/professional.jpg"
                    alt="Antoine Tabet"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 90vw, 380px"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Right: copy */}
            <AnimatedSection delay="120ms">
              <p className="text-violet-600 text-xs font-semibold uppercase tracking-[0.22em] mb-4">
                — About Me
              </p>
              <h2 className="text-zinc-900 text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
                From Beirut to Toronto,<br />Engineering the Future.
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-4">
                Born in Lebanon and shaped by 8 years of leadership with Les Scouts du Liban, I bring
                discipline, adaptability, and genuine care to everything I build. Those years taught me
                how to lead under pressure — skills that transfer directly to engineering teams.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                Now at the University of Toronto&apos;s Computer Engineering program on the Dean&apos;s
                List (3.83 GPA), I focus on AI systems that solve real problems — from multimodal data
                pipelines to intelligent document processors.
              </p>

              {/* Achievement pills — SVG icons, no emoji */}
              <div className="flex flex-wrap gap-3 mb-8">
                {achievements.map(({ Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-sm font-medium px-4 py-2 rounded-full border border-violet-100"
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    {label}
                  </span>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-violet-600 font-semibold hover:text-violet-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
              >
                Read My Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PERSONAL LIFE PHOTO STRIP
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.22em] mb-3">
              — Beyond the Code
            </p>
            <h2 className="text-white text-4xl font-bold tracking-tight mb-10">
              When I&apos;m Not Building
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="flex gap-5 overflow-x-auto pb-3 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {photos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative flex-shrink-0 w-64 rounded-xl overflow-hidden group"
                  style={{ height: 280 }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="256px"
                  />
                  {/* Caption overlay slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-zinc-200 text-sm font-medium">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Fade edges to hint at scrollability */}
            <div className="pointer-events-none absolute top-0 left-0 bottom-3 w-8 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 bottom-3 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
          </div>
          <p className="text-zinc-600 text-xs mt-4 tracking-widest uppercase flex items-center gap-1.5">
            Scroll to explore
            <ArrowRight className="w-3 h-3" />
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TECH STACK
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="text-violet-600 text-xs font-semibold uppercase tracking-[0.22em] mb-3">
              — Technologies
            </p>
            <h2 className="text-zinc-900 text-4xl font-bold tracking-tight">
              My Stack
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((item, i) => (
              <AnimatedSection key={item.name} delay={`${(i % 4) * 50}ms`}>
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4 hover:border-violet-300 hover:bg-violet-50 hover:-translate-y-0.5 transition-all duration-200">
                  <p className="text-zinc-900 font-semibold text-sm">{item.name}</p>
                  <p className={`text-xs mt-1 font-medium ${categoryStyle[item.category] ?? "text-zinc-500"}`}>
                    {item.category}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
