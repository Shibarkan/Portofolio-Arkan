import { motion } from "framer-motion";
import Folder from "../../../Tools/Folder";

const About = () => {
  const age = new Date().getFullYear() - 2007;

  return (
    <section
      id="about"
      className="min-h-screen w-full bg-[#0d0d0d] text-neutral-300 px-4 md:px-8 py-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-center">
        {/* Left Section - Text */}
        <div className="space-y-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Hello! My name is{" "}
            <span className="text-white font-semibold">
              Muhammad Arkan Nadhif Rafsanjani
            </span>
            . I am currently{" "}
            <span className="text-white font-semibold">{age}</span> years old. I
            was born on{" "}
            <span className="text-white font-semibold">January 2nd, 2007</span>{" "}
            and graduated from{" "}
            <span className="text-white font-semibold">SMA 3 Demak</span>.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            I started coding when I was{" "}
            <span className="text-white font-semibold">16 years old</span> in
            10th grade. I took a break at{" "}
            <span className="text-white font-semibold">17</span> and came back
            stronger at{" "}
            <span className="text-white font-semibold">18 years old</span> with
            more motivation and energy.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            Outside of coding, I absolutely love{" "}
            <span className="text-white font-semibold">Mie Ayam</span> 🍜. It's
            not just food — it’s a mood booster, a stress reliever, and honestly,
            probably the best thing ever!
          </motion.p>

          <motion.p
            className="text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            Currently, I’m focusing on{" "}
            <span className="text-white font-semibold">Frontend Development</span>
            ,{" "}
            <span className="text-white font-semibold">
              Backend Development
            </span>{" "}
            and{" "}
            <span className="text-white font-semibold">UI/UX Design</span> to
            create modern, interactive, and beautiful websites.
          </motion.p>
        </div>

        {/* Right Section - Folder Hobby */}
        <div className="flex flex-col items-center">
          <Folder
            size={1.1}
            color="#3A8DFF"
            className="custom-folder"
            items={[
              <img
                src="https://i.pinimg.com/736x/39/b3/8c/39b38c29f6fece2a25c01fd5bac7c69e.jpg"
                alt="Cycling"
                className="w-full h-full object-cover rounded-md"
              />,
              <img
                src="https://i.pinimg.com/736x/e4/c4/98/e4c498d57fe6b25baba10e5241ae8214.jpg"
                alt="badminton"
                className="w-full h-full object-cover rounded-md"
              />,
              <img
                src="https://i.pinimg.com/736x/43/cd/2e/43cd2e389ae00aa9ccfd060b5612394a.jpg"
                alt="running"
                className="w-full h-full object-cover rounded-md"
              />,
              <img
                src="https://i.pinimg.com/736x/87/bc/a1/87bca1fbcc4f328fdb009b12f1261e3a.jpg"
                alt="Music"
                className="w-full h-full object-cover rounded-md"
              />,
              <img
                src="https://i.pinimg.com/736x/ce/d4/ed/ced4ed156b8fe49fba3f33f5c0bb773f.jpg"
                alt="my gf"
                className="w-full h-full object-cover rounded-md"
              />,
            ]}
          />
          <p className="mt-6 text-center text-neutral-400">
            📁 Hob_pict
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
