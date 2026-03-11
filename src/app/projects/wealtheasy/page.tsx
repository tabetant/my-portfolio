"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Building2,
    Database,
    ShieldCheck,
    Globe,
    Code,
    Server,
    Layers,
    Github,
    ArrowRight
} from "lucide-react";
import YouTubePlayer from "@/components/YouTubePlayer";
import Link from "next/link";

const techStack = {
    Frontend: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
    ],
    Backend: [
        "Node.js",
        "Express.js",
        "REST API (12 routes)",
    ],
    Database: [
        "PostgreSQL",
        "Supabase",
        "Compliance Audit Log",
    ],
    "AI / ML": [
        "Anthropic Claude API",
        "Life Event Detection",
        "Personalized Brief Generation",
    ]
};

const techStackIcons: Record<string, React.ReactNode> = {
    Frontend: <Layers className="h-5 w-5 text-blue-400" />,
    Backend: <Server className="h-5 w-5 text-green-400" />,
    Database: <Database className="h-5 w-5 text-amber-400" />,
    "AI / ML": <Brain className="h-5 w-5 text-purple-400" />,
};

const techStackColors: Record<string, string> = {
    Frontend: "bg-blue-500/10 border-blue-500/20",
    Backend: "bg-green-500/10 border-green-500/20",
    Database: "bg-amber-500/10 border-amber-500/20",
    "AI / ML": "bg-purple-500/10 border-purple-500/20",
};

export default function WealthEasyProject() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 pb-24">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-emerald-950/20">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300 mb-6">
                            <Building2 className="h-4 w-4" />
                            <span>Financial AI System</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-teal-400 mb-4">
                            WealthEasy
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            AI life event detection engine. Monitors transactions, detects life events, and generates personalized financial briefs via Claude API — with a human advisor review checkpoint. Built for Canadian securities compliance.
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
                        videoId="DEMO_VIDEO_URL"
                        title="WealthEasy Platform Demo"
                    />
                </motion.div>

                {/* Case Study Content */}
                <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-8"
                    >
                        {/* Skills Demonstrated */}
                        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Code className="h-5 w-5 text-teal-400" />
                                Engineering Scope
                            </h3>
                            <ul className="space-y-3 text-slate-400">
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                                    End-to-End AI Integration
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-teal-500" />
                                    REST API Architecture
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-cyan-500" />
                                    Security & Compliance
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                                    Rapid Prototyping (3 Days)
                                </li>
                            </ul>
                        </div>

                        {/* Key Links */}
                        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Globe className="h-5 w-5 text-indigo-400" />
                                Key Links
                            </h3>
                            <Link href="https://github.com/mohamadmsalman82/WealthSimple-AIBuilderProject" target="_blank" className="block w-full py-2 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-center transition-colors">
                                View on GitHub
                            </Link>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Building2 className="h-6 w-6 text-emerald-400" />
                                Overview
                            </h2>
                            <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                                <p>
                                    Built an end-to-end AI system that monitors client bank transactions, detects life events (new baby, inheritance, home purchase, marriage, etc.), and automatically generates personalized financial planning briefs using the Anthropic Claude API.
                                </p>
                                <p>
                                    Every brief is routed through a mandatory human advisor review portal before delivery — a two-checkpoint human-in-the-loop architecture designed strictly to meet Canadian securities regulations.
                                </p>
                            </div>
                        </motion.section>

                        {/* Technical Architecture */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Server className="h-6 w-6 text-teal-400" />
                                Tech Highlights & Architecture
                            </h2>
                            <div className="space-y-6">
                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Brain className="h-5 w-5 text-purple-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Life Event Detection Pipeline</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        Developed a transaction signal monitor that continuously flags key financial activities. Used the <strong>Anthropic Claude API</strong> to convert raw signals into personalized client advisory briefs.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <ShieldCheck className="h-5 w-5 text-red-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Regulatory Compliance</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        Implemented a robust dual-checkpoint human-in-the-loop workflow. This guarantees that no automated advice is sent before a certified human advisor reviews and approves the brief, complying with stringent <strong>Canadian securities laws</strong>. Also integrated a comprehensive compliance audit log.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Database className="h-5 w-5 text-amber-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Full-Stack Implementation</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        Delivered a 12-route REST API in <strong>Express.js / Node.js</strong> alongside a <strong>Next.js 14</strong> client notification shell. Managed data with <strong>Supabase (PostgreSQL)</strong>. The entire system was developed and delivered in just 3 days as a team of 2.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Tech Stack */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Database className="h-6 w-6 text-amber-400" />
                                Tech Stack
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {Object.entries(techStack).map(([category, items]) => (
                                    <div
                                        key={category}
                                        className={`p-5 rounded-xl border ${techStackColors[category]} backdrop-blur-sm`}
                                    >
                                        <h4 className="font-bold text-slate-100 mb-3 flex items-center gap-2">
                                            {techStackIcons[category]}
                                            {category}
                                        </h4>
                                        <ul className="space-y-2">
                                            {items.map((item) => (
                                                <li
                                                    key={item}
                                                    className="text-sm text-slate-400 flex items-start gap-2"
                                                >
                                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-600 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Custom Footer */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center py-12 border-t border-slate-800"
                        >
                            <h3 className="text-xl font-bold text-white mb-3">
                                Want to see more?
                            </h3>
                            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                                Watch the demo above, explore the source code on GitHub, or check out my other projects.
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Link
                                    href="https://github.com/mohamadmsalman82/WealthSimple-AIBuilderProject"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 transition-colors"
                                >
                                    <Github className="h-5 w-5" />
                                    View Source Code
                                </Link>
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                                >
                                    More Projects <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.section>

                    </div>
                </div>
            </div>
        </div>
    );
}
