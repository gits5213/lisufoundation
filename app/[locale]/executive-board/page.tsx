"use client";

import { motion } from "framer-motion";
import { Users, User, Award, Calendar, Gavel } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

export default function ExecutiveBoardPage() {
  const t = useTranslations("executiveBoard");
  const searchParams = useSearchParams();
  const memberType = searchParams.get("type");

  const committeeStructure = t.raw("committeeStructure") as Array<{
    position: string;
    description: string;
  }>;

  const meetingInfo = t.raw("meetingInfo") as Array<{
    title: string;
    description: string;
  }>;

  const iconMap = [Calendar, Gavel, Award];

  // Committee members - updated with actual data
  const committeeMembers = [
    { name: t("toBeAnnounced"), position: committeeStructure[0]?.position || "" },
    { name: t("executiveDirector"), position: committeeStructure[1]?.position || "" },
    { name: t("toBeAnnounced"), position: committeeStructure[2]?.position || "" },
    { name: t("toBeAnnounced"), position: committeeStructure[3]?.position || "" },
    { name: t("toBeAnnounced"), position: committeeStructure[4]?.position || "" },
    { name: t("toBeAnnounced"), position: committeeStructure[5]?.position || "" },
    { name: t("toBeAnnounced"), position: committeeStructure[6]?.position || "" },
  ];

  // Placeholder members for different types - to be updated with real data
  const lifetimeMembers = [
    { name: t("toBeAnnounced"), position: "Lifetime Member" },
    { name: t("toBeAnnounced"), position: "Lifetime Member" },
    { name: t("toBeAnnounced"), position: "Lifetime Member" },
  ];

  const generalMembers = [
    { name: t("toBeAnnounced"), position: "General Member" },
    { name: t("toBeAnnounced"), position: "General Member" },
    { name: t("toBeAnnounced"), position: "General Member" },
    { name: t("toBeAnnounced"), position: "General Member" },
    { name: t("toBeAnnounced"), position: "General Member" },
  ];

  const honoraryMembers = [
    { name: t("toBeAnnounced"), position: "Honorary Member" },
    { name: t("toBeAnnounced"), position: "Honorary Member" },
  ];

  // Determine which members to display based on query parameter
  let displayedMembers = committeeMembers;
  let pageTitle = t("title");
  let pageSubtitle = t("subtitle");
  let membersTitle = t("membersTitle");
  let membersSubtitle = t("membersSubtitle");

  if (memberType === "lifetime") {
    displayedMembers = lifetimeMembers;
    pageTitle = t("lifetimeMembersTitle");
    pageSubtitle = t("lifetimeMembersSubtitle");
    membersTitle = t("lifetimeMembersTitle");
    membersSubtitle = t("lifetimeMembersSubtitle");
  } else if (memberType === "general") {
    displayedMembers = generalMembers;
    pageTitle = t("generalMembersTitle");
    pageSubtitle = t("generalMembersSubtitle");
    membersTitle = t("generalMembersTitle");
    membersSubtitle = t("generalMembersSubtitle");
  } else if (memberType === "honorary") {
    displayedMembers = honoraryMembers;
    pageTitle = t("honoraryMembersTitle");
    pageSubtitle = t("honoraryMembersSubtitle");
    membersTitle = t("honoraryMembersTitle");
    membersSubtitle = t("honoraryMembersSubtitle");
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{pageTitle}</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              {pageSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committee Structure - Only show for Executive Board */}
      {!memberType && (
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
      )}

      {/* Members Section */}
      <section className={`py-16 ${!memberType ? "bg-white" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {membersTitle}
            </h2>
            <p className="text-lg text-gray-600">
              {membersSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {displayedMembers.map((member, index) => (
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

      {/* Meeting Information - Only show for Executive Board */}
      {!memberType && (
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
      )}
    </div>
  );
}
