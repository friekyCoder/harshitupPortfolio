import { useEffect } from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
import Hero from "./components/UI/Hero";
//import Skills from "./components/UI/Skills";
import Education from "./components/UI/Education";
import Projects from "./components/UI/Projects";
import Contact from "./components/UI/Contact";
import Skills from "./components/UI/Skills";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
