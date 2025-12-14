"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/programs", label: t("programs") },
    { href: "/membership", label: t("membership") },
    { href: "/executive-board", label: t("executiveBoard") },
    { href: "/gallery", label: t("gallery") },
    { href: "/contact", label: t("contact") },
    { href: "/donate", label: t("donate"), highlight: true },
  ];

  const getLocalizedHref = (href: string) => {
    return `/${locale}${href === "/" ? "" : href}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={getLocalizedHref("/")} className="flex items-center space-x-3 group">
            <div className="relative h-12 w-12 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="LiSu Foundation Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">{t("organizationName")}</span>
              <span className="text-xs text-gray-600">{t("tagline")}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getLocalizedHref(link.href)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  link.highlight
                    ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl"
                    : "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLocalizedHref(link.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    link.highlight
                      ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white"
                      : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
