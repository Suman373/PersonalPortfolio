import React from "react";
import '../styles/Skills.css'
import { useState, useEffect } from "react";
import  Tilt  from 'react-tilt';

const Skills = () => {

    // 

    return (
        <div className="skills-wrapper">
            <header className="title-container">
                <h2>My Skills and Services</h2>
            </header>
            <div className="cards-container" >

                <Tilt className="Tilt">
                <div className="cards web-design tilt-inner">
                    <h3>Website Design</h3>
                </div>
                </Tilt>

                <div className="cards front-end-dev" >
                    <h3 >Front-end Web Development</h3>
                </div>

                <div className="cards backend-dev" >
                    <h3>Backend Development</h3>

                </div>
            </div>
        </div>

    )
}

export default Skills;