import { useEffect, useRef, useState } from "react";
import { animate, utils, createScope } from "animejs";

const stacks = [
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Vite",
    icon: "https://vitejs.dev/logo.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn-icons-png.flaticon.com/128/3368/3368866.png",
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://github.githubassets.com/favicons/favicon.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn-icons-png.flaticon.com/128/3522/3522714.png",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
];

export default function TechStackAnimated() {
  const scope = useRef();
  const [running, setRunning] = useState(true);

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

    // Clean up event listeners saat revert
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
    <section id="tools" className="py-16 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-neutral-800 dark:text-white">
          Tech Stack
        </h2>

        {/* Row */}
        <div className="flex flex-wrap justify-center gap-6 row">
          {stacks.map((stack) => (
            <div
              key={stack.name}
              className="circle w-16 h-16 bg-white dark:bg-neutral-900 rounded-xl shadow-lg flex items-center justify-center transition"
            >
              <img
                src={stack.icon}
                alt={stack.name}
                className="w-10 h-10 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Button Control */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleToggle}
            className={`px-6 py-2 rounded-lg ${
              running
                ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                : "bg-gradient-to-r from-gray-400 to-gray-600"
            } text-white hover:scale-105 transition`}
          >
            {running ? "Pause Animation" : "Start Animation"}
          </button>
        </div>
      </div>
    </section>
  );
}
