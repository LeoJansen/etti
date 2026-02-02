import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disable typed routes to avoid symlink/readlink issues under OneDrive (.next/types/*)
  typedRoutes: false,
  images:{
    formats: ["image/avif", "image/webp"],
    qualities: [60, 70, 75, 80, 85, 90, 100],
  }
};

export default nextConfig;
