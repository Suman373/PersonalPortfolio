import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import projects from "../../data/projects";
import './Projects.css';
import Project from "../Project/Project";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


const Projects = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const containerXRef = useRef(null);

    return (
        <>
            <main className="project-wrapper" id="projects">
                <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>Recent <span className="heading-highlight">projects</span></h2>
                <div className="underline"></div>
                <div className="project-container" ref={containerXRef}>
                    {
                        projects.length > 0 ?
                            projects.map((projectItem, index) => (
                                <Project
                                    key={index}
                                    projectItem={projectItem} />
                            ))
                            :
                            <><p>No projects available</p></>
                    }
                </div>
            </main>
        </>
    );
}

export default Projects;