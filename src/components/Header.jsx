import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "backdrop-blur-md bg-black/40 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-20 py-4">
        {/* Logo */}
        <span className="header-logo -ml-11">
        VK
        </span>




        {/* Navigation */}
        <nav className="flex gap-8 text-sm">
          <a href="#about" className="nav-link">
            01. About
          </a>
          <a href="#skills" className="nav-link">
            02. Skills
          </a>
          <a href="#projects" className="nav-link">
            03. Projects
          </a>
          <a href="#certifications" className="nav-link">
            04. Certifications
          </a>
          <a href="#contact" className="nav-link">
            05. Contact
          </a>
        
        </nav>
      </div>
    </header>
  );
}
