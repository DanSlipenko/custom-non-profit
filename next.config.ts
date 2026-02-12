import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // Avoid Next.js inferring the monorepo/home directory as root.
    root: path.join(__dirname),
  },
};

export default nextConfig;
