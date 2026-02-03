"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Rocket, BookOpen, Clock, User, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Beyond the Code", href: "/beyond-the-code", icon: User },
    { name: "Timeline", href: "/timeline", icon: Clock },
    {
        name: "Projects",
        href: "/projects", // This won't be a direct link, but a dropdown trigger
        icon: Rocket,
        dropdown: [
            { name: "N3XU$ Identity", href: "/projects/nexus" },
            { name: "Aspire Suite", href: "/projects/aspire" },
            { name: "WorldEd", href: "/projects/worlded" },
        ]
    },
    { name: "Poetry", href: "/poetry", icon: BookOpen },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-violet-500 flex items-center justify-center font-bold text-white text-sm group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-shadow">
                        AT
                    </div>
                    <span className="font-bold text-slate-100 hidden sm:block">Antoine Tabet</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1 rounded-full border border-slate-800/50 backdrop-blur-sm">
                    {navItems.map((item) => {
                        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                        if (item.dropdown) {
                            return (
                                <div
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                            isActive || activeDropdown === item.name
                                                ? "text-slate-100 bg-slate-800"
                                                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                                        )}
                                    >
                                        <item.icon className="h-4 w-4" />
                                        {item.name}
                                        <ChevronDown className={cn("h-3 w-3 transition-transform duration-300", activeDropdown === item.name ? "rotate-180" : "")} />
                                    </button>

                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden p-1"
                                            >
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-sm text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                    isActive
                                        ? "text-slate-100 bg-emerald-500/10 border border-emerald-500/20"
                                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300 hover:text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 shadow-2xl md:hidden p-4 flex flex-col gap-2"
                        >
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    {item.dropdown ? (
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 px-4 py-3 text-slate-100 font-medium">
                                                <item.icon className="h-5 w-5" />
                                                {item.name}
                                            </div>
                                            <div className="pl-10 flex flex-col gap-1 border-l-2 border-slate-800 ml-6">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="px-4 py-2 text-slate-400 hover:text-emerald-400 text-sm"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                                pathname === item.href ? "bg-emerald-500/10 text-emerald-400" : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                                            )}
                                        >
                                            <item.icon className="h-5 w-5" />
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
