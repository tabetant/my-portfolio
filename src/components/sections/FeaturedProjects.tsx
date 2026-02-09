"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const featuredProjects = [
    {
        title: "N3XU$ Identity",
        description: "Decentralized identity protocol using Neural Audit for advanced document verification.",
        tags: ["Next.js", "AI/ML", "Blockchain"],
        image: "/images/projects/nexus_preview.png", // Assuming image path, will use placeholders if needed or confirm
        link: "/projects/nexus",
        color: "from-violet-500 to-fuchsia-500",
        delay: 0.1
    },
    {
        title: "Aspire Suite",
        description: "Enterprise-grade web applications optimized for scale and performance.",
        tags: ["Full Stack", "Optimization", "Supabase"],
        image: "/images/projects/aspire_preview.png",
        link: "/projects/aspire",
        color: "from-blue-500 to-cyan-500",
        delay: 0.2
    },
    {
        title: "WorldEd",
        description: "Connecting students globally with educational resources and mentorship.",
        tags: ["React", "Education", "Platform"],
        image: "/images/projects/worlded_preview.png",
        link: "/projects/worlded",
        color: "from-amber-500 to-orange-500",
        delay: 0.3
    }
];

export default function FeaturedProjects() {
    return (
        <section id="featured-projects" className="py-24 bg-slate-950 px-6">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A selection of my most impactful work, bridging the gap between complex engineering and intuitive design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <Link href={project.link} key={index} className="group block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: project.delay, duration: 0.5 }}
                                className="h-full relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1"
                            >
                                {/* Gradient Overlay */}
                                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br", project.color)} />

                                <div className="p-8 flex flex-col h-full">
                                    <div className="mb-4">
                                        <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4", project.color)}>
                                            <ExternalLink className="text-white w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-100 group-hover:text-white transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-400 mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center text-emerald-400 text-sm font-medium mt-auto group-hover:translate-x-1 transition-transform">
                                        View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-emerald-500 pb-1"
                    >
                        View All Projects <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
