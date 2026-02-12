import type { MetadataRoute } from "next";

function getBaseUrl() {
  // Configure in production (e.g. https://yourchurch.org)
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  return "http://localhost:3000";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const routes = ["/", "/about", "/ministries", "/events", "/sermons", "/give", "/contact"];

  const now = new Date();
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
