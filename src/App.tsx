import NavBar from "./componets/NavBar";
import { ThemeProvider } from "./componets/ThemeProvider";
import Hero from "./componets/Hero";
import About from "./componets/About";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <NavBar />
        <Hero />
        <About />
      </div>
    </ThemeProvider>
  );
};

export default App;
