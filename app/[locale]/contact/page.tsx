"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Users, Facebook, Linkedin, Github, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tExecutiveBoard = useTranslations("executiveBoard");
  const locale = useLocale();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100091330725436", label: tExecutiveBoard("socialMedia.facebook"), color: "hover:text-blue-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/zamanmd/", label: tExecutiveBoard("socialMedia.linkedin"), color: "hover:text-blue-700" },
    { icon: Github, href: "https://github.com/gits5213", label: tExecutiveBoard("socialMedia.github"), color: "hover:text-gray-800" },
    { icon: Globe, href: "https://mdszaman.com/", label: tExecutiveBoard("socialMedia.portfolio"), color: "hover:text-primary-600" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: t("address"),
      content: t("addressValue"),
      color: "from-blue-500 to-blue-600",
      showSocial: false,
    },
    {
      icon: Users,
      title: t("executiveDirectorLabel"),
      content: t("executiveDirectorName"),
      color: "from-indigo-500 to-indigo-600",
      showSocial: true,
    },
    {
      icon: Phone,
      title: t("phone"),
      content: t("phoneValue"),
      color: "from-green-500 to-green-600",
      showSocial: false,
    },
    {
      icon: Mail,
      title: t("email"),
      content: t("emailValue"),
      color: "from-purple-500 to-purple-600",
      showSocial: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information - Redesigned Layout */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            {/* Main Contact Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Left Column - Address & Phone */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t("address")}</h3>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {t("addressValue")}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t("phone")}</h3>
                      <a href="tel:+8801728014014" className="text-gray-600 hover:text-primary-600 transition-colors text-lg">
                        {t("phoneValue")}
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t("email")}</h3>
                      <a href={`mailto:${t("emailValue")}`} className="text-gray-600 hover:text-primary-600 transition-colors text-lg">
                        {t("emailValue")}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Executive Director */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-8 shadow-2xl text-white"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{t("executiveDirectorLabel")}</h3>
                    <p className="text-xl font-semibold text-primary-100 mb-6">
                      {t("executiveDirectorName")}
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/20">
                  <p className="text-sm text-primary-100 mb-4 font-medium">{t("connectWithUs")}</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                          aria-label={social.label}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary-600"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("subtitle")}
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {t("additionalInfo")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
