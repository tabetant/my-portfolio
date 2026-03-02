"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BookOpen, Feather, Instagram } from "lucide-react";
import Link from "next/link";

type Language = "EN" | "FR" | "ES";

const poems = {
    EN: {
        title: "Romeo & Juliet",
        content: `I was Romeo, you were Juliet
A modern Shakespearean duet
I once hoped we wouldn’t die at the end
But I think I would have been better off dead
Rather than knowing all I know now,
The dreams that wake me with a frown
Sweating from anxiety and dread…
I wish we’d both died at the end.`,
        theme: "Modern Tragedy",
    },
    FR: {
        title: "Depuis, Avec, Après",
        content: `Ma vie après toi est un blasphème.
J'ai trouvé l’Eden 
Dans tes bras,
Pour toujours mon coeur t’appartiendra.
A jamais cherchera-t-il une autre
Qui ne lui poignardera pas la côte,
Sera tous ce que tu n’a pas pu être,
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

export default function Poetry() {
    const [lang, setLang] = useState<Language>("EN");

    return (
        <section className="relative min-h-screen bg-slate-950 py-24 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10" />

            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[100px]" />

            <div className="container relative z-20 mx-auto px-6 flex flex-col items-center">

                <div className="mb-12 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 text-rose-400 opacity-80">
                        <Feather className="h-5 w-5" />
                        <span className="font-serif italic tracking-widest">Poetry Collection</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-6xl text-slate-100 mb-6">
                        Heartstrings Unplayed
                    </h2>
                    <p className="font-serif italic text-xl text-rose-200/60 max-w-2xl mx-auto">
                        &quot;For all hopeless romantics whose heartstrings remain unplayed. <br />
                        A tous les romantiques sans espoir dont les cordes du coeur demeurent sans musicien.&quot;
                    </p>
                </div>

                {/* Language Toggle */}
                <div className="flex gap-4 mb-16">
                    {(["EN", "FR", "ES"] as Language[]).map((l) => (
                        <button
                            key={l}
                            onClick={() => setLang(l)}
                            className={cn(
                                "px-4 py-2 rounded-full border border-transparent font-serif transition-all duration-300",
                                lang === l
                                    ? "bg-rose-900/30 border-rose-500/50 text-rose-200"
                                    : "text-slate-500 hover:text-rose-300"
                            )}
                        >
                            {l}
                        </button>
                    ))}
                </div>

                {/* Poem Display */}
                <div className="relative w-full max-w-2xl min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={lang}
                            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-center"
                        >
                            <h3 className="font-serif text-3xl md:text-4xl text-emerald-100/80 mb-2">
                                {poems[lang].title}
                            </h3>
                            <p className="font-sans text-xs tracking-widest text-slate-500 mb-12 uppercase">
                                {poems[lang].theme}
                            </p>

                            <div className="font-serif text-lg md:text-2xl leading-relaxed text-slate-300 whitespace-pre-line">
                                {poems[lang].content}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Social Links */}
                <div className="mt-16 flex items-center gap-6">
                    <Link
                        href="https://www.instagram.com/heartstringsunplayed?igsh=MTU3ZXNtMGFiMGRpbQ%3D%3D&utm_source=qr"
                        target="_blank"
                        className="flex items-center gap-2 text-rose-400/60 hover:text-rose-300 transition-colors font-serif text-sm"
                    >
                        <Instagram className="h-5 w-5" />
                        Instagram
                    </Link>
                    <Link
                        href="https://www.tiktok.com/@heartstringsunplayed?_r=1&_t=ZS-94MZf8zKp5W"
                        target="_blank"
                        className="flex items-center gap-2 text-rose-400/60 hover:text-rose-300 transition-colors font-serif text-sm"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.78a4.83 4.83 0 01-1-.09z" />
                        </svg>
                        TikTok
                    </Link>
                </div>

                {/* Footer Icon */}
                <div className="mt-20 opacity-20">
                    <BookOpen className="h-8 w-8 text-rose-400" />
                </div>

            </div>
        </section>
    );
}
