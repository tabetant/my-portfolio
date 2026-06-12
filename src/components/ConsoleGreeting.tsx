"use client";

import { useEffect } from "react";

export default function ConsoleGreeting() {
  useEffect(() => {
    console.log(
      "%cAT © Antoine Tabet" +
        "%c\n\nBuilt with Next.js, Three.js, and native CSS scroll-driven animations." +
        "\nCurious how it works? github.com/tabetant" +
        "\nHiring? antoine.tabet@mail.utoronto.ca",
      "color:#a78bfa;font-size:16px;font-weight:bold;font-family:monospace",
      "color:#71717a;font-size:12px;font-family:monospace"
    );
  }, []);

  return null;
}
