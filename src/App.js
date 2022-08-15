import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {BrowserRouter as BRouter, Route, Routes } from 'react-router-dom';

export const ThemeContext = createContext(null);

function App() { 

  const [theme, setTheme] = useState("light");

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
