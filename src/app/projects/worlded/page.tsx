"use client";

import { motion } from "framer-motion";
import { Globe, Users, GraduationCap, Database } from "lucide-react";
import YouTubePlayer from "@/components/YouTubePlayer";

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
                            <Globe className="h-4 w-4" />
                            <span>Global Education Initiative</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-teal-400 mb-4">
                            WorldEd
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Connecting Students, Tutors, and Unlimited Potential
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
                                <Database className="h-5 w-5 text-emerald-400" />
                                Tech Stack
                            </h3>
                            <ul className="space-y-3 text-slate-400">
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                                    React (Frontend)
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-green-500" />
                                    Node.js (Backend)
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                                    MongoDB (Database)
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                                    WebRTC (Live Video)
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* The Mission */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Users className="h-6 w-6 text-teal-400" />
                                The Mission
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                Quality education is often siloed by geography and economic barriers. Students in underserved regions lack access to expert mentorship, while qualified tutors often lack a global platform to share their knowledge. WorldEd was built to democratize this exchange, creating a seamless bridge between knowledge seekers and providers.
                            </p>
                        </motion.section>

                        {/* Implementation */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <GraduationCap className="h-6 w-6 text-emerald-400" />
                                The Platform
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg mb-6">
                                WorldEd is a comprehensive Learning Management System (LMS) that features:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                                    <h4 className="font-bold text-slate-200 mb-2">Real-time Classrooms</h4>
                                    <p className="text-sm text-slate-400">Integrated video conferencing and whiteboarding tools for interactive lessons.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                                    <h4 className="font-bold text-slate-200 mb-2">Resource Library</h4>
                                    <p className="text-sm text-slate-400">A shared repository for textbooks, problem sets, and lecture notes.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                                    <h4 className="font-bold text-slate-200 mb-2">Community Forums</h4>
                                    <p className="text-sm text-slate-400">Discussion boards used for peer-to-peer support and collaborative learning.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                                    <h4 className="font-bold text-slate-200 mb-2">Progress Tracking</h4>
                                    <p className="text-sm text-slate-400">Analytics dashboards for students to monitor their learning trajectory.</p>
                                </div>
                            </div>
                        </motion.section>

                    </div>
                </div>
            </div>
        </div>
    );
}
