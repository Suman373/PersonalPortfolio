import React from 'react';
import './Project.css';
import { FaEye, FaGithub } from 'react-icons/fa';

const Project = ({ projectItem }) => {
    return (
        <>
            <div className="project-card">
                <div className="project-title-container">
                    <h3>{projectItem.title}</h3>
                </div>
                <div className="banner-container">
                    <img src={projectItem.imgSrc}
                        alt="" />
                </div>
                <div className="info-container">
                    <p>{projectItem.about}</p>
                </div>
                <div className="redirects">
                    <a href="#"><FaGithub /></a>
                    <a href={projectItem.demoLink} target="_blank"><FaEye /></a>
                </div>
            </div>

        </>
    )
}

export default Project;
