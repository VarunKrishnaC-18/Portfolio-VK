import Reveal from "./Reveal";

export default function Contact() {
  return (
    <Reveal>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center text-white"
      >
        <div className="flex flex-col items-center text-center px-6">
          <p className="text-sm tracking-widest text-indigo-400 mb-5">
            05. WHAT&apos;S NEXT?
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            Get In Touch
          </h2>

          <p className="max-w-2xl text-base md:text-lg text-gray-400 mb-10">
            I&apos;m currently open to new opportunities and my inbox is always open.
            Whether you have a question or just want to say Hi, I&apos;ll do my best
            to get back to you!
          </p>

          <a
            href="mailto:varunkrishna281@gmail.com"
            className="inline-flex mt-2 px-8 py-4 rounded-lg
                       text-white font-medium
                       bg-[#4f46e5]
                       transition-all duration-300
                       hover:bg-[#4338ca]
                       hover:-translate-y-1
                       hover:shadow-[0_10px_30px_rgba(79,70,229,0.5)]"
          >
            Say Hello
          </a>
        </div>
      </section>
    </Reveal>
  );
}
