import NavBar from "./componets/NavBar";
import { ThemeProvider } from "./componets/ThemeProvider";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Motivation from "./componets/Motivation";
import Education from "./componets/Education";
import Experience from "./componets/Experience";
import Project from "./componets/Project";
import Languages from "./componets/Languages";
const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <NavBar />
        <Hero />
        <Motivation />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Project />
        <Languages />
      </div>
    </ThemeProvider>
  );
};

export default App;
