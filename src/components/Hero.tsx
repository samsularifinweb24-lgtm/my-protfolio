

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Twitter } from "lucide-react";

const Hero = forwardRef<HTMLDivElement>((_, ref) => (
  <section id="home"
    ref={ref}
    className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 
    bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-900 overflow-hidden pt-24 md:pt-0"
  >
    {/* LEFT — TEXT SIDE */}
    <motion.div
      className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900"
        animate={{ x: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        Hi, I'm <span className="text-blue-700">Samsul Arefin</span>
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-gray-700 mb-6 font-semibold"
        animate={{ x: [-10, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        Frontend Developer · React Developer
      </motion.p>

      <motion.p
        className="text-gray-600 leading-relaxed mb-6 max-w-md mx-auto md:mx-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
      >
        I build modern, responsive and beautiful websites using React, Tailwind,
        and JavaScript. Passionate about UI/UX and clean code.
      </motion.p>

      <motion.a
        href="/resume.pdf"
        download
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow 
        hover:bg-blue-500 transition text-sm font-semibold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume
      </motion.a>

      <motion.div
        className="flex justify-center md:justify-start gap-6 mt-6 text-gray-700 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a href="https://github.com/samsularifinweb24-lgtm" target="_blank" className="hover:text-blue-600">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/sohan-samsul-arefin-014bbb378/" target="_blank" className="hover:text-blue-600">
          <Linkedin />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61578760989587" target="_blank" className="hover:text-blue-600">
          <Facebook />
        </a>
        <a href="https://twitter.com" target="_blank" className="hover:text-blue-600">
          <Twitter />
        </a>
      </motion.div>
    </motion.div>

    {/* RIGHT — IMAGE SIDE */}
    <motion.div
      className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative flex items-center justify-center">
        {/* 🌈 Rotating Gradient Ring */}
        <motion.div
          className="absolute w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full p-[3px]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          style={{
            background:
              "conic-gradient(from 0deg, #3b82f6, #60a5fa, #93c5fd, #3b82f6)",
            boxShadow: "0 0 20px rgba(59,130,246,0.4)",
          }}
        />

        {/* 🖼 Profile Image */}
        <div
          className="relative z-10 w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden shadow-2xl bg-white"
        >
          <img
            src="/ame.png"
            alt="Samsul Arefin"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </motion.div>
  </section>
));

export default Hero;



















