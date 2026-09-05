import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services", destination: "/safa-tying-service", permanent: true },
    { source: "/keywords/pagdi-tying-services", destination: "/pagdi-tying-service", permanent: true },
    { source: "/keywords/pagri-tying-services", destination: "/pagri-tying-service", permanent: true },
    { source: "/keywords/turban-tying-services", destination: "/turban-tying-service", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
