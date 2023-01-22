import React from 'react';
import './App.css';
import Home from './Navigation/Home';
import About from './Navigation/About';
import Projects from './Navigation/Projects';
import CurrentProject from './Navigation/CurrentProject';

function App() {
  return (
    <div className="App">
    <Home />
    <About />
    <Projects />
    <CurrentProject/>

    </div>
  );
}

export default App;
