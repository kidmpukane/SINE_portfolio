import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './Navigation/Home';
import About from './Navigation/About';
import Projects from './Navigation/Projects';
import CurrentProject from './Navigation/CurrentProject';
import NoPage from './Navigation/NoPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-me" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>

      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
