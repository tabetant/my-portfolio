"use client";

import { Mail, Github, Linkedin, ArrowUp, Instagram } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="bg-slate-950 py-12 relative border-t border-slate-900">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl mb-4">
                        Initialize Connection
                    </h2>
                    <p className="text-slate-400 max-w-lg mx-auto">
                        Whether you have a question about my work, want to discuss a project, or just say hello, my inbox is always open.
                    </p>

                    <div className="mt-8 flex justify-center gap-6">
                        <Link
                            href="mailto:antoine.tabet@mail.utoronto.ca"
                            className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors flex items-center gap-2"
                        >
                            <Mail className="h-4 w-4" /> Say Hello
                        </Link>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Socials */}
                    <div className="flex gap-6 text-slate-500">
                        <Link href="https://github.com/tabetant/my-portfolio" target="_blank" className="hover:text-emerald-400 transition-colors">
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/antoinetabetuoft/" target="_blank" className="hover:text-violet-400 transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href="https://www.instagram.com/antoun8/" target="_blank" className="hover:text-rose-400 transition-colors">
                            <Instagram className="h-5 w-5" />
                        </Link>
                    </div>

                    <div className="text-slate-600 text-sm">
                        © 2026 Antoine Tabet. Built with Next.js & Tailwind.
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
