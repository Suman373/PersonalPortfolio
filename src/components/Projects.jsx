import React from "react";
import CryptoCatalogue from '../assets/CryptoCatalogue.png';
import travel_companion from '../assets/travel_companion.png';
import '../styles/Projects.css';


const Projects = () => {

    return (
        <>
            <main className="project-wrapper" id="projects">
                <h2 className="component-headings">Few <span className="heading-highlight">projects</span> I have <span className="heading-highlight">built</span></h2>
                <div className="underline"></div>
                <section className="project-container">

                    <div className="project-card">
                        <div className="project-title-container">
                            <h3>Crypto Catalogue</h3>
                        </div>
                        <div className="banner-container">
                            <a href="https://github.com/Suman373"
                            target="_blank">
                            <img src={CryptoCatalogue} 
                            alt="A banner for the project" />
                            </a>
                        </div>
                        <div className="info-container">
                                <p>A catalogue of all the trending cryptocurrencies and information about them.</p> 
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-title-container">
                            <h3>Travel Companion</h3>
                        </div>
                        <div className="banner-container">
                            <a href="https://github.com/Suman373"
                            target="_blank">
                               <img src={travel_companion} 
                               alt="Banner for project" />
                            </a>
                        </div>
                        <div className="info-container">
                                <p>Travel Companion is web app to help users review a place they visited in the map itself.</p>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-title-container">
                            <h3>Money Buddy</h3>
                        </div>
                        <div className="banner-container">
                            <a href="https://github.com/Suman373"
                            target="_blank">
                                <img src={travel_companion} 
                                alt="" />
                            </a>
                        </div>
                        <div className="info-container">
                            <p>Money Buddy helps you to track your money use for maximum savings!</p>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-title-container">
                            <h3>Plogify</h3>
                        </div>
                        <div className="banner-container">
                             <a href="https://github.com/Suman373"
                            target="_blank">
                                <img src={travel_companion} 
                                alt="Project banner" />
                            </a>
                        </div>
                        <div className="info-container">
                                <p>Plogify is the one stop for posting your picture blogs.It is under development.</p>
                        </div>
                    </div>

                    

                </section>
            </main>
        </>
    )
}

export default Projects;