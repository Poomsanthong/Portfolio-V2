import React from "react";
import NavBar from "./componets/NavBar";
import { ThemeProvider } from "./componets/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <NavBar />
      </div>
    </ThemeProvider>
  );
};

export default App;
