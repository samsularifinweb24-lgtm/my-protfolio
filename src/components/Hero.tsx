


// import { forwardRef } from "react";

// const Hero = forwardRef<HTMLDivElement>((_, ref) => (
//   <section
//     ref={ref}
//     className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 
//     bg-gradient-to-r from-gray-200 via-blue-100 to-gray-200 text-gray-900"
//   >
//     {/* LEFT — TEXT */}
//     <div className="w-full md:w-1/2 text-left">

//       {/* Name Heading — Slide Right */}
//       <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 animate-slideRight">
//         Hi, I'm <span className="text-blue-700">Samsul Arefin</span>
//       </h1>

//       {/* Designation — Slide Left */}
//       <p className="text-xl md:text-2xl text-gray-700 mb-6 font-semibold animate-slideLeft">
//         Frontend Developer · React Developer
//       </p>

//       {/* About Text — Fade In */}
//       <p className="text-gray-600 leading-relaxed mb-6 animate-fadeIn">
//         I build modern, responsive and beautiful websites using React, Tailwind,
//         and JavaScript. Passionate about UI/UX and clean code.
//       </p>

//       {/* Resume Button */}
//       <a
//         href="/resume.pdf"
//         download
//         className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow 
//         hover:bg-blue-500 transition text-sm font-semibold animate-fadeIn"
//       >
//         Download Resume
//       </a>

//       {/* Social Links */}
//       <div className="flex gap-5 mt-6 text-gray-700 animate-fadeIn">
//         <a href="https://github.com" target="_blank" className="hover:text-blue-600">GitHub</a>
//         <a href="https://linkedin.com" target="_blank" className="hover:text-blue-600">LinkedIn</a>
//         <a href="https://twitter.com" target="_blank" className="hover:text-blue-600">Twitter</a>
//     <a href="https://facebook.com" target="_blank" className="hover:text-blue-600">Facebook</a>
//       </div>
//     </div>

//     {/* RIGHT — IMAGE WITH BLUE ROTATING RING */}
//     <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">

//       <div className="relative">

//         {/* 🔵 Rotating Blue Ring */}
//         <div className="absolute inset-0 w-64 h-64 rounded-full border-4 border-blue-500 
//         animate-spinSlow opacity-30"></div>

//         {/* 🖼 Profile Image */}
//         <div
//           className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl 
//           border-4 border-blue-300 bg-white"
//         >
//           <img
//             src=""
//             alt="Your Profile"
//             className="w-full h-full object-cover"
//           />
//         </div>

//       </div>
//     </div>
//   </section>
// ));

// export default Hero;


import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Twitter } from "lucide-react";

const Hero = forwardRef<HTMLDivElement>((_, ref) => (
  <section
    ref={ref}
    className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 
    bg-gradient-to-r from-gray-200 via-blue-100 to-gray-200 text-gray-900 overflow-hidden"
  >
    {/* LEFT — TEXT */}
    <motion.div
      className="w-full md:w-1/2 text-left"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Name Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900"
        animate={{ x: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        Hi, I'm <span className="text-blue-700">Samsul Arefin</span>
      </motion.h1>

      {/* Designation */}
      <motion.p
        className="text-xl md:text-2xl text-gray-700 mb-6 font-semibold"
        animate={{ x: [-10, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        Frontend Developer · React Developer
      </motion.p>

      {/* About Text */}
      <motion.p
        className="text-gray-600 leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
      >
        I build modern, responsive and beautiful websites using React, Tailwind,
        and JavaScript. Passionate about UI/UX and clean code.
      </motion.p>

      {/* Resume Button */}
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

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mt-6 text-gray-700 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a href="https://github.com/samsularifinweb24-lgtm" target="_blank" className="hover:text-blue-600">
          <Github />
        </a>
        <a href=" https://www.linkedin.com/in/sohan-samsul-arefin-014bbb378/ 
" target="_blank" className="hover:text-blue-600">
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

    {/* RIGHT — IMAGE WITH BLUE ROTATING RING */}
    <motion.div
      className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative">
        {/* 🔵 Rotating Blue Ring */}
        <motion.div
          className="absolute inset-0 w-64 h-64 rounded-full border-4 border-blue-500 opacity-30"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />

        {/* 🖼 Profile Image */}
        <div
          className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl 
          border-4 border-blue-300 bg-white"
        >
          <img
            src="/ame.png"
            alt="Samsul Arefin"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  </section>
));

export default Hero;












