"use client";

import { motion } from "framer-motion";
import { Laptop, Code2, TrendingUp, Server } from "lucide-react";

export default function AspireProject() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 pb-24">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-slate-900/50">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm text-amber-300 mb-6">
                            <Laptop className="h-4 w-4" />
                            <span>Software Engineering Internship</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">
                            Aspire Web Suite
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Full-Stack Engineering for High-Growth Scale-Ups
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-6 relative z-20">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 -mt-10">
                    {[
                        { label: "Backend Latency Reduction", value: "35%", icon: TrendingUp, color: "text-emerald-400" },
                        { label: "Full-Stack Apps Engineered", value: "5", icon: Code2, color: "text-amber-400" },
                        { label: "Daily Requests Processed", value: "1,000+", icon: Server, color: "text-blue-400" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/80 backdrop-blur-md p-6 rounded-xl border border-slate-800 shadow-xl flex flex-col items-center text-center"
                        >
                            <stat.icon className={`h-8 w-8 mb-4 ${stat.color}`} />
                            <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                            <div className="text-slate-400 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Case Study Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

                    {/* Sidebar: Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Code2 className="h-5 w-5 text-amber-400" />
                                Tech Stack
                            </h3>
                            <ul className="space-y-3 text-slate-400">
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-black/60 border border-white/20" />
                                    Next.js (React Framework)
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                                    TypeScript
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-green-500" />
                                    Supabase (PostgreSQL)
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-teal-500" />
                                    Tailwind CSS
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* The Challenge */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Server className="h-6 w-6 text-rose-400" />
                                The Challenge
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                The existing infrastructure was struggling to keep up with user demand. Response times were sluggish due to unoptimized database queries and heavy client-side rendering. Additionally, the team needed rapid prototyping of internal tools to streamline operations, requiring versatile full-stack engineering skills.
                            </p>
                        </motion.section>

                        {/* Engineering Solutions */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Laptop className="h-6 w-6 text-amber-400" />
                                Engineering Solutions
                            </h2>
                            <div className="space-y-6">
                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-amber-500/30 transition-colors">
                                    <h3 className="text-xl font-bold text-slate-200 mb-2">Performance Optimization</h3>
                                    <p className="text-slate-400">
                                        Refactored legacy API endpoints to use efficient SQL joins and indexing in Supabase. Implemented caching strategies and server-side rendering (SSR) in Next.js, resulting in a measurable <span className="text-emerald-400 font-bold">35% reduction in backend latency</span>.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-amber-500/30 transition-colors">
                                    <h3 className="text-xl font-bold text-slate-200 mb-2">Internal Tooling</h3>
                                    <p className="text-slate-400">
                                        Architected and deployed 5 internal full-stack applications. These tools automated manual data entry workflows and provided real-time analytics dashboards for the operations team, significantly boosting internal productivity.
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
