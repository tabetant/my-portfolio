"use client";

import { motion } from "framer-motion";
import { Brain, FileText, Globe, Code2 } from "lucide-react";
import Link from "next/link";
import YouTubePlayer from "@/components/YouTubePlayer";

export default function NexusProject() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 pb-24">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-violet-950/20">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-300 mb-6">
                            <Brain className="h-4 w-4" />
                            <span>AI-Native Identity Protocol</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-200 to-indigo-400 mb-4">
                            N3XU$
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Demystifying University Syllabi with AI & Decentralized Identity
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-20 relative z-20">
                {/* Demo Video */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <YouTubePlayer
                        videoId="S2v6a2zS6o8"
                        title="N3XU$ Neural Audit Demo"
                    />
                </motion.div>

                {/* Case Study Content */}
                <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

                    {/* Sidebar: Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Code2 className="h-5 w-5 text-violet-400" />
                                Tech Stack
                            </h3>
                            <ul className="space-y-3 text-slate-400">
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-violet-500" />
                                    Next.js (App Router)
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                                    TypeScript
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                                    Python (NLP Backend)
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-gray-500" />
                                    Solidity (Smart Contracts)
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Globe className="h-5 w-5 text-indigo-400" />
                                Key Links
                            </h3>
                            <Link href="https://github.com/tabetant" target="_blank" className="block w-full py-2 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-center transition-colors">
                                View on GitHub
                            </Link>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* The Problem */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <FileText className="h-6 w-6 text-rose-400" />
                                The Problem: Opaque Syllabi
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                University syllabi are often dense, unstructured PDF documents that bury critical information like deadlines, grading criteria, and reading lists. Students struggle to extract actionable data, leading to missed opportunities and poor planning. There was no standardized way to convert this &quot;dead&quot; data into a live, interactive roadmap.
                            </p>
                        </motion.section>

                        {/* The Solution */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Brain className="h-6 w-6 text-violet-400" />
                                The Solution: Neural Audit
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg mb-6">
                                N3XU$ introduces an AI-native dashboard that ingests PDF syllabi and converts them into structured JSON roadmaps. This allows for:
                            </p>
                            <ul className="space-y-4 text-slate-400 ml-4">
                                <li className="flex items-start gap-4">
                                    <div className="h-6 w-6 rounded-full bg-violet-500/10 flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-violet-400 text-sm font-bold">1</span>
                                    </div>
                                    <p>Automatic extraction of deadlines and exam dates into a calendar view.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="h-6 w-6 rounded-full bg-violet-500/10 flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-violet-400 text-sm font-bold">2</span>
                                    </div>
                                    <p>Semantic understanding of course topics to suggest relevant resources.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="h-6 w-6 rounded-full bg-violet-500/10 flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-violet-400 text-sm font-bold">3</span>
                                    </div>
                                    <p>Verification of course completion on-chain using Solidity smart contracts.</p>
                                </li>
                            </ul>
                        </motion.section>

                        {/* Impact */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-violet-900/20 to-indigo-900/20 border border-violet-500/20"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 relative z-10">
                                Impact
                            </h2>
                            <p className="text-slate-300 relative z-10 text-lg">
                                The Neural Audit system successfully parses complex multi-column PDFs with 95% accuracy for key dates. It transforms a static file into a dynamic, queryable learning path, bridging the gap between administrative documents and student success tools.
                            </p>
                        </motion.section>

                    </div>
                </div>
            </div>
        </div>
    );
}
