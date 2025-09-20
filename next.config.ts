import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disable typed routes to avoid symlink/readlink issues under OneDrive (.next/types/*)
  typedRoutes: false,
  images:{
    qualities: [75, 100],
  }
};

export default nextConfig;
