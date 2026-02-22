"use client";

import { motion } from "framer-motion";
import {
    Globe,
    GraduationCap,
    Database,
    Brain,
    Sparkles,
    Search,
    ShieldCheck,
    BarChart3,
    Code,
    Server,
    Layers,
    Cpu,
    Cloud,
    ArrowRight,
    Github,
    ExternalLink,
} from "lucide-react";
import YouTubePlayer from "@/components/YouTubePlayer";
import Link from "next/link";

const techStack = {
    Frontend: [
        "Next.js 15 App Router",
        "React 18 (Server Components)",
        "TypeScript (Strict Mode)",
        "Tailwind CSS + Shadcn UI",
        "Framer Motion",
        "KaTeX (LaTeX Rendering)",
    ],
    Backend: [
        "Next.js API Routes & Server Actions",
        "Clerk Authentication (OAuth, JWT, RBAC)",
        "RESTful API Design",
        "Rate Limiting & CORS Protection",
    ],
    Database: [
        "PostgreSQL 14 (Supabase)",
        "Drizzle ORM (Type-Safe Queries)",
        "JSONB for Flexible Quiz Schemas",
        "Composite Indexes & Cascade Deletes",
    ],
    "AI / ML": [
        "Google Gemini 1.5 Flash",
        "Function Calling & Tool Execution",
        "Fuzzy Search (ilike Queries)",
        "Closed-Loop Agent Reasoning",
    ],
    DevOps: [
        "Vercel (Edge-Ready Deployment)",
        "Drizzle Kit Migrations",
        "Supabase Pooler (Connection Pooling)",
        "Environment Variable Management",
    ],
};

const techStackIcons: Record<string, React.ReactNode> = {
    Frontend: <Layers className="h-5 w-5 text-blue-400" />,
    Backend: <Server className="h-5 w-5 text-green-400" />,
    Database: <Database className="h-5 w-5 text-amber-400" />,
    "AI / ML": <Cpu className="h-5 w-5 text-purple-400" />,
    DevOps: <Cloud className="h-5 w-5 text-cyan-400" />,
};

const techStackColors: Record<string, string> = {
    Frontend: "bg-blue-500/10 border-blue-500/20",
    Backend: "bg-green-500/10 border-green-500/20",
    Database: "bg-amber-500/10 border-amber-500/20",
    "AI / ML": "bg-purple-500/10 border-purple-500/20",
    DevOps: "bg-cyan-500/10 border-cyan-500/20",
};

