"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "N3XU$ Identity Protocol",
        description: "A decentralized identity protocol leveraging AI for document auditing and verification. Features the 'Neural Audit' system demonstrated above.",
        tags: ["Next.js", "Solidity", "Python", "NLP"],
        github: "https://github.com/tabetant",
        demo: "#neural-audit",
        color: "border-violet-500/50 hover:border-violet-500",
    },
    {
        title: "Click-A-Mole Engine",
        description: "A high-performance C++ game engine built from scratch. Features custom memory management, physics integration, and zero-dependency rendering.",
        tags: ["C++", "OpenGL", "Engine Architecture"],
        github: "https://github.com/tabetant/click-a-mole", // Placeholder URL
        demo: null,
        color: "border-emerald-500/50 hover:border-emerald-500",
    },
    {
        title: "WorldEd",
        description: "Global education initiative platform connecting students with resources and mentorship opportunities.",
        tags: ["React", "Node.js", "MongoDB"],
        github: null,
        demo: null,
        color: "border-amber-500/50 hover:border-amber-500",
    },
    {
        title: "Aspire Web Suite",
        description: "Full-stack web applications built during my internship. Optimized backend queries achieving a 35% reduction in response latency.",
        tags: ["Next.js", "Supabase", "TypeScript"],
        github: null,
        demo: null,
        color: "border-slate-700/50 hover:border-slate-500",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="bg-slate-950 py-24">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-sm text-slate-300">
                        <Code className="h-4 w-4" />
                        <span>Engineering & Design</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-100 sm:text-5xl">
                        Selected Projects
                    </h2>
                    <p className="mt-4 text-slate-400">
                        A myriad of systems ranging from low-level engines to high-level AI applications.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "group flex flex-col rounded-xl border bg-slate-900/40 p-6 backdrop-blur-sm transition-all hover:-translate-y-2 hover:shadow-2xl",
                                project.color
                            )}
                        >
                            <h3 className="text-xl font-bold text-slate-200 group-hover:text-white">
                                {project.title}
                            </h3>
                            <p className="mt-4 flex-1 text-slate-400">
                                {project.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 flex gap-4 border-t border-slate-800 pt-4">
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                                    >
                                        <Github className="h-4 w-4" /> Code
                                    </Link>
                                )}
                                {project.demo && (
                                    <Link
                                        href={project.demo}
                                        className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                                    >
                                        <ExternalLink className="h-4 w-4" /> Demo
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
