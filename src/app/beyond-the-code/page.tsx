"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Music, Utensils, PenTool, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
    {
        id: "profile",
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-2",
        title: "The Engineer",
        subtitle: "UofT Computer Engineering • 3.83 GPA",
        description: "Combining technical rigor with creative vision. Always pushing the boundaries of what's possible with code.",
        image: "/images/about-me/professional.jpg",
        icon: User,
        color: "bg-slate-900/80",
    },
    {
        id: "music",
        colSpan: "col-span-1",
        rowSpan: "row-span-2 md:row-span-1",
        title: "The Musician",
        subtitle: "8 Years Guitar & Songwriting",
        description: "Music strengthens my communication. It's where logic meets emotion.",
        image: "/images/about-me/me_playing_guitar.jpeg",
        icon: Music,
        color: "bg-violet-900/80",
    },
    {
        id: "aesthetic",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        title: "The Creative",
        subtitle: "Writing & Storytelling",
        description: "Crafting narratives that resonate.",
        image: "/images/about-me/my_aesthetic.jpeg",
        icon: PenTool,
        color: "bg-rose-900/80",
    },
    {
        id: "culture",
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-1",
        title: "The Heritage",
        subtitle: "Lebanese Roots & Culinary Arts",
        description: "Connected to my roots through food and leadership in Les Scouts du Liban.",
        image: "/images/about-me/food.jpeg",
        icon: Utensils,
        color: "bg-emerald-900/80",
    },
    {
        id: "piano",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        title: "Keys & Chords",
        subtitle: "Exploring Harmony",
        description: null,
        image: "/images/about-me/me_playing_piano.jpg",
        icon: null,
        color: "bg-slate-800",
    },
    {
        id: "vocals",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        title: "Voice",
        subtitle: "Expression",
        description: null,
        image: "/images/about-me/me_singing.JPG",
        icon: null,
        color: "bg-slate-800",
    },
];

export default function BeyondTheCode() {
    return (
        <section className="bg-slate-950 py-24 relative overflow-hidden min-h-screen">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-sm text-slate-300">
                        <User className="h-4 w-4" />
                        <span>Antoine the Human</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-100 sm:text-5xl">
                        Beyond the Code
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        While I speak the languages of machines, my passions are deeply human.
                        From the stage to the kitchen, creativity fuels my engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={cn(
                                "relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900",
                                item.colSpan,
                                item.rowSpan
                            )}
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="mb-2 flex items-center gap-2">
                                        {item.icon && <item.icon className="h-5 w-5 text-slate-300" />}
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{item.title}</span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-2">
                                        {item.subtitle}
                                    </h3>

                                    {item.description && (
                                        <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-3">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
