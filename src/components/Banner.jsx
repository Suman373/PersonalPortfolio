import React from "react";
import imageholder from '../assets/imageholder.svg';
import '../styles/Banner.css'; 

const Banner = ()=>{

    return(
        <div id="home" className="banner-wrapper">
          <div className="banner-left">
            <h2>Hi! I am <span className="heading-highlight">Suman</span> , welcome to my <span className="heading-highlight">portfolio</span>.</h2>
            <p>A self-taught passionate web developer.</p>
            <div>
            <a href="#contact">
            <button>
              Hire me <i className="fa fa-rocket"></i>
            </button>
            </a>
            <button className="resume-btn">
              Resume <i className="fa fa-link"></i>
              </button>
            </div>    
          </div>
          <div className="banner-right">
          <div className="stickers"> 
            <h4>Web dev <span style={{color:'var(--red)'}}>❤</span></h4>
          </div>
          <div className="stickers">
            <h4>Let's build together 🚀</h4>
          </div>

          <div className="stickers">
            <h4>Explorer 🔍</h4>
          </div>
            <div className="image-container">
                    <img className="bg-blob" src={imageholder} alt="blob"/>
            </div>
          </div>
        </div>
    )
}

export default Banner;