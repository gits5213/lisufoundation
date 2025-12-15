"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, User, FileText, CheckCircle, Clock, PlayCircle, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/routing";

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState("education");
  const [selectedStatus, setSelectedStatus] = useState<"active" | "completed" | "upcoming">("active");

  // Use next-intl's Link component which handles basePath automatically

  const categories = t.raw("categories") as Array<{
    id: string;
    name: string;
  }>;

  const programs = t.raw("programs") as Record<string, {
    active: Array<{
      referenceName: string;
      fullName: string;
      phone?: string;
      village: string;
      po: string;
      description: string;
    }>;
    completed: Array<{
      referenceName: string;
      fullName: string;
      phone?: string;
      village: string;
      po: string;
      description: string;
    }>;
    upcoming: Array<{
      referenceName: string;
      fullName: string;
      phone?: string;
      village: string;
      po: string;
      description: string;
    }>;
  }>;

  // Get programs for selected category and status
  const getPrograms = () => {
    const basePrograms = programs[selectedCategory] || { active: [], completed: [], upcoming: [] };
    const baseList = basePrograms[selectedStatus] || [];
    
    return baseList as Array<{
      referenceName: string;
      fullName: string;
      village: string;
      po: string;
      description: string;
      workInProgress?: boolean;
    }>;
  };

  const currentList = getPrograms();

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

      {/* Category Tabs */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Status Tabs */}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setSelectedStatus("active")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedStatus === "active"
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600"
              }`}
            >
              <PlayCircle className="h-4 w-4" />
              {t("status.active")}
            </button>
            <button
              onClick={() => setSelectedStatus("completed")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedStatus === "completed"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <CheckCircle className="h-4 w-4" />
              {t("status.completed")}
            </button>
            <button
              onClick={() => setSelectedStatus("upcoming")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedStatus === "upcoming"
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              <Clock className="h-4 w-4" />
              {t("status.upcoming")}
            </button>
          </div>
        </div>
      </section>

      {/* Programs Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {currentList.length > 0 ? (
              <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className={`${
                    selectedStatus === "active" ? "bg-green-50" :
                    selectedStatus === "completed" ? "bg-blue-50" : "bg-orange-50"
                  }`}>
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          {t("fields.referenceName")}
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          {t("fields.fullName")}
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {t("fields.village")}
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {t("fields.po")}
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {t("fields.phone")}
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          {t("fields.description")}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentList.map((program, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-all duration-150"
                        style={{
                          animation: `fadeIn 0.3s ease-in-out ${index * 0.05}s both`
                        }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-bold text-gray-900">{program.referenceName}</div>
                            {(program as any).workInProgress && (
                              <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">
                                {t("workInProgress")}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{program.fullName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{program.village}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{program.po}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{(program as any).phone || "-"}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-700 max-w-md">{program.description}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className={`h-16 w-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  selectedStatus === "active" ? "bg-green-100" :
                  selectedStatus === "completed" ? "bg-blue-100" : "bg-orange-100"
                }`}>
                  {selectedStatus === "active" ? (
                    <PlayCircle className={`h-8 w-8 ${
                      selectedStatus === "active" ? "text-green-600" :
                      selectedStatus === "completed" ? "text-blue-600" : "text-orange-600"
                    }`} />
                  ) : selectedStatus === "completed" ? (
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  ) : (
                    <Clock className="h-8 w-8 text-orange-600" />
                  )}
                </div>
                <p className="text-gray-600 text-lg">{t("noItems")}</p>
                <p className="text-gray-500 text-sm mt-2">{t("noItemsDescription")}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("shareTitle")}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {t("shareDescription")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t("contactUs")}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
