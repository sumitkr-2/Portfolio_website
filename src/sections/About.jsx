// src/sections/About.jsx
import { useState } from "react";
import profileImg from "../assets/images/educations/sumit.png";

const skills = [
  "C", "C++", "Python", "JavaScript",
  "HTML", "CSS", "React", "Tailwind CSS",
  "FastAPI", "REST APIs",
  "SQL", "MySQL", "Redis (Basic)",
  "Git", "GitHub", "Docker", "Linux (Basics)",
  "VS Code", "Jupyter Notebook",
  "AWS", "Jenkins (CI/CD)",
  "Data Structures & Algorithms",
  "System Design (Basics)",
  "Load Balancing",
  "Fault Tolerance",
  "Horizontal Scaling",
  "XAMPP", "StarUML",
  "MS Excel", "PowerPoint",
  "Generative AI",
  "Prompt Engineering",
  "Raptor",
];

const softSkills = [
  "Communication",
  "Collaboration",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Leadership",
  "Critical Thinking",
];

const About = () => {
  const [showMoreTech, setShowMoreTech] = useState(false);
  const [showMoreSoft, setShowMoreSoft] = useState(false);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#0b1024] to-[#0f1535] text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== TITLE ===== */}
        <h2 className="text-4xl font-bold text-purple-400 mb-12 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* ================= LEFT ================= */}
          <div className="space-y-6">

            {/* PROFILE */}
            <div className="flex items-center gap-4">
              <img
                src={profileImg}
                alt="Sumit Kumar"
                className="
                  w-34 h-34           /* 👈 IMAGE SIZE (change here) */
                  rounded-full
                  object-cover
                  border border-cyan-400/40
                  shadow-[0_0_20px_rgba(34,211,238,0.35)]
                "
              />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Sumit Kumar
                </h3>
                <p className="text-sm text-gray-400">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* SUMMARY (UNCHANGED) */}
            <p className="text-lg leading-relaxed text-gray-300">
              I’m{" "}
              <span className="font-semibold text-white">Sumit Kumar</span>, a
              Full Stack Developer and engineering student at{" "}
              <span className="font-semibold text-white">NIT Delhi</span>.
              I enjoy building scalable web applications with clean architecture,
              strong backend logic, and practical problem-solving.
            </p>

            {/* RESUME */}
            <a
              href="#"
              className="
                inline-block
                bg-red-500 hover:bg-red-600
                transition
                px-6 py-3
                rounded-lg
                font-semibold text-white
              "
            >
              📄 Download Resume
            </a>

            {/* CORE SUBJECTS (UNCHANGED) */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                📘 Core Subjects
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>📚 Data Structures & Algorithms</li>
                <li>🗄️ DBMS</li>
                <li>💻 Operating Systems</li>
                <li>🧠 Artificial Intelligence</li>
                <li>🧮 Computer Architecture</li>
                <li>🛠️ Software Engineering</li>
              </ul>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="space-y-10">

            {/* TECHNICAL SKILLS */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                🧰 Technical Skills
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {(showMoreTech ? skills : skills.slice(0, 12)).map((skill) => (
                  <span
                    key={skill}
                    className="
                      bg-black/60
                      border border-cyan-400/60
                      text-cyan-300
                      rounded-lg
                      px-4 py-2
                      text-center text-sm
                      hover:border-cyan-400
                      hover:text-cyan-400
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setShowMoreTech(!showMoreTech)}
                className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm"
              >
                {showMoreTech ? "Show Less ▲" : "Show More ▼"}
              </button>
            </div>

            {/* SOFT SKILLS */}
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                💡 Soft Skills
              </h3>

              <div className="flex flex-wrap gap-4">
                {(showMoreSoft ? softSkills : softSkills.slice(0, 4)).map(
                  (skill) => (
                    <span
                      key={skill}
                      className="
                        bg-black/60
                        border border-yellow-400/60
                        text-yellow-300
                        rounded-lg
                        px-6 py-2
                        text-sm
                        hover:border-yellow-400
                        hover:text-yellow-200
                        transition
                      "
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              <button
                onClick={() => setShowMoreSoft(!showMoreSoft)}
                className="mt-4 text-yellow-400 hover:text-yellow-300 text-sm"
              >
                {showMoreSoft ? "Show Less ▲" : "Show More ▼"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
