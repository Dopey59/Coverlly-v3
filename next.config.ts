import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['files.cdn.printful.com', 'images.unsplash.com'],

  },
  env: {
    API_TOKEN: process.env.API_TOKEN,
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  },
  async headers() {
    return [
      {
        source: '/:path*', // Toutes les pages
        headers: [
          { key: 'x-robots-tag', value: 'index, follow' }, // Autorise l'indexation
        ],
      },
    ];
  },
};

export default nextConfig;
