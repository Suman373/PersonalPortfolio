import React from "react";
import mypic from '../assets/myphoto.png';
import heroImg from '../assets/portfolio hero.png';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <>
      <div className="banner-wrapper" id="home">

        <section className="banner-slogan-container">
          <p className="bn-small-text">
            Hi there,
          </p>
          <h1>I'm <span>Suman</span>, <span>welcome</span> to my <span>portfolio website</span></h1>
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
          <img src={heroImg} alt="" />
          <div className="cover">
              <p>Web Dev</p>
          </div>
        </section>

      </div>
    </>
  )
}

export default Banner;