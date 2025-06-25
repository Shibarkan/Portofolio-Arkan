import PixelTransition from "../../Controller/PixelTransition/PixelTransitio";
import TrueFocus from "../../Controller/TrueFocus/TrueFocus";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-indigo-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800 "
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col-reverse md:flex-row items-center gap-8 ">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-white">
            <TrueFocus
              sentence="I'm Arkan"
              manualMode={true}
              blurAmount={5}
              borderColor="red"
              animationDuration={0.4}
              pauseBetweenAnimations={0.4}
            />
          </h1>
          {/* <AddName/> */}

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="relative px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-25 blur-md rounded-lg"></span>
              <span className="relative">View Projects</span>
            </a>

            <a
              href="#contact"
              className="relative px-6 py-3 border border-cyan-400 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-white hover:scale-105 shadow-md hover:shadow-cyan-500/40 dark:hover:bg-gray-800 transition duration-300"
            >
              <span className="absolute inset-0 border border-cyan-400 rounded-lg opacity-20 blur-sm"></span>
              <span className="relative">Contact Me</span>
            </a>
          </div>
        </div>
        <PixelTransition
          firstContent={
            <img
              src="https://i.pinimg.com/736x/dd/af/be/ddafbecd3f250a6dcbdb7ae4670035ec.jpg"
              alt="First Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                src="https://i.pinimg.com/736x/4f/9c/00/4f9c007809b1c7b86c927b0dc6ff5071.jpg"
                alt="Second Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          }
          gridSize={12}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
      </div>
    </section>
    
  );
};

export default Hero;
