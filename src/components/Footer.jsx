import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-white py-6 md:py-8 text-center font-['Segoe_UI']">

      {/* Title */}
      <h3
        className="
          text-xl md:text-2xl md:text-3xl mb-4 md:mb-5
          text-white
          drop-shadow-[0_0_10px_orange]
        "
      >
        Contact Info
      </h3>

      {/* Contact items */}
      <div className="space-y-2 md:space-y-3 text-xs md:text-sm">

        {/* Phone */}
        <div
          className="
            group flex justify-center items-center gap-2 md:gap-3
            transition-all duration-300
            hover:text-orange-400
            hover:drop-shadow-[0_0_10px_orange]
            hover:-translate-y-[1px]
          "
        >
          <FaPhoneAlt className="text-orange-400 transition-transform duration-300 group-hover:scale-110" />
          <span className="transition-colors duration-300">
            +91 999-XXX-7XX
          </span>
        </div>

        {/* Email */}
        <div
          className="
            group flex justify-center items-center gap-2 md:gap-3
            transition-all duration-300
            hover:text-orange-400
            hover:drop-shadow-[0_0_10px_orange]
            hover:-translate-y-[1px]
          "
        >
          <FaEnvelope className="text-orange-400 transition-transform duration-300 group-hover:scale-110" />
          <span className="transition-colors duration-300">
            sumit.kumar120664@gmail.com
          </span>
        </div>

        {/* Location */}
        <div
          className="
            group flex justify-center items-center gap-2 md:gap-3
            transition-all duration-300
            hover:text-orange-400
            hover:drop-shadow-[0_0_10px_orange]
            hover:-translate-y-[1px]
          "
        >
          <FaMapMarkerAlt className="text-orange-400 transition-transform duration-300 group-hover:scale-110" />
          <span className="transition-colors duration-300">
            New Delhi, India - 110034
          </span>
        </div>

      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 md:gap-4 mt-5 md:mt-6 flex-wrap">
        {[
          { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/sumit-kumar2004" },
          { icon: <FaGithub />, link: "https://github.com/sumitkr-2" },
          { icon: <FaEnvelope />, link: "mailto:sumit.kumar120664@gmail.com" },
          { icon: <FaTwitter />, link: "https://twitter.com/collageuse2004" },
          { icon: <FaTelegramPlane />, link: "https://t.me/sumit_kr_2" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="
              w-[36px] h-[36px] md:w-[42px] md:h-[42px]
              flex items-center justify-center
              rounded-full
              border-2 border-orange-400
              text-orange-400 text-base md:text-lg
              shadow-[0_0_10px_rgba(255,165,0,0.6)]
              transition-all duration-300
              md:hover:bg-orange-400 md:hover:text-black
              md:hover:shadow-[0_0_15px_orange,0_0_25px_orange]
              md:hover:-translate-y-[2px]
            "
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="mt-4 md:mt-5 text-xs md:text-sm text-white/80">
        © 2025 Sumit. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;
