"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-CA", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "America/Toronto",
});

export default function LocalTime() {
  // Empty until mounted so server and client render identical HTML
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return <span suppressHydrationWarning>&nbsp;— {time}</span>;
}
