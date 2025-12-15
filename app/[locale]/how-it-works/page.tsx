"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle, ClipboardCheck, UserCheck, Rocket, Shield, ArrowDown, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/routing";

export default function HowItWorksPage() {
  const t = useTranslations("howItWorks");
  const locale = useLocale();

  const steps = [
    {
      icon: FileText,
      key: "step1",
      title: t("steps.step1.title"),
      description: t("steps.step1.description").replace("(add programs link)", ""),
    },
    {
      icon: CheckCircle,
      key: "step2",
      title: t("steps.step2.title"),
      description: t("steps.step2.description"),
    },
    {
      icon: ClipboardCheck,
      key: "step3",
      title: t("steps.step3.title"),
      description: t("steps.step3.description"),
    },
    {
      icon: UserCheck,
      key: "step4",
      title: t("steps.step4.title"),
      description: t("steps.step4.description"),
    },
    {
      icon: Rocket,
      key: "step5",
      title: t("steps.step5.title"),
      description: t("steps.step5.description"),
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
            <p className="text-xl text-primary-100 leading-relaxed">{t("subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("flowchart.title")}</h2>
              <p className="text-lg text-gray-600">{t("flowchart.subtitle")}</p>
            </motion.div>

            {/* Desktop Flowchart */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-start justify-between relative">
                  {/* Flow lines */}
                  <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 z-0"></div>
                  
                  <div className="flex items-start justify-between w-full relative z-10">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <motion.div
                          key={step.key}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.15 }}
                          className="flex flex-col items-center flex-1"
                        >
                          {/* Step Card */}
                          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-4 shadow-lg mb-4 w-full max-w-[200px] hover:scale-105 transition-transform">
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                                <Icon className="h-8 w-8 text-white" />
                              </div>
                              <div className="w-8 h-8 bg-white text-primary-600 rounded-full flex items-center justify-center text-sm font-bold mb-2">
                                {index + 1}
                              </div>
                              <h3 className="text-sm font-bold text-white text-center leading-tight">{step.title}</h3>
                            </div>
                          </div>
                          
                          {/* Arrow */}
                          {index < steps.length - 1 && (
                            <div className="absolute top-20 right-[-60px]">
                              <ArrowRight className="h-6 w-6 text-primary-500" />
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Flowchart */}
            <div className="lg:hidden">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="space-y-6 relative">
                  {/* Vertical flow line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200"></div>
                  
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4 relative"
                      >
                        {/* Icon and Number */}
                        <div className="flex-shrink-0 relative z-10">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-2 mx-auto border-4 border-white">
                            {index + 1}
                          </div>
                        </div>
                        
                        {/* Step Card */}
                        <div className="flex-grow bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 shadow-md">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                        </div>
                        
                        {/* Arrow */}
                        {index < steps.length - 1 && (
                          <div className="absolute left-12 top-20 z-10">
                            <ArrowDown className="h-6 w-6 text-primary-500" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="mt-2 text-center">
                          <span className="text-sm font-bold text-primary-600">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {step.key === "step1" ? (
                            <>
                              Individuals or volunteer members submit an application based on the specific humanitarian program they are seeking support for (
                              <Link href="/programs" className="text-primary-600 hover:text-primary-700 underline font-medium">
                                {locale === 'bn' ? 'প্রোগ্রাম' : 'programs'}
                              </Link>
                              ).
                            </>
                          ) : (
                            step.description
                          )}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("transparency.title")}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{t("transparency.description")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-white"
            >
              <h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>
              <p className="text-xl text-primary-100 mb-6">{t("cta.description")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/programs"
                  className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  {t("cta.viewPrograms")}
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-primary-800 text-white rounded-lg font-semibold hover:bg-primary-900 transition-colors"
                >
                  {t("cta.contactUs")}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
