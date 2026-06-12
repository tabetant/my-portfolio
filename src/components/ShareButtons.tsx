"use client";

import { Linkedin, Twitter, Link2, Check } from "lucide-react";
import { useEffect, useState } from "react";

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  // Set after mount so server and client render identical HTML
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="border-t border-zinc-800 pt-6">
      <h3 className="font-mono text-zinc-500 text-xs uppercase tracking-[0.18em] mb-4">
        Share
      </h3>
      <div className="flex gap-2">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-800 hover:border-violet-500/50 hover:bg-violet-600/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          <Linkedin className="w-4 h-4 text-zinc-400" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-800 hover:border-violet-500/50 hover:bg-violet-600/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          <Twitter className="w-4 h-4 text-zinc-400" />
        </a>
        <button
          onClick={handleCopyLink}
          aria-label="Copy link"
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-800 hover:border-violet-500/50 hover:bg-violet-600/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-500" />
          ) : (
            <Link2 className="w-4 h-4 text-zinc-400" />
          )}
        </button>
      </div>
    </div>
  );
}
