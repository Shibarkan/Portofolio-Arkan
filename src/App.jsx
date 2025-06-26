import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Section/Hero/Hero";
import TechStack from "./Components/TechStack";
import ScrollFloat from "./Tools/ScrollFLoat";
import Contact from "./Components/Section/Contact/Contact";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col pt-20">
        <Header />
        <main className="flex-grow">
          <Hero />
          <TechStack/>
          <Contact/>
          <ScrollFloat/>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
