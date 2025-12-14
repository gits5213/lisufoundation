"use client";

import { motion } from "framer-motion";
import { FileText, MapPin, Users, Target, Award, Gavel, Calendar, DollarSign, AlertTriangle, Edit, XCircle, Heart, Image } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ConstitutionPage() {
  const t = useTranslations("constitution");

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
                  <p className="text-gray-700 leading-relaxed mb-2">{t("section2.address")}</p>
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
                  <Image className="h-6 w-6 text-white" />
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

          </div>
        </div>
      </section>
    </div>
  );
}
