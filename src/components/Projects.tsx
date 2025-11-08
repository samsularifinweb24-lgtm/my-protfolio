







import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  img: string;
  link: string;
  github: string;
}

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  const [selected, setSelected] = useState<Project | null>(null);

  const projectData: Project[] = [
    {
      title: "📚 My Library",
      desc: "A modern online library app built with React, Tailwind & Firebase. It allows users to browse, borrow and manage their favorite books online with a clean, intuitive interface.",
      tech: ["React", "Tailwind", "Firebase"],
      img: "/ty1.jpg",
      link: "https://my-library-blue.vercel.app",
      github: "https://github.com/",
    },
    {
      title: "🏫 My Madrasa",
      desc: "An Islamic education platform that manages classes, teacher schedules, and student profiles efficiently with an admin dashboard.",
      tech: ["Next.js", "Tailwind", "MongoDB"],
      img: "/ty.jpg",
      link: "https://my-madrasa.vercel.app",
      github: "https://github.com/",
    },
    {
      title: "🌐 Portfolio",
      desc: "My personal portfolio showcasing skills, projects, and experiences. Built to reflect creativity, professionalism, and passion for clean design.",
      tech: ["React", "Framer Motion", "Tailwind"],
      img: "/ty2.jpg", // ✅ missing slash fixed
      link: "https://projector-oxgu.vercel.app",
      github: "https://github.com/",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 blur-3xl rounded-full animate-pulse delay-1000"></div>

      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-extrabold mb-14 text-center text-blue-900"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Featured <span className="text-blue-600">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projectData.map((p, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative bg-white/70 backdrop-blur-lg border border-blue-200 rounded-2xl shadow-xl overflow-hidden hover:shadow-blue-300/50 transition-all cursor-pointer"
            onClick={() => setSelected(p)}
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-60 object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">{p.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {p.desc.slice(0, 80)}...
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Button */}
      <motion.div
        className="text-center mt-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a
          href="https://github.com"
          target="_blank"
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg shadow-lg font-semibold text-lg 
          hover:shadow-xl hover:scale-105 transition-all"
        >
          See More Projects →
        </a>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-6 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-3xl font-bold text-blue-800 mb-2">
                {selected.title}
              </h3>
              <p className="text-gray-700 mb-4">{selected.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selected.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selected.link}
                  target="_blank"
                  className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={selected.github}
                  target="_blank"
                  className="flex items-center gap-2 bg-gray-200 text-gray-900 px-5 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

export default Projects;
