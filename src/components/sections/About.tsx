"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Award, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineData = [
    {
        year: "Origin",
        title: "The Journey Begins",
        location: "Lebanon",
        description: "Growing up in Lebanon, I dedicated 8 years to leadership as part of 'Les Scouts du Liban', culminating in 80+ hours of community service and team management.",
        icon: MapPin,
        color: "text-rose-400",
        bg: "bg-rose-400/10",
        border: "border-rose-400/20",
    },
    {
        year: "Education",
        title: "University of Toronto",
        location: "Toronto, Canada",
        description: "2nd Year Computer Engineering Student. Achieved Dean's List honors with a 3.83 Cumulative GPA. Specializing in AI/ML and Software Systems.",
        icon: GraduationCap,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/20",
    },
    {
        year: "Experience",
        title: "Software Engineering Intern",
        location: "Aspire",
        description: "Optimized backend queries leading to a 35% reduction in response latency. Worked on scalable system architectures and production-grade code.",
        icon: Briefcase,
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        border: "border-amber-400/20",
    },
    {
        year: "Leadership",
        title: "Diplomacy & Strategy",
        location: "Harvard Model UN",
        description: "Represented delegations in high-stakes diplomatic simulations, honing negotiation and public speaking skills on an international stage.",
        icon: Award,
        color: "text-violet-400",
        bg: "bg-violet-400/10",
        border: "border-violet-400/20",
    },
];

export default function About() {
    return (
        <section id="about" className="relative min-h-screen bg-slate-950 py-24">
            <div className="container mx-auto px-6">
                <div className="mb-16 flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2 text-sm text-emerald-400 backdrop-blur-sm">
                        <Terminal className="h-4 w-4" />
                        <span className="font-mono">./show_history.sh</span>
                    </div>
                    <h2 className="mt-4 text-3xl font-bold text-slate-100 sm:text-5xl">
                        Origin & Experience
                    </h2>
                    <p className="mt-4 max-w-2xl text-slate-400">
                        A timeline of my academic and professional milestones.
                    </p>
                </div>

                <div className="relative mx-auto max-w-4xl">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 h-full w-px bg-slate-800 md:left-1/2" />

                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "mb-12 flex flex-col md:flex-row md:items-center",
                                index % 2 === 0 ? "md:flex-row-reverse" : ""
                            )}
                        >
                            {/* Spacer for alternating layout */}
                            <div className="flex-1 md:w-1/2" />

                            {/* Icon Node */}
                            <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-950 shadow-lg shadow-slate-900/50 md:mx-8">
                                <item.icon className={cn("h-6 w-6", item.color)} />
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 pt-4 md:pt-0">
                                <div
                                    className={cn(
                                        "relative overflow-hidden rounded-xl border bg-slate-900/50 p-6 backdrop-blur-sm transition-colors hover:bg-slate-900/80",
                                        item.border
                                    )}
                                >
                                    <div className={cn("absolute -right-4 -top-4 h-16 w-16 rounded-full blur-2xl opacity-20", item.bg.replace('/10', '/50'))} />

                                    <div className="flex items-center justify-between">
                                        <span className={cn("font-mono text-sm font-bold", item.color)}>
                                            {item.year}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-slate-500">
                                            <MapPin className="h-3 w-3" /> {item.location}
                                        </span>
                                    </div>

                                    <h3 className="mt-2 text-xl font-bold text-slate-200">{item.title}</h3>
                                    <p className="mt-2 text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
