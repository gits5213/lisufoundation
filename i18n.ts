import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export const locales = ['en', 'bn'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = locales[0]; // fallback to default
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
