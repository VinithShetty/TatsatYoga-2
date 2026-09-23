import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Emit plain static HTML into ./out so the site can be hosted anywhere —
   * GitHub Pages, Netlify, Cloudflare Pages, or any shared host. No Node
   * server required. Every route is already prerendered, so nothing is lost.
   */
  output: "export",
  // Static hosts serve /about as /about/index.html, so emit trailing-slash dirs.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
