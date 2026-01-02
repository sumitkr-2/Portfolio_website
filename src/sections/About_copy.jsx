// src/sections/About.jsx

import profileImg from "../assets/images/profile2.jpg";
// import resumePDF from "../assets/documents/231210105_Sumit.pdf";

const technicalSkills = [
  "C", "C++", "Python", "JavaScript", "React.js",
  "HTML", "CSS", "SQL", "MySQL",
  "Git", "GitHub", "VS Code",
  "AWS", "Docker", "Linux (Basics)"
];

const backendSkills = [
  "REST APIs", "FastAPI", "WebSockets",
  "Database Design", "Redis (Basics)",
  "System Design (Basics)", "Debugging"
];

const tools = [
  "Jenkins (CI/CD)", "Jupyter Notebook", "XAMPP",
  "StarUML", "MS Excel", "PowerPoint",
  "Generative AI", "Prompt Engineering"
];

const softSkills = [
  "Communication", "Collaboration",
  "Problem Solving", "Critical Thinking",
  "Time Management"
];

const coreSubjects = [
  "Data Structures & Algorithms",
  "DBMS",
  "Operating Systems",
  "Artificial Intelligence",
  "Computer Architecture",
  "Software Engineering"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0b0f2a] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div className="flex flex-col items-center">
          <img
            src={profileImg}
            alt="Sumit Kumar"
            className="w-[280px] rounded-2xl shadow-xl"
            draggable="false"
          />

          <a
            href="https://www.linkedin.com/feed/"
            download
            className="mt-6 px-6 py-3 rounded-lg bg-red-500 text-white font-medium hover:scale-105 transition"
          >
            📄 Download Resume
          </a>

          <div className="mt-8 w-full bg-black/40 border border-cyan-500/30 rounded-xl p-6">
            <h3 className="text-cyan-400 font-semibold mb-3">📘 Core Subjects</h3>
            <ul className="space-y-2 text-gray-300">
              {coreSubjects.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-4xl font-bold text-purple-400 mb-6">About Me</h2>

          <p className="text-gray-300 leading-relaxed mb-10">
            I’m <strong>Sumit Kumar</strong>, a Full Stack Developer and engineering
            student at <strong>NIT Delhi</strong>. I build scalable, real-world
            applications by combining clean front-end design with solid back-end
            logic and strong fundamentals.
          </p>

          <SkillBlock title="🧰 Technical Skills" skills={technicalSkills} />
          <SkillBlock title="⚙️ Backend & System Skills" skills={backendSkills} />
          <SkillBlock title="🛠️ Tools & Engineering" skills={tools} />
          <SkillBlock title="💡 Soft Skills" skills={softSkills} />
        </div>
      </div>
    </section>
  );
}

/* ================= HELPER COMPONENT ================= */
function SkillBlock({ title, skills }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="px-4 py-2 text-sm text-cyan-300 border border-cyan-500/30 rounded-lg bg-black/40 hover:bg-cyan-500/10 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
