"use client";

import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { FileText, Send, CheckCircle, AlertCircle, ClipboardCheck, Search, MapPin, Bell, Info } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/routing";
import { useSearchParams } from "next/navigation";

function ApplicationFormContent() {
  const t = useTranslations("application");
  const tGallery = useTranslations("gallery");
  const locale = useLocale();
  const searchParams = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    programCategory: "",
    referenceName: "",
    fullName: "",
    phone: "",
    village: "",
    po: "",
    description: "",
  });

  // Pre-fill category from URL parameter
  useEffect(() => {
    const category = searchParams?.get("category");
    if (category) {
      // Map program keys to gallery category IDs
      const categoryMap: Record<string, string> = {
        education: "education",
        healthcare: "healthcare",
        humanitarian: "humanitarian",
        water: "water",
        housing: "housing",
        disaster: "disaster",
        orphan: "education", // Orphan programs might map to education
        employment: "humanitarian", // Employment might map to humanitarian
        funeral: "humanitarian", // Funeral services might map to humanitarian
        "umrah-hajj": "umrah-hajj", // Umrah & Hajj Assistance program
      };
      
      const mappedCategory = categoryMap[category] || category;
      setFormData(prev => ({ ...prev, programCategory: mappedCategory }));
    }
  }, [searchParams]);

  // Get program categories from gallery translations
  const categories = tGallery.raw("categories") as Array<{
    id: string;
    name: string;
  }>;

  useEffect(() => {
    // Check if form was just submitted
    const submitted = sessionStorage.getItem("applicationSubmitted");
    if (submitted === "true") {
      setIsSubmitted(true);
      sessionStorage.removeItem("applicationSubmitted");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Generate reference name if not provided
      const referenceName = formData.referenceName || 
        `${formData.programCategory.toUpperCase().substring(0, 3)}-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`;
      
      const application = {
        ...formData,
        referenceName,
        submittedAt: new Date().toISOString(),
      };

      // Submit to Google Drive via Google Apps Script endpoint
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';
      
      if (!scriptUrl) {
        throw new Error('Google Script URL is not configured. Please contact the administrator.');
      }

      // Submit to Google Apps Script
      // Using no-cors mode for compatibility with static sites
      // Google Apps Script Web Apps handle CORS automatically
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(application),
      });

      // Note: With no-cors mode, we can't verify the response
      // But the request will be sent successfully if no error is thrown
      
      // Mark as submitted
      sessionStorage.setItem("applicationSubmitted", "true");
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        programCategory: formData.programCategory, // Keep category if coming from program page
        referenceName: "",
        fullName: "",
        phone: "",
        village: "",
        po: "",
        description: "",
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Program Verification Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Verification Process Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("verificationTitle")}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("verificationSubtitle")}
              </p>
            </div>

            {/* What You're Applying For */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 md:p-8 mb-8 border-l-4 border-primary-600"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Info className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t("verificationInfo")}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t("verificationInfoDesc")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Verification Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded mr-2">Step 1</span>
                      <h3 className="text-lg font-bold text-gray-900">{t("verificationStep1")}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("verificationStep1Desc")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-green-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Search className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded mr-2">Step 2</span>
                      <h3 className="text-lg font-bold text-gray-900">{t("verificationStep2")}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("verificationStep2Desc")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-purple-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded mr-2">Step 3</span>
                      <h3 className="text-lg font-bold text-gray-900">{t("verificationStep3")}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("verificationStep3Desc")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-orange-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded mr-2">Step 4</span>
                      <h3 className="text-lg font-bold text-gray-900">{t("verificationStep4")}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("verificationStep4Desc")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Important Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-4 md:p-6"
            >
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 font-medium">
                  {t("verificationNote")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {isSubmitted ? (
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("successTitle")}</h2>
                <p className="text-gray-600 mb-6">{t("successMessage")}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmitError(null);
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200"
                  >
                    {t("submitAnother")}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("formTitle")}</h2>
                  <p className="text-gray-600">
                    {t("formSubtitle")}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Program Category Dropdown */}
                  <div>
                    <label htmlFor="programCategory" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("programCategory")} *
                    </label>
                    <select
                      id="programCategory"
                      name="programCategory"
                      required
                      value={formData.programCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white"
                    >
                      <option value="">{t("selectCategory")}</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Reference Name */}
                  <div>
                    <label htmlFor="referenceName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("referenceName")}
                      <span className="text-gray-500 text-xs ml-2">({t("optional")})</span>
                    </label>
                    <input
                      type="text"
                      id="referenceName"
                      name="referenceName"
                      value={formData.referenceName}
                      onChange={handleChange}
                      placeholder={t("referenceNamePlaceholder")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">{t("referenceNameHint")}</p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("fullName")} *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t("fullNamePlaceholder")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("phone")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("phonePlaceholder")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Village */}
                    <div>
                      <label htmlFor="village" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("village")} *
                      </label>
                      <input
                        type="text"
                        id="village"
                        name="village"
                        required
                        value={formData.village}
                        onChange={handleChange}
                        placeholder={t("villagePlaceholder")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                    </div>

                    {/* P.O. */}
                    <div>
                      <label htmlFor="po" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("po")} *
                      </label>
                      <input
                        type="text"
                        id="po"
                        name="po"
                        required
                        value={formData.po}
                        onChange={handleChange}
                        placeholder={t("poPlaceholder")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("description")} *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={6}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder={t("descriptionPlaceholder")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-800">{submitError}</p>
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-4 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          {t("submitting") || "Submitting..."}
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          {t("submitApplication")}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function ApplicationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ApplicationFormContent />
    </Suspense>
  );
}
