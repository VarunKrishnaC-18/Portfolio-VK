import { content } from "../content/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="py-32 pl-24 pr-6 md:pl-40 md:pr-16 text-white"
      >
        {/* ENHANCEMENT #2: Gradient heading for About section */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-4xl font-semibold whitespace-nowrap gradient-heading">
            <span className="opacity-50 mr-2">01.</span> About Me
          </h2>
          <div className="h-px flex-1 bg-white/30" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT — Text */}
          <div>
            {content.about.map((paragraph, index) => (
              <p
                key={index}
                className="max-w-2xl text-base leading-relaxed opacity-80 mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* RIGHT — Photo */}
          <div className="flex justify-center lg:justify-end lg:translate-x-[-7rem]">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-xl bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition" />

              <img
  src="/profile-VK.jpeg"
  alt="Varun Krishna"
  className="relative w-64 aspect-[3/4] object-cover object-top rounded-xl
             border border-white/10
             grayscale hover:grayscale-0
             transition duration-500"
/>

              <div
                className="absolute -inset-1 rounded-xl
                bg-gradient-to-tr from-indigo-500/40 via-purple-500/40 to-indigo-500/40
                blur-sm opacity-70 animate-borderMove -z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
