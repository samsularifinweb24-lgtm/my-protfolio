

// import React, { useState } from "react";

// interface NavbarProps {
//   hero: React.RefObject<HTMLDivElement | null>;
//   about: React.RefObject<HTMLDivElement | null>;
//   skills: React.RefObject<HTMLDivElement | null>;
//   projects: React.RefObject<HTMLDivElement | null>;
//   contact: React.RefObject<HTMLDivElement | null>;
// }

// const Navbar: React.FC<NavbarProps> = ({ hero, about, skills, projects, contact }) => {
//   const [open, setOpen] = useState(false);

//   const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//     setOpen(false);
//   };

//   return (
//     <nav className="w-full bg-blue-300 text-white sticky top-0 shadow z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* Animated Icon Logo */}
//         <div
//           onClick={() => scrollTo(hero)}
//           className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer animate-bounce"
//         >
//           <span className="text-white font-bold text-lg">S</span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8">
//           <li className="hover:text-blue-800 cursor-pointer" onClick={() => scrollTo(hero)}>Home</li>
//           <li className="hover:text-blue-800 cursor-pointer" onClick={() => scrollTo(about)}>About</li>
//           <li className="hover:text-blue-800 cursor-pointer" onClick={() => scrollTo(skills)}>Skills</li>
//           <li className="hover:text-blue-800 cursor-pointer" onClick={() => scrollTo(projects)}>Projects</li>
//           <li className="hover:text-blue-800 cursor-pointer" onClick={() => scrollTo(contact)}>Contact</li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-2xl font-bold" onClick={() => setOpen(!open)}>☰</button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-blue-800">
//           <ul className="flex flex-col gap-4 p-4">
//             <li className="hover:text-blue-300 cursor-pointer" onClick={() => scrollTo(hero)}>Home</li>
//             <li className="hover:text-blue-300 cursor-pointer" onClick={() => scrollTo(about)}>About</li>
//             <li className="hover:text-blue-300 cursor-pointer" onClick={() => scrollTo(skills)}>Skills</li>
//             <li className="hover:text-blue-300 cursor-pointer" onClick={() => scrollTo(projects)}>Projects</li>
//             <li className="hover:text-blue-300 cursor-pointer" onClick={() => scrollTo(contact)}>Contact</li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";

// interface NavbarProps {
//   hero: React.RefObject<HTMLDivElement | null>;
//   about: React.RefObject<HTMLDivElement | null>;
//   skills: React.RefObject<HTMLDivElement | null>;
//   projects: React.RefObject<HTMLDivElement | null>;
//   contact: React.RefObject<HTMLDivElement | null>;
// }

// const Navbar: React.FC<NavbarProps> = ({ hero, about, skills, projects, contact }) => {
//   const [open, setOpen] = useState(false);

//   const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//     setOpen(false);
//   };

//   return (
//     <nav className="fixed w-full z-50 backdrop-blur-sm bg-white/30 shadow-md transition-all duration-500">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* Animated Logo */}
//         <div
//           onClick={() => scrollTo(hero)}
//           className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer transform transition-transform duration-500 hover:scale-110 hover:rotate-12 shadow-lg animate-bounce"
//         >
//           <span className="text-white font-bold text-lg">S</span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-10 font-semibold text-gray-800">
//           {[
//             { label: "Home", ref: hero },
//             { label: "About", ref: about },
//             { label: "Skills", ref: skills },
//             { label: "Projects", ref: projects },
//             { label: "Contact", ref: contact },
//           ].map((item) => (
//             <li
//               key={item.label}
//               className="cursor-pointer relative group"
//               onClick={() => scrollTo(item.ref)}
//             >
//               <span className="transition-all duration-300 group-hover:text-blue-600 group-hover:scale-105">
//                 {item.label}
//               </span>
//               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-3xl text-gray-800 font-bold"
//           onClick={() => setOpen(!open)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-500 overflow-hidden ${
//           open ? "max-h-96" : "max-h-0"
//         } bg-white/90 backdrop-blur-sm rounded-b-lg shadow-lg mx-2`}
//       >
//         <ul className="flex flex-col gap-4 p-4 font-medium text-gray-800">
//           {[
//             { label: "Home", ref: hero },
//             { label: "About", ref: about },
//             { label: "Skills", ref: skills },
//             { label: "Projects", ref: projects },
//             { label: "Contact", ref: contact },
//           ].map((item) => (
//             <li
//               key={item.label}
//               className="cursor-pointer hover:text-blue-600 hover:scale-105 transition-transform duration-300"
//               onClick={() => scrollTo(item.ref)}
//             >
//               {item.label}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";

interface NavbarProps {
  hero: React.RefObject<HTMLDivElement | null>;
  about: React.RefObject<HTMLDivElement | null>;
  skills: React.RefObject<HTMLDivElement | null>;
  projects: React.RefObject<HTMLDivElement | null>;
  contact: React.RefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ hero, about, skills, projects, contact }) => {
  const [open, setOpen] = useState(false);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const menuItems = [
    { label: "Home", ref: hero },
    { label: "About", ref: about },
    { label: "Skills", ref: skills },
    { label: "Projects", ref: projects },
    { label: "Contact", ref: contact },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900/10 backdrop-blur-sm shadow-md transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div
          onClick={() => scrollTo(hero)}
          className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer transform transition-transform duration-500 hover:scale-110 hover:rotate-12 shadow-md animate-bounce"
        >
          <span className="text-white font-bold text-lg">S</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-semibold text-gray-800">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="cursor-pointer relative group"
              onClick={() => scrollTo(item.ref)}
            >
              <span className="transition-all duration-300 group-hover:text-blue-400 group-hover:scale-105">
                {item.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800 font-bold"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        } bg-gray-900/10 backdrop-blur-sm rounded-b-lg shadow-md mx-2`}
      >
        <ul className="flex flex-col gap-4 p-4 font-medium text-gray-800">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="cursor-pointer hover:text-blue-400 hover:scale-105 transition-transform duration-300"
              onClick={() => scrollTo(item.ref)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;












