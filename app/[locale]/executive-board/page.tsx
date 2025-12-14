"use client";

import { motion } from "framer-motion";
import { Users, User, Award, Calendar, Gavel } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ExecutiveBoardPage() {
  const t = useTranslations("executiveBoard");

  const committeeStructure = t.raw("committeeStructure") as Array<{
    position: string;
    description: string;
  }>;

  const meetingInfo = t.raw("meetingInfo") as Array<{
    title: string;
    description: string;
  }>;

  const iconMap = [Calendar, Gavel, Award];

  // Placeholder for actual committee members - to be updated with real data
  const committeeMembers = [
    { name: t("toBeAnnounced"), position: committeeStructure[0]?.position || "" },
    { name: t("toBeAnnounced"), position: committeeStructure[1]?.position || "" },
    { name: t("toBeAnnounced"), position: committeeStructure[2]?.position || "" },
    { name: t("toBeAnnounced"), position: committeeStructure[3]?.position || "" },
    { name: t("toBeAnnounced"), position: committeeStructure[4]?.position || "" },
    { name: t("toBeAnnounced"), position: committeeStructure[5]?.position || "" },
    { name: t("toBeAnnounced"), position: committeeStructure[6]?.position || "" },
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

      {/* Committee Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary-600 mr-3" />
              {t("structureTitle")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("structureSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {committeeStructure.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{role.position}</h3>
                <p className="text-sm text-gray-600">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("membersTitle")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("membersSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {committeeMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("governanceTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {meetingInfo.map((info, index) => {
              const Icon = iconMap[index] || Calendar;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
