import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/runs/:path*",
        destination: "http://localhost:9000/runs/:path*",
      },
    ];
  },
};

export default nextConfig;
