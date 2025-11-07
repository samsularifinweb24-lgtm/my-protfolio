// import { forwardRef } from "react";
// import { motion } from "framer-motion";
// import {
//   Code,
//   Palette,
//   Atom,
//   Wind,
//   Braces,
//   Github,
//   Layout,
//   Terminal,
// } from "lucide-react";

// const skills = [
//   { name: "HTML", level: 95, color: "from-orange-400 to-red-500", icon: <Code /> },
//   { name: "CSS", level: 90, color: "from-blue-400 to-cyan-500", icon: <Palette /> },
//   { name: "JavaScript", level: 88, color: "from-yellow-400 to-orange-400", icon: <Terminal /> },
//   { name: "React", level: 92, color: "from-sky-400 to-blue-600", icon: <Atom /> },
//   { name: "TypeScript", level: 85, color: "from-blue-500 to-indigo-600", icon: <Braces /> },
//   { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-blue-500", icon: <Wind /> },
//   { name: "Git / GitHub", level: 80, color: "from-gray-600 to-gray-800", icon: <Github /> },
//   { name: "UI/UX Design", level: 75, color: "from-pink-400 to-purple-500", icon: <Layout /> },
// ];

// const Skills = forwardRef<HTMLDivElement>((_, ref) => (
//   <section
//     ref={ref}
//     className="relative py-24 px-6 md:px-20 text-gray-900 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-100"
//   >
//     {/* Soft background glow */}
//     <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 via-white/40 to-blue-300/20 blur-3xl animate-pulse"></div>

//     <div className="relative max-w-6xl mx-auto text-center">
//       {/* Title */}
//       <motion.h2
//         className="text-5xl font-extrabold mb-12 text-blue-800 relative inline-block"
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         My Skills
//         <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
//       </motion.h2>

//       {/* Skills Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={index}
//             className="relative p-6 bg-white/90 rounded-2xl shadow-md backdrop-blur-sm border border-blue-100
//               hover:shadow-2xl transition-all duration-500 group overflow-hidden"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1, duration: 0.6 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             {/* Glow hover effect */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-br from-blue-300 via-cyan-300 to-purple-300 blur-2xl transition-all duration-500"></div>

//             {/* Icon */}
//             <div className="flex items-center justify-center mb-4 text-blue-600 text-4xl group-hover:scale-110 transition-transform duration-300">
//               {skill.icon}
//             </div>

//             {/* Skill Name */}
//             <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
//               {skill.name}
//             </h3>

//             {/* Progress Bar Container */}
//             <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//               <motion.div
//                 className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
//                 initial={{ width: 0 }}
//                 whileInView={{ width: `${skill.level}%` }}
//                 transition={{ duration: 1.5 }}
//               ></motion.div>
//             </div>

//             {/* Level Text */}
//             <p className="text-gray-600 text-sm mt-2">{skill.level}% Mastery</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// ));

// export default Skills;




import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Layers,
  Monitor,
  Database,
  Zap,
} from "lucide-react";

const Skills = forwardRef<HTMLDivElement>((_, ref) => (
  <section
    ref={ref}
    className="relative py-20 px-6 md:px-20 overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200"
  >
    {/* Background Glow Animation */}
    <motion.div
      className="absolute -top-20 -left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
    ></motion.div>
    <motion.div
      className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
    ></motion.div>

    {/* Title */}
    <div className="text-center relative z-10">
      <h2 className="text-5xl font-extrabold text-blue-900 mb-10 drop-shadow-sm">
        My <span className="text-blue-600">Skills</span>
      </h2>
      <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
        Technologies and tools I use to build beautiful, scalable, and modern web experiences.
      </p>
    </div>

    {/* Skills Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative z-10">
      {[
        { name: "HTML", icon: <Code /> },
        { name: "CSS", icon: <Palette /> },
        { name: "JavaScript", icon: <Zap /> },
        { name: "React", icon: <Monitor /> },
        { name: "TypeScript", icon: <Layers /> },
        { name: "Tailwind CSS", icon: <Palette /> },
        { name: "Node.js", icon: <Database /> },
        { name: "UI/UX", icon: <Layers /> },
      ].map((skill, index) => (
        <motion.div
          key={skill.name}
          className="p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 
          shadow-lg flex flex-col items-center justify-center text-center transition 
          hover:scale-105 hover:shadow-xl hover:bg-white/50"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: index * 0.2 }}
            className="text-blue-600 mb-4"
          >
            {skill.icon}
          </motion.div>
          <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
        </motion.div>
      ))}
    </div>
  </section>
));

export default Skills;


