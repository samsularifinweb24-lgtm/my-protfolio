

import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Facebook } from "lucide-react";

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  const [msg, setMsg] = useState("");

  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg("✅ Message sent successfully!");
    setTimeout(() => setMsg(""), 3000);
  };

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-blue-900 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-300/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-300/20 blur-3xl rounded-full animate-pulse delay-700"></div>

      {/* Header */}
      <motion.h2
        className="text-5xl font-extrabold mb-6 text-center text-blue-900"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let’s <span className="text-blue-600">Connect</span>
      </motion.h2>
      <p className="text-center max-w-2xl mx-auto text-gray-700 mb-16 text-lg">
        Have a project idea or just want to say hello? I’d love to hear from you!
      </p>

      {/* Contact Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          className="bg-white/70 backdrop-blur-lg border border-blue-200 p-8 rounded-2xl shadow-xl hover:shadow-blue-200 transition"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-blue-800">Contact Information</h3>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <Mail className="text-blue-600 w-5 h-5" />
              <span>samsularifinweb24@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-blue-600 w-5 h-5" />
              <span>+880 1887177809</span>
            </p>
          </div>

          <div className="mt-8 flex gap-5 text-2xl text-blue-700">
            <a href="https://github.com" target="_blank" className="hover:text-blue-500 transition">
              <Github />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-500 transition">
              <Linkedin />
            </a>
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition">
              <Facebook />
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            Always open to collaboration and exciting new projects. Let’s make something amazing together!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={send}
          className="flex flex-col gap-5 bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-blue-100"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            placeholder="Your Name"
            className="p-4 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            required
          />
          <input
            placeholder="Your Email"
            type="email"
            className="p-4 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-blue-300 transition"
          >
            Send Message
          </button>

          {msg && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 font-medium mt-2 text-center"
            >
              {msg}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
});

export default Contact;


