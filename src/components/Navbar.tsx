


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












