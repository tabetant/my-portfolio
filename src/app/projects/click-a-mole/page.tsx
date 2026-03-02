"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Globe, Cog, Zap, MemoryStick, Timer, Gamepad2, Wrench } from "lucide-react";
import Link from "next/link";

export default function ClickAMoleProject() {
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
                            <Cpu className="h-4 w-4" />
                            <span>Embedded Mechatronics Project</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-teal-400 mb-4">
                            Click-A-Mole
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            A sophisticated, full-stack embedded systems project developed as a flagship initiative within the Spark Design Club. Transforms the classic arcade &quot;Whack-A-Mole&quot; into a high-performance mechatronic system blending hardware control, real-time logic, and software engineering.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-6 relative z-20 mt-12">

                {/* Case Study Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-8"
                    >
                        {/* Hardware */}
                        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Cpu className="h-5 w-5 text-emerald-400" />
                                Hardware
                            </h3>
                            <div className="flex items-center gap-3 text-slate-400">
                                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                                Arduino Mega 2560
                            </div>
                        </div>

                        {/* Skills Demonstrated */}
                        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Code2 className="h-5 w-5 text-teal-400" />
                                Skills Demonstrated
                            </h3>
                            <ul className="space-y-3 text-slate-400">
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                                    C/C++ Embedded Programming
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-teal-500" />
                                    Mechatronic System Design
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-cyan-500" />
                                    Real-Time Operating Logic (FSMs)
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                                    Collaborative Engineering
                                </li>
                            </ul>
                        </div>

                        {/* Key Links */}
                        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Globe className="h-5 w-5 text-indigo-400" />
                                Key Links
                            </h3>
                            <Link href="https://github.com/AG2048/click-a-mole" target="_blank" className="block w-full py-2 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-center transition-colors">
                                View on GitHub
                            </Link>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Technical Architecture */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Cog className="h-6 w-6 text-emerald-400" />
                                Technical Architecture
                            </h2>
                            <div className="space-y-6">
                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Gamepad2 className="h-5 w-5 text-emerald-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Real-Time Game Engine</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        C++ backend managing complex game states (<code className="text-emerald-400 font-mono text-sm">S_IDLE</code>, <code className="text-emerald-400 font-mono text-sm">S_INITIALIZE_ROUND</code>, <code className="text-emerald-400 font-mono text-sm">S_PLAYING</code>) to handle the full lifecycle of active moles.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Code2 className="h-5 w-5 text-teal-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Object-Oriented Design</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        Modular class structure for &quot;Moles&quot; with diverse behaviors: <span className="text-slate-200 font-medium">Black Moles</span> (standard) and <span className="text-slate-200 font-medium">White Moles</span> (healing/bonus).
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Wrench className="h-5 w-5 text-amber-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Hardware-Software Integration</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        Custom <code className="text-emerald-400 font-mono text-sm">MoleController</code> managing 9 independent <code className="text-emerald-400 font-mono text-sm">MoleModules</code>, each synchronizing a stepper motor (PUL/DIR pins), a physical button, and an analog multiplexer channel. Built in collaboration with a dedicated hardware team.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Zap className="h-5 w-5 text-yellow-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Dynamic Difficulty Scaling</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        Logarithmic difficulty curve scaling <code className="text-emerald-400 font-mono text-sm">maxMolesUp</code>, <code className="text-emerald-400 font-mono text-sm">roundMaxMoles</code>, and <code className="text-emerald-400 font-mono text-sm">spawnDelay</code> as the player progresses.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Key Engineering Challenges */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Zap className="h-6 w-6 text-amber-400" />
                                Key Engineering Challenges
                            </h2>
                            <div className="space-y-6">
                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-amber-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <MemoryStick className="h-5 w-5 text-rose-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Memory Optimization</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        Moved static strings to Flash memory using the <code className="text-emerald-400 font-mono text-sm">F()</code> macro; transitioned from dynamic heap allocation to static object pools to eliminate heap fragmentation on an 8-bit microcontroller.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-amber-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Gamepad2 className="h-5 w-5 text-blue-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Non-Blocking Input Processing</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        Custom <code className="text-emerald-400 font-mono text-sm">getInput()</code> routine that polls Serial data and physical button arrays simultaneously, keeping gameplay fluid.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-amber-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Timer className="h-5 w-5 text-cyan-400" />
                                        <h3 className="text-xl font-bold text-slate-200">Precision Timing</h3>
                                    </div>
                                    <p className="text-slate-400">
                                        Hardware-level timers and <code className="text-emerald-400 font-mono text-sm">millis()</code> for independent mole lifetimes and cooldowns without blocking the main execution loop.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Impact */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 relative z-10">
                                Impact
                            </h2>
                            <p className="text-slate-300 relative z-10 text-lg">
                                Click-A-Mole demonstrates end-to-end embedded systems engineering — from bare-metal C++ on an Arduino Mega 2560 to a fully integrated mechatronic experience. It showcases real-time FSM logic, hardware-software co-design, and performance optimization on resource-constrained platforms.
                            </p>
                        </motion.section>

                    </div>
                </div>
            </div>
        </div>
    );
}
