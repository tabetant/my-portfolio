import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

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
  },
  {
    title: "WorldEd",
    desc: "Adaptive AI learning platform that personalises educational content to each student's level and learning pace in real time.",
    tags: ["Gemini AI", "React", "Node.js"],
    href: "/projects/worlded",
    gradient: "from-blue-900 via-blue-800 to-slate-900",
  },
  {
    title: "N3XU$ Identity",
    desc: "Blockchain-backed identity protocol enabling secure, self-sovereign digital credentials for decentralised applications.",
    tags: ["TypeScript", "PostgreSQL", "Docker"],
    href: "/projects/nexus",
    gradient: "from-rose-900 via-rose-800 to-slate-900",
  },
  {
    title: "Click-A-Mole",
    desc: "Physical Whac-A-Mole game built with Arduino, servo motors, and computer vision for real-time mole detection and scoring.",
    tags: ["Arduino", "C++", "Computer Vision"],
    href: "/projects/click-a-mole",
    gradient: "from-amber-900 via-amber-800 to-slate-900",
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
  { name: "Python", category: "Languages" },
  { name: "C / C++", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Next.js", category: "Frameworks" },
  { name: "FastAPI", category: "Frameworks" },
  { name: "React", category: "Frameworks" },
  { name: "Node.js", category: "Frameworks" },
  { name: "Claude API", category: "AI / ML" },
  { name: "Gemini AI", category: "AI / ML" },
  { name: "LangChain", category: "AI / ML" },
  { name: "PostgreSQL", category: "AI / ML" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "Arduino", category: "Tools" },
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
          {/* Dark-left → transparent-right gradient so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
          {/* Bottom fade for stats bar legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
                Computer Engineering @ University of Toronto
              </p>
              <h1 className="text-[clamp(3rem,7vw,4.5rem)] font-extrabold text-white leading-[1.05] mb-6">
                Building Intelligent Systems.
              </h1>
              <p className="text-zinc-300 text-xl mb-10 leading-relaxed">
                Dean&apos;s List Scholar&nbsp;·&nbsp;3.83 GPA&nbsp;·&nbsp;AI &amp; Software Engineering
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
                >
                  View My Work
                </a>
                <a
                  href="/Antoine_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/40 hover:border-white hover:bg-white/5 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
                >
                  Download Resumé
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row — pinned to the bottom of the hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex divide-x divide-white/10">
              {stats.map((s) => (
                <div key={s.label} className="flex-1 py-5 text-center px-2">
                  <div className="text-white font-bold text-2xl leading-none">{s.num}</div>
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
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            — Featured Work
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-14">
            What I&apos;ve Built
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-violet-600/50 transition-all duration-300 flex flex-col"
              >
                {/* Gradient placeholder — project screenshots not yet in public/ */}
                <div
                  className={`relative h-52 w-full bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-violet-600/10 transition-opacity duration-300" />
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
                    <span className="text-white/15 font-extrabold text-4xl tracking-tighter select-none">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
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
                  <span className="text-violet-400 text-sm font-medium group-hover:text-violet-300 transition-colors">
                    View Case Study →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects/wealtheasy"
              className="text-violet-400 hover:text-violet-300 font-medium transition-colors text-sm"
            >
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: photo with violet accent ring */}
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

            {/* Right: copy */}
            <div>
              <p className="text-violet-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
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

              {/* Achievement pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "🎓 Dean's List Scholar",
                  "🏕️ 8 Years Scout Leadership",
                  "🌍 Harvard Model UN Advisor",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="bg-violet-50 text-violet-700 text-sm font-medium px-4 py-2 rounded-full border border-violet-100"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <Link
                href="/about"
                className="text-violet-600 font-semibold hover:text-violet-500 transition-colors"
              >
                Read My Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PERSONAL LIFE PHOTO STRIP
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            — Beyond the Code
          </p>
          <h2 className="text-white text-4xl font-bold tracking-tight mb-10">
            When I&apos;m Not Building
          </h2>

          <div className="relative">
            <div className="flex gap-5 overflow-x-auto pb-3 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {photos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative flex-shrink-0 w-64 rounded-xl overflow-hidden"
                  style={{ height: 280 }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-10">
                    <p className="text-zinc-200 text-sm font-medium">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Right fade to hint at scrollability */}
            <div className="pointer-events-none absolute top-0 right-0 bottom-3 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
          </div>
          <p className="text-zinc-600 text-xs mt-3 tracking-wide">scroll to explore →</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TECH STACK
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-zinc-900 text-4xl font-bold tracking-tight mb-14 text-center">
            My Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((item) => (
              <div
                key={item.name}
                className="bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4 hover:border-violet-300 hover:bg-violet-50 transition-colors duration-200"
              >
                <p className="text-zinc-900 font-semibold text-sm">{item.name}</p>
                <p className="text-violet-600 text-xs mt-1 font-medium">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
