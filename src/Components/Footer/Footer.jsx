import { Github, Linkedin, Mail, Instagram, Heart, MessageCircle} from "lucide-react";
import ScrollVelocity from "../../Tools/ScrollVelocity";
import { useState } from "react";

const Footer = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <footer className="bg-[#0f0f0f] text-gray-300 border-t border-gray-700">
      {/* Scroll Velocity */}
      <div className="overflow-hidden border-y border-gray-700 py-3 w-full">
        <ScrollVelocity
          texts={[
            "Fullstack Developer • Shiba Dev • ",
            "Let's Collaborate • Shiba Dev • ",
          ]}
          velocity={50}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300"
          damping={40}
          stiffness={300}
          parallaxClassName="w-full"
          scrollerClassName="w-full"
        />
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Logo & Social */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse" />
            <h1 className="text-xl font-bold tracking-widest">
              アルカン<span className="text-indigo-500">Dev</span>
            </h1>
          </div>
          <p className="text-sm text-neutral-400">
            Thank you for visiting! Connect with me or support my work 💖
          </p>
          <div className="flex gap-5 items-center flex-wrap">
            {/* Github */}
            <a
              href="https://github.com/Shibarkan"
              target="_blank"
              className="hover:text-indigo-500 transition transform hover:scale-110 hover:rotate-3"
            >
              <Github size={22} />
            </a>

            {/* Linkedin */}
            <a
              href="https://linkedin.com/Shibarkan"
              target="_blank"
              className="hover:text-indigo-500 transition transform hover:scale-110 hover:rotate-3"
            >
              <Linkedin size={22} />
            </a>

            {/* Email */}
            <a
              href="mailto:shibarkan01@gmail.com"
              className="hover:text-indigo-500 transition transform hover:scale-110 hover:rotate-3"
            >
              <Mail size={22} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/si_shuu"
              target="_blank"
              className="hover:text-indigo-500 transition transform hover:scale-110 hover:rotate-3"
            >
              <Instagram size={22} />
            </a>
            {/* Donate */}
            <a
              href="https://saweria.co/YOURNAME"
              target="_blank"
              className="flex items-center gap-2 hover:text-pink-500 transition transform hover:scale-110 hover:rotate-3"
            >
              <Heart size={20} />
              <span className="text-sm">Donate</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} ArkanDev. All rights reserved <a href="https://chatgpt.com/">Powered by OpenAI.</a> 
      </div>
    </footer>
  );
};

export default Footer;
