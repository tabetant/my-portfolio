"use client";

import { Linkedin, Twitter, Link2, Check } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6">
      <h3 className="text-zinc-900 font-bold text-lg mb-4">Share</h3>
      <div className="flex gap-2">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-200 hover:border-violet-300 hover:bg-violet-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          <Linkedin className="w-4 h-4 text-zinc-500 hover:text-violet-600" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-200 hover:border-violet-300 hover:bg-violet-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          <Twitter className="w-4 h-4 text-zinc-500 hover:text-violet-600" />
        </a>
        <button
          onClick={handleCopyLink}
          aria-label="Copy link"
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-200 hover:border-violet-300 hover:bg-violet-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-500" />
          ) : (
            <Link2 className="w-4 h-4 text-zinc-500 hover:text-violet-600" />
          )}
        </button>
      </div>
    </div>
  );
}
