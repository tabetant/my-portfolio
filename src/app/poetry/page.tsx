"use client";

import { useState } from "react";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
      {/* ═══════════════════════════════════════════
          HERO — two-column editorial block
      ═══════════════════════════════════════════ */}
      <section className="py-24 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Book cover */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[280px] aspect-[2/3] rounded-2xl overflow-hidden -rotate-2 shadow-2xl shadow-rose-900/30 bg-zinc-950">
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
            <div>
              <p className="text-rose-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                — Poetry Collection
              </p>
              <h1 className="font-serif text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
                Heartstrings<br />Unplayed
              </h1>
              <p className="font-serif italic text-rose-200/60 text-lg leading-relaxed mb-2">
                &ldquo;For all hopeless romantics whose heartstrings remain unplayed.
              </p>
              <p className="font-serif italic text-rose-200/60 text-lg leading-relaxed">
                A tous les romantiques sans espoir dont les cordes du coeur demeurent sans musicien.&rdquo;
              </p>

              <div className="border-t border-rose-900/40 my-8" />

              {/* Social CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={INSTAGRAM_HREF}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-rose-500/50 text-rose-300 hover:bg-rose-500/10 transition-colors text-sm font-medium"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </Link>
                <Link
                  href={TIKTOK_HREF}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors text-sm font-medium"
                >
                  <TikTokIcon />
                  TikTok
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          POEM SECTION — white bg, editorial
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          {/* Language toggle */}
          <div className="flex justify-center gap-3 mb-12">
            {(["EN", "FR", "ES"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200",
                  lang === l
                    ? "bg-rose-600 text-white"
                    : "border border-rose-200 text-rose-400 hover:border-rose-400"
                )}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Poem — key forces remount, CSS animation fades it in */}
          <div key={lang} className="poem-fade">
            <h2 className="font-serif text-zinc-900 text-4xl font-bold mb-2">
              {poems[lang].title}
            </h2>
            <p className="text-rose-400 text-xs font-semibold uppercase tracking-[0.2em] mb-10">
              {poems[lang].theme}
            </p>
            <p className="font-serif text-zinc-700 text-xl leading-9 whitespace-pre-line">
              {poems[lang].content}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
