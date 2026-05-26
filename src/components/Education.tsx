"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Calendar, MapPin, Award, ExternalLink } from "lucide-react";

const education = [
  {
    institution: "Prasad V. Potluri Siddhartha Institute of Technology",
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    location: "Andhra Pradesh, India",
    period: "Jun 2019 – May 2023",
  },
];

const certifications = [
  { name: "Generative AI Leader Certification", issuer: "Google Cloud", url: "https://www.credly.com/badges/d4564225-2c53-4615-b7e6-9aa4bd1fafbd/public_url", color: "from-purple-500 to-pink-500" },
  { name: "Cloud Digital Leader Certification", issuer: "Google Cloud", url: "https://www.credly.com/badges/f983d436-ba76-4844-95ef-a9e8f76c10fe/public_url", color: "from-blue-500 to-cyan-500" },
  { name: "Reinvention with Agentic AI", issuer: "Accenture", url: "https://www.credly.com/badges/fc6d0676-e79c-486a-85bf-21fcb4b41be1/public_url", color: "from-emerald-500 to-teal-500" },
];

export default function Education() {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education & Certifications"
          gradient="from-indigo-400 to-purple-400"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <ScrollReveal direction="left">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl dark:bg-primary-500/10 bg-primary-50">
                  <GraduationCap size={22} className="text-primary-400" />
                </div>
                <h3 className="text-xl font-bold dark:text-white text-dark-900">
                  Education
                </h3>
              </div>

              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4 }}
                  className="relative p-8 rounded-3xl dark:glass-card glass-card-light neon-border group hover:border-primary-500/20 transition-all duration-500"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex items-start gap-5">
                    <div className="p-4 rounded-2xl dark:bg-primary-500/10 bg-primary-50 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap size={28} className="text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-bold dark:text-white text-dark-900 text-lg mb-2 leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-400 font-semibold mb-4">
                        {edu.institution}
                      </p>
                      <div className="flex flex-col gap-2 text-sm dark:text-dark-400 text-dark-500">
                        <span className="flex items-center gap-2">
                          <Calendar size={14} className="text-dark-500" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={14} className="text-dark-500" />
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
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl dark:bg-purple-500/10 bg-purple-50">
                  <Award size={22} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold dark:text-white text-dark-900">
                  Certifications
                </h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    whileHover={{ x: 6, scale: 1.01 }}
                    className="group relative flex items-center gap-4 p-5 rounded-2xl dark:glass-card glass-card-light neon-border hover:border-primary-500/20 transition-all duration-500 cursor-pointer"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className={`relative w-1.5 h-8 rounded-full bg-gradient-to-b ${cert.color} flex-shrink-0`} />
                    <div className="relative flex-1">
                      <p className="font-semibold dark:text-white text-dark-900 text-sm leading-snug">
                        {cert.name}
                      </p>
                      <p className="text-xs dark:text-dark-500 text-dark-400 mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative p-2 rounded-lg dark:text-dark-500 text-dark-400 hover:text-primary-400 transition-colors duration-300"
                        aria-label={`View ${cert.name} credential`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
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
