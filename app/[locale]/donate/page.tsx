"use client";

import { motion } from "framer-motion";
import { Heart, CreditCard, Banknote, Smartphone, ArrowRight, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/routing";

export default function DonatePage() {
  const t = useTranslations("donate");
  
  const donationMethods = t.raw("methods") as Array<{
    title: string;
    description: string;
  }>;

  const donationMethodsWithIcons = [
    {
      ...donationMethods[0],
      icon: CreditCard,
      color: "from-blue-500 to-blue-600",
    },
    {
      ...donationMethods[1],
      icon: Smartphone,
      color: "from-green-500 to-green-600",
    },
    {
      ...donationMethods[2],
      icon: Banknote,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const donationAreas = t.raw("areas") as string[];
  const financialPrinciples = t.raw("principles") as string[];

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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl inline-block">
                <Heart className="h-12 w-12 text-white" fill="currentColor" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("methodsTitle")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("methodsSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {donationMethodsWithIcons.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center mb-4`}>
                  <method.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <Link
                  href="/contact"
                  className="text-primary-600 font-semibold hover:text-primary-700 flex items-center"
                >
                  {t("getDetails")}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("areasTitle")}
            </h2>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6 text-center">
                {t("areasSubtitle")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {donationAreas.map((area, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("transparencyTitle")}
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6 text-center">
                {t("transparencySubtitle")}
              </p>
              <ul className="space-y-4">
                {financialPrinciples.map((principle, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("ctaTitle")}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {t("ctaSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-accent-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t("contactUs")}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border-2 border-white/30"
              >
                {t("learnMore")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
