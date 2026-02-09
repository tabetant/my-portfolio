"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight, Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "Building Multimodal AI Systems...";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 pt-16">
            {/* Background Neural Grid (Abstract) */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[100px]" />
                <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-violet-500/20 blur-[80px]" />
            </div>

            <div className="z-10 w-full max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-6 flex justify-center">
                        <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2 text-sm text-emerald-400 backdrop-blur-sm">
                            <Terminal className="h-4 w-4" />
                            <span className="font-mono">AntoineTabet@UofT:~</span>
                        </div>
                    </div>

                    <h1 className="font-sans text-5xl font-bold tracking-tight text-slate-200 sm:text-7xl">
                        Antoine Tabet
                    </h1>

                    <div className="mt-4 h-8 font-mono text-lg text-emerald-500 sm:text-2xl">
                        <span>&gt; {text}</span>
                        <span className="animate-pulse">_</span>
                    </div>

                    <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-400 sm:text-xl">
                        CompEng Student @ UofT. Dean&apos;s List Scholar (3.83 GPA). <br />
                        Structuring the unstructured with <span className="text-emerald-400">AI</span> & <span className="text-violet-400">Engineering</span>.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="#featured-projects"
                            className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-500"
                        >
                            View Work <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/Antoine_Resume.pdf"
                            target="_blank"
                            className="group flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
                        >
                            Resume
                        </Link>
                    </div>

                    {/* Socials */}
                    <div className="mt-12 flex justify-center gap-6 text-slate-500">
                        <Link href="https://github.com/tabetant/my-portfolio" target="_blank" className="hover:text-emerald-400 transition-colors">
                            <Github className="h-6 w-6" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/antoinetabetuoft/" target="_blank" className="hover:text-emerald-400 transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link href="mailto:antoine.tabet@mail.utoronto.ca" className="hover:text-emerald-400 transition-colors">
                            <Mail className="h-6 w-6" />
                        </Link>
                        <Link href="https://www.instagram.com/antoun8/" target="_blank" className="hover:text-emerald-400 transition-colors">
                            <Instagram className="h-6 w-6" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="h-12 w-6 rounded-full border-2 border-slate-700 p-1">
                    <div className="h-2 w-full rounded-full bg-slate-500" />
                </div>
            </motion.div>
        </section>
    );
}
