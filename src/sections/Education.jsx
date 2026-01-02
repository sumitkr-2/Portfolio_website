// src/sections/Education.jsx

import collegeImg from "../assets/images/educations/college.jpg";
import schoolImg from "../assets/images/educations/sch.jpeg";

const Education = () => {
  return (
    <section id="education" className="relative py-20 bg-[#0a0014]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-violet-400 mb-14">
          Education
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* College */}
          <div
            className="
              rounded-xl overflow-hidden
              bg-white/5 backdrop-blur-md
              border border-white/10
              shadow-[0_0_30px_rgba(120,60,255,0.15)]
              hover:scale-[1.015] transition
            "
          >
            <img
              src={collegeImg}
              alt="NIT Delhi"
              loading="lazy"
              className="w-full h-44 object-cover"
            />

            <div className="p-5 text-gray-300">
              <h3 className="text-lg font-semibold text-white mb-1">
                B.Tech in Computer Science
              </h3>

              <h4 className="text-xs text-violet-300 mb-1">
                National Institute of Technology, Delhi
              </h4>

              <p className="text-xs text-gray-400 mb-3">
                2023 – 2027
              </p>

              <p className="text-sm leading-relaxed mb-4">
                Building core expertise in Software Development, DSA,
                and AI through projects and coursework.
              </p>

              <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300">
                Currently Pursuing
              </span>
            </div>
          </div>

          {/* School */}
          <div
            className="
              rounded-xl overflow-hidden
              bg-white/5 backdrop-blur-md
              border border-white/10
              shadow-[0_0_30px_rgba(120,60,255,0.15)]
              hover:scale-[1.015] transition
            "
          >
            <img
              src={schoolImg}
              alt="RPVV School"
              loading="lazy"
              className="w-full h-44 object-cover"
            />

            <div className="p-5 text-gray-300">
              <h3 className="text-lg font-semibold text-white mb-1">
                Senior Secondary (PCMB)
              </h3>

              <h4 className="text-xs text-violet-300 mb-2">
                RPVV, Lajpat Nagar, New Delhi
              </h4>

              <p className="text-sm leading-relaxed mb-4">
                Strong foundation in Physics, Chemistry, Math, and CS with
                early exposure to projects.
              </p>

              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300">
                  CBSE
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300">
                  Top Performer
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
