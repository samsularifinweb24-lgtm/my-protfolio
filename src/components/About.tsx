

import { forwardRef } from "react";
import { motion } from "framer-motion";

const About = forwardRef<HTMLDivElement>((_, ref) => (
  <section
    ref={ref}
    className="relative py-24 px-6 md:px-20 text-gray-900 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-100"
  >
    {/* 🔵 Animated Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-white/50 to-blue-300/30 blur-3xl animate-pulse"></div>

    <div className="relative flex flex-col md:flex-row items-center justify-between gap-16">
      {/* 📝 LEFT — TEXT */}
      <motion.div
        className="w-full md:w-1/2 text-left space-y-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-5xl font-extrabold text-blue-800 relative inline-block"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          About Me
          <span className="absolute left-0 -bottom-2 w-24 h-1 bg-blue-500 rounded-full"></span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          animate={{ x: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          I'm <span className="font-semibold text-blue-700">Samsul Arefin</span>, a{" "}
          <span className="font-semibold text-blue-600">Frontend Developer</span> who builds
          dynamic, responsive, and modern web experiences using{" "}
          <span className="text-blue-700 font-medium">React, Tailwind CSS, and JavaScript</span>.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          animate={{ x: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          Beyond coding, I enjoy painting 🎨, playing football ⚽, and exploring new technologies 🚀.
          I believe in continuous learning and crafting interfaces that inspire and perform.
        </motion.p>

        <motion.a
          href="/resume.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 font-semibold mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📄 Download Resume
        </motion.a>
      </motion.div>

      {/* 🖼️ RIGHT — RECTANGULAR IMAGE WITH ANIMATED BORDER */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-72 h-80 md:w-96 md:h-[420px]">
          {/* ✨ Rotating Blue Frame */}
          <motion.div
            className="absolute -inset-2 rounded-2xl border-4 border-blue-400 opacity-50"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          ></motion.div>

          {/* 🌀 Inner animated border */}
          <motion.div
            className="absolute inset-1 rounded-2xl border-2 border-blue-600 opacity-30"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          ></motion.div>

          {/* 📸 Profile Image */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 bg-white">
            <img
              src="/ti.jpg"
              alt="Samsul Arefin"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 💙 Glow Effect */}
          <div className="absolute -inset-3 rounded-2xl bg-blue-500 opacity-20 blur-2xl"></div>
        </div>
      </motion.div>
    </div>
  </section>
));

export default About;




