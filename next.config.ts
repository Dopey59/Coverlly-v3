import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // next.config.js
  reactStrictMode: true,
  images: {
    domains: ['files.cdn.printful.com'], // Add this line
  },
  env: {
    API_TOKEN: process.env.API_TOKEN,
  },
};

export default nextConfig;
