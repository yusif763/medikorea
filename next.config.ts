import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Only use in development, not recommended for production
  },
  reactStrictMode: true, // Optional: enables additional React warnings
  output: 'export',
  // Remove `swcMinify`, it's no longer supported as of Next.js 15+
};

export default nextConfig;
