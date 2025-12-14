import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for GitHub Pages
  // Set basePath based on CUSTOM_DOMAIN environment variable
  // If CUSTOM_DOMAIN is true, use root path (for custom domain)
  // Otherwise, use repository name as base path
  basePath: process.env.CUSTOM_DOMAIN === 'true' ? '' : '/lisufoundation',
  assetPrefix: process.env.CUSTOM_DOMAIN === 'true' ? '' : '/lisufoundation',
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
