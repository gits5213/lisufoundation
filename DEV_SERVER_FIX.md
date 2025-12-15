# Development Server Fix for "exports is not defined" Error

## Quick Fix Steps

If you encounter the "exports is not defined" error when accessing pages:

1. **Stop the development server** (Ctrl+C in terminal)

2. **Clear all caches:**
   ```bash
   npm run clean
   ```

3. **Restart the development server:**
   ```bash
   npm run dev
   ```

## What Was Fixed

The webpack configuration now:
- **Completely disables chunk splitting for server-side builds** (`splitChunks: false`)
- **Keeps chunk splitting enabled for client-side builds** (for optimization)
- **Ensures proper CommonJS format for server bundles** (`libraryTarget: 'commonjs2'`)

This prevents the "exports is not defined" error which occurs when webpack tries to create vendor chunks for server-side code.

## Why This Happens

Next.js uses different webpack configurations for server and client builds. When chunk splitting is applied to server-side code, it can create bundles that reference `exports` which isn't available in the server runtime context, causing the error.

## Prevention

Always restart the dev server after:
- Updating `next.config.mjs`
- Installing new dependencies
- Encountering module-related errors

Use `npm run dev:clean` for automatic cache clearing and restart.
