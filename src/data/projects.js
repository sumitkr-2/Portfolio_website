// src/data/projects.js

import dsa from "../assets/images/projects/dsa.png";
import medicine from "../assets/images/projects/Medicine.jpg";
import ecommerce from "../assets/images/projects/ecomers.png";
import guess from "../assets/images/projects/guss.png";
import sudoku from "../assets/images/projects/suduko.png";
import temp from "../assets/images/projects/temp.png";
import turbo from "../assets/images/projects/turbo_compress.png";
import netflix from "../assets/images/projects/netflix.png";
import compiler from "../assets/images/projects/online_compiler.png";

export const projects = [
  {
    title: "Algorithm Visualizer",
    image: dsa,
    description: "Visualizes sorting/searching algorithms step-by-step",
    tech: ["HTML", "JavaScript", "CSS"],
    category: "frontend",
    github: "https://github.com/sumitkr-2/DSA-Verse.git",
    live: "",
  },
  {
    title: "Medicine Cum Doctor Suggestor",
    image: medicine,
    description:
      "Suggests medicines/doctors based on symptoms and preferences",
    tech: ["React", "MySQL", "JavaScript", "Python", "CSS"],
    category: "fullstack",
    github: "https://github.com/sumitkr-2/Doctor-AI.git",
    live: "",
  },
  {
    title: "Ecommerce Data CSV",
    image: ecommerce,
    description:
      "Python project to analyze and manipulate e-commerce datasets",
    tech: ["Python", "CSV", "Pandas"],
    category: "backend",
    github: "https://github.com/sumitkr-2/Ecommerce_Data_CSV.git",
    live: "",
  },
  {
    title: "Guess the Number Game",
    image: guess,
    description:
      "Java-based CLI game that tests your guessing skills",
    tech: ["Java", "Console"],
    category: "frontend",
    github: "https://github.com/sumitkr-2/Guess_the_Number_Game.git",
    live: "",
  },
  {
    title: "Sudoku Solver",
    image: sudoku,
    description:
      "Solves Sudoku puzzles using backtracking algorithm",
    tech: ["Java", "Backtracking"],
    category: "backend",
    github: "https://github.com/sumitkr-2/Sudoku_Solver.git",
    live: "",
  },
  {
    title: "Temperature Converter",
    image: temp,
    description:
      "Simple unit converter built using Java console",
    tech: ["Java", "CLI"],
    category: "frontend",
    github: "https://github.com/sumitkr-2/Temprature_Converter.git",
    live: "",
  },
  {
    title: "Turbo Compress Image",
    image: turbo,
    description:
      "Web-based image compressor with modern UI",
    tech: ["JavaScript", "Canvas API", "HTML", "CSS"],
    category: "fullstack",
    github: "https://github.com/sumitkr-2/Turbo-compress-image.git",
    live: "",
  },
  {
    title: "Netflix India Clone",
    image: netflix,
    description:
      "Responsive Netflix India landing page with cinematic visuals",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    category: "frontend",
    github: "https://github.com/sumitkr-2/Netflix-Clone.git",
    live: "https://sumitkr-2.github.io/Netflix-Clone/",
  },
  {
    title: "Online Compiler",
    image: compiler,
    description:
      "Execute code in-browser using Judge0 API",
    tech: ["HTML", "CSS", "JavaScript", "Judge0"],
    category: "fullstack",
    github: "https://github.com/sumitkr-2/Online_Compiler.git",
    live: "https://sumitkr-2.github.io/Online_Compiler/",
  },
];
