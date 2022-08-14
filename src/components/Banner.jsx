import React from "react";
import imageholder from '../assets/imageholder.svg';
import '../styles/Banner.css'; 

const Banner = ()=>{
    return(
        <div id="home" className="banner-wrapper">
          <div className="banner-left">
            <h2>Hi! I am Suman Roy</h2>
            <img src="https://readme-typing-svg.herokuapp.com/?font=Helvetica&size=30&color=29b347&background=7FFCFF00&width=450&height=69&lines=I+am+a+web+developer;I+am+a+CSE+undergrad;I+love+creating+awesome+SPAs;" alt="typing-svg"/>
            <div>
            <button>Hire me <i className="fa fa-rocket"></i></button>
            <button>Resume <i className="fa fa-download"></i></button></div>    
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