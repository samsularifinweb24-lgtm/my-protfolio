import  { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white text-blue-900">
      <Navbar
        hero={heroRef}
        about={aboutRef}
        skills={skillsRef}
        projects={projectsRef}
        contact={contactRef}
      />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Education />
      {<Projects ref={projectsRef} /> }
      <Contact ref={contactRef} />
      <Footer/>
    </div>
  );
}




