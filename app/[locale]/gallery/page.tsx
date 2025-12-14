"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon, Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getLocalizedHref = (href: string) => `/${locale}${href}`;

  const categories = t.raw("categories") as Array<{
    id: string;
    name: string;
  }>;

  const galleryItems = t.raw("items") as Array<{
    id: number;
    category: string;
    title: string;
    date: string;
    location: string;
  }>;

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

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

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
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
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-64 bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                    <ImageIcon className="h-16 w-16 text-primary-600 opacity-50" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary-600" />
                        {item.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary-600" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">{t("noItems")}</p>
            </div>
          )}
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
              href={getLocalizedHref("/contact")}
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
