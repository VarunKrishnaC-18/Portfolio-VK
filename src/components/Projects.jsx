import { content } from "../content/content";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <Reveal>
      <section
        id="projects"
        className="py-32 pl-24 pr-6 md:pl-40 md:pr-16 text-white"
      >
        {/* ENHANCEMENT #2: Heading */}
        <div className="flex items-center gap-6 mb-20">
          <h2 className="text-4xl font-semibold whitespace-nowrap gradient-heading">
            <span className="opacity-50 mr-2">03.</span> Projects
          </h2>
          <div className="h-px flex-1 bg-white/30" />
        </div>

        {/* Projects */}
        <div className="space-y-32">
          {content.projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.title}
                className={`flex flex-col lg:flex-row items-center gap-12 float-animation float-delay-${index} ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-1/2 group">
  <img
    src={project.image}
    alt={project.title}
    className="rounded-xl border border-white/10 shadow-lg
           transition-all duration-500
           group-hover:scale-[1.04]
           group-hover:shadow-[0_25px_60px_rgba(79,70,229,0.45),0_0_40px_rgba(99,102,241,0.35)]"
  />
</div>


                {/* Content */}
                <div className="w-full lg:w-1/2">
                
                  <h3 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full border border-white/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Icons */}
                  <div className="flex gap-6 items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-all duration-300
                                 hover:text-indigo-400
                                 hover:-translate-y-1
                                 hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={20} />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-all duration-300
                                 hover:text-indigo-400
                                 hover:-translate-y-1
                                 hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
