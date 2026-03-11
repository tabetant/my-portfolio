"use client";

import { motion } from "framer-motion";
import { Brain, FileText, Globe, Code2, Target, Activity, Shield, Users, Heart, DollarSign, AlertTriangle } from "lucide-react";
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
                            N3XU$ Identity Protocol
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            An identity-based academic intelligence platform that shifts focus from grades to becoming an engineer. Inspired by Atomic Habits, N3XU$ treats academic data as signal — not noise.
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
                                    Next.js 15
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-cyan-500" />
                                    Tailwind CSS 4
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-pink-500" />
                                    Framer Motion
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-slate-400" />
                                    Shadcn/UI
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                                    FastAPI (Python)
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                                    Pydantic &amp; Uvicorn
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                                    Gemini 2.0 Flash
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-indigo-500" />
                                    PostgreSQL &amp; Drizzle ORM
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-green-500" />
                                    Supabase (Auth, Storage, SSR)
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Globe className="h-5 w-5 text-indigo-400" />
                                Key Links
                            </h3>
                            <Link href="https://github.com/X-Abby-X/UofTHacks26" target="_blank" className="block w-full py-2 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-center transition-colors">
                                View on GitHub
                            </Link>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* The Vision */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <FileText className="h-6 w-6 text-rose-400" />
                                The Vision
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                Built specifically around the University of Toronto ECE curriculum (ECE231), N3XU$ is a glassmorphic academic intelligence platform. Its UI features components including a ProphetSidebar (GPA Prophet), Identity Archive (File Vault), and Global Hub dashboard — all designed to transform how engineering students interact with their academic data.
                            </p>
                        </motion.section>

                        {/* Key Features */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Brain className="h-6 w-6 text-violet-400" />
                                Key Features
                            </h2>
                            <div className="space-y-6">
                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-violet-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Target className="h-5 w-5 text-violet-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Neural Audits</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        Decomposes unstructured PDF syllabi into a structured Neural Roadmap with marking schemes and weighted milestones using Gemini 2.0 Flash.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-violet-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Activity className="h-5 w-5 text-emerald-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Resonance Monitoring</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        Calculates a &quot;Required Grade&quot; based on a Target GPA to show if current performance is &quot;in phase&quot; with the user&apos;s goals.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-violet-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Shield className="h-5 w-5 text-amber-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Telemetry Auditing</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        AI-driven feedback on technical submissions (e.g., ECE231 Circuit Labs) that detects anomalies like KCL sign errors or incorrect diode models.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-violet-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Users className="h-5 w-5 text-cyan-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Identity Mapping &amp; Archetypes</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        Assigns evolving personas (e.g., Visionary Architect, Detailed Engineer) based on technical signals.
                                    </p>
                                </div>
                            </div>
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
                                N3XU$ redefines the academic experience by treating every syllabus, grade, and submission as identity data — shifting the focus from chasing numbers to engineering who you become. It&apos;s not a GPA tracker; it&apos;s an identity protocol.
                            </p>
                        </motion.section>

                        {/* For the User */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Heart className="h-6 w-6 text-pink-400" />
                                For the User
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                Right now, you have six tabs open — Quercus, Notion, a grade calculator, your syllabus PDF, a spreadsheet, and your notes. N3XU$ collapses all of that into one identity-aware system. Instead of asking &quot;what do I need on the final?&quot;, you&apos;re asking &quot;am I becoming the engineer I set out to be?&quot; The Resonance metric gives you a real-time answer — not just a grade, but a signal of alignment between your current trajectory and your long-term goal.
                            </p>
                        </motion.section>

                        {/* Business Viability */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <DollarSign className="h-6 w-6 text-emerald-400" />
                                Business Viability
                            </h2>
                            <div className="space-y-4">
                                <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                    <h3 className="text-lg font-semibold text-slate-200 mb-2">B2C SaaS</h3>
                                    <p className="text-slate-400">
                                        Freemium tier for all students; $8–12/month unlocks full Resonance tracking and Telemetry Auditing. UofT Engineering alone represents 20,000+ potential users.
                                    </p>
                                </div>
                                <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                    <h3 className="text-lg font-semibold text-slate-200 mb-2">B2B Institutional</h3>
                                    <p className="text-slate-400">
                                        License directly to engineering departments or student unions. The ECE231-specific tuning is a feature, not a limitation — it demonstrates curriculum-aware AI that schools can adopt as their own.
                                    </p>
                                </div>
                                <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                    <h3 className="text-lg font-semibold text-slate-200 mb-2">Non-Profit Path</h3>
                                    <p className="text-slate-400">
                                        If the mission is equity in engineering education (first-gen students, under-resourced institutions), a non-profit structure funded by grants from NSERC, Google.org, or similar bodies is genuinely viable and more mission-aligned than a VC-backed model.
                                    </p>
                                </div>
                                <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                    <h3 className="text-lg font-semibold text-slate-200 mb-2">Unit Economics</h3>
                                    <p className="text-slate-400">
                                        Every Neural Audit and Telemetry analysis costs real API spend (Gemini 2.0 Flash per call). At scale, the freemium tier needs hard usage caps or the margin disappears. This is the first real constraint to solve before monetizing.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Honest Tensions */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <AlertTriangle className="h-6 w-6 text-amber-400" />
                                Honest Tensions
                            </h2>
                            <div className="space-y-4">
                                <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-amber-500/30 transition-colors">
                                    <h3 className="text-lg font-semibold text-slate-200 mb-2">Retention cliff</h3>
                                    <p className="text-slate-400">
                                        Engagement spikes around midterms and finals, then drops. The product needs a compelling reason to stay open in week 3 of a quiet semester.
                                    </p>
                                </div>
                                <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-amber-500/30 transition-colors">
                                    <h3 className="text-lg font-semibold text-slate-200 mb-2">Identity vs. gimmick</h3>
                                    <p className="text-slate-400">
                                        The Archetype system (Visionary Architect, Detailed Engineer) is only valuable if it actually shifts user behavior. Without longitudinal data showing it changes study habits, it risks being aesthetic over substance.
                                    </p>
                                </div>
                                <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-amber-500/30 transition-colors">
                                    <h3 className="text-lg font-semibold text-slate-200 mb-2">Vertical vs. horizontal</h3>
                                    <p className="text-slate-400">
                                        N3XU$ is precisely tuned for UofT ECE. Scaling to humanities, law, or medicine requires a generalized syllabus parser and a rethinking of what &quot;Telemetry&quot; even means outside of circuit labs. The right call may be to stay vertical and own one curriculum deeply rather than expand prematurely.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                    </div>
                </div>
            </div>
        </div>
    );
}
