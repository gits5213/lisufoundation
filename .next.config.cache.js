// Cache configuration helper
// This file helps prevent MODULE_NOT_FOUND errors by ensuring proper cache handling

module.exports = {
  // Clear cache on module resolution errors
  clearCacheOnError: true,
  
  // Maximum cache age in milliseconds (24 hours)
  maxCacheAge: 86400000,
  
  // Directories to clear on error
  cacheDirectories: [
    '.next',
    'node_modules/.cache',
    '.next/cache',
  ],
};
