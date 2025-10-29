import NavBar from "./componets/NavBar";
import { ThemeProvider } from "./componets/ThemeProvider";
import Hero from "./componets/Hero";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <NavBar />
        <Hero />
      </div>
    </ThemeProvider>
  );
};

export default App;
