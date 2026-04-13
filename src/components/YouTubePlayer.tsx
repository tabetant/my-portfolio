"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function YouTubePlayer({
  videoId,
  title = "YouTube video player",
  className,
}: YouTubePlayerProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 shadow-2xl",
        className
      )}
    >
      {/* Skeleton / thumbnail placeholder */}
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-900 animate-pulse">
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
              <Play className="w-7 h-7 text-zinc-500 ml-1" />
            </div>
            <span className="text-zinc-500 text-sm font-medium">Loading video...</span>
          </div>
        </div>
      )}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        onLoad={() => setLoaded(true)}
        className="absolute top-0 left-0 w-full h-full border-0"
      />
    </div>
  );
}
