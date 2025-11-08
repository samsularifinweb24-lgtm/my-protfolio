




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


