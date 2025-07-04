import { useState } from "react";
import { Menu, X } from "lucide-react";
import RotatingText from "../Controller/RotatingText/RotatingText";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Tools", href: "#tools" },
    { name: "Projects", href: "#projects" },
    { name: "Service", href: "#price" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-neutral-900/80 shadow-lg z-50 border-b border-neutral-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-400">
          <a href="#" className="hover:opacity-80 transition flex items-center">
            <div className="flex items-center">
              <RotatingText
                texts={["Arkan", "Shiba", "Mamaba", "フルスタック"]}
                mainClassName="text-white rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            <span className="text-indigo-500">Dev</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-neutral-200 hover:text-white font-medium transition group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-neutral-200 hover:text-indigo-400"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 space-y-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-neutral-200 hover:text-indigo-400 font-medium transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
