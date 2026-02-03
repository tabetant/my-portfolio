"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

interface VideoPlayerProps {
    bucket: string;
    filename: string;
    poster?: string;
    className?: string;
}

export default function VideoPlayer({ bucket, filename, poster, className }: VideoPlayerProps) {
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchVideo() {
            try {
                setLoading(true);
                const { data } = supabase.storage.from(bucket).getPublicUrl(filename);

                if (data?.publicUrl) {
                    setVideoUrl(data.publicUrl);
                } else {
                    setError("Failed to retrieve video URL");
                }
            } catch (err) {
                console.error("Error fetching video:", err);
                setError("Error loading video");
            } finally {
                // We keep loading state true until video is ready to play (handled by onCanPlay)
                // asking for url is fast, buffering is slow.
                // But for UX, let's just show loader until we have the URL and the video element mounts
            }
        }

        fetchVideo();
    }, [bucket, filename]);

    return (
        <div className={`relative bg-slate-900 overflow-hidden ${className}`}>
            {loading && !error && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 z-10 transition-opacity">
                    <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
                </div>
            )}

            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950 text-rose-400">
                    <p>{error}</p>
                </div>
            )}

            {videoUrl && (
                <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    poster={poster}
                    onCanPlay={() => setLoading(false)}
                >
                    <source src={videoUrl} type="video/mp4" />
                    <source src={videoUrl} type="video/quicktime" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
}
