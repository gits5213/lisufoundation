# LiSu Foundation Website

A modern, responsive website for LiSu Foundation - a non-political, non-profit, humanitarian development organization based in Bangladesh.

## Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **TypeScript**: Type-safe codebase for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Internationalization (i18n)**: Full support for English and Bengali (বাংলা) languages
- **Language Switcher**: Easy language switching in the header

## Languages Supported

- **English (en)**: Default language
- **Bengali/Bangla (bn)**: Full Bengali translation

## Pages

- **Home**: Landing page with hero section, stats, programs overview, and mission
- **About**: Organization information, objectives, values, and office address
- **Programs**: Detailed information about all programs and services
- **Membership**: Membership application form with different membership categories
- **Executive Board**: Committee structure and current members
- **Contact**: Contact form and organization contact information
- **Donate**: Donation information and methods
- **Gallery**: Photo gallery showcasing activities (ready for image integration)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser
   - English: http://localhost:3000/en
   - Bengali: http://localhost:3000/bn

### Build for Production

```bash
npm run build
npm start
```

## Internationalization

The website uses `next-intl` for internationalization. Translation files are located in:
- `messages/en.json` - English translations
- `messages/bn.json` - Bengali translations

### Adding New Translations

1. Add the key-value pair to both `messages/en.json` and `messages/bn.json`
2. Use the translation in your component:
```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('common');
  return <h1>{t('home')}</h1>;
}
```

### Language Switcher

The language switcher is automatically included in the header. Users can switch between English and Bengali at any time.

## Project Structure

```
lisufoundation/
├── app/
│   ├── [locale]/              # Locale-based routing
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── donate/            # Donate page
│   │   ├── executive-board/   # Executive board page
│   │   ├── gallery/           # Gallery page
│   │   ├── membership/        # Membership page
│   │   ├── programs/          # Programs page
│   │   ├── layout.tsx         # Locale layout
│   │   ├── page.tsx           # Home page
│   │   ├── error.tsx          # Error boundary
│   │   └── loading.tsx        # Loading state
│   ├── layout.tsx             # Root layout (redirects to default locale)
│   └── globals.css            # Global styles
├── components/                 # Reusable components
│   ├── Header.tsx             # Navigation header with language switcher
│   ├── Footer.tsx             # Footer component
│   └── LanguageSwitcher.tsx   # Language switcher component
├── messages/                  # Translation files
│   ├── en.json               # English translations
│   └── bn.json               # Bengali translations
├── i18n.ts                    # i18n configuration
├── middleware.ts              # Next.js middleware for locale routing
└── package.json               # Dependencies
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`. The primary colors are defined in the `primary` and `accent` color palettes.

### Content

- Update organization information in respective page files
- Add real images to the gallery by replacing placeholder items
- Update contact information in Footer and Contact page
- Add actual committee member information in Executive Board page
- Update translations in `messages/en.json` and `messages/bn.json`

### Styling

The project uses Tailwind CSS. Custom styles can be added in `app/globals.css` or by extending the Tailwind configuration.

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **next-intl**: Internationalization library for Next.js

## Notes

- The website is ready for deployment to platforms like Vercel, Netlify, or any Node.js hosting service
- Image placeholders are used in the gallery - replace with actual images
- Contact forms currently show alerts - integrate with your backend/email service
- Membership forms need backend integration for actual submission
- Update social media links in Footer component when available
- All routes are prefixed with locale (e.g., `/en/about`, `/bn/about`)

## License

This project is created for LiSu Foundation.
