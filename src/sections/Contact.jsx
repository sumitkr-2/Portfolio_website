import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill all fields");
      return;
    }

    const mailtoLink = `mailto:sumit.kumar120664@gmail.com
      ?subject=${encodeURIComponent(subject)}
      &body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;

    window.location.href = mailtoLink;
    form.reset();
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-gradient-to-b from-[#0b1024] to-[#060914] text-gray-200 overflow-hidden"
    >
      {/* Hide heavy background on mobile */}
      <div className="absolute inset-0 hidden md:block bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-center text-purple-400 mb-10 md:mb-16">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-start">
          {/* LEFT INFO */}
          <div className="space-y-5 md:space-6">
            {[
              {
                title: "Location",
                value: "New Delhi, India",
                icon: <FaMapMarkerAlt />,
              },
              {
                title: "Email",
                value: "sumit.kumar120664@gmail.com",
                icon: <FaEnvelope />,
              },
              {
                title: "Phone",
                value: "+91 999-XXX-7XX",
                icon: <FaPhoneAlt />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 p-4 md:p-5 rounded-xl
                           bg-black/40 border border-white/10
                           shadow-[0_12px_45px_rgba(0,0,0,0.7)]
                           md:hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
                           transition"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full
                                bg-cyan-400/10 text-cyan-400 text-base md:text-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold text-sm md:text-base">{item.title}</h3>
                  <p className="text-gray-300 text-xs md:text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-5 md:pt-6 flex gap-3 md:gap-4 flex-wrap">
              {[
                { icon: <FaGithub />, link: "https://github.com/sumitkr-2" },
                {
                  icon: <FaLinkedinIn />,
                  link: "https://linkedin.com/in/sumit-kumar2004",
                },
                {
                  icon: <FaTwitter />,
                  link: "https://twitter.com/collageuse2004",
                },
                {
                  icon: <FaEnvelope />,
                  link: "mailto:sumit.kumar120664@gmail.com",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-lg
                             border border-cyan-400/40 text-cyan-400 text-base md:text-lg
                             md:hover:bg-cyan-400 md:hover:text-black
                             transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT FORM (SAFE) */}
          <form
            onSubmit={handleSubmit}
            className="relative p-6 md:p-8 lg:p-10 rounded-2xl
                       bg-black/40 border border-white/10
                       shadow-[0_25px_90px_rgba(0,0,0,0.85)]"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-purple-400 mb-6 md:mb-8 text-center">
              Contact Request
            </h3>

            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "email", label: "Email Address", type: "email" },
              { name: "subject", label: "Subject", type: "text" },
            ].map((field) => (
              <div key={field.name} className="relative mb-6">
                <input
                  name={field.name}
                  type={field.type}
                  placeholder=" "
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  className="peer w-full h-12 md:h-14 px-4 pt-4 rounded-xl bg-black/40
                             border border-white/10 text-gray-200 outline-none
                             focus:border-cyan-400 transition"
                />
                <label
                  className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-400
                              pointer-events-none transition-all
                              peer-not-placeholder-shown:top-3
                              ${
                                focused === field.name
                                  ? "top-2 text-xs text-cyan-400"
                                  : ""
                              }`}
                >
                  {field.label}
                </label>
              </div>
            ))}

            <div className="relative mb-8">
              <textarea
                name="message"
                rows="4"
                placeholder=" "
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="peer w-full px-4 pt-6 rounded-xl bg-black/40
                           border border-white/10 text-gray-200 outline-none resize-none
                           focus:border-cyan-400 transition"
              />
              <label
                className={`absolute left-4 top-6 text-gray-400
                            pointer-events-none transition-all
                            peer-not-placeholder-shown:top-2
                            ${
                              focused === "message"
                                ? "top-2 text-xs text-cyan-400"
                                : ""
                            }`}
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 md:py-4 rounded-full font-semibold text-black
                         bg-gradient-to-r from-cyan-400 to-teal-400
                         shadow-[0_15px_45px_rgba(34,211,238,0.45)]
                         md:hover:scale-[1.03] transition-all"
            >
              Open Email ✉️
            </button>

            <p className="mt-4 text-xs text-gray-400 text-center">
              
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;