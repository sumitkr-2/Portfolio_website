// src/App.jsx

// ===== IMPORT COMPONENTS =====
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ===== IMPORT SECTIONS =====
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-[#060914] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
