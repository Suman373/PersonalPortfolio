import React from "react";
import '../styles/Projects.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import taskmanager from '../assets/taskmanager.png';

const handleDragStart = (e) => e.preventDefault();

const Projects = ()=>{
    // image object
    const items = [
       <div className="projects">
        <div className="overlay">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus!
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
                autoPlay
                autoPlayInterval={4000}
                infinite
                 mouseTracking items={items} />
                </div>
        </div>
    )
}

export default Projects;