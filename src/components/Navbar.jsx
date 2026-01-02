import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  // ===== SMOOTH SCROLL HANDLER =====
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false); // close mobile menu
  };

  // ===== SCROLL PROGRESS =====
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scrollTop / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0b1024]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold text-purple-400 tracking-wide cursor-pointer"
        >
          Sumit
        </div>

        {/* ===== DESKTOP MENU ===== */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 font-medium transition-colors duration-300 group-hover:text-white"
              >
                {link.name}
              </button>

              {/* Hover underline */}
              <span
                className="
                  absolute left-0 -bottom-1
                  w-0 h-[2px]
                  bg-gradient-to-r from-cyan-400 to-purple-500
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </li>
          ))}
        </ul>

        {/* ===== MOBILE BUTTON ===== */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-[#0b1024]/95">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 text-lg hover:text-white transition"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ===== SCROLL PROGRESS BAR ===== */}
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
