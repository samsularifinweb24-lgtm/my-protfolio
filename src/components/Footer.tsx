import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, ChevronDown } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="footer"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100 text-blue-900 mt-20"
    >
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
            fill="url(#waveGradient)"
          ></path>
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-6 md:px-16 flex flex-col items-center justify-center gap-10 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-blue-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Connect & Explore More 🚀
        </motion.h2>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 text-2xl text-blue-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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

        {/* Explore Sections Dropdown */}
        <motion.div
          className="relative group mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-300 hover:scale-105 transition">
            Explore Sections <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-blue-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all z-20">
            {["home", "about", "skills", "projects", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left px-5 py-2 text-blue-800 hover:bg-blue-100"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Signature */}
        <motion.p
          className="mt-10 text-sm text-blue-800/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          © {new Date().getFullYear()} — Built with 💙 by{" "}
          <span className="font-semibold text-blue-700">Samsul Arefin</span>
        </motion.p>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
    </section>
  );
};

export default Footer;



