import { useEffect, useRef, useState } from "react";
import { animate, utils, createScope } from "animejs";

const stacks = [
  {
    name: "React",
    URL: "https://react.dev/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Vite",
    URL: "https://vitejs.dev/",
    icon: "https://vitejs.dev/logo.svg",
  },
  {
    name: "Tailwind",
    URL: "https://tailwindcss.com/docs",
    icon: "https://www.svgrepo.com/show/333609/tailwind-css.svg",
  },
  {
    name: "Node.js",
    URL: "https://nodejs.org/en/docs",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    URL: "https://expressjs.com/en/starter/installing.html",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    URL: "https://www.mongodb.com/docs/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "GitHub",
    URL: "https://docs.github.com/en",
    icon: "https://github.githubassets.com/favicons/favicon.svg",
  },
  {
    name: "Vercel",
    URL: "https://vercel.com/docs",
    icon: "https://cdn-icons-png.flaticon.com/128/3522/3522714.png",
  },
  {
    name: "JavaScript",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML",
    URL: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: "https://cdn-icons-png.flaticon.com/128/174/174854.png",
  },
  {
    name: "CSS",
    URL: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
  },
  {
    name: "Python",
    URL: "https://docs.python.org/3/",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
  },
  {
    name: "Java",
    URL: "https://docs.oracle.com/en/java/",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png",
  },
  {
    name: "PHP",
    URL: "https://www.php.net/docs.php",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968332.png",
  },
  {
    name: "Git Bash",
    URL: "https://git-scm.com/doc",
    icon: "https://cdn-icons-png.flaticon.com/128/11518/11518876.png",
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
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Tools
        </h2>

        {/* Icon Row */}
        <div className="flex flex-wrap justify-center gap-6 row">
          {stacks.map((stack) => (
            <a
              key={stack.name}
              href={stack.URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="circle w-16 h-16 
        bg-neutral-900 rounded-xl 
        shadow-lg flex items-center justify-center 
        border border-neutral-700 
        hover:scale-110 
        hover:shadow-[0_0_20px_#06b6d4]"
              >
                <img
                  src={stack.icon}
                  alt={stack.name}
                  className="w-10 h-10 object-contain filter drop-shadow-[0_0_5px_#06b6d4]"
                />
              </div>
            </a>
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
