import { content } from "../content/content";
import { useEffect, useState } from "react";

const phrases = [
  "I build elegant user interfaces.",
  "I work with modern cloud and backend architectures.",
  "I design machine learning solutions.",
  "I develop scalable cloud-native applications.",
  "I bring ideas to life with code.",
  "I craft seamless digital experiences."
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 40 : 70;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section className="min-h-screen pl-24 pr-6 md:pl-40 md:pr-16 flex items-center">
      <div>
        <p className="text-sm tracking-widest mb-4 opacity-70 hero-enter hero-delay-1">
  Hello, my name is
</p>

      <h1 className="text-6xl md:text-7xl font-bold mb-4 hero-enter hero-delay-2">
  Varun Krishna.
</h1>

        {/* Typewriter line */}
       <p className="text-3xl md:text-5xl font-semibold text-gray-400 hero-enter hero-delay-3">
  {text}
  <span className="type-cursor">|</span>
</p>


        <p className="max-w-2xl mt-6 text-base opacity-80 leading-relaxed hero-enter hero-delay-4">
  I’m a full-stack developer focused on building clean, reliable web applications
with strong backend logic, machine learning solutions, and scalable cloud architectures.
</p>


        {/* ✅ ONLY ADDITION: CTA BUTTON */}
        <a
          href="#contact"
          className="inline-flex mt-10 px-8 py-4 rounded-lg text-white font-medium
             bg-[#4f46e5] transition-all duration-300
             hover:bg-[#4338ca]
             hover:-translate-y-1
             hover:shadow-[0_10px_30px_rgba(79,70,229,0.5)]
             hero-enter hero-delay-4"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
