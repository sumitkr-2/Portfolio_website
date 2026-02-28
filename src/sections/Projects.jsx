// src/sections/Projects.jsx

import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Get unique categories
  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  // Filter projects
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter((p) => p.category === activeCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section 
      id="projects" 
      className="relative py-16 md:py-24 bg-[#050510]"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-600/10 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-cyan-400 font-medium tracking-wide uppercase text-xs md:text-sm mb-2">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Pro<span className="gradient-text">jects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A showcase of my technical skills and creative problem-solving through 
            various web development and programming projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  : "bg-white/5 border border-white/10 text-gray-400 md:hover:text-white md:hover:border-cyan-400/30"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-items-center">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {visibleProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-[0_15px_40px_rgba(34,211,238,0.3)] md:hover:shadow-[0_20px_60px_rgba(34,211,238,0.5)] md:hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Show More
                  <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

