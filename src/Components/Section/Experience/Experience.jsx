import { motion } from "framer-motion";

const experiences = [
  {
    year: "2022",
    title: "Start Learning Coding",
    description:
      "Began exploring web development with HTML, CSS, and build a mini project.",
  },
  {
    year: "2022",
    title: "First Project",
    description:
      "My first project was creating website for my class bazaar, its like food court in my school.",
  },
  {
    year: "2023",
    title: "Joined Bootcamp",
    description:
      "I learned Java, and PHP in bootcamp with senior programming, i learned database and OOP.",
  },
  {
    year: "2023",
    title: "Fisrt Client",
    description:
      "My fisrt client is my friend, my friend asked me to build a website for his bussines, but only one product, so i decide to build a static website with html, tailwind, js for my friend.",
  },
  {
    year: "2024",
    title: "Frontend Developer",
    description:
      "Working with modern stacks, focusing on UI/UX design, micro-interactions, performance optimization, and accessibility.",
  },
  {
    year: "2025",
    title: "Learning Fullstack",
    description:
      "In this year i learn Fullstack, specially backend.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex items-center justify-center px-4 bg-[#0d0d0d] overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-600 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-center text-white mb-20 pt-32 relative"
        >
          <span className="text-white">My</span>{" "}
          <span className="text-indigo-500">Experience</span>
          {/* Background glow behind text */}
          <span className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[120px] bg-indigo-500 opacity-20 blur-3xl rounded-full"></span>
        </motion.h2>

        <motion.div
          className="relative border-l-2 border-neutral-700 ml-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-16 pl-8 relative group"
            >
              {/* Circle Dot */}
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-1 -left-2 border-4 border-[#0d0d0d] group-hover:scale-110 transition"></div>

              {/* Year */}
              <time className="block mb-1 text-sm font-medium text-neutral-400">
                {exp.year}
              </time>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition">
                {exp.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-neutral-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
