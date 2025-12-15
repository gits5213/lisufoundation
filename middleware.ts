import createMiddleware from 'next-intl/middleware';
import { routing } from './routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // In development mode, redirect /lisufoundation/* to /* to avoid basePath issues
  // This ensures dev server doesn't try to serve assets with /lisufoundation prefix
  if (process.env.NODE_ENV === 'development') {
    const pathname = request.nextUrl.pathname;
    
    // Only redirect /lisufoundation paths that are not Next.js internal paths
    // Skip Next.js internal paths, API routes, and static files
    if (
      pathname.startsWith('/lisufoundation') &&
      !pathname.startsWith('/lisufoundation/_next') &&
      !pathname.startsWith('/lisufoundation/api') &&
      !pathname.match(/\/lisufoundation\/.*\.[a-z]+$/i)
    ) {
      const newPathname = pathname.replace('/lisufoundation', '') || '/';
      const url = request.nextUrl.clone();
      url.pathname = newPathname;
      // Preserve query string if present
      if (request.nextUrl.search) {
        url.search = request.nextUrl.search;
      }
      // Use 307 temporary redirect to avoid caching issues
      return NextResponse.redirect(url, { status: 307 });
    }
  }
  
  // Let next-intl middleware handle all other routing
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  // Exclude static files and API routes
  matcher: ['/', '/(bn|en)/:path*', '/lisufoundation/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
