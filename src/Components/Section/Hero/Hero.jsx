import { motion } from "framer-motion";
import PixelTransition from "../../Controller/PixelTransition/PixelTransitio";
import TrueFocus from "../../Controller/TrueFocus/TrueFocus";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0d0d0d]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Side */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1
            className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold text-white"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <TrueFocus
              sentence="I'm Arkan"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={0.4}
              pauseBetweenAnimations={0.4}
            />
          </motion.h1>

          <motion.p
            className="mt-4 text-base sm:text-lg text-neutral-300 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Student Fullstack who loves crafting modern,
            responsive, and interactive websites with a touch of creativity.
            Let’s build something amazing together!.
            <br></br>
            始まりはここから。-shiba
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="relative group"
            >
              <div className="absolute inset-0 bg-gray-100 rounded-lg translate-x-1 translate-y-1"></div>
              <div
                className="glow relative px-6 py-3 bg-slate-900 rounded-lg border-2 border-gray-500 
                  text-white font-semibold transition-transform select-none"
              >
                View Projects
              </div>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="relative group"
            >
              <div className="absolute inset-0 bg-gray-100 rounded-lg translate-x-1 translate-y-1"></div>
              <div
                className="glow relative px-6 py-3 bg-slate-900 rounded-lg border-2 border-gray-500 
                  text-white font-semibold transition-transform select-none"
              >
                Contact Me
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <PixelTransition
            firstContent={
              <img
                src="https://i.pinimg.com/736x/c2/86/1f/c2861f4708995fb7d5ad0aa8830e2912.jpg"
                alt="First Profile"
                className="w-full h-full object-cover"
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111",
                }}
              >
                <img
                  src="https://i.pinimg.com/736x/36/2c/b1/362cb1dc2439fd2184b61ea16e3bf52b.jpg"
                  alt="Second Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="w-[250px] sm:w-[300px] md:w-[400px] custom-pixel-card"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
