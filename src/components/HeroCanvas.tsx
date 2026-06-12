"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// WebGL bundle stays out of the critical path: no SSR, loaded after first paint
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

function webglAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ?? canvas.getContext("webgl")
    );
  } catch {
    return false;
  }
}

export default function HeroCanvas() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!webglAvailable()) return;
    // Defer mounting until after first paint so the hero text stays the LCP
    const id = window.setTimeout(() => setReady(true), 150);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {ready && <HeroScene />}
    </div>
  );
}
