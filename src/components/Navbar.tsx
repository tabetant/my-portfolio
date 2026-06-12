"use client";

import { Link } from "next-view-transitions";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/#projects",  label: "Work",       index: "01" },
  { href: "/consulting", label: "Consulting", index: "02" },
  { href: "/about",      label: "About",      index: "03" },
  { href: "/stack",      label: "Stack",      index: "04" },
  { href: "/poetry",     label: "Poetry",     index: "05" },
  { href: "/contact",    label: "Contact",    index: "06" },
];

function isActive(href: string, pathname: string): boolean {
  if (href.startsWith("/#")) return pathname === "/" || pathname.startsWith("/projects");
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the overlay menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`site-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled && !menuOpen
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="font-mono text-sm tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
        >
          <span className="text-violet-400">AT</span>
          <span className="text-zinc-500">&nbsp;©&nbsp;</span>
          <span className="hidden sm:inline">Antoine&nbsp;Tabet</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm px-1 py-2.5 ${
                  active ? "text-violet-400" : "text-zinc-400 hover:text-white"
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
            className="font-mono text-xs uppercase tracking-[0.18em] text-violet-400 hover:text-violet-300 inline-flex items-center gap-1 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm px-1 py-2.5"
          >
            Resumé
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden text-zinc-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Full-screen overlay menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#0a0a0a]/[0.98] backdrop-blur-md flex flex-col">
          <div className="flex-1 flex flex-col justify-center px-8 gap-1">
            {NAV_LINKS.map((link, i) => {
              const active = isActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="menu-item group flex items-baseline gap-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="font-mono text-violet-400 text-xs">{link.index}</span>
                  <span
                    className={`text-4xl font-bold tracking-tight transition-colors ${
                      active ? "text-violet-400" : "text-white group-hover:text-violet-300"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
            <a
              href="/Antoine_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-item group flex items-baseline gap-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
              style={{ animationDelay: `${NAV_LINKS.length * 60}ms` }}
            >
              <span className="font-mono text-violet-400 text-xs">07</span>
              <span className="text-4xl font-bold tracking-tight text-white group-hover:text-violet-300 transition-colors inline-flex items-center gap-2">
                Resumé
                <ArrowUpRight className="w-7 h-7 text-violet-400" />
              </span>
            </a>
          </div>
          <p className="px-8 pb-10 font-mono text-zinc-600 text-xs uppercase tracking-[0.18em]">
            Toronto, Canada — {new Date().getFullYear()}
          </p>
        </div>
      )}
    </nav>
  );
}
