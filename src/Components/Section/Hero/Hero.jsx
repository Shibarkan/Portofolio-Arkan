import PixelTransition from "../../Controller/PixelTransition/PixelTransitio";
import TrueFocus from "../../Controller/TrueFocus/TrueFocus";
import './Hero.css';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center md:text-left">
            <TrueFocus
              sentence="I'm Arkan"
              manualMode={true}
              blurAmount={5}
              borderColor="red"
              animationDuration={0.4}
              pauseBetweenAnimations={0.4}
            />
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-xl mx-auto md:mx-0">
            A passionate Frontend Developer who loves crafting modern,
            responsive, and interactive websites with a touch of creativity.
            Let’s build something amazing together.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Tombol View Projects */}
            <button className="relative group">
              <div className="absolute inset-0 bg-gray-100 rounded-lg translate-x-1 translate-y-1"></div>
              <div
                className="glow relative px-6 py-3 bg-slate-900 rounded-lg border-2 border-gray-500 
    text-white  font-semibold transition-transform select-none"
              >
                View Projects
              </div>
            </button>

            {/* Tombol Contact Me */}
            <button className="relative group">
              <div className="absolute inset-0 bg-gray-100 rounded-lg translate-x-1 translate-y-1"></div>
              <div
                className="glow relative px-6 py-3 bg-slate-900 rounded-lg border-2 border-gray-500 
    text-white  font-semibold transition-transform select-none"
              >
                Contact Me
              </div>
            </button>
          </div>
        </div>

        {/* Right Side */}
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
