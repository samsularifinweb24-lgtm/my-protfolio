

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, ArrowUpRight, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show "Scroll to Top" button after scroll 400px
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 🌊 Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100 text-blue-900 pt-20 pb-10 mt-20">
        {/* Decorative Wave Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-[calc(150%+1.3px)] h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M321.39 56.44c58.53 6.91 117.24 19.37 175.69 17.29 72.46-2.66 141.1-27.75 213.28-34.37C852.93 34.2 921.1 49.77 990 61.43c68.8 11.66 138.49 19.46 210 14.14V120H0V0c87.4 11.66 174.75 38.87 261.1 52.59a600.64 600.64 0 0 0 60.29 3.85z"
              fill="url(#footerWave)"
            />
            <defs>
              <linearGradient id="footerWave" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-8 px-6 md:px-16">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-blue-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let’s Build Something Amazing Together 💫
          </motion.h2>

          {/* Social Links */}
          <motion.div
            className="flex gap-8 text-2xl text-blue-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-blue-500 transition transform hover:scale-110"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-500 transition transform hover:scale-110"
            >
              <Linkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-500 transition transform hover:scale-110"
            >
              <Facebook />
            </a>
          </motion.div>

          {/* Navigate Button */}
          <motion.button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-300 hover:scale-105 transition-all"
            whileHover={{ y: -3 }}
          >
            Go to Hero Section
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </motion.button>

          {/* Signature */}
          <motion.p
            className="mt-6 text-sm text-blue-800/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            © {new Date().getFullYear()} — Built with 💙 by{" "}
            <span className="font-semibold text-blue-700">Samsul Arefin</span>
          </motion.p>
        </div>

        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
      </footer>

      {/* 🟦 Scroll to Top Floating Button */}
      {showTopBtn && (
        <motion.button
          onClick={() => scrollToSection("home")}
          className="fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-400/40 
                     hover:bg-blue-500 transition-all duration-300 hover:scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ y: -3 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </>
  );
};

export default Footer;





