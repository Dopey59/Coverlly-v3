import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // next.config.js
  reactStrictMode: true,
  images: {
    domains: ['files.cdn.printful.com'], // Add this line
  },
  env: {
    API_TOKEN : process.env.API_TOKEN,
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY : process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
    STRIPE_SECRET_KEY : process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET : process.env.STRIPE_WEBHOOK_SECRET
  },
};

export default nextConfig;
