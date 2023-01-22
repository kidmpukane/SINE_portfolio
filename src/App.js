import React from 'react';
import './App.css';
import Home from './Navigation/Home';
import About from './Navigation/About';
import Projects from './Navigation/Projects';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
