"use client";

import { motion } from "framer-motion";
import { DollarSign, RotateCcw, Clock, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function RefundPolicyPage() {
  const t = useTranslations("legal.refund");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <DollarSign className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Policy Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-primary-600 mr-3" />
                {t("policy.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t("policy.content")}</p>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
                <p className="text-gray-700 font-semibold">{t("policy.note")}</p>
              </div>
            </motion.div>

            {/* Refund Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <RotateCcw className="h-6 w-6 text-primary-600 mr-3" />
                {t("conditions.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t("conditions.description")}</p>
              <ul className="space-y-3">
                {(t.raw("conditions.items") as string[]).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 text-primary-600 mr-3" />
                {t("process.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t("process.description")}</p>
              <ol className="space-y-3 list-decimal list-inside">
                {(t.raw("process.steps") as string[]).map((item, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed ml-4">{item}</li>
                ))}
              </ol>
            </motion.div>

            {/* Processing Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("processingTime.title")}</h2>
              <p className="text-gray-700 leading-relaxed">{t("processingTime.content")}</p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("contact.title")}</h2>
              <p className="text-gray-700 leading-relaxed">{t("contact.content")}</p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
