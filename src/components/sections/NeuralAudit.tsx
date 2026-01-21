"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FileText, Cpu, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const mockJsonOutput = `{
  "course_code": "ECE297",
  "title": "Software Design & Communication",
  "assessments": [
    {
      "type": "Milestone",
      "weight": 15,
      "deadline": "2024-02-15"
    },
    {
      "type": "Exam",
      "weight": 40,
      "topics": ["Algorithms", "GIS"]
    }
  ],
  "roadmap": {
    "week_1": "C++ STL & Containers",
    "week_2": "Geospatial Data Structures",
    "week_3": "Pathfinding Algorithms (A*)"
  }
}`;

export default function NeuralAudit() {
    const [status, setStatus] = useState<"idle" | "processing" | "complete">("idle");

    const handleSimulate = () => {
        setStatus("processing");
        setTimeout(() => {
            setStatus("complete");
        }, 2500);
    };

    const handleReset = () => {
        setStatus("idle");
    };

    return (
        <section id="neural-audit" className="relative bg-slate-900 py-24">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
                <div className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
            </div>

            <div className="container relative mx-auto px-6">
                <div className="mb-16 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
                        <Cpu className="h-4 w-4" />
                        <span>N3XU$ Identity Protocol</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-100 sm:text-5xl">
                        Neural Audit
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-slate-400">
                        Showcasing the power of Document Question Answering. Watch the AI extract structure from chaos.
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Input Side */}
                    <div className="space-y-8">
                        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900">
                                    <FileText className="h-6 w-6 text-slate-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-200">Syllabus.pdf</h3>
                                    <p className="text-sm text-slate-500">2.4 MB • ECE297 Course Outline</p>
                                </div>
                            </div>

                            <div className="h-48 overflow-hidden rounded-lg border border-slate-800 bg-slate-900 p-4">
                                <div className="space-y-2 opacity-50 blur-[0.5px]">
                                    <div className="h-2 w-3/4 rounded bg-slate-700" />
                                    <div className="h-2 w-full rounded bg-slate-700" />
                                    <div className="h-2 w-5/6 rounded bg-slate-700" />
                                    <div className="h-2 w-1/2 rounded bg-slate-700" />
                                    <div className="mt-4 h-2 w-full rounded bg-slate-700" />
                                    <div className="h-2 w-full rounded bg-slate-700" />
                                    <div className="h-2 w-2/3 rounded bg-slate-700" />
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end">
                                {status === "idle" && (
                                    <button
                                        onClick={handleSimulate}
                                        className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 transition-colors"
                                    >
                                        <Cpu className="h-4 w-4" /> Analyze Document
                                    </button>
                                )}
                                {status === "processing" && (
                                    <button disabled className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-400 cursor-not-allowed">
                                        <Loader2 className="h-4 w-4 animate-spin" /> Processing...
                                    </button>
                                )}
                                {status === "complete" && (
                                    <button onClick={handleReset} className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500 transition-colors">
                                        <CheckCircle className="h-4 w-4" /> Done (Reset)
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <div className="flex items-center gap-4 text-slate-500">
                                <ArrowRight className="h-6 w-6" />
                                <span>The extracted data is converted into a structured JSON roadmap for students.</span>
                            </div>
                        </div>
                    </div>

                    {/* Output Side (Terminal) */}
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 to-emerald-600 opacity-20 blur" />
                        <div className="relative rounded-2xl border border-slate-800 bg-[#0c0c0c] p-6 shadow-2xl font-mono text-sm leading-relaxed">
                            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                                <div className="flex gap-1.5">
                                    <div className="h-3 w-3 rounded-full bg-red-500/20" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                                    <div className="h-3 w-3 rounded-full bg-emerald-500/20" />
                                </div>
                                <div className="ml-2 text-xs text-slate-500">neural-audit-cli — v1.0.4</div>
                            </div>

                            <div className="h-[400px] overflow-y-auto custom-scrollbar">
                                {status === "idle" && (
                                    <div className="flex h-full items-center justify-center text-slate-600">
                                        <span>Waiting for input stream...</span>
                                    </div>
                                )}

                                {status === "processing" && (
                                    <div className="space-y-2">
                                        <div className="text-emerald-500">$ n3xus start --source=syllabus.pdf</div>
                                        <div className="text-slate-400">Loading language models... [OK]</div>
                                        <div className="text-slate-400">Parsing PDF structure...</div>
                                        <div className="text-amber-400 animate-pulse">Extracting entities...</div>
                                        <div className="text-slate-500 pl-4">Found: Dates (15)</div>
                                        <div className="text-slate-500 pl-4">Found: Topics (12)</div>
                                        <div className="text-slate-500 pl-4">Found: Grading Scheme</div>
                                    </div>
                                )}

                                {status === "complete" && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-emerald-300"
                                    >
                                        <div className="text-slate-500 mb-2">// Extraction Complete (0.4s)</div>
                                        <pre className="whitespace-pre-wrap">{mockJsonOutput}</pre>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
