// src/sections/Education.jsx

import collegeImg from "../assets/images/educations/college.jpg";
import schoolImg from "../assets/images/educations/sch.jpeg";

const Education = () => {
  const education = [
    {
      title: "B.Tech in Computer Science",
      institution: "National Institute of Technology, Delhi",
      location: "New Delhi, India",
      year: "2023 – 2027",
      description: "Building core expertise in Software Development, DSA, and AI through projects and coursework. Active member of technical clubs.",
      image: collegeImg,
      status: "Currently Pursuing",
    },
    {
      title: "Senior Secondary (PCMB)",
      institution: "RPVV, Lajpat Nagar",
      location: "New Delhi",
      description: "Strong foundation in Physics, Chemistry, Math, and CS with early exposure to programming projects.",
      image: schoolImg,
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="relative py-16 md:py-24 bg-[#050510]">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[100px] md:blur-[150px] -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-cyan-400 font-medium tracking-wide uppercase text-xs md:text-sm mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl md:text-5xl font-bold text-white">
            Edu<span className="gradient-text">cation</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400" />

          {/* Education Cards */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] -translate-x-1/2 mt-6 z-10">
                  <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-50" />
                </div>

                {/* Card - alternating sides */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group glass rounded-2xl overflow-hidden hover-lift transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050510] to-transparent z-10" />
                      <img
                        src={edu.image}
                        alt={edu.institution}
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Status badge */}
                      <div className="absolute top-4 right-4 z-20">
                        {edu.status === "Currently Pursuing" ? (
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                            {edu.status}
                          </span>
                        ) : (
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                            {edu.status}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {edu.title}
                        </h3>
                        <p className="text-purple-400 text-sm font-medium">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {edu.year}
                        <span className="mx-1">•</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {edu.location}
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

