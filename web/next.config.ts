import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  output: "standalone",
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        {
          source: "/runs/:path*",
          destination: "http://127.0.0.1:9000/runs/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
