"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Target, Heart, Shield, Handshake, BookOpen } from "lucide-react";

export default function AboutPage() {
  const primaryObjectives = [
    "Provide comprehensive support to the poor and underprivileged",
    "Support welfare, education, and moral development of orphans and children in remote areas",
    "Ensure access to safe drinking water by installing tube wells and deep tube wells",
    "Construct houses and provide shelter for homeless and disadvantaged individuals",
    "Implement humanitarian programs including Ramadan food distribution, Qurbani, winter clothing, Iftar, and Sadaqah projects",
    "Conduct healthcare services, medical assistance, and other humanitarian welfare programs",
    "Build cooperation, compassion, and a humanitarian bridge between wealthy and underprivileged communities",
    "Carry out charity, Sadaqah, and welfare activities in accordance with Islamic values and principles",
    "Provide educational scholarships and financial assistance to poor and meritorious students",
    "Assist in funeral arrangements, burial, and graveyard-related support for deceased underprivileged Muslims",
  ];

  const additionalObjectives = [
    "Provide disaster relief during floods, storms, cyclones, or emergencies",
    "Create employment opportunities for the unemployed",
    "Collaborate with donors for special humanitarian projects",
    "Enhance community awareness and human development",
    "Engage Bangladeshi expatriates in social welfare activities",
  ];

  const values = [
    {
      icon: Shield,
      title: "Truthfulness & Integrity",
      description: "Operating with honesty and transparency in all our activities",
    },
    {
      icon: Heart,
      title: "Charity & Compassion",
      description: "Serving humanity with empathy and care for those in need",
    },
    {
      icon: Handshake,
      title: "Justice",
      description: "Ensuring fair and equitable distribution of resources and support",
    },
    {
      icon: BookOpen,
      title: "Islamic Values",
      description: "Following Islamic principles in all our humanitarian work",
    },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About LiSu Foundation</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              A voluntary, non-political, non-profit, humanitarian development organization
              dedicated to improving lives and serving humanity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 text-primary-600 mr-3" />
                Nature & Character
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                LiSu Foundation is a non-political, non-profit, humanitarian, and social welfare
                organization. We are dedicated to improving the lives of the poor, orphans, widows,
                disaster-affected people, and other underprivileged populations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-primary-600 mr-3" />
                Office Address
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Head Office:</strong>
                <br />
                Village: KAYA KORI, KANDAPARA (Baligange Bazar)
                <br />
                NAKLA, SHERPUR, MYMENSINGH, BANGLADESH
                <br />
                <br />
                Branches may be established anywhere in Bangladesh or abroad as necessary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary-600 mr-3" />
                Our Objectives
              </h2>
              <p className="text-lg text-gray-600">
                Our mission is guided by clear objectives to serve humanity effectively
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 mb-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Primary Objectives</h3>
              <ul className="space-y-4">
                {primaryObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 mr-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{objective}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Objectives</h3>
              <ul className="space-y-4">
                {additionalObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mt-1 mr-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{objective}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Islamic Ethical Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              LiSu Foundation operates based on core Islamic values and ethical principles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
