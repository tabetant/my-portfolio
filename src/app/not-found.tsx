import { Link } from "next-view-transitions";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100dvh-4rem)] bg-[#0a0a0a] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full py-24">
        <p className="font-mono text-violet-400 text-xs uppercase tracking-[0.3em] mb-6">
          Error / Not Found
        </p>
        <h1 className="text-outline text-outline-static text-[clamp(6rem,22vw,18rem)] font-bold tracking-tighter leading-none mb-8">
          404
        </h1>
        <p className="text-zinc-400 text-xl max-w-xl leading-relaxed mb-10">
          This page drifted out of the constellation. The work, however, is
          exactly where it should be.
        </p>
        <div className="flex flex-wrap gap-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-white hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
          >
            Home
            <ArrowUpRight className="w-4 h-4 text-violet-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
          >
            Selected Work
            <ArrowUpRight className="w-4 h-4 text-violet-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
