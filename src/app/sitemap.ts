import type { MetadataRoute } from "next";
import { siteConfig, classFormats } from "@/lib/site-config";

// Required by `output: "export"` — emit this file at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/classes", "/pricing", "/practice", "/reviews", "/faq", "/contact"];
  const formatRoutes = classFormats.map((f) => `/classes/${f.slug}`);

  return [...staticRoutes, ...formatRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
