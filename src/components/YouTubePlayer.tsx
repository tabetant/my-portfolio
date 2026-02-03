"use client";

import { cn } from "@/lib/utils";

interface YouTubePlayerProps {
    videoId: string;
    title?: string;
    className?: string;
}

export default function YouTubePlayer({ videoId, title = "YouTube video player", className }: YouTubePlayerProps) {
    return (
        <div className={cn("relative w-full aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl", className)}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
            />
        </div>
    );
}
