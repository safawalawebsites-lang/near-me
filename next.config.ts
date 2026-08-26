import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services", destination: "/keywords/safa-tying-service", permanent: true },
    { source: "/keywords/pagdi-tying-services", destination: "/keywords/pagdi-tying-service", permanent: true },
    { source: "/keywords/pagri-tying-services", destination: "/keywords/pagri-tying-service", permanent: true },
    { source: "/keywords/turban-tying-services", destination: "/keywords/turban-tying-service", permanent: true }
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
