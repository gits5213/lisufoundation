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
  BookOpen,
  UtensilsCrossed,
  Shirt,
  Heart,
} from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Providing educational scholarships and financial assistance to poor and meritorious students in schools, madrasas, and orphanages. We believe education is the key to breaking the cycle of poverty.",
      features: [
        "Scholarships for underprivileged students",
        "Financial assistance for school fees",
        "Educational materials and supplies",
        "Support for madrasa students",
        "Special programs for orphans",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Orphan & Children Support",
      description: "Comprehensive welfare programs focusing on education, moral development, and overall well-being of orphans and children in remote areas.",
      features: [
        "Educational support and mentorship",
        "Moral and character development",
        "Healthcare and nutrition programs",
        "Recreational activities",
        "Long-term care and support",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Droplet,
      title: "Safe Water Access",
      description: "Installing tube wells and deep tube wells to ensure access to safe drinking water for communities in need.",
      features: [
        "Tube well installation",
        "Deep tube well projects",
        "Water quality testing",
        "Community water management",
        "Maintenance and support",
      ],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Home,
      title: "Housing & Shelter",
      description: "Constructing houses and providing shelter for homeless and disadvantaged individuals, ensuring safe and dignified living conditions.",
      features: [
        "House construction projects",
        "Shelter for homeless families",
        "Home repairs and renovations",
        "Emergency housing assistance",
        "Community housing initiatives",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Services",
      description: "Providing medical assistance, healthcare services, and health awareness programs to improve the well-being of underprivileged communities.",
      features: [
        "Medical camps and check-ups",
        "Medication assistance",
        "Health awareness programs",
        "Emergency medical support",
        "Maternal and child healthcare",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: HandHeart,
      title: "Humanitarian Aid Programs",
      description: "Comprehensive humanitarian programs including Ramadan food distribution, Qurbani, winter clothing, Iftar, and Sadaqah projects.",
      features: [
        "Ramadan food distribution",
        "Qurbani (Eid al-Adha) programs",
        "Winter clothing distribution",
        "Iftar programs during Ramadan",
        "Sadaqah and charity projects",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: AlertTriangle,
      title: "Disaster Relief",
      description: "Providing immediate relief and support during floods, storms, cyclones, and other emergency situations.",
      features: [
        "Emergency food distribution",
        "Temporary shelter provision",
        "Medical aid during disasters",
        "Reconstruction support",
        "Long-term recovery assistance",
      ],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Briefcase,
      title: "Employment Opportunities",
      description: "Creating employment opportunities for the unemployed through skill development and job placement programs.",
      features: [
        "Skill development training",
        "Job placement assistance",
        "Micro-enterprise support",
        "Vocational training programs",
        "Entrepreneurship guidance",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Heart,
      title: "Funeral & Burial Support",
      description: "Assisting in funeral arrangements, burial, and graveyard-related support for deceased underprivileged Muslims.",
      features: [
        "Funeral arrangements",
        "Burial assistance",
        "Graveyard support",
        "Financial assistance for funeral costs",
        "Community support during bereavement",
      ],
      color: "from-gray-600 to-gray-700",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs & Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Comprehensive humanitarian programs designed to improve lives and build stronger communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className={`md:w-1/3 bg-gradient-to-br ${program.color} p-8 flex items-center justify-center`}>
                    <program.icon className="h-20 w-20 text-white" />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{program.description}</p>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center mt-0.5 mr-3">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Support Our Programs
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Your contribution helps us continue these vital programs and reach more people in need
            </p>
            <a
              href="/donate"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-accent-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Donate Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
