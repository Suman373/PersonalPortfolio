import React from "react";
import { useInView } from "react-intersection-observer";
import projects from "../data/projects";

import '../styles/Projects.css';
import Project from "./Project";

const Projects = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myCardRef, inView: cardVisible } = useInView();

    return (
        <>
            <main className="project-wrapper" id="projects">
                <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>Recent <span className="heading-highlight">projects</span></h2>
                <div className="underline"></div>
                <section
                    ref={myCardRef}
                    className="project-container">
                    {
                        projects.length>0 ?
                        projects.map((projectItem,index)=>(
                            <>
                                <Project 
                                key={index}
                                cardVisible={cardVisible}
                                projectItem={projectItem}/>
                            </>
                        ))
                        :
                        <><p>No projects available</p></>
                    }
                </section>
            </main>
        </>
    );
}

export default Projects;