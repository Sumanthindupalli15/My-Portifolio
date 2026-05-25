"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    institution: "Prasad V. Potluri Siddhartha Institute of Technology",
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    location: "Andhra Pradesh, India",
    period: "Jun 2019 – May 2023",
  },
];

const certifications = [
  { name: "Google Cloud Digital Leader", issuer: "Google Cloud" },
  { name: "AWS Academy Graduate – Cloud Foundations", issuer: "Amazon Web Services" },
  { name: "SQL (Basic) & SQL (Advanced)", issuer: "HackerRank" },
  { name: "Python Basic Certificate", issuer: "HackerRank" },
  { name: "Java Training", issuer: "Professional Certification" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-dark-900 mb-4">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <ScrollReveal direction="left">
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold dark:text-white text-dark-900 mb-6">
                <GraduationCap size={24} className="text-primary-400" />
                Education
              </h3>

              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl dark:bg-dark-900/80 bg-white border dark:border-white/5 border-gray-200 shadow-lg dark:shadow-none card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary-500/10 flex-shrink-0">
                      <GraduationCap size={28} className="text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-bold dark:text-white text-dark-900 text-lg mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-400 font-medium mb-3">
                        {edu.institution}
                      </p>
                      <div className="flex flex-col gap-1.5 text-sm dark:text-dark-400 text-dark-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal direction="right">
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold dark:text-white text-dark-900 mb-6">
                <Award size={24} className="text-accent-500" />
                Certifications
              </h3>

              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-4 rounded-xl dark:bg-dark-900/80 bg-white border dark:border-white/5 border-gray-200 shadow-sm dark:shadow-none hover:border-primary-500/30 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium dark:text-white text-dark-900 text-sm">
                        {cert.name}
                      </p>
                      <p className="text-xs dark:text-dark-400 text-dark-500">
                        {cert.issuer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
