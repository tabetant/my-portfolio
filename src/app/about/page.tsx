import Image from "next/image";
import { GraduationCap, Briefcase, Award, MapPin } from "lucide-react";

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
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════
          HERO BAND
      ═══════════════════════════════════════════ */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div>
              <p className="text-violet-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                — Background
              </p>
              <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
                My Story
              </h1>
              <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
                A timeline of professional experience, academic achievements, and leadership roles
                that have shaped who I am as an engineer.
              </p>
            </div>
            <div className="relative flex-shrink-0 w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden ring-2 ring-violet-600/40 rotate-2 shadow-xl shadow-violet-900/20">
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

      {/* ═══════════════════════════════════════════
          TIMELINE — white bg
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-12">

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-200">
              <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-violet-600" />
              </div>
              <h2 className="text-zinc-900 text-2xl font-bold">Work Experience</h2>
            </div>

            <div className="border-l-4 border-violet-600 pl-8 flex flex-col gap-2">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-zinc-900 text-lg font-bold">Software Engineering Intern</h3>
                <span className="text-zinc-400 text-sm shrink-0">May 2024 – Aug 2024</span>
              </div>
              <div className="flex items-center gap-2 text-violet-600 font-medium text-sm mb-3">
                <span>Aspire</span>
                <span className="text-zinc-300">•</span>
                <span className="flex items-center gap-1 text-zinc-500">
                  <MapPin className="w-3 h-3" /> Beirut, Lebanon
                </span>
              </div>
              <ul className="text-zinc-600 space-y-2 text-[15px] leading-relaxed list-disc list-inside">
                <li>Optimized backend queries and database interactions, slicing response latency by <strong className="text-zinc-900">35%</strong>.</li>
                <li>Contributed to designing and implementing scalable backend architectures for enterprise applications.</li>
                <li>Collaborated in an agile team environment to push features from development to production.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-200">
              <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-violet-600" />
              </div>
              <h2 className="text-zinc-900 text-2xl font-bold">Education</h2>
            </div>

            <div className="border-l-4 border-violet-600 pl-8 flex flex-col gap-2">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-zinc-900 text-lg font-bold">
                  Bachelor of Applied Science, Computer Engineering
                </h3>
                <span className="text-zinc-400 text-sm shrink-0">Sep 2023 – Expected 2027</span>
              </div>
              <div className="flex items-center gap-2 text-violet-600 font-medium text-sm mb-4">
                <span>University of Toronto</span>
                <span className="text-zinc-300">•</span>
                <span className="flex items-center gap-1 text-zinc-500">
                  <MapPin className="w-3 h-3" /> Toronto, ON
                </span>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5 mb-4 inline-flex gap-10">
                <div>
                  <div className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-1">
                    Cumulative GPA
                  </div>
                  <div className="text-zinc-900 font-bold text-xl">
                    3.83 <span className="text-zinc-400 text-sm font-normal">/ 4.0</span>
                  </div>
                </div>
                <div>
                  <div className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-1">
                    Honors
                  </div>
                  <div className="text-violet-600 font-bold flex items-center gap-1.5 pt-0.5">
                    <Award className="w-4 h-4" /> Dean&apos;s List Scholar
                  </div>
                </div>
              </div>

              <p className="text-zinc-600 text-[15px] leading-relaxed">
                Focusing on AI, Software Systems, and Distributed Computing. Coursework includes
                Data Structures &amp; Algorithms, Digital Systems, Operating Systems, and
                Advanced Software Engineering.
              </p>
            </div>
          </div>

          {/* Leadership */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-200">
              <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center">
                <Award className="w-5 h-5 text-violet-600" />
              </div>
              <h2 className="text-zinc-900 text-2xl font-bold">Leadership &amp; Activities</h2>
            </div>

            <div className="flex flex-col gap-10">
              {/* Harvard MUN */}
              <div className="border-l-4 border-violet-600 pl-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-zinc-900 text-lg font-bold">Advisor &amp; Delegate</h3>
                      <span className="text-zinc-400 text-sm shrink-0">Jan 2024</span>
                    </div>
                    <div className="text-violet-600 font-medium text-sm mb-3">
                      Harvard Model United Nations
                    </div>
                    <p className="text-zinc-600 text-[15px] leading-relaxed">
                      Honed diplomacy, strategy, and negotiation skills on an international stage,
                      representing complex geopolitical stances and drafting joint resolutions.
                    </p>
                  </div>
                  <div className="relative w-full sm:w-48 h-36 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-zinc-200">
                    <Image
                      src="/images/about-me/HMUN_2024_Advisor.jpg"
                      alt="Harvard Model United Nations 2024"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 192px"
                    />
                  </div>
                </div>
              </div>

              {/* Scouts du Liban */}
              <div className="border-l-4 border-violet-600 pl-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-zinc-900 text-lg font-bold">Camp Counselor &amp; Leader</h3>
                      <span className="text-zinc-400 text-sm shrink-0">8 Years</span>
                    </div>
                    <div className="text-violet-600 font-medium text-sm mb-3">
                      Les Scouts du Liban
                    </div>
                    <p className="text-zinc-600 text-[15px] leading-relaxed">
                      Dedicated 8 years to leading teams of young scouts, organizing camps, managing
                      complex logistics, and developing communication and leadership skills in
                      high-pressure outdoor environments.
                    </p>
                  </div>
                  <div className="relative w-full sm:w-48 h-36 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-zinc-200">
                    <Image
                      src="/images/about-me/scouts_du_liban.jpg"
                      alt="Les Scouts du Liban"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 192px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PERSONAL PHOTO STRIP
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="max-w-5xl mx-auto px-6">
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
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-10">
                    <p className="text-zinc-200 text-sm font-medium">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute top-0 right-0 bottom-3 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
          </div>
          <p className="text-zinc-600 text-xs mt-3 tracking-wide">scroll to explore →</p>
        </div>
      </section>
    </div>
  );
}
