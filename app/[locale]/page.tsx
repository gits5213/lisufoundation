"use client";

import { Link } from "@/routing";
import { ArrowRight, Heart, Users, GraduationCap, Home as HomeIcon, Droplet, Stethoscope, HandHeart } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  // Use next-intl's Link component which handles basePath automatically

  const iconMap: Record<string, typeof GraduationCap> = {
    education: GraduationCap,
    housing: HomeIcon,
    water: Droplet,
    healthcare: Stethoscope,
    humanitarian: HandHeart,
    orphan: Users,
  };

  const colorMap: Record<string, string> = {
    education: "from-blue-500 to-blue-600",
    housing: "from-green-500 to-green-600",
    water: "from-cyan-500 to-cyan-600",
    healthcare: "from-red-500 to-red-600",
    humanitarian: "from-purple-500 to-purple-600",
    orphan: "from-orange-500 to-orange-600",
  };

  const programs = t.raw("programsList") as Array<{
    key: string;
    title: string;
    description: string;
  }>;

  const stats = [
    { number: "500+", label: t("stats.familiesHelped") },
    { number: "200+", label: t("stats.studentsSupported") },
    { number: "50+", label: t("stats.tubeWellsInstalled") },
    { number: "100+", label: t("stats.housesBuilt") },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl inline-block">
                <Heart className="h-12 w-12 text-white" fill="currentColor" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t("heroTitle")}
              <span className="block text-accent-300 mt-2">{t("heroSubtitle")}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 leading-relaxed">
              {t("heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-accent-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {tCommon("donateNow")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border-2 border-white/30"
              >
                {tCommon("learnMore")}
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("programsTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("programsDescription")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = iconMap[program.key] || GraduationCap;
              const color = colorMap[program.key] || "from-blue-500 to-blue-600";
              
              return (
                <motion.div
                  key={program.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/programs"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {tCommon("viewAll")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("missionTitle")}</h2>
              <p className="text-xl md:text-2xl leading-relaxed text-primary-100 mb-8">
                {t("missionDescription")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="font-semibold">{t("missionBadges.nonPolitical")}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="font-semibold">{t("missionBadges.nonProfit")}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="font-semibold">{t("missionBadges.humanitarian")}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="font-semibold">{t("missionBadges.islamicValues")}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("ctaTitle")}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {t("ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t("becomeMember")}
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-primary-600"
              >
                {t("makeDonation")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
