"use client";

import { motion } from "framer-motion";
import { Users, User, Award, Calendar, Gavel } from "lucide-react";

export default function ExecutiveBoardPage() {
  const committeeStructure = [
    { position: "President", description: "Leads the organization and presides over meetings" },
    { position: "Executive Director", description: "Oversees day-to-day operations and presides in President's absence" },
    { position: "Vice President", description: "Supports the President and assumes duties when needed" },
    { position: "General Secretary", description: "Manages organizational records and communications" },
    { position: "Joint Secretary", description: "Assists the General Secretary in administrative duties" },
    { position: "Treasurer", description: "Manages financial affairs and maintains accounts" },
    { position: "Office Secretary", description: "Handles office administration and documentation" },
    { position: "Members (5-10 persons)", description: "Active committee members contributing to decision-making" },
  ];

  const meetingInfo = [
    {
      icon: Calendar,
      title: "Regular Meetings",
      description: "The Executive Committee meets once every 3 months to discuss organizational matters and make decisions.",
    },
    {
      icon: Gavel,
      title: "Decision Making",
      description: "All decisions are made by majority vote, ensuring democratic governance and collective wisdom.",
    },
    {
      icon: Award,
      title: "Term Duration",
      description: "The Executive Committee serves a 2-year term and may be reformed or renewed as necessary.",
    },
  ];

  // Placeholder for actual committee members - to be updated with real data
  const committeeMembers = [
    { name: "To be announced", position: "President" },
    { name: "To be announced", position: "Executive Director" },
    { name: "To be announced", position: "Vice President" },
    { name: "To be announced", position: "General Secretary" },
    { name: "To be announced", position: "Joint Secretary" },
    { name: "To be announced", position: "Treasurer" },
    { name: "To be announced", position: "Office Secretary" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Executive Committee</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Dedicated leaders committed to serving humanity and advancing our mission
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
              Committee Structure
            </h2>
            <p className="text-lg text-gray-600">
              Our Executive Committee consists of dedicated individuals working together for a common cause
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
              Current Committee Members
            </h2>
            <p className="text-lg text-gray-600">
              Meet the dedicated individuals leading LiSu Foundation
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
              Governance & Meetings
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {meetingInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-600 leading-relaxed">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
