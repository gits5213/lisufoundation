import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Always show the locale prefix
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  // Exclude all Next.js internal routes, API routes, static files, and fallback pages
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next (all Next.js internal routes including static, image, webpack, fallback, etc.)
     * - favicon.ico (favicon file)
     * - .well-known (well-known files)
     * - files with extensions (e.g. .png, .jpg, etc.)
     */
    '/((?!api|_next|favicon.ico|.well-known|.*\\..*).*)'
  ]
};
