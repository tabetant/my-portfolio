"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, GraduationCap, Briefcase, Heart, Terminal } from "lucide-react";

export default function AboutMe() {
    return (
        <section className="bg-slate-950 min-h-screen pt-24 pb-20 overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Header */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2 text-sm text-emerald-400 mb-6 font-mono">
                            <Terminal className="w-4 h-4" /> whoami
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
                            More Than Just Code
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            My journey isn&apos;t just a series of commits—it&apos;s a story of leadership, creativity, and a relentless drive to build meaningfully.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-24 relative">
                    {/* Vertical Line for larger screens */}
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/0 via-emerald-500/20 to-emerald-500/0" />

                    {/* Section 1: Origins & Leadership */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="pl-0 md:pl-24 relative"
                    >
                        <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-slate-900 border border-emerald-500/30 items-center justify-center -translate-x-1/2">
                            <MapPin className="text-emerald-400 w-6 h-6" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                            <span className="md:hidden"><MapPin className="text-emerald-400 w-5 h-5" /></span>
                            Origins & Leadership
                        </h2>

                        <div className="prose prose-invert prose-lg text-slate-400 max-w-none clearfix">
                            <div className="md:float-right md:ml-8 md:mb-4 mb-6 relative h-64 w-full md:w-72 rounded-xl overflow-hidden shadow-xl border border-slate-800/50">
                                <Image
                                    src="/images/about-me/scouts_du_liban.jpg"
                                    alt="Leading at Les Scouts du Liban"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mb-6">
                                Growing up in <strong>Lebanon</strong>, I learned early on that true leadership is about service. For eight years, I dedicated myself to <strong>Les Scouts du Liban</strong>, looking after a team of young scouts and managing complex logistics.
                            </p>

                            <div className="md:float-left md:mr-8 md:mb-4 mb-6 relative h-64 w-full md:w-72 rounded-xl overflow-hidden shadow-xl border border-slate-800/50">
                                <Image
                                    src="/images/about-me/summer_camp_counselor.jpg"
                                    alt="Summer Camp Counselor with Youth"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mb-8">
                                It was here—organizing camps, leading expeditions, and mentoring peers as a counselor—that I developed the resilience and teamwork skills that now define my engineering approach. I learned that whether you&apos;re navigating a forest or a codebase, clear communication and trust are your best tools.
                            </p>
                        </div>
                    </motion.div>

                    {/* Section 2: The Academic Grind */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="pl-0 md:pl-24 relative"
                    >
                        <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-slate-900 border border-violet-500/30 items-center justify-center -translate-x-1/2">
                            <GraduationCap className="text-violet-400 w-6 h-6" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                            <span className="md:hidden"><GraduationCap className="text-violet-400 w-5 h-5" /></span>
                            The Academic Grind
                        </h2>

                        <div className="prose prose-invert prose-lg text-slate-400 max-w-none clearfix">
                            <div className="md:float-right md:ml-8 md:mb-4 mb-6 relative h-64 w-full md:w-80 rounded-xl overflow-hidden shadow-xl border border-slate-800/50">
                                <Image
                                    src="/images/about-me/HMUN_2024_Advisor.jpg"
                                    alt="Advising at Harvard Model United Nations 2024"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <p className="mb-6">
                                Now at the <strong>University of Toronto</strong>, I&apos;m pursuing Computer Engineering with a focus on AI and Software Systems. Transitioning to a new country and a rigorous academic environment wasn&apos;t easy, but it pushed me to excel.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20">
                                    <h3 className="font-bold text-violet-300 mb-1">Dean&apos;s List Scholar</h3>
                                    <p className="text-sm">Maintained a 3.83 Cumulative GPA while balancing projects and leadership roles.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                    <h3 className="font-bold text-blue-300 mb-1">Harvard Model UN</h3>
                                    <p className="text-sm">Honed diplomacy and strategy on an international stage.</p>
                                </div>
                            </div>
                            <p>
                                My academic journey is fueled by a desire to understand the &quot;why&quot; behind the &quot;how&quot;—diving deep into the logic of machines to build smarter systems.
                            </p>
                        </div>
                    </motion.div>

                    {/* Section 3: Engineering in Action */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="pl-0 md:pl-24 relative"
                    >
                        <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-slate-900 border border-amber-500/30 items-center justify-center -translate-x-1/2">
                            <Briefcase className="text-amber-400 w-6 h-6" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                            <span className="md:hidden"><Briefcase className="text-amber-400 w-5 h-5" /></span>
                            Engineering in Action
                        </h2>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="prose prose-invert prose-lg text-slate-400 flex-1">
                                <p className="mb-4">
                                    Theory needs practice. As a <strong>Software Engineering Intern at Aspire</strong>, I didn&apos;t just write code; I solved problems.
                                </p>
                                <p>
                                    I optimized backend queries that sliced response latency by <strong>35%</strong> and contributed to scalable architectures. This experience taught me that great code isn&apos;t just correct—it&apos;s efficient, maintainable, and impactful.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 relative h-48 rounded-xl overflow-hidden border border-slate-800 shadow-lg">
                                <Image
                                    src="/images/about-me/professional.jpg"
                                    alt="Professional Background"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Section 4: The Creative Soul */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="pl-0 md:pl-24 relative"
                    >
                        <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-slate-900 border border-rose-500/30 items-center justify-center -translate-x-1/2">
                            <Heart className="text-rose-400 w-6 h-6" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                            <span className="md:hidden"><Heart className="text-rose-400 w-5 h-5" /></span>
                            The Creative Soul
                        </h2>

                        <div className="prose prose-invert prose-lg text-slate-400 max-w-none mb-8">
                            <p>
                                I believe the best engineers are also artists. For me, <strong>music and writing</strong> are not just hobbies—they are essential outlets for expression.
                            </p>
                            <p>
                                With 8 years of guitar playing and songwriting, I find that the structure of a melody is not unlike the architecture of a program. Both require rhythm, harmony, and a touch of soul.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="relative h-48 rounded-xl overflow-hidden border border-slate-800/50 group">
                                <Image
                                    src="/images/about-me/me_playing_guitar.jpeg"
                                    alt="Playing Guitar"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 text-xs text-center text-slate-300">Guitar & Songwriting</div>
                            </div>
                            <div className="relative h-48 rounded-xl overflow-hidden border border-slate-800/50 group">
                                <Image
                                    src="/images/about-me/me_playing_piano.jpg"
                                    alt="Playing Piano"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 text-xs text-center text-slate-300">Keys & Harmony</div>
                            </div>
                            <div className="relative h-48 col-span-2 md:col-span-1 rounded-xl overflow-hidden border border-slate-800/50 group">
                                <Image
                                    src="/images/about-me/me_singing.JPG"
                                    alt="Singing"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 text-xs text-center text-slate-300">Vocals</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
