"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/routing";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrgChartOpen, setIsOrgChartOpen] = useState(false);
  const [isMobileOrgChartOpen, setIsMobileOrgChartOpen] = useState(false);
  const [basePath, setBasePath] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();

  // Detect basePath for GitHub Pages - check both pathname and window location
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check pathname first (from next-intl routing)
      const path = pathname || window.location.pathname;
      const detectedBasePath = path.startsWith('/lisufoundation') ? '/lisufoundation' : '';
      setBasePath(detectedBasePath);
    }
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOrgChartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const orgChartLinks = [
    { href: "/executive-board", label: t("executiveBoard") },
    { href: "/executive-board?type=lifetime", label: t("lifetimeMembers") },
    { href: "/executive-board?type=general", label: t("generalMembers") },
    { href: "/executive-board?type=honorary", label: t("honoraryMembers") },
    { href: "/constitution", label: t("constitution") },
  ];

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/programs", label: t("programs") },
    { href: "/membership", label: t("membership") },
    { href: "/donate", label: t("donate"), highlight: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-12 w-12 group-hover:scale-105 transition-transform">
              <Image
                src={`${basePath}/logo.png`}
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
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  link.highlight
                    ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl"
                    : "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Org Chart Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOrgChartOpen(!isOrgChartOpen)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-1 ${
                  pathname.includes("/executive-board") || pathname.includes("/constitution")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                }`}
              >
                <span>{t("orgChart")}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isOrgChartOpen ? "rotate-180" : ""}`} />
              </button>

              {isOrgChartOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {orgChartLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOrgChartOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
                  href={link.href}
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
              
              {/* Mobile Org Chart Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileOrgChartOpen(!isMobileOrgChartOpen)}
                  className={`w-full px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-between ${
                    pathname.includes("/executive-board") || pathname.includes("/constitution")
                      ? "text-primary-600 bg-primary-50"
                      : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  }`}
                >
                  <span>{t("orgChart")}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileOrgChartOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isMobileOrgChartOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {orgChartLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => {
                          setIsMobileOrgChartOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
