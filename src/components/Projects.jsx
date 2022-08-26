import React from "react";
import '../styles/Projects.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Projects = ()=>{

    // image object
    const items = [
       <div className="projects">
        <div className="project1">
        <div className="overlay">
          <h4> A catalogue for trending cryptocurrencies.</h4>
           <a href="https://github.com/Suman373/CryptoCatalogue/" target="_blank">
            <button>
                Visit
            </button>
            </a>
        </div>
        </div>
        </div>,
       <div className="projects">
            <div className="overlay">

            </div>
        </div>,
       <div className="projects">
            <div className="overlay">

            </div>
       </div>,
      ];

    return(
        
        <div className="projects-wrapper">
                <div className="project-title-container" id="projects">
                    <h2>My projects</h2>
                    <p>Here are my projects 💣</p>
                </div>
                <div className="carousel-container">
                <AliceCarousel
                animationType="fadeout"
                disableButtonsControls
                // autoPlay
                autoPlayInterval={4000}
                infinite
                 mouseTracking items={items} />
                </div>
        </div>
    )
}

export default Projects;