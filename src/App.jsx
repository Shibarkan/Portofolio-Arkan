import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Section/Hero/Hero";
import TechStack from "./Components/Section/TechStack/TechStack";
import ScrollFloat from "./Tools/ScrollFLoat";
import Contact from "./Components/Section/Contact/Contact";
import Project from "./Components/Section/Projects/Project";
import Experience from "./Components/Section/Experience/Experience";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col pt-20">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Experience />
          <TechStack />
          <Project />
          <Contact />
          <ScrollFloat />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
