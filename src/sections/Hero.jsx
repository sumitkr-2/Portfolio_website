// src/sections/Hero.jsx

// ===== IMPORTS =====
import { motion } from "framer-motion";

import heroImg from "../assets/images/sumit.png";

const Hero = () => {
  return (
    // ================= HERO SECTION =================
    // Background matches PNG (dark black + violet tone)
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#050008] overflow-x-hidden"
    >
      {/* ================= MAIN CONTAINER ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <div className="text-white z-10">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Hey there! 👋 <br />
            I&apos;m{" "}
            <motion.span
  className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 inline-block"
  animate={{ x: [-8, 8, -8] }}
  transition={{
    duration: 4,
    ease: "easeInOut",
    repeat: Infinity,
  }}
>
  Sumit Kumar
</motion.span>


          </h1>

          {/* Role */}
        <h2 className="hero-role text-base md:text-lg lg:text-xl text-gray-300 mb-6">
  Full Stack Developer & Problem Solver
</h2>


          {/* Description */}
          <p className="max-w-xl text-sm md:text-base text-gray-400 leading-relaxed mb-8">
            I’m Sumit Kumar, a curious and motivated tech enthusiast exploring
            multiple fields in development and technology. From web development
            to problem-solving, I enjoy learning and building projects that
            create real impact. Whether it's frontend, backend, or something
            entirely new — I'm always ready to take on challenges and grow.
            Let’s collaborate and build something meaningful together!
          </p>

          {/* ================= CTA BUTTONS ================= */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6">
            <a
              href="#projects"
              className="px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-white text-sm md:text-base
                         bg-gradient-to-r from-orange-400 to-red-500
                         shadow-lg md:hover:scale-105 transition"
            >
              🔍 View Projects
            </a>

            <a
              href="#contact"
              className="px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base
                         border border-pink-500 text-pink-400
                         md:hover:bg-pink-500 md:hover:text-black transition"
            >
              📩 Contact Me
            </a>
          </div>

          {/* ================= SOCIAL LINKS ================= */}
          <div className="flex gap-4 md:gap-5 text-lg md:text-xl text-gray-400">
            <a
              href="https://github.com/sumitkr-2"
              target="_blank"
              className="md:hover:text-pink-400 transition"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://linkedin.com/in/sumit-kumar2004"
              target="_blank"
              className="md:hover:text-pink-400 transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href="mailto:sumit.kumar120664@gmail.com"
              className="md:hover:text-pink-400 transition"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center items-center mt-8 md:mt-0">

          {/* Radial violet glow (PNG-style background) */}
          <div
            className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full
                       bg-[#3b0a2a] opacity-70 blur-[100px] md:blur-[130px]"
          ></div>

          {/* Outer ring */}
          <div
            className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full
                       border border-violet-400/30"
          ></div>

          {/* Profile Image */}
          <img
            src={heroImg}
            alt="Sumit Kumar"
            draggable="false"
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full
                       object-cover shadow-[0_0_60px_rgba(150,50,120,0.6)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
