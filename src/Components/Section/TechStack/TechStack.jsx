import { useEffect, useRef, useState } from "react";
import { animate, utils, createScope } from "animejs";
import { motion } from "framer-motion";

const stacks = [
  {
    name: "React",
    URL: "https://react.dev/",
    percentage:"55%",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Vite",
    URL: "https://vitejs.dev/",
    icon: "https://vitejs.dev/logo.svg",
    percentage:"60%",
  },
  {
    name: "Tailwind",
    URL: "https://tailwindcss.com/docs",
    icon: "https://www.svgrepo.com/show/333609/tailwind-css.svg",
    percentage:"70%",
  },
  {
    name: "Node.js",
    URL: "https://nodejs.org/en/docs",
    percentage:"100%",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    URL: "https://expressjs.com/en/starter/installing.html",
    percentage:"10%",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    name: "Supabase",
    URL: "https://supabase.com/docs",
    percentage:"10%",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg",
  },
  {
    name: "GitHub",
    URL: "https://docs.github.com/en",
    percentage:"100%",
    icon: "https://github.githubassets.com/favicons/favicon.svg",
  },
  {
    name: "Vercel",
    URL: "https://vercel.com/docs",
    percentage:"100%",
    icon: "https://cdn-icons-png.flaticon.com/128/3522/3522714.png",
  },
  {
    name: "JavaScript",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    percentage:"60%",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML",
    URL: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    percentage:"100%",
    icon: "https://cdn-icons-png.flaticon.com/128/174/174854.png",
  },
  {
    name: "CSS",
    URL: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    percentage:"100%",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
  },
  {
    name: "Python",
    URL: "https://docs.python.org/3/",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
    percentage:"50%",
  },
  {
    name: "Java",
    URL: "https://docs.oracle.com/en/java/",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png",
    percentage:"40%",
  },
  {
    name: "PHP",
    URL: "https://www.php.net/docs.php",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968332.png",
    percentage:"80%",
  },
  {
    name: "Git Bash",
    URL: "https://git-scm.com/doc",
    icon: "https://cdn-icons-png.flaticon.com/128/11518/11518876.png",
    percentage:"100%",
  },
];

export default function TechStackAnimated() {
  const scope = useRef();
  const [running, setRunning] = useState(true);
  const [hovered, setHovered] = useState(null);

  const onMouseEnter = function () {
    animate(this, { scale: 2, duration: 250 });
  };
  const onMouseLeave = function () {
    animate(this, { scale: 1, duration: 750 });
  };

  const startWave = () => {
    const icons = utils.$(".circle", ".row");
    icons.forEach((icon, i) => {
      animate(icon, {
        opacity: 0.25,
        loop: true,
        alternate: true,
        duration: 500,
        delay: i * 100,
        easing: "inOutExpo",
      });

      icon.addEventListener("mouseenter", onMouseEnter);
      icon.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      icons.forEach((icon) => {
        icon.removeEventListener("mouseenter", onMouseEnter);
        icon.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  };

  const handleToggle = () => {
    if (running) {
      scope.current.revert();
      setRunning(false);
    } else {
      scope.current = createScope({ root: ".row" }).add(startWave);
      setRunning(true);
    }
  };

  useEffect(() => {
    scope.current = createScope({ root: ".row" }).add(startWave);
    return () => {
      scope.current.revert();
    };
  }, []);

  return (
    <section id="tools" className="py-16 bg-[#0d0d0d] backdrop-blur">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Tools
        </motion.h2>

        {/* Icon Row */}
        <div className="flex flex-wrap justify-center gap-6 row relative">
          {stacks.map((stack, index) => (
            <motion.a
              key={stack.name}
              href={stack.URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(stack.name)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <div
                className="circle w-16 h-16 
                        bg-neutral-900 rounded-xl 
                        shadow-lg flex items-center justify-center 
                        border border-neutral-700 
                        hover:shadow-[0_0_20px_#06b6d4]"
              >
                <img
                  src={stack.icon}
                  alt={stack.name}
                  className="w-10 h-10 object-contain filter drop-shadow-[0_0_5px_#06b6d4]"
                />
              </div>

              {/* Tooltip */}
              {hovered === stack.name && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: -20 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-3 py-1 rounded-full border border-neutral-600 shadow-lg"
                >
                  {stack.percentage}
                </motion.div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Button Control */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleToggle}
            className={`px-6 py-2 rounded-lg ${
              running
                ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                : "bg-gradient-to-r from-gray-600 to-gray-800"
            } text-white hover:scale-105 transition`}
          >
            {running ? "Pause Animation" : "Start Animation"}
          </button>
        </div>
      </div>
    </section>
  );
}