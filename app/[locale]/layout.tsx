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
  
  return {
    title: 'LiSu Foundation - Humanitarian Development Organization',
    description: 'LiSu Foundation is a non-political, non-profit, humanitarian development organization dedicated to improving the lives of the poor, orphans, widows, and disaster-affected people in Bangladesh.',
    icons: {
      icon: `${basePath}/favicon.ico`,
      shortcut: `${basePath}/favicon.ico`,
      apple: `${basePath}/lisulogo.png`,
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

  const basePath = getBasePath();
  
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
        <link rel="icon" href={`${basePath}/lisulogo.png`} type="image/png" />
        <link rel="apple-touch-icon" href={`${basePath}/lisulogo.png`} />
      </head>
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
