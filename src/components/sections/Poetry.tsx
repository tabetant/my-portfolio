"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BookOpen, Feather } from "lucide-react";

type Language = "EN" | "FR" | "ES";

const poems = {
    EN: {
        title: "Static Noise",
        content: `We are but signals
Lost in the interference of modern love.
I texted you a galaxy,
And you replied with a thumbs up.

In the silence between notifications,
I wonder if our frequencies
Will ever align again.`,
        theme: "Infatuation & Disconnect",
    },
    FR: {
        title: "L'Écho de la Mémoire",
        content: `Dans les ruelles de mon esprit,
Ton ombre danse encore sous les réverbères.
Nous étions infinis,
Avant de devenir des étrangers familiarisés.

Le temps n'efface pas les traces,
Il ne fait que les recouvrir de poussière,
Attendant le vent du souvenir.`,
        theme: "Memory & Loss",
    },
    ES: {
        title: "Sobreviviendo al Silencio",
        content: `El amor no siempre es un incendio;
A veces es la brasa que se niega a morir.
Caminamos sobre las cenizas
De lo que prometimos ser.

Pero aquí estamos,
Respirando el humo,
Decidiendo si avivar el fuego
O dejarlo extinguir.`,
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
                        "For all hopeless romantics whose heartstrings remain unplayed."
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
