import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  // experimental: {
  //   ppr: 'incremental',
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.cdn.printful.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
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
          { key: 'x-robots-tag',
            value: 'index, follow', // Autorise l'indexation
          }, 
          {
            key: 'Cache-Control',
            value: 'public, max-age=600, stale-while-revalidate=1200', // Cache-Control pour toutes les requêtes
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy',
        destination: 'https://api.printful.com/store/products',
      },
    ];
  },
};

export default nextConfig;