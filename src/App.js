import { createContext, React, useContext, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Navigation/Home";
import About from "./Navigation/About";
import Projects from "./Navigation/Projects";
import SelfStudy from "./Navigation/SelfStudy";
import NoPage from "./Navigation/NoPage";
import TestPage from "./Navigation/TestPage";
import ToggleSwitch from "./Navigation/ToggleSwitch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/test-page" element={<TestPage />} />
      <Route path="/continuous-self-study" element={<SelfStudy />} />

      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
