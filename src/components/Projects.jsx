import React from "react";
import '../styles/Projects.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Projects = ()=>{

    // image object
    const items = [
       <main className="projects">
        <div className="project1 ">
        <div className="overlay">
           <a href="https://github.com/Suman373/CryptoCatalogue/" target="_blank">
            <button>
                Visit
            </button>
            </a>
        </div>
        </div>
        </main>,

       <main className="projects">
        <div className="project2">
        <div className="overlay">
           <a href="https://github.com/Suman373/Plogify/" target="_blank">
            <button>
                Visit
            </button>
            </a>
        </div>
        </div>
        </main>,

       <main className="projects">
        <div className="project3">
        <div className="overlay">
           <a href="https://github.com/Suman373/travel-companion/" target="_blank">
            <button>
                Visit
            </button>
            </a>
        </div>
        </div>
        </main>,


      ];

    return(
        
        <div className="projects-wrapper">
                <div className="project-title-container" id="projects">
                    <h2>My projects</h2>
                    <div className="underline"></div>
                    <p>Here are my projects 💣</p>
                </div>
                <div className="carousel-container">
                <AliceCarousel
                animationType="fadeout"
                // disableButtonsControls
                autoPlay
                autoPlayInterval={2000}
                infinite
                 mouseTracking items={items} />
                </div>
        </div>
    )
}

export default Projects;