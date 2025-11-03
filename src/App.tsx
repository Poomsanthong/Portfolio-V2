import NavBar from "./componets/NavBar";
import { ThemeProvider } from "./componets/ThemeProvider";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Motivation from "./componets/Motivation";
import Education from "./componets/Education";

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
      </div>
    </ThemeProvider>
  );
};

export default App;
