import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import galleryMusic from "./assets/gallery-music.png";
import portofolio1 from "./assets/portofolio1.png";
import VibesValue from "./assets/VibesValue.jpg";

const projects = [
  {
    id: 1,
    title: "Vibes Value - Web Scrapping ",
    description:
      "A modern web app to compare product prices across multiple marketplaces like Blibli, Ebay, and Amazon.",
    image: VibesValue,
    tools: ["Tailwind CSS", "Node.js", "Puppeteer", "javascript"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Portofolio Website",
    description:
      "A personal portfolio website with interactive animations, responsive design.",
    image: portofolio1,
    tools: ["HTML", "Tailwind CSS", "javascript"],
    github: "https://github.com/Shibarkan/arkan",
    demo: "https://shibarkan.github.io/arkan/",
  },
  {
    id: 3,
    title: "Gallery - Music",
    description:
      "Website CRUD gallery, u can upload an place them to the gallery, u can edit or delete, also u can play music.",
    image: galleryMusic,
    tools: ["Tailwind CSS", "HTML", "javascript"],
    github: "https://github.com/Shibarkan/memo",
    demo: "https://shibarkan.github.io/memo/",
  },
    {
    id: 4,
    title: "Game Simple",
    description:
      "3 games u can play when u boring.",
    image: "https://shibarkan.github.io/arkan/pict/project4.png",
    tools: ["Tailwind CSS", "HTML", "javascript"],
    github: "https://github.com/Shibarkan/arkansGame",
    demo: "https://shibarkan.github.io/arkansGame/",
  },
      {
    id: 5,
    title: "THR counter",
    description:
      "Website for counting ur money when ramadhan.",
    image: "https://shibarkan.github.io/arkan/pict/project5.png",
    tools: ["Tailwind CSS", "HTML", "javascript"],
    github: "https://github.com/Shibarkan/thr-bang-thr",
    demo: "https://shibarkan.github.io/thr-bang-thr/",
  },
      {
    id: 6,
    title: "Bazaar Web",
    description:
      "Website for my class when show p5, this website for order our product.",
    image: "https://shibarkan.github.io/arkan/pict/project3.png",
    tools: ["CSS", "HTML", "javascript"],
    github: "#",
    demo: "https://bazaarx7.w3spaces.com/",
  },
      {
    id: 7,
    title: "Alumni Web",
    description:
      "This website was build with PHP, this website have auth, and use database sql.",
    image: "https://i.pinimg.com/474x/96/17/1c/96171c2c6906d02ed6a4840088a7f47d.jpg",
    tools: ["Tailwind CSS", "HTML", "javascript", "PHP" , "SQL"],
    github: "#",
    demo: "#",
  },
  
];

const Project = () => {
  return (
    <section id="projects" className="min-h-screen bg-[#0d0d0d] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white mb-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          My Projects
        </motion.h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-neutral-900 rounded-2xl border border-neutral-700 overflow-hidden shadow-lg group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-white text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-neutral-800 border border-neutral-600 px-3 py-1 text-xs rounded-full text-neutral-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-neutral-300 hover:text-white transition"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-neutral-300 hover:text-white transition"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
