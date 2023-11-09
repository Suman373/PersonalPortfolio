import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Tech from './components/Tech';
import Footer from './components/Footer';
import Scroller from './components/Scroller';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';

export const ThemeContext = createContext(null);

function App() {

  const getTheme = () => {
    return localStorage.getItem('theme') || 'light'; // default is light
  }

  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <NavBar />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Tech />
        <Experience />
        <Achievements />
        <Testimonials />
        <Contact />
        <Footer />
        <Scroller />
    </div>
    </ThemeContext.Provider >
  );
}

export default App;
