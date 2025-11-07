import { motion } from "framer-motion";
import { GraduationCap,  Code } from "lucide-react";

const Education = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-blue-100 via-white to-blue-200 overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
      />

      {/* Title */}
      <div className="text-center relative z-10 mb-16">
        <h2 className="text-5xl font-extrabold text-blue-900 drop-shadow-sm">
          My <span className="text-blue-600">Education</span>
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          A journey of continuous learning — from traditional Islamic studies to modern web technologies.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative z-10 border-l-4 border-blue-500 max-w-3xl mx-auto pl-8 space-y-12">
        {/* Daura Hadith Masters */}
        <motion.div
          className="relative bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -left-9 top-6 bg-blue-600 p-3 rounded-full text-white shadow-md">
            <GraduationCap />
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-2">
            Master's in Daura Hadith
          </h3>
          <p className="text-gray-700 font-medium">
            <strong>Jamiatul Ulum Islamia Darul Ulum Dilu Road Madrasa</strong>
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Successfully completed my <strong>Daura Hadith (Master’s level)</strong> program, focusing on deep Islamic knowledge, research, and interpretation of Hadith.
          </p>
        </motion.div>

        {/* English & Web Development */}
        <motion.div
          className="relative bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute -left-9 top-6 bg-blue-600 p-3 rounded-full text-white shadow-md">
            <Code />
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-2">
            English & Web Development Training
          </h3>
          <p className="text-gray-700 font-medium">
            <strong>Ahmad Education</strong>
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Currently developing my skills in <strong>English communication</strong> and <strong>modern web development</strong>.  
            Learning React, JavaScript, and UI/UX design to build professional web experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

