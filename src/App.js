import { createContext, React, useContext, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Navigation/Home";
import About from "./Navigation/About";
import Projects from "./Navigation/Projects";
import CurrentProject from "./Navigation/CurrentProject";
import NoPage from "./Navigation/NoPage";
import ToggleSwitch from "./Navigation/ToggleSwitch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/current-project" element={<CurrentProject />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
        <div className="switch-container">
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <span className="switch" />
          </label>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