export default function WorldEdProject() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 pb-24">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-emerald-950/20">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300 mb-6">
                            <Brain className="h-4 w-4" />
                            <span>AI-Powered Learning Platform</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-teal-400 mb-4">
                            WorldEd
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            A full-stack educational platform that transforms STEM learning through intelligent course delivery, real-time progress tracking, and an AI learning assistant.
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
                        videoId="Z-Jti-oaPSQ"
                        title="WorldEd Platform Demo"
                    />
                </motion.div>

                {/* === Main Content Grid === */}
                <div className="mt-24 max-w-6xl mx-auto space-y-20">

                    {/* ── Overview ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Globe className="h-6 w-6 text-teal-400" />
                            Overview
                        </h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                            <p>
                                I built WorldEd to tackle a problem I care about: making quality STEM education more accessible and engaging. It&apos;s a full-stack learning management system where students can enroll in courses spanning Calculus, Linear Algebra, Quantum Mechanics, and Algorithms &amp; Data Structures — complete with LaTeX-rendered content, embedded video lectures, interactive quizzes, and a gamified streak system that keeps learners coming back.
                            </p>
                            <p>
                                What sets WorldEd apart is its depth of engineering. Under the hood, server-rendered pages via React Server Components cut client-side JavaScript by roughly 40%, while composite database indexes and debounced search calls reduce API traffic by ~70%. Every feature — from role-based access control to the AI assistant — was architected with production-grade concerns in mind: data isolation, rate limiting, sanitized errors, and type safety across the entire stack.
                            </p>
                            <p>
                                While the demo video showcases the core platform — dashboard, courses, modules, LaTeX rendering, quizzes, and progress tracking — additional features including <strong className="text-slate-200">Eddi</strong>, the AI learning assistant, and an <strong className="text-slate-200">intelligent global search</strong> are fully implemented in the codebase and represent some of the most technically challenging work in the project.
                            </p>
                        </div>
                    </motion.section>

                    {/* ── Key Features ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Sparkles className="h-6 w-6 text-emerald-400" />
                            Key Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                        <Brain className="h-5 w-5 text-purple-400" />
                                    </div>
                                    <h4 className="font-bold text-slate-100">Eddi — AI Learning Assistant</h4>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Powered by Google Gemini 1.5 Flash with function calling. Users type natural language like &quot;open calculus&quot; and Eddi searches the database with fuzzy matching, navigates them to the right page, and confirms the action — a closed-loop agentic workflow running entirely server-side.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                        <BarChart3 className="h-5 w-5 text-emerald-400" />
                                    </div>
                                    <h4 className="font-bold text-slate-100">Dynamic Progress &amp; Streaks</h4>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Real-time progress tracking calculated server-side on every page load. A gamified streak system uses date-normalization logic to track consecutive daily quiz completions, with automatic resets and longest-streak records — no double-counting, no timezone drift.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                        <GraduationCap className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <h4 className="font-bold text-slate-100">Rich Academic Content</h4>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Full LaTeX rendering via KaTeX with remark-math and rehype-katex pipelines, embedded YouTube lectures, syntax-highlighted code blocks, and a structured Course → Module → Quiz hierarchy. Quiz questions stored in JSONB for schema-free flexibility.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                        <ShieldCheck className="h-5 w-5 text-red-400" />
                                    </div>
                                    <h4 className="font-bold text-slate-100">Enterprise-Grade Security</h4>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Clerk-based auth with RBAC (admin, mentor, student), JWT sessions with 7-day expiry and automatic refresh rotation, rate-limited endpoints (3 attempts/hr on password reset), CORS whitelisting, open-redirect prevention, and fully sanitized error responses.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* ── Technical Highlights ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Code className="h-6 w-6 text-cyan-400" />
                            Technical Highlights
                        </h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                            <p>
                                The architecture is built on <strong className="text-slate-200">Next.js 15 App Router</strong> with React Server Components and Server Actions, giving me the best of both worlds: server-rendered performance with rich client interactivity where it matters. The database layer uses <strong className="text-slate-200">Drizzle ORM</strong> on <strong className="text-slate-200">PostgreSQL (Supabase)</strong>, providing full TypeScript inference from schema to query — no type mismatches between my code and my data. Composite indexes on <code className="text-emerald-400 text-base">(user_id, course_id)</code> and unique constraints on progress records keep queries fast and data integrity tight.
                            </p>
                            <p>
                                One challenge I&apos;m proud of solving was the <strong className="text-slate-200">Eddi AI agent loop</strong>. The initial implementation responded conversationally but never actually navigated users. I redesigned it as a closed-loop tool-execution pipeline: Gemini identifies intent → calls a <code className="text-emerald-400 text-base">find_module</code> function → the server runs a fuzzy <code className="text-emerald-400 text-base">ilike</code> query → returns the result to Gemini → the model generates a response with a <code className="text-emerald-400 text-base">navigate_url</code> → the client extracts it and executes <code className="text-emerald-400 text-base">router.push()</code>. This pattern mirrors how production AI agents orchestrate external actions.
                            </p>
                            <p>
                                I also navigated a real-world DevOps hurdle: a <strong className="text-slate-200">Drizzle Kit introspection bug</strong> that crashed <code className="text-emerald-400 text-base">drizzle-kit push</code> during constraint parsing. Rather than waiting for a patch, I pivoted to a migration-based workflow — generating SQL with <code className="text-emerald-400 text-base">drizzle-kit generate</code>, reviewing it manually, then applying via the Supabase SQL Editor. It taught me the value of understanding your tools deeply enough to work around their limitations.
                            </p>
                        </div>
                    </motion.section>

                    {/* ── Tech Stack ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Database className="h-6 w-6 text-amber-400" />
                            Tech Stack
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

                    {/* ── Impact & Skills ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Search className="h-6 w-6 text-fuchsia-400" />
                            Impact &amp; Skills Demonstrated
                        </h2>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            WorldEd is the most technically comprehensive project in my portfolio, touching every layer of the modern web stack. It demonstrates my ability to design normalized database schemas and optimize queries, build production-grade auth flows with RBAC and token rotation, integrate third-party AI APIs with agentic tool-calling patterns, and ship a polished UI with animations, responsive breakpoints, and academic-grade rendering. More importantly, it shows how I approach real engineering challenges — debugging ORM bugs, rethinking AI agent architectures, and building systems that prioritize data integrity and user experience in equal measure.
                        </p>
                    </motion.section>

                    {/* ── Call to Action ── */}
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
                            Watch the demo above, explore the source code on GitHub, or get in touch — I&apos;d love to walk you through the architecture.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="https://github.com/tabetant/worlded"
                                target="_blank"
                                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 transition-colors"
                            >
                                <Github className="h-5 w-5" />
                                View Source Code
                            </Link>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 hover:border-emerald-500/50 bg-slate-900/50 text-slate-200 font-medium px-6 py-3 transition-colors"
                            >
                                <ExternalLink className="h-5 w-5" />
                                Contact Me
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
    );
}
