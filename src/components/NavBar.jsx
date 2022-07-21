import React from "react";
import {useState,useEffect} from 'react';
import '../styles/NavBar.css';

const NavBar = ()=>{

    // hold our state for the active link
    const [ activeLink , setActiveLink ] = useState('home');
    
    // for hamburger menu
    const [ hamburgeropen , setHamburgerOpen] = useState(false);

    
    return (
        <div className="navbar-wrapper">
             
             {/* the left portion  */}
        <div className="left">
                <div className="logo-container">
                    <h2>&lt;SR/&gt;</h2>
                </div>
                <div className="toggle-btn">
                <i className="fa-solid fa-toggle-off"></i>
                </div>
        </div>

        {/* the right portion */}
        <div className={hamburgeropen ? 'right open' : 'right'}>
                <a 
                href="#home" 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={()=> setActiveLink('home')}>
                    Home
                </a>

                <a 
                href="#skills"  
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={()=> setActiveLink('skills')}>
                    Skills
                </a>

                <a 
                href="#projects" 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={()=> setActiveLink('projects')}>
                    Projects
                </a>

                <a 
                href="#about" 
                className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                onClick={()=> setActiveLink('about')}>
                    About Me
                </a>
                
              {/* social callouts  */}

                {/* social icon container */}
                <div className="social-icon">
                    <a href="https://" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://" target="_blank"><i className="fa-brands fa-github-alt"></i></a>
                    <a href="https://" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                </div>

                {/* contact form */}
                <button
                 className="social-btn"
                 onClick={()=>console.log("social connected")}>
                    Let's Connect
                </button>

                <button
                onClick={()=> setHamburgerOpen(!hamburgeropen)}
                className="hamburger-icon">
                    <i className="fa-solid fa-bars"></i>
                </button>
              </div>

        </div> // parent wrapper div
      );
}
export default NavBar;
