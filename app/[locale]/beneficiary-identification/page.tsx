"use client";

import { motion } from "framer-motion";
import { 
  Users, GraduationCap, Droplets, Home, Calendar, Heart, Handshake, 
  BookOpen, Cross, Shield, CheckCircle, XCircle, FileText, UserCheck 
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/routing";

export default function BeneficiaryIdentificationPage() {
  const t = useTranslations("beneficiaryIdentification");
  const locale = useLocale();

  const programs = [
    {
      icon: Users,
      key: "program1",
      title: t("programs.program1.title"),
      subtitle: t("programs.program1.subtitle"),
      application: t.raw("programs.program1.application") as string[],
      requiredInfo: t.raw("programs.program1.requiredInfo") as string[],
      verification: t.raw("programs.program1.verification") as string[],
      priority: t.raw("programs.program1.priority") as string[],
    },
    {
      icon: GraduationCap,
      key: "program2",
      title: t("programs.program2.title"),
      subtitle: t("programs.program2.subtitle"),
      confirmation: t.raw("programs.program2.confirmation") as string[],
      recommendation: t.raw("programs.program2.recommendation") as string[],
      verification: t.raw("programs.program2.verification") as string[],
    },
    {
      icon: Droplets,
      key: "program3",
      title: t("programs.program3.title"),
      subtitle: t("programs.program3.subtitle"),
      areaSelection: t.raw("programs.program3.areaSelection") as string[],
      communityApplication: t.raw("programs.program3.communityApplication") as string[],
      verification: t.raw("programs.program3.verification") as string[],
    },
    {
      icon: Home,
      key: "program4",
      title: t("programs.program4.title"),
      subtitle: t("programs.program4.subtitle"),
      applicantMust: t.raw("programs.program4.applicantMust") as string[],
      priority: t.raw("programs.program4.priority") as string[],
      verification: t.raw("programs.program4.verification") as string[],
    },
    {
      icon: Calendar,
      key: "program5",
      title: t("programs.program5.title"),
      subtitle: t("programs.program5.subtitle"),
      beneficiaryLists: t("programs.program5.beneficiaryLists"),
      priority: t.raw("programs.program5.priority") as string[],
      verification: t.raw("programs.program5.verification") as string[],
    },
    {
      icon: Heart,
      key: "program6",
      title: t("programs.program6.title"),
      subtitle: t("programs.program6.subtitle"),
      patientSubmission: t.raw("programs.program6.patientSubmission") as string[],
      priorityCases: t.raw("programs.program6.priorityCases") as string[],
      verification: t.raw("programs.program6.verification") as string[],
    },
    {
      icon: Handshake,
      key: "program7",
      title: t("programs.program7.title"),
      subtitle: t("programs.program7.subtitle"),
      programsDesigned: t.raw("programs.program7.programsDesigned") as string[],
      verification: t.raw("programs.program7.verification") as string[],
    },
    {
      icon: BookOpen,
      key: "program8",
      title: t("programs.program8.title"),
      subtitle: t("programs.program8.subtitle"),
      zakatCategories: t.raw("programs.program8.zakatCategories") as string[],
      verification: t.raw("programs.program8.verification") as string[],
    },
    {
      icon: GraduationCap,
      key: "program9",
      title: t("programs.program9.title"),
      subtitle: t("programs.program9.subtitle"),
      studentMust: t.raw("programs.program9.studentMust") as string[],
      recommendation: t.raw("programs.program9.recommendation") as string[],
      verification: t.raw("programs.program9.verification") as string[],
    },
    {
      icon: Cross,
      key: "program10",
      title: t("programs.program10.title"),
      subtitle: t("programs.program10.subtitle"),
      deceasedMust: t.raw("programs.program10.deceasedMust") as string[],
      immediateRequest: t.raw("programs.program10.immediateRequest") as string[],
      verification: t.raw("programs.program10.verification") as string[],
    },
  ];

  const antiCorruptionMeasures = t.raw("antiCorruption.measures") as { allowed: string[]; notAllowed: string[] };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-4">{t("subtitle")}</p>
            <p className="text-lg text-primary-200 italic">{t("tagline")}</p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-lg"
            >
              <p className="text-lg text-gray-700 leading-relaxed">{t("introduction")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("programsTitle")}</h2>
              <p className="text-lg text-gray-600">{t("programsSubtitle")}</p>
            </motion.div>

            <div className="space-y-8">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <motion.div
                    key={program.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                        <p className="text-lg text-primary-600 mb-6">{program.subtitle}</p>

                        {/* Eligibility Identification Process */}
                        <div className="mb-6">
                          <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-primary-600" />
                            {t("eligibilityTitle")}
                          </h4>
                          
                          {program.application && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("applicationSubmittedBy")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.application.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.requiredInfo && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("requiredInformation")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.requiredInfo.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.confirmation && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("confirmation")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.confirmation.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.recommendation && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("recommendationFrom")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.recommendation.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.areaSelection && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("areaSelectionBasedOn")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.areaSelection.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.communityApplication && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("communityApplicationSignedBy")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.communityApplication.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.applicantMust && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("applicantMust")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.applicantMust.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.beneficiaryLists && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("beneficiaryListsPrepared")}:</p>
                              <p className="text-gray-600 ml-4">{program.beneficiaryLists}</p>
                            </div>
                          )}

                          {program.patientSubmission && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("patientOrGuardianSubmits")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.patientSubmission.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.programsDesigned && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("programsDesignedAs")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.programsDesigned.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.zakatCategories && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("zakatDistributedAccordingTo")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.zakatCategories.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.studentMust && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("studentMust")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.studentMust.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.deceasedMust && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("deceasedMustBelongTo")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.deceasedMust.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.immediateRequest && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("immediateRequestFrom")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.immediateRequest.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.priority && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("priority")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.priority.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {program.priorityCases && (
                            <div className="mb-4">
                              <p className="font-semibold text-gray-700 mb-2">{t("priorityCases")}:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                {program.priorityCases.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Verification */}
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                            <UserCheck className="h-5 w-5 mr-2 text-primary-600" />
                            {t("verification")}
                          </h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                            {program.verification.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Corruption Measures */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 shadow-lg border-2 border-red-200"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">{t("antiCorruption.title")}</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">{t("antiCorruption.subtitle")}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Not Allowed */}
                <div>
                  <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                    <XCircle className="h-6 w-6 mr-2" />
                    {t("antiCorruption.notAllowed")}
                  </h3>
                  <ul className="space-y-2">
                    {antiCorruptionMeasures.notAllowed.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-red-500 mr-2">❌</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Allowed */}
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    {t("antiCorruption.allowed")}
                  </h3>
                  <ul className="space-y-2">
                    {antiCorruptionMeasures.allowed.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary-200" />
              <blockquote className="text-2xl md:text-3xl font-semibold italic leading-relaxed mb-4">
                "{t("finalStatement")}"
              </blockquote>
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
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("cta.title")}</h2>
              <p className="text-xl text-gray-600 mb-6">{t("cta.description")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/programs"
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  {t("cta.viewPrograms")}
                </Link>
                <Link
                  href="/how-it-works"
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  {t("cta.howItWorks")}
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
