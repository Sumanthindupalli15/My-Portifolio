"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import {
  Send,
  Mail,
  Globe,
  GitFork,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "isumanth8@gmail.com",
      href: "mailto:isumanth8@gmail.com",
    },
    {
      icon: Globe,
      label: "LinkedIn",
      value: "Indupalli Sumanth",
      href: "https://www.linkedin.com/in/indupalli-sumanth-07b6651b8",
    },
    {
      icon: GitFork,
      label: "GitHub",
      value: "sumanth-indupalli",
      href: "https://github.com/sumanth-indupalli",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-dark-950/50 dark:via-primary-950/5 dark:to-dark-950/50 bg-gradient-to-b from-gray-50 via-primary-50/30 to-gray-50" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-dark-900 mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
            <p className="mt-4 dark:text-dark-400 text-dark-500 max-w-lg mx-auto">
              I&apos;m always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <ScrollReveal direction="left" className="md:col-span-2">
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl dark:bg-dark-900/80 bg-white border dark:border-white/5 border-gray-200 hover:border-primary-500/30 transition-all group"
                >
                  <div className="p-2.5 rounded-xl dark:bg-primary-500/10 bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
                    <info.icon size={20} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs dark:text-dark-500 text-dark-400 uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="font-medium dark:text-white text-dark-900 text-sm">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl dark:bg-dark-900/80 bg-white border dark:border-white/5 border-gray-200 shadow-lg dark:shadow-none"
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6"
                >
                  <CheckCircle size={18} />
                  <span className="text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </span>
                </motion.div>
              )}

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium dark:text-dark-300 text-dark-600 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl dark:bg-dark-950/50 bg-gray-50 border ${
                      errors.name
                        ? "border-red-500/50 focus:ring-red-500/20"
                        : "dark:border-white/10 border-gray-200 focus:ring-primary-500/20 focus:border-primary-500/50"
                    } dark:text-white text-dark-900 placeholder-dark-500 focus:outline-none focus:ring-2 transition-all`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1.5 text-xs text-red-400"
                    >
                      <AlertCircle size={12} />
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium dark:text-dark-300 text-dark-600 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl dark:bg-dark-950/50 bg-gray-50 border ${
                      errors.email
                        ? "border-red-500/50 focus:ring-red-500/20"
                        : "dark:border-white/10 border-gray-200 focus:ring-primary-500/20 focus:border-primary-500/50"
                    } dark:text-white text-dark-900 placeholder-dark-500 focus:outline-none focus:ring-2 transition-all`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1.5 text-xs text-red-400"
                    >
                      <AlertCircle size={12} />
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium dark:text-dark-300 text-dark-600 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl dark:bg-dark-950/50 bg-gray-50 border ${
                      errors.message
                        ? "border-red-500/50 focus:ring-red-500/20"
                        : "dark:border-white/10 border-gray-200 focus:ring-primary-500/20 focus:border-primary-500/50"
                    } dark:text-white text-dark-900 placeholder-dark-500 focus:outline-none focus:ring-2 transition-all resize-none`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1.5 text-xs text-red-400"
                    >
                      <AlertCircle size={12} />
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-shadow"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
