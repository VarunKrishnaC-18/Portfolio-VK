import { content } from "../content/content";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialBar() {
  return (
    <div className="fixed left-6 bottom-0 z-[100] hidden md:flex flex-col items-center gap-6 pointer-events-auto">

      <a
        href={content.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 transition-all duration-300
           hover:text-indigo-400
           hover:-translate-y-1
           hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]"

        aria-label="GitHub"
      >
        <FaGithub size={20} />
      </a>

      <a
        href={content.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 transition-all duration-300
           hover:text-indigo-400
           hover:-translate-y-1
           hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]"

        aria-label="LinkedIn"
      >
        <FaLinkedinIn size={20} />
      </a>

      <a
        href={content.socials.email}
        className="text-gray-400 transition-all duration-300
           hover:text-indigo-400
           hover:-translate-y-1
           hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]"

        aria-label="Email"
      >
        <MdEmail size={20} />
      </a>

      {/* Vertical line */}
      <div className="w-px h-24 bg-white/20 mt-2" />
    </div>
  );
}
