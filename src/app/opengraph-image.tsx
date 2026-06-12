import { ImageResponse } from "next/og";

export const alt = "Antoine Tabet — Building Intelligent Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Resolve a Google Font TTF at build time for Satori text rendering
async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!resource) throw new Error("font resource not found");
  const res = await fetch(resource[1]);
  return res.arrayBuffer();
}

export default async function OpenGraphImage() {
  const heading = "Building Intelligent Systems.";
  const meta =
    "ANTOINE TABET — COMPUTER ENGINEERING @ UOFT · DEAN'S LIST · AI & SOFTWARE";
  const font = await loadGoogleFont("Space Grotesk", 700, heading + meta);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(55% 50% at 70% 30%, rgba(124,58,237,0.35), transparent 70%)",
          fontFamily: "Space Grotesk",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#a78bfa",
            fontSize: 28,
            letterSpacing: 6,
          }}
        >
          AT © ANTOINE TABET
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#ffffff",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1.02,
          }}
        >
          <span>Building</span>
          <span style={{ color: "#a78bfa" }}>Intelligent</span>
          <span>Systems.</span>
        </div>
        <div
          style={{
            display: "flex",
            color: "#71717a",
            fontSize: 24,
            letterSpacing: 4,
          }}
        >
          {meta}
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Space Grotesk", data: font, weight: 700 }] }
  );
}
