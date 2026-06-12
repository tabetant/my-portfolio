"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export interface WorkRowProps {
  index: string;
  title: string;
  /** Optional small type label under the title (used on /projects) */
  type?: string;
  desc: string;
  meta: string;
  href: string;
  /** Tailwind gradient stops for the hover preview chip */
  gradient: string;
  /** Heading level for the title — h2 under a page h1, h3 under a section h2 */
  headingLevel?: "h2" | "h3";
}

export default function WorkRow({
  index,
  title,
  type,
  desc,
  meta,
  href,
  gradient,
  headingLevel = "h3",
}: WorkRowProps) {
  const rowRef = useRef<HTMLAnchorElement>(null);
  const Heading = headingLevel;

  const handleMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = rowRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // Keep the chip inside the row's middle band so it never clips the edges
    const x = Math.min(Math.max(e.clientX - rect.left, 160), rect.width - 160);
    el.style.setProperty("--preview-x", `${x}px`);
  };

  return (
    <Link
      ref={rowRef}
      href={href}
      onPointerMove={handleMove}
      className="project-row group relative block border-t border-zinc-800 last:border-b focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-inset focus-visible:bg-violet-600/5"
    >
      {/* Cursor-following gradient preview (desktop hover only) */}
      <div
        className={`row-preview hidden md:block bg-gradient-to-br ${gradient}`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-2xl tracking-tighter select-none">
          {title}
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 md:py-14 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
        <span className="font-mono text-violet-400 text-sm shrink-0">{index}</span>
        <div className="flex-1 min-w-0">
          <Heading className="text-outline text-[clamp(2.2rem,6vw,4.8rem)] font-bold tracking-tighter leading-none transition-colors duration-300 group-hover:text-white">
            {title}
          </Heading>
          {type && (
            <p className="font-mono text-zinc-600 text-xs uppercase tracking-[0.18em] mt-3">
              {type}
            </p>
          )}
        </div>
        <div className="md:w-80 shrink-0">
          <p className="text-zinc-500 group-hover:text-zinc-300 text-sm leading-relaxed mb-3 transition-colors duration-300">
            {desc}
          </p>
          <p className="font-mono text-zinc-600 group-hover:text-violet-400 text-xs uppercase tracking-[0.14em] transition-colors duration-300">
            {meta}
          </p>
        </div>
        <ArrowUpRight className="hidden md:block w-7 h-7 text-zinc-700 group-hover:text-violet-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 shrink-0" />
      </div>
    </Link>
  );
}
