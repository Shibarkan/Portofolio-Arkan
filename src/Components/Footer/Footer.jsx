import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = ()=> {
  return (

    <footer className="bg-[#0f0f0f] text-gray-300 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse" />
          <h1 className="text-xl font-bold tracking-widest">
            Arkan<span className="text-indigo-500">Dev</span>
          </h1>
        </div>

        {/* Navigation */}
        <ul className="flex gap-6 text-sm">
          <li>
            <a
              href="#about"
              className="hover:text-indigo-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-indigo-500 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-indigo-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:email@example.com"
            className="hover:text-indigo-500 transition"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <Instagram size={22} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} ArkanDev. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
