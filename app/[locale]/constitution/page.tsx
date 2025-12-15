"use client";

import { motion } from "framer-motion";
import { FileText, MapPin, Users, Target, Award, Gavel, Calendar, DollarSign, AlertTriangle, Edit, XCircle, Heart, Image, UserCheck, Info, Scale } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ConstitutionPage() {
  const t = useTranslations("constitution");
  const tContact = useTranslations("contact");

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
            <p className="text-xl text-primary-100 leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* LiSu Meaning - Preface */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-600"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Info className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("preface.title")}</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{t("preface.description")}</p>
                  <p className="text-gray-600 text-sm italic leading-relaxed">{t("preface.note")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Constitution Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("section1.title")}</h2>
                  <p className="text-lg font-semibold text-primary-600 mb-2">{t("section1.name")}</p>
                  <p className="text-gray-700 leading-relaxed">{t("section1.description")}</p>
                </div>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("section2.title")}</h2>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <strong>{t("section2.headOffice")}</strong>
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-2">Village: {tContact("addressValue")}</p>
                  <p className="text-gray-700 leading-relaxed">{t("section2.branches")}</p>
                </div>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("section3.title")}</h2>
                  <p className="text-gray-700 leading-relaxed mb-2">{t("section3.description1")}</p>
                  <p className="text-gray-700 leading-relaxed">{t("section3.description2")}</p>
                </div>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("section4.title")}</h2>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t("section4.primaryTitle")}</h3>
                  <ul className="space-y-3 mb-8">
                    {(t.raw("section4.primaryObjectives") as string[]).map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-4">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{objective}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t("section4.additionalTitle")}</h3>
                  <ol className="space-y-3 list-decimal list-inside">
                    {(t.raw("section4.additionalObjectives") as string[]).map((objective, index) => (
                      <li key={index} className="text-gray-700 leading-relaxed ml-4">
                        {objective}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("section5.title")}</h2>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t("section5.categoriesTitle")}</h3>
                  <ol className="space-y-2 mb-6 list-decimal list-inside">
                    {(t.raw("section5.categories") as string[]).map((category, index) => (
                      <li key={index} className="text-gray-700 leading-relaxed ml-4">
                        {category}
                      </li>
                    ))}
                  </ol>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t("section5.qualificationsTitle")}</h3>
                  <ul className="space-y-3">
                    {(t.raw("section5.qualifications") as string[]).map((qualification, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-4">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Gavel className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("section6.title")}</h2>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t("section6.structureTitle")}</h3>
                  <ol className="space-y-2 mb-6 list-decimal list-inside">
                    {(t.raw("section6.structure") as string[]).map((position, index) => (
                      <li key={index} className="text-gray-700 leading-relaxed ml-4">
                        {position}
                      </li>
                    ))}
                  </ol>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t("section6.termTitle")}</h3>
                  <p className="text-gray-700 leading-relaxed">{t("section6.term")}</p>
                </div>
              </div>
            </motion.div>

            {/* Section 7 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("section7.title")}</h2>
                  <ol className="space-y-3 list-decimal list-inside">
                    {(t.raw("section7.meetings") as string[]).map((meeting, index) => (
                      <li key={index} className="text-gray-700 leading-relaxed ml-4">
                        {meeting}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Section 8 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("section8.title")}</h2>
                  <ol className="space-y-3 list-decimal list-inside">
                    {(t.raw("section8.points") as string[]).map((point, index) => (
                      <li key={index} className="text-gray-700 leading-relaxed ml-4">
                        {point}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Section 9 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("section9.title")}</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{t("section9.description")}</p>
                  <ul className="space-y-3">
                    {(t.raw("section9.violations") as string[]).map((violation, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-4">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{violation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 10 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Edit className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("section10.title")}</h2>
                  <p className="text-gray-700 leading-relaxed">{t("section10.description")}</p>
                </div>
              </div>
            </motion.div>

            {/* Section 11 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <XCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("section11.title")}</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{t("section11.description")}</p>
                  <ul className="space-y-3">
                    {(t.raw("section11.points") as string[]).map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-4">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 12 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("section12.title")}</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{t("section12.description")}</p>
                  <ul className="space-y-3">
                    {(t.raw("section12.principles") as string[]).map((principle, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-4">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 13 - Logo Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Image className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("section13.title")}</h2>
                  
                  {/* Three Human Figures */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-3">{t("section13.threeHumanFigures.title")}</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">{t("section13.threeHumanFigures.description1")}</p>
                    <p className="text-gray-700 leading-relaxed">{t("section13.threeHumanFigures.description2")}</p>
                  </div>

                  {/* Central Figure */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-3">{t("section13.centralFigure.title")}</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">{t("section13.centralFigure.description1")}</p>
                    <p className="text-gray-700 leading-relaxed">{t("section13.centralFigure.description2")}</p>
                  </div>

                  {/* Curved Base */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-3">{t("section13.curvedBase.title")}</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">{t("section13.curvedBase.description1")}</p>
                    <p className="text-gray-700 leading-relaxed">{t("section13.curvedBase.description2")}</p>
                  </div>

                  {/* Circular Border */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-3">{t("section13.circularBorder.title")}</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">{t("section13.circularBorder.description1")}</p>
                    <p className="text-gray-700 leading-relaxed">{t("section13.circularBorder.description2")}</p>
                  </div>

                  {/* Green and Gold Colors */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-3">{t("section13.colors.title")}</h3>
                    <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-green-600">{t("section13.colors.green")}</span> {t("section13.colors.greenDescription")}</p>
                    <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-yellow-600">{t("section13.colors.gold")}</span> {t("section13.colors.goldDescription")}</p>
                  </div>

                  {/* Overall Meaning */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-primary-700 mb-3">{t("section13.overallMeaning.title")}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{t("section13.overallMeaning.description")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 14 - Membership Workflow & Contribution Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("section14.title")}</h2>
                  
                  {/* General Membership Principles */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-4">{t("section14.generalPrinciples.title")}</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">{t("section14.generalPrinciples.description")}</p>
                    <ul className="space-y-2">
                      {(t.raw("section14.generalPrinciples.principles") as string[]).map((principle, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Membership Categories */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-4">{t("section14.categories.title")}</h3>
                    <ul className="space-y-2">
                      {(t.raw("section14.categories.list") as string[]).map((category, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-3">
                            <span className="text-white text-sm font-semibold">{index + 1}</span>
                          </div>
                          <span className="text-gray-700 leading-relaxed font-medium">{category}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Membership Qualification & Workflow */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-4">{t("section14.workflow.title")}</h3>
                    
                    {/* Step 1: Volunteer */}
                    <div className="mb-6 pl-4 border-l-4 border-primary-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t("section14.workflow.step1.title")}</h4>
                      <p className="text-gray-700 leading-relaxed mb-3">{t("section14.workflow.step1.description")}</p>
                      <p className="text-gray-700 font-semibold mb-2">{t("section14.workflow.step1.eligibilityTitle")}</p>
                      <ul className="space-y-2 mb-4">
                        {(t.raw("section14.workflow.step1.eligibility") as string[]).map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-700 font-semibold mb-2">{t("section14.workflow.step1.periodTitle")}</p>
                      <ul className="space-y-2">
                        {(t.raw("section14.workflow.step1.period") as string[]).map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Step 2: General Member */}
                    <div className="mb-6 pl-4 border-l-4 border-primary-500">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t("section14.workflow.step2.title")}</h4>
                      <p className="text-gray-700 leading-relaxed mb-3">{t("section14.workflow.step2.description")}</p>
                      <p className="text-gray-700 font-semibold mb-2">{t("section14.workflow.step2.eligibilityTitle")}</p>
                      <ul className="space-y-2 mb-4">
                        {(t.raw("section14.workflow.step2.eligibility") as string[]).map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-700 font-semibold mb-2">{t("section14.workflow.step2.contributionTitle")}</p>
                      <ul className="space-y-2">
                        {(t.raw("section14.workflow.step2.contribution") as string[]).map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Step 3: Honorary Member */}
                    <div className="mb-6 pl-4 border-l-4 border-primary-400">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t("section14.workflow.step3.title")}</h4>
                      <p className="text-gray-700 font-semibold mb-2">{t("section14.workflow.step3.eligibilityTitle")}</p>
                      <ul className="space-y-2 mb-4">
                        {(t.raw("section14.workflow.step3.eligibility") as string[]).map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-700 font-semibold mb-2">{t("section14.workflow.step3.contributionTitle")}</p>
                      <ul className="space-y-2 mb-4">
                        {(t.raw("section14.workflow.step3.contribution") as string[]).map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-700 font-semibold mb-2">{t("section14.workflow.step3.statusTitle")}</p>
                      <ul className="space-y-2">
                        {(t.raw("section14.workflow.step3.status") as string[]).map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Step 4: Lifetime Member */}
                    <div className="mb-6 pl-4 border-l-4 border-primary-300">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t("section14.workflow.step4.title")}</h4>
                      <p className="text-gray-700 font-semibold mb-2">{t("section14.workflow.step4.eligibilityTitle")}</p>
                      <ul className="space-y-2 mb-4">
                        {(t.raw("section14.workflow.step4.eligibility") as string[]).map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-700 font-semibold mb-2">{t("section14.workflow.step4.contributionTitle")}</p>
                      <ul className="space-y-2 mb-4">
                        {(t.raw("section14.workflow.step4.contribution") as string[]).map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-700 font-semibold mb-2">{t("section14.workflow.step4.statusTitle")}</p>
                      <ul className="space-y-2">
                        {(t.raw("section14.workflow.step4.status") as string[]).map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Membership Termination */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-4">{t("section14.termination.title")}</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">{t("section14.termination.description")}</p>
                    <ul className="space-y-2">
                      {(t.raw("section14.termination.reasons") as string[]).map((reason, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3">
                            <AlertTriangle className="h-3 w-3 text-red-600" />
                          </div>
                          <span className="text-gray-700 leading-relaxed">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Approval Authority */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-4">{t("section14.approval.title")}</h3>
                    <ul className="space-y-2">
                      {(t.raw("section14.approval.points") as string[]).map((point, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Declaration Clause */}
                  <div className="mt-8 pt-6 border-t-2 border-primary-200 bg-primary-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-4">{t("section14.declaration.title")}</h3>
                    <blockquote className="text-gray-700 leading-relaxed italic border-l-4 border-primary-600 pl-4">
                      {t("section14.declaration.text")}
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 15 - Legal Compliance & Registration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("section15.title")}</h2>
                  
                  {/* Registration */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-4">{t("section15.registration.title")}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{t("section15.registration.content")}</p>
                    <ul className="space-y-3">
                      {(t.raw("section15.registration.items") as string[]).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Financial Transparency */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-4">{t("section15.financialTransparency.title")}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{t("section15.financialTransparency.content")}</p>
                    <ul className="space-y-3">
                      {(t.raw("section15.financialTransparency.items") as string[]).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Governance */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-700 mb-4">{t("section15.governance.title")}</h3>
                    <ul className="space-y-3">
                      {(t.raw("section15.governance.items") as string[]).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Amendments */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-primary-700 mb-4">{t("section15.amendments.title")}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{t("section15.amendments.content")}</p>
                    <ul className="space-y-3">
                      {(t.raw("section15.amendments.items") as string[]).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
