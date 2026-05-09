import SkillCircle from "./SkillCircle";
import Reveal from "./Reveal";
import { content } from "../content/content";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiDocker,
  SiVercel,
} from "react-icons/si";

import { FaDatabase, FaAws } from "react-icons/fa";
import { MdTerminal } from "react-icons/md";
import { BsBraces } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

export default function Skills() {
  return (
    <Reveal>
      <section
        id="skills"
        className="py-32 pl-24 pr-6 md:pl-40 md:pr-16 text-white"
      >
        <div className="flex flex-col">
          {/* ENHANCEMENT #2: Gradient heading for Skills section */}
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl font-semibold whitespace-nowrap gradient-heading">
              <span className="opacity-50 mr-2">02.</span> Skills
            </h2>
            <div className="h-px flex-1 bg-white/30" />
          </div>

          <div className="space-y-24">
            {/* ENHANCEMENT #5: Frontend skills with proficiency bars */}
            <div>
              <h3 className="text-lg font-medium mb-10 text-indigo-300">
                Frontend
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-16">
                <SkillCircle icon={<SiHtml5 size={32} />} label="HTML" proficiency={95} />
                <SkillCircle icon={<SiCss3 size={32} />} label="CSS" proficiency={90} />
                <SkillCircle icon={<SiJavascript size={32} />} label="JavaScript" proficiency={85} />
                <SkillCircle icon={<SiReact size={32} />} label="React" proficiency={90} />
                <SkillCircle icon={<SiTailwindcss size={32} />} label="Tailwind CSS" proficiency={88} />
                <SkillCircle icon={<SiNextdotjs size={32} />} label="Next.js" proficiency={80} />
              </div>
            </div>

            {/* ENHANCEMENT #5: Backend skills with proficiency bars */}
            <div>
              <h3 className="text-lg font-medium mb-10 text-indigo-300">
                Backend
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-16">
                <SkillCircle icon={<MdTerminal size={28} />} label="Java" proficiency={75} />
                <SkillCircle icon={<SiPython size={32} />} label="Python" proficiency={80} />
                <SkillCircle icon={<BsBraces size={28} />} label="C++" proficiency={70} />
                <SkillCircle icon={<SiNodedotjs size={32} />} label="Node.js" proficiency={85} />
                <SkillCircle icon={<SiExpress size={32} />} label="Express.js" proficiency={85} />
              </div>
            </div>

            {/* Cloud & DevOps skills */}
            <div>
              <h3 className="text-lg font-medium mb-10 text-indigo-300">
                Cloud & DevOps
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-16">
                <SkillCircle icon={<FaAws size={32} />} label="AWS" proficiency={85} />
                <SkillCircle icon={<SiDocker size={32} />} label="Docker" proficiency={75} />
                <SkillCircle icon={<AiOutlineGithub size={32} />} label="GitHub Actions" proficiency={85} />
                <SkillCircle icon={<SiVercel size={32} />} label="Vercel" proficiency={85} />
              </div>
            </div>

            {/* ENHANCEMENT #5: Database skills with proficiency bars */}
            <div>
              <h3 className="text-lg font-medium mb-10 text-indigo-300">
                Databases & Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-16">
                <SkillCircle icon={<FaDatabase size={28} />} label="MySQL" proficiency={87} />
                <SkillCircle icon={<FaDatabase size={28} />} label="MongoDB" proficiency={85} />
                <SkillCircle icon="PL/SQL" label="PL/SQL" proficiency={80} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
