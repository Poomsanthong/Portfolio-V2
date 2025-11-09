import NavBar from "./componets/NavBar";
import { ThemeProvider } from "./componets/ThemeProvider";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Skills from "./componets/Skills";
// import Motivation from "./componets/Motivation";
import Education from "./componets/Education";
import Experience from "./componets/Experience";
import Project from "./componets/Project";
import Languages from "./componets/Languages";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";

import { Analytics } from "@vercel/analytics/react";
const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <NavBar />
        <Hero />
        {/* <Motivation /> */}
        <About />
        <Skills />
        <Education />
        <Experience />
        <Project />
        <Languages />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </ThemeProvider>
  );
};

export default App;
