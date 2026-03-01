// src/sections/Projects.jsx

import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const safeProjects = projects.filter(Boolean);

  const categories = ["all", ...new Set(safeProjects.map((p) => p.category))];

  const filteredProjects =
    activeCategory === "all"
      ? safeProjects
      : safeProjects.filter((p) => p.category === activeCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="relative py-14 md:py-20 bg-gradient-to-b from-[#050510] to-[#060914] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-cyan-400 uppercase text-xs tracking-widest mb-2">
            My Work
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Pro<span className="gradient-text">jects</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Selected projects showcasing my development skills and experience.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition
                ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:text-white"
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="w-full flex justify-center"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty */}
        {visibleProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500 text-sm">
            No projects found.
          </div>
        )}

        {/* Show More */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-full text-sm font-semibold
                bg-gradient-to-r from-cyan-500 to-purple-500 text-white
                hover:scale-105 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;