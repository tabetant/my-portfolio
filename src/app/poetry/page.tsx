"use client";

import { useState } from "react";
import { Instagram } from "lucide-react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";

type Language = "EN" | "FR" | "ES";

const poems = {
  EN: {
    title: "Romeo & Juliet",
    content: `I was Romeo, you were Juliet
A modern Shakespearean duet
I once hoped we wouldn't die at the end
But I think I would have been better off dead
Rather than knowing all I know now,
The dreams that wake me with a frown
Sweating from anxiety and dread…
I wish we'd both died at the end.`,
    theme: "Modern Tragedy",
  },
  FR: {
    title: "Depuis, Avec, Après",
    content: `Ma vie après toi est un blasphème.
J'ai trouvé l'Eden
Dans tes bras,
Pour toujours mon coeur t'appartiendra.
A jamais cherchera-t-il une autre
Qui ne lui poignardera pas la côte,
Sera tous ce que tu n'a pas pu être,
Mettra fin à mon mal-être...`,
    theme: "Memory & Loss",
  },
  ES: {
    title: "Muerte de la Pluma",
    content: `No escribo desde que apagué mis emociones.
Ahora ya no siento, ni siquiera en ocasiones.
Quizás sea mejor así, porque cuando lo dejamos,
De sentimientos de soledad, padecí océanos.
No escribo desde hace un mes, más o menos
Porque ya no soy capaz de recordar los besos.`,
    theme: "Survival & Resilience",
  },
};

const INSTAGRAM_HREF =
  "https://www.instagram.com/heartstringsunplayed?igsh=MTU3ZXNtMGFiMGRpbQ%3D%3D&utm_source=qr";
const TIKTOK_HREF =
  "https://www.tiktok.com/@heartstringsunplayed?_r=1&_t=ZS-94MZf8zKp5W";

const TikTokIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.78a4.83 4.83 0 01-1-.09z" />
  </svg>
);

export default function PoetryPage() {
  const [lang, setLang] = useState<Language>("EN");

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ── HERO ── */}
      <section className="bg-zinc-950 pt-16 pb-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Book cover */}
            <div className="flex justify-center lg:justify-end lg:order-2">
              <div className="relative w-full max-w-[280px] aspect-[2/3] rounded-2xl overflow-hidden -rotate-2 shadow-2xl shadow-rose-900/30 bg-zinc-950 ring-1 ring-zinc-800">
                <Image
                  src="/images/poetry-cover.jpeg"
                  alt="Heartstrings Unplayed — Poetry Collection by Antoine Tabet"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 80vw, 280px"
                  priority
                />
              </div>
            </div>

            {/* Right: Book info */}
            <div className="lg:order-1">
              <p className="font-mono text-rose-400 text-xs uppercase tracking-[0.3em] mb-6">
                Poetry Collection
              </p>
              <h1 className="font-serif text-white font-bold leading-[1.02] text-[clamp(3rem,7vw,5.5rem)] mb-8">
                Heartstrings
                <br />
                Unplayed
              </h1>
              <p className="font-serif italic text-rose-200/60 text-lg leading-relaxed mb-2">
                &ldquo;For all hopeless romantics whose heartstrings remain unplayed.
              </p>
              <p className="font-serif italic text-rose-200/60 text-lg leading-relaxed">
                A tous les romantiques sans espoir dont les cordes du coeur demeurent sans musicien.&rdquo;
              </p>

              <div className="border-t border-rose-900/40 my-8" />

              {/* Social CTAs */}
              <div className="flex flex-wrap gap-6">
                <Link
                  href={INSTAGRAM_HREF}
                  target="_blank"
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-rose-300 hover:text-rose-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-sm"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </Link>
                <Link
                  href={TIKTOK_HREF}
                  target="_blank"
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-zinc-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-sm"
                >
                  <TikTokIcon />
                  TikTok
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POEM ── */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          {/* Language toggle */}
          <div className="flex justify-center gap-3 mb-14">
            {(["EN", "FR", "ES"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-5 py-2 rounded-full font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500",
                  lang === l
                    ? "bg-rose-600 text-white"
                    : "border border-zinc-800 text-rose-300/70 hover:border-rose-500/50 hover:text-rose-300"
                )}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Poem — key forces remount, CSS animation fades it in */}
          <div key={lang} className="poem-fade">
            <h2 className="font-serif text-white text-4xl font-bold mb-3">
              {poems[lang].title}
            </h2>
            <p className="font-mono text-rose-400 text-xs uppercase tracking-[0.3em] mb-12">
              {poems[lang].theme}
            </p>
            <p className="font-serif text-zinc-300 text-xl leading-9 whitespace-pre-line">
              {poems[lang].content}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
