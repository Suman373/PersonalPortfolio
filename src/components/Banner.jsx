import React from "react";
import { useState } from "react";
import imageholder from '../assets/imageholder.svg';
import '../styles/Banner.css'; 

const Banner = ()=>{
  const  [appTheme , setAppTheme] = useState(false);



    return(
        <div id="home" className="banner-wrapper">
          <div className="banner-left">
            <h2>Hi! I am <span className="heading-highlight">Suman</span> , welcome to my <span className="heading-highlight">portfolio</span>.</h2>
            <p>A self-taught passionate web developer.</p>
            <div>
            <button>
              Hire me <i className="fa fa-rocket"></i>
            </button>
            <button>
              Resume <i className="fa fa-download"></i>
              </button>
            </div>    
          </div>
          <div className="banner-right">
            <div className="image-container">
                    <img className="bg-blob" src={imageholder} alt="blob"/>
            </div>
          </div>
        </div>
    )
}

export default Banner;