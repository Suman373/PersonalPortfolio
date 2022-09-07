import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import {BrowserRouter as BRouter, Route, Routes } from 'react-router-dom';

export const ThemeContext = createContext(null);

function App() { 

    const getTheme = ()=>{
      return localStorage.getItem('theme') || 'light'; // default is light
    }

  const [theme, setTheme] = useState(getTheme());

  useEffect(()=>{
      localStorage.setItem('theme',theme);
  },[theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App" id={theme}>
      <BRouter>
      <Routes>
        <Route path="/" element={
          <>
          <NavBar/>
          <Banner/>
          <Skills/>
          <Projects/>
          <About/>
          </>
        }>
        </Route>
        <Route path="/contact" element={
          <>
           <Contact/>
          </>
        }>
        </Route>
      </Routes>
      </BRouter>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
