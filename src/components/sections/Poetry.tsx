"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BookOpen, Feather } from "lucide-react";

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
        <section id="poetry" className="relative min-h-screen bg-slate-950 py-24 overflow-hidden">
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

                {/* Footer Icon */}
                <div className="mt-20 opacity-20">
                    <BookOpen className="h-8 w-8 text-rose-400" />
                </div>

            </div>
        </section>
    );
}
