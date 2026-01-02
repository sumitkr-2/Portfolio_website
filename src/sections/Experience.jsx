import { useRef } from "react";
import { experiences } from "../data/experiences";

const CARD_WIDTH = 260;
const GAP = 32;

const Experience = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -(CARD_WIDTH + GAP),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: CARD_WIDTH + GAP,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="experience"
      className="relative py-24 bg-gradient-to-b from-[#0b1024] to-[#060914]"
    >
      <h2 className="text-center text-violet-400 text-4xl mb-14">
        Experience
      </h2>

      {/* Arrows (desktop only) */}
      <button
        onClick={scrollLeft}
        className="
          hidden md:flex
          absolute left-6 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 rounded-full
          bg-black/60 border border-white/10
          text-cyan-400 text-xl
          items-center justify-center
          hover:bg-cyan-400 hover:text-black
          transition
        "
      >
        ←
      </button>

      <button
        onClick={scrollRight}
        className="
          hidden md:flex
          absolute right-6 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 rounded-full
          bg-black/60 border border-white/10
          text-cyan-400 text-xl
          items-center justify-center
          hover:bg-cyan-400 hover:text-black
          transition
        "
      >
        →
      </button>

      {/* Wrapper that fits EXACTLY 4 cards */}
      <div className="mx-auto max-w-[1184px] px-4">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="
            flex gap-8
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            hide-scrollbar
          "
        >
          {experiences.map((exp, i) => (
            <div key={i} className="snap-center shrink-0">
              {/* CARD */}
              <div className="group w-[260px] h-[410px] perspective">
                <div
                  className="
                    relative w-full h-full
                    transition-transform duration-700 ease-in-out
                    transform-style-preserve-3d
                    will-change-transform
                    group-hover:rotate-y-180
                  "
                >
                  {/* FRONT */}
                  <div
                    className="
                      absolute inset-0
                      rounded-2xl
                      bg-[#151515]
                      border border-white/10
                      flex flex-col items-center justify-center gap-4
                      backface-hidden
                      shadow-[0_25px_70px_rgba(0,0,0,0.85)]
                      group-hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                      transition-shadow
                    "
                  >
                    {/* Circular image */}
                    <div className="w-24 h-24 rounded-full overflow-hidden border border-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.3)]">
                      <img
                        src={exp.img}
                        alt={exp.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-cyan-400 font-semibold text-lg text-center px-4">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{exp.org}</p>
                  </div>

                  {/* BACK */}
                  <div
                    className="
                      absolute inset-0
                      rounded-2xl
                      bg-[#1b1b1b]
                      border border-white/10
                      p-6
                      rotate-y-180
                      backface-hidden
                      flex flex-col justify-between
                      shadow-[0_25px_80px_rgba(0,0,0,0.9)]
                    "
                  >
                    <div>
                      <h3 className="text-cyan-300 font-semibold mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {exp.duration}
                      </p>
                      <p className="text-xs text-gray-400 mb-3">
                        📍 {exp.location}
                      </p>

                      <p className="text-sm text-gray-300 leading-relaxed">
                        {exp.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tech.map((t, j) => (
                          <span
                            key={j}
                            className="
                              px-2 py-1 text-xs rounded-full
                              border border-cyan-400/40
                              text-cyan-300
                            "
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4 flex-wrap">
                      {exp.links.map((l, k) => (
                        <a
                          key={k}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            text-xs px-3 py-2 rounded-full
                            bg-gradient-to-r from-cyan-400 to-teal-400
                            text-black font-semibold
                            hover:scale-105 transition
                          "
                        >
                          {l.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* END CARD */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
