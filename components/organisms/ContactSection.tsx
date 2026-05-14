"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ContactSection = ({ id }: { id?: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) {
        throw new Error("Form reference not found");
      }

      const result = await emailjs.sendForm(
        "service_x4pmq9b",
        "template_xx4mz89",
        formRef.current,
        "oAaKCFxori7tYm7Ty"
      );

      if (result.text === "OK") {
        setToastMessage("Pesan berhasil dikirim! Saya akan membalas sesegera mungkin.");
        setToastType("success");
        setShowToast(true);
        setFormData({ from_name: "", from_email: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setToastMessage("Gagal mengirim pesan. Silakan coba lagi.");
      setToastType("error");
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id={id} className="pt-[12vh] md:pt-[120px] pb-16 md:pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-[#facc15]">Touch</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-slate-300 mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all duration-200 bg-gray-700 text-white placeholder-gray-400 hover:border-gray-500"
                    placeholder="Nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all duration-200 bg-gray-700 text-white placeholder-gray-400 hover:border-gray-500"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all duration-200 bg-gray-700 text-white placeholder-gray-400 resize-none hover:border-gray-500"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg ${
                    isSubmitting
                      ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div className="h-full flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <p className="text-lg text-slate-300 mb-8">
                  Feel free to reach out if you have any questions or would like to discuss a project.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#facc15] bg-opacity-20 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="w-6 h-6 text-[#facc15]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Email</p>
                    <a
                      href="mailto:daffanr20@gmail.com"
                      className="text-lg text-white hover:text-[#facc15] transition-colors duration-200"
                    >
                      daffanr20@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Location</p>
                    <p className="text-lg text-white">Bekasi, Indonesia</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Follow me</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/daffnr"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
                  >
                    <FaGithub className="w-6 h-6 text-white" />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.linkedin.com/in/daffa-naufal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  >
                    <FaLinkedin className="w-6 h-6 text-white" />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.instagram.com/daffnr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                  >
                    <FaInstagram className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -50, x: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-24 md:top-28 right-4 md:right-6 z-[10001] flex items-center space-x-3 px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-2xl max-w-sm md:max-w-md ${
              toastType === "success"
                ? "bg-green-500 border-l-4 border-green-400"
                : "bg-red-500 border-l-4 border-red-400"
            }`}
          >
            <div className="flex-shrink-0">
              {toastType === "success" ? (
                <FaCheckCircle className="w-6 h-6 text-white" />
              ) : (
                <FaTimesCircle className="w-6 h-6 text-white" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-white font-medium text-sm md:text-base">{toastMessage}</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="flex-shrink-0 text-white hover:text-gray-200 transition-colors duration-200"
            >
              <FaTimesCircle className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
