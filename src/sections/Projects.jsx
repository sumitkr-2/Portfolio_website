import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
  const INITIAL_COUNT = 6; // show first 6 projects
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="py-24 bg-black">
      <h2 className="text-center text-violet-400 text-4xl mb-16">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          px-6
          max-w-6xl
          mx-auto
          place-items-center
        "
      >
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Show More / Less Button */}
      {projects.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-14">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              px-8 py-3 rounded-full
              text-sm font-semibold
              bg-gradient-to-r from-cyan-400 to-violet-400
              text-black
              shadow-[0_15px_40px_rgba(34,211,238,0.4)]
              hover:scale-105
              hover:shadow-[0_20px_60px_rgba(34,211,238,0.6)]
              transition-all
            "
          >
            {showAll ? "Show Less ↑" : "Show More ↓"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
