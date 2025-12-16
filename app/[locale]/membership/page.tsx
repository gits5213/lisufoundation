"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Users, CheckCircle, UserCheck, Award, FileText, Heart, Send, AlertCircle } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function MembershipPage() {
  const t = useTranslations("membership");
  const tConstitution = useTranslations("constitution");
  const locale = useLocale();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    membershipType: "volunteer",
    occupation: "",
    reason: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const membershipTypes = t.raw("membershipTypes") as Array<{
    id: string;
    name: string;
    description: string;
  }>;

  const qualifications = t.raw("qualifications") as string[];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const membershipData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        formType: 'membership', // Identify this as a membership form
      };

      // Submit to Google Drive via Google Apps Script endpoint
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';
      
      if (!scriptUrl) {
        throw new Error('Google Script URL is not configured. Please contact the administrator.');
      }

      // Submit to Google Apps Script
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(membershipData),
      });

      // Mark as submitted
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        fullName: "",
        age: "",
        email: "",
        phone: "",
        address: "",
        membershipType: "volunteer",
        occupation: "",
        reason: "",
      });
    } catch (error) {
      console.error('Error submitting membership application:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const iconMap: Record<string, typeof Award> = {
    volunteer: Heart,
    lifetime: Award,
    general: Users,
    honorary: UserCheck,
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

      {/* Volunteer Section - Mandatory Requirement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-lg mb-12">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t("volunteer.title")}
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t("volunteer.description")}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">
                  {t("volunteer.eligibilityTitle")}
                </h3>
                <ul className="space-y-3">
                  {(tConstitution.raw("section14.workflow.step1.eligibility") as string[]).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-primary-200">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">
                  {t("volunteer.periodTitle")}
                </h3>
                <ul className="space-y-3">
                  {(tConstitution.raw("section14.workflow.step1.period") as string[]).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("categoriesTitle")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("categoriesSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {membershipTypes.map((type, index) => {
              const Icon = iconMap[type.id] || Users;
              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    formData.membershipType === type.id ? "ring-2 ring-primary-600" : ""
                  }`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Qualifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="h-6 w-6 text-primary-600 mr-3" />
              {t("qualificationsTitle")}
            </h3>
            <ul className="space-y-3">
              {qualifications.map((qualification, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{qualification}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("formTitle")}
            </h2>
            
            {isSubmitted ? (
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("successTitle")}</h3>
                <p className="text-gray-600 mb-6">{t("successMessage")}</p>
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
            ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-lg space-y-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("age")} *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min="18"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("membershipType")} *
                  </label>
                  <select
                    id="membershipType"
                    name="membershipType"
                    required
                    value={formData.membershipType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    {membershipTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("email")} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
              </div>

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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("address")} *
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("occupation")}
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("reason")} *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  required
                  rows={4}
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder={t("reasonPlaceholder")}
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

              <p className="text-sm text-gray-600 text-center">
                * {t("requiredFields")}
              </p>
            </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
