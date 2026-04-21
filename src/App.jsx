import Scene from "./three/Scene";
import Header from "./components/Header";
import SocialBar from "./components/SocialBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import SkillCircle from "./components/SkillCircle";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
       {/* Background / Canvas */}
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>

      {/* Header & Social (UI layer) */}
      <Header />
      <SocialBar />

      {/* Main content */}
      {/* ENHANCEMENT #4: Scroll snap enabled sections */}
      <div className="relative z-10 scroll-snap-section">
        <Hero />
        <About />
        <Skills />
        <SkillCircle />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </>
  );
}

