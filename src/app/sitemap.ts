import type { MetadataRoute } from "next";

const BASE = "https://antoinetabet.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/projects",
    "/projects/askalan",
    "/projects/wealtheasy",
    "/projects/worlded",
    "/projects/nexus",
    "/projects/aspire",
    "/projects/click-a-mole",
    "/consulting",
    "/about",
    "/stack",
    "/poetry",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/projects/") ? 0.8 : 0.7,
  }));
}
