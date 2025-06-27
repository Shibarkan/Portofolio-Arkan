import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Tomko - Price Comparison Website",
    description:
      "A modern web app to compare product prices across multiple marketplaces like Tokopedia, Shopee, and Amazon.",
    image:
      "https://i.pinimg.com/originals/07/49/5b/07495befb71e71f800711eee3d4cebc8.gif",
    tools: ["React", "Tailwind CSS", "Node.js", "Puppeteer"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Portofolio Website",
    description:
      "A personal portfolio website with interactive animations, responsive design, and dark mode support by default.",
    image:
      "https://i.pinimg.com/originals/07/49/5b/07495befb71e71f800711eee3d4cebc8.gif",
    tools: ["React", "Framer Motion", "Lucide React"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Kombucha Landing Page",
    description:
      "A clean and modern landing page for a probiotic kombucha drink. Fully responsive with attractive visual elements.",
    image:
      "https://i.pinimg.com/originals/07/49/5b/07495befb71e71f800711eee3d4cebc8.gif",
    tools: ["Next.js", "Tailwind CSS", "Vercel"],
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
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
                <p className="text-neutral-400 text-sm">{project.description}</p>

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
