import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { image, title, description, tech, github, live } = project;

  return (
    <div className="relative group w-full max-w-sm">

      {/* BACK STACK LAYER 1 */}
      <div
        className="
          absolute inset-0
          rounded-xl
          bg-white/5 border border-white/10
          translate-y-3 scale-[0.97]
          opacity-40
          -z-20
          transition-all duration-300
          group-hover:translate-y-5
        "
      />

      {/* BACK STACK LAYER 2 */}
      <div
        className="
          absolute inset-0
          rounded-xl
          bg-white/5 border border-white/10
          translate-y-1.5 scale-[0.985]
          opacity-60
          -z-10
          transition-all duration-300
          group-hover:translate-y-3
        "
      />

      {/* MAIN CARD */}
      <div
        className="
          relative
          rounded-xl overflow-hidden
          bg-white/5 border border-white/10
          transition-all duration-300
          hover:-translate-y-2
          hover:shadow-[0_25px_60px_rgba(34,211,238,0.25)]
        "
      >
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="
              h-40 w-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-cyan-300 font-semibold text-base">
            {title}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {tech.map((t, i) => (
              <span
                key={i}
                className="
                  px-2 py-0.5 text-[11px]
                  border border-cyan-400/40
                  rounded-full text-cyan-300
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Overlay */}
        <div
          className="
            absolute inset-0
            bg-black/70
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            flex items-center justify-center gap-4
          "
        >
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2
                px-4 py-2 rounded-full
                bg-cyan-400 text-black text-sm font-semibold
                hover:scale-105 transition
              "
            >
              <FaGithub /> GitHub
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2
                px-4 py-2 rounded-full
                bg-violet-400 text-black text-sm font-semibold
                hover:scale-105 transition
              "
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
