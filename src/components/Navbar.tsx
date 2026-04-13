"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { href: "/",          label: "Home"     },
  { href: "/#projects", label: "Projects" },
  { href: "/about",     label: "About"    },
  { href: "/stack",     label: "Stack"    },
  { href: "/poetry",    label: "Poetry"   },
  { href: "/contact",   label: "Contact"  },
];

function isActive(href: string, pathname: string): boolean {
  if (href.startsWith("/#")) return pathname === "/";
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname                  = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
        >
          <span className="w-9 h-9 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-sm select-none group-hover:bg-violet-500 transition-colors duration-200">
            AT
          </span>
          <span className="text-white font-semibold text-sm hidden sm:block tracking-tight">
            Antoine Tabet
          </span>
        </Link>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm px-0.5 ${
                  active ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-violet-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/Antoine_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-150 hover:shadow-md hover:shadow-violet-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resumé</span>
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden text-zinc-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-zinc-800 px-6 py-8 flex flex-col gap-5">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm ${
                  active ? "text-white" : "text-zinc-400 hover:text-violet-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="/Antoine_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center bg-violet-600 hover:bg-violet-500 text-white font-semibold px-5 py-3 rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            Download Resumé
          </a>
        </div>
      )}
    </nav>
  );
}
