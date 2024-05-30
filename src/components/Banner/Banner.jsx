import React, { useEffect, useRef } from "react";
import { heroImg } from "../../assets";
import './Banner.css';
import Typed from "typed.js";

const Banner = () => {

  // create the ref for the typewriter animation text
  const elementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elementRef.current, {
      strings: ["Welcome to my portfolio website",
        "I am a self-taught developer",
        "I like to build user-friendly full stack webapps",
        "I am an aspiring software developer"],
      typeSpeed: 100,
      backSpeed: 30,
      loop: true
    });

    // cleanup
    return () => {
      typed.destroy();
    }
  }, []);


  return (
    <>
      <div className="banner-wrapper" id="home">
        <section className="banner-slogan-container">
          <p className="bn-small-text">
            Hi there,
          </p>
          <h1>I'm Suman, <span ref={elementRef}></span></h1>
          
          <p>
            <i className="fa-solid fa-laptop-code"></i> {"  "}
            A passionate self-taught full stack developer
          </p>
          <div className="banner-buttons-container">
            <button><a href="#contact">Let's talk ✉</a></button>
            <button id="resume-btn">Resume ↗</button>
          </div>
        </section>

        <section className="banner-image-container">
          <div className="banner-sticker">
            <p>Open for freelance work</p>
            <p>Technical Blogger</p>
          </div>
          {/* <img src={mypic} alt="Profile banner" /> */}
          <img src={heroImg} alt="hero" />
          <div className="cover">
            <p>Web Dev</p>
          </div>
        </section>

      </div>
    </>
  )
}

export default Banner;