import { content } from "../content/content";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <Reveal>
      <section
        id="certifications"
        className="py-32 pl-24 pr-6 md:pl-40 md:pr-16 text-white"
      >
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-4xl font-semibold whitespace-nowrap gradient-heading">
            <span className="opacity-50 mr-2">04.</span> Certifications
          </h2>
          <div className="h-px flex-1 bg-white/30" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.certifications.map((certification, index) => (
            <a
              key={certification.title}
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`float-animation float-delay-${index} glass-card rounded-xl px-6 py-5 block`}
            >
              <p className="text-base text-gray-200 leading-relaxed">
                {certification.title}
              </p>
            </a>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
