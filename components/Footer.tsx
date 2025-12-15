"use client";

import Image from "next/image";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Users, Linkedin, Github, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/routing";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // Initialize with default basePath for GitHub Pages (will be updated on client if different)
  const [basePath, setBasePath] = useState('/lisufoundation');
  const t = useTranslations("footer");
  const tCommon = useTranslations("common");
  const tContact = useTranslations("contact");
  const locale = useLocale();

  // Detect basePath for GitHub Pages and update if needed
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      setBasePath(path.startsWith('/lisufoundation') ? '/lisufoundation' : '');
    }
  }, []);

  // Use next-intl's Link component which handles basePath automatically

  const footerLinks = {
    organization: [
      { href: "/about", label: tCommon("about") },
      { href: "/programs", label: tCommon("programs") },
      { href: "/executive-board", label: tCommon("executiveBoard") },
      { href: "/membership", label: tCommon("membership") },
    ],
    support: [
      { href: "/donate", label: tCommon("donate") },
      { href: "/how-it-works", label: tCommon("howItWorks") },
      { href: "/contact", label: tCommon("contact") },
      { href: "/gallery", label: tCommon("gallery") },
    ],
    legal: [
      { href: "/legal/privacy", label: tCommon("legal.privacy") },
      { href: "/legal/terms", label: tCommon("legal.terms") },
      { href: "/legal/accessibility", label: tCommon("legal.accessibility") },
      { href: "/legal/disclaimer", label: tCommon("legal.disclaimer") },
      { href: "/legal/refund", label: tCommon("legal.refund") },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image
                  src={`${basePath}/lisulogo.png`}
                  alt="LiSu Foundation Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">{tCommon("organizationName")}</span>
            </div>
            <p className="text-sm leading-relaxed">
              {t("description")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("organization")}</h3>
            <ul className="space-y-2">
              {footerLinks.organization.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("support")}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("legal")}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="whitespace-pre-line">
                  {tContact("addressValue")}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="font-medium">{t("executiveDirector")}:</span><br />
                    {t("executiveDirectorName")}
                  </div>
                  <div className="flex space-x-3 mt-2">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors" aria-label="Facebook">
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors" aria-label="Portfolio">
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+8801728014014" className="hover:text-primary-400 transition-colors">
                  {tContact("phoneValue")}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:" className="hover:text-primary-400 transition-colors">
                  info@lisufoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              © {currentYear} {tCommon("organizationName")}. {t("rights")}
            </p>
            <p className="text-sm flex items-center space-x-1">
              {locale === 'bn' ? (
                <>
                  <span>{t("madeWith")}</span>
                  <Heart className="h-4 w-4 text-primary-400" fill="currentColor" />
                </>
              ) : (
                <>
                  <span>{t("madeWith")}</span>
                  <Heart className="h-4 w-4 text-primary-400" fill="currentColor" />
                  <span>{t("forHumanity")}</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
