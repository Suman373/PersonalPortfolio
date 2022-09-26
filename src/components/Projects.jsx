import React from "react";
import { useInView } from "react-intersection-observer";
import CryptoCatalogue from '../assets/CryptoCatalogue.png';
import TravelCompanion from '../assets/TravelCompanion.png';
import '../styles/Projects.css';

const Projects = () => {

    const {ref: myTitleRef, inView:titleVisible} = useInView();
    const {ref: myCardRef, inView: cardVisible } = useInView();

    return (
        <>
            <main className="project-wrapper" id="projects">
                <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}>Few <span className="heading-highlight">projects</span> I have <span className="heading-highlight">built</span></h2>
                <div className="underline"></div>
                <section  
                ref={myCardRef}
                className="project-container">

                    <div className={cardVisible ? "project-card show" : "project-card"}>
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

                    <div className={cardVisible ? "project-card show" : "project-card"}>
                        <div className="project-title-container">
                            <h3>Travel Companion</h3>
                        </div>
                        <div className="banner-container">
                            <a href="https://github.com/Suman373"
                            target="_blank">
                               <img src={TravelCompanion} 
                               alt="Banner for project" />
                            </a>
                        </div>
                        <div className="info-container">
                                <p>Travel Companion is web app to help users review a place they visited in the map itself.</p>
                        </div>
                    </div>

                    <div className={cardVisible ? "project-card show" : "project-card"}>
                        <div className="project-title-container">
                            <h3>Money Buddy</h3>
                        </div>
                        <div className="banner-container">
                            <a href="https://github.com/Suman373"
                            target="_blank">
                                <img src={TravelCompanion} 
                                alt="" />
                            </a>
                        </div>
                        <div className="info-container">
                            <p>Money Buddy is your personal finance tracking application to help you save more.</p>
                        </div>
                    </div>

                    <div className={cardVisible ? "project-card show" : "project-card"}>
                        <div className="project-title-container">
                            <h3>Plogify</h3>
                        </div>
                        <div className="banner-container">
                             <a href="https://github.com/Suman373"
                            target="_blank">
                                <img src={TravelCompanion} 
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