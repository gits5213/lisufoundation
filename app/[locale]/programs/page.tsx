"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Home,
  Droplet,
  Stethoscope,
  HandHeart,
  Users,
  AlertTriangle,
  Briefcase,
  Heart,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/routing";

export default function ProgramsPage() {
  const t = useTranslations("programs");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  // Use next-intl's Link component which handles basePath automatically

  const iconMap: Record<string, typeof GraduationCap> = {
    education: GraduationCap,
    orphan: Users,
    water: Droplet,
    housing: Home,
    healthcare: Stethoscope,
    humanitarian: HandHeart,
    disaster: AlertTriangle,
    employment: Briefcase,
    funeral: Heart,
  };

  const colorMap: Record<string, string> = {
    education: "from-blue-500 to-blue-600",
    orphan: "from-orange-500 to-orange-600",
    water: "from-cyan-500 to-cyan-600",
    housing: "from-green-500 to-green-600",
    healthcare: "from-red-500 to-red-600",
    humanitarian: "from-purple-500 to-purple-600",
    disaster: "from-yellow-500 to-yellow-600",
    employment: "from-indigo-500 to-indigo-600",
    funeral: "from-gray-600 to-gray-700",
  };

  const programs = t.raw("programsList") as Array<{
    key: string;
    title: string;
    description: string;
    features: string[];
  }>;

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

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
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
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className={`md:w-1/3 bg-gradient-to-br ${color} p-8 flex items-center justify-center`}>
                      <Icon className="h-20 w-20 text-white" />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">{program.description}</p>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">{t("keyFeatures")}</h3>
                        <ul className="space-y-2 mb-6">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="flex-shrink-0 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center mt-0.5 mr-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={`/application?category=${program.key}`}
                          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                          {tCommon("apply")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("supportTitle")}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {t("supportDescription")}
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-accent-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t("donateNow")}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
