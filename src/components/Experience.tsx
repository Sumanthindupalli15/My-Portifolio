"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Accenture",
    role: "Packaged App Development Associate",
    project: "Supplier Hub",
    location: "Hyderabad, India",
    period: "Feb 2024 – Present",
    description: [
      "Designed, developed, and maintained backend and frontend components of a multi-tier enterprise application following standard software engineering practices.",
      "Implemented complex PostgreSQL database functions to process and integrate high-volume supplier data into downstream SAP systems, ensuring consistency and performance.",
      "Developed scalable RESTful APIs using Node.js to support report generation and data access for user-facing applications.",
      "Built dynamic and reusable Angular UI components, improving usability and enabling user-centric workflows.",
      "Applied object-oriented design principles and data structures to implement business logic efficiently and reliably.",
      "Contributed to code reviews, debugging, and issue resolution to maintain high code quality and application stability.",
    ],
    technologies: ["Angular", "Node.js", "PostgreSQL", "SAP", "RESTful APIs", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-dark-950/50 dark:via-primary-950/5 dark:to-dark-950/50 bg-gradient-to-b from-gray-50 via-primary-50/30 to-gray-50" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-dark-900 mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px dark:bg-gradient-to-b dark:from-primary-500/50 dark:via-primary-500/20 dark:to-transparent bg-gradient-to-b from-primary-500/50 via-primary-300/20 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 transform -translate-x-1/2">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-4 h-4 bg-primary-500 rounded-full border-4 dark:border-dark-950 border-gray-50 shadow-lg shadow-primary-500/30"
                  />
                </div>

                {/* Date card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-8 md:pl-0`}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl dark:bg-primary-500/10 bg-primary-500/10 text-primary-400 text-sm font-mono ${
                    index % 2 === 0 ? "md:ml-auto" : ""
                  }`}>
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                {/* Content card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} pl-8 md:pl-0`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl dark:bg-dark-900/80 bg-white border dark:border-white/5 border-gray-200 shadow-lg dark:shadow-none card-hover"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-primary-500/10">
                        <Briefcase size={20} className="text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold dark:text-white text-dark-900">
                          {exp.role}
                        </h3>
                        <p className="text-primary-400 font-medium">{exp.company}</p>
                        <div className="flex items-center gap-4 mt-1 text-sm dark:text-dark-400 text-dark-500">
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                        <span className="inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-mono dark:bg-accent-500/10 bg-accent-500/10 text-accent-500 border dark:border-accent-500/20 border-accent-500/20">
                          Project: {exp.project}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex gap-2 text-sm dark:text-dark-300 text-dark-600"
                        >
                          <span className="text-primary-400 mt-1.5 flex-shrink-0">▹</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-lg dark:bg-white/5 bg-gray-100 dark:text-dark-300 text-dark-600 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
