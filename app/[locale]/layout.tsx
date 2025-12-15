import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Get basePath for static assets
const getBasePath = () => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.CUSTOM_DOMAIN === 'true' ? '' : '/lisufoundation';
  }
  return '';
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const basePath = getBasePath();
  
  // Use absolute paths for favicon to avoid issues with basePath in dev mode
  const faviconPath = process.env.NODE_ENV === 'production' 
    ? `${basePath}/favicon.ico`
    : '/favicon.ico';
  const logoPath = process.env.NODE_ENV === 'production'
    ? `${basePath}/lisulogo.png`
    : '/lisulogo.png';
  
  return {
    title: 'LiSu Foundation - Humanitarian Development Organization',
    description: 'LiSu Foundation is a non-political, non-profit, humanitarian development organization dedicated to improving the lives of the poor, orphans, widows, and disaster-affected people in Bangladesh.',
    icons: {
      icon: [
        { url: faviconPath, sizes: 'any' },
        { url: logoPath, type: 'image/png' },
      ],
      shortcut: faviconPath,
      apple: logoPath,
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });
  
  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
