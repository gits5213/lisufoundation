import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [],
  },
  // Suppress hydration warnings for framer-motion
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Ensure webpack handles modules correctly
  webpack: (config, { isServer }) => {
    return config;
  },
  // Disable trailing slash for GitHub Pages compatibility
  trailingSlash: false,
};

export default withNextIntl(nextConfig);
