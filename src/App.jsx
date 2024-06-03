import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Tech from './components/Tech/Tech';
import Footer from './components/Footer/Footer';
import Scroller from './components/Scroller/Scroller';
import Achievements from './components/Achievements/Achievements';
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Cursor from './components/Cursor/Cursor';
import Banner from './components/Banner/Banner';

export const ThemeContext = createContext(null);

function App() {
  const getTheme = () => {
    return 'dark';
  }
  const [theme, setTheme] = useState(getTheme());
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        {/* <Cursor/> */}
        <Navbar/>
        <Banner />
        <About />
        <Services/>
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
