import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only enable static export for production builds, not dev mode
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  // Set basePath based on CUSTOM_DOMAIN environment variable (only for production builds)
  // If CUSTOM_DOMAIN is true, use root path (for custom domain)
  // Otherwise, use repository name as base path
  ...(process.env.NODE_ENV === 'production' && {
    basePath: process.env.CUSTOM_DOMAIN === 'true' ? '' : '/lisufoundation',
    assetPrefix: process.env.CUSTOM_DOMAIN === 'true' ? '' : '/lisufoundation',
  }),
  images: {
    unoptimized: process.env.NODE_ENV === 'production', // Required for static export
    remotePatterns: [],
  },
  // Suppress hydration warnings for framer-motion
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Ensure webpack handles modules correctly
  webpack: (config, { isServer, webpack }) => {
    // Fix for MODULE_NOT_FOUND errors - prevent webpack from trying to resolve server-only modules on client
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        dns: false,
        child_process: false,
        path: false,
        crypto: false,
        stream: false,
        util: false,
        buffer: false,
        process: false,
      };
    }
    
    // Improve module resolution and prevent chunk loading errors
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
      '.jsx': ['.jsx', '.tsx'],
    };
    
    // Enhanced module resolution
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      'node_modules',
    ];
    
    // Prevent webpack from creating problematic chunks
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        chunks: 'all',
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            reuseExistingChunk: true,
          },
        },
      },
    };
    
    // Fix for webpack runtime errors - ensure proper module format
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    
    // Fix for "exports is not defined" error
    if (isServer) {
      // For server-side, ensure proper CommonJS/ESM handling
      config.output = {
        ...config.output,
        libraryTarget: 'commonjs2',
      };
    }
    
    // Ignore warnings about missing modules during development
    if (process.env.NODE_ENV === 'development') {
      config.ignoreWarnings = [
        /Failed to parse source map/,
        /Module not found/,
        /Can't resolve/,
      ];
    }
    
    // Add plugin to handle missing modules gracefully (only for client)
    if (!isServer) {
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^\.\/locale$/,
          contextRegExp: /moment$/,
        })
      );
    }
    
    return config;
  },
  // Disable trailing slash for GitHub Pages compatibility
  trailingSlash: false,
};

export default withNextIntl(nextConfig);
