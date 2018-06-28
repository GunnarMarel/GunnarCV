import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Welcome/>
      <h3 className="heading" id="about"></h3>
      <About />
        <h2 className="heading" id="projects">PROJECTS</h2>
          <Projects />
        <h2 className="heading" id="skills">SKILLS</h2>
          <Skills />
        <h2 className="heading" id="footer"></h2>
          <Footer />
      </div>
    );
  }
}

export default App;
