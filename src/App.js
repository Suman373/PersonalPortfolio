import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {BrowserRouter as BRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
