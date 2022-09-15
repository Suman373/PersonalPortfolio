import React from "react";
import '../styles/Skills.css'
import palette from '../assets/palette.webp';
import frontend from '../assets/frontend.webp';
import database from '../assets/database.png';

const Skills = () => {
    return (
        <div className="skills-wrapper">
            <header className="title-container" id="skills">
                <h2 className="component-headings"><span className="heading-highlight">Skills</span> that makes me a <span className="heading-highlight">good dev</span></h2>
            <div className="underline" ></div>
            </header>
            <div className="cards-container" >
                <div className="Card one" >
                <div className="Card-inner">
                    <h3>Website Design</h3>
                    <span className="emojis"> 
                    <img src={palette} alt="palette"/>
                    </span>
                    <p>I design modern webpages, landing pages which are loved by everyone </p>
                </div>
                </div>

                <div className="Card two">
                <div className="Card-inner" >
                    <h3>Front-end Web Development</h3>
                    <span className="emojis">
                        <img src={frontend} alt="frontend" />
                    </span>
                    <p>I develop the UI of SPAs and webapps using React </p>
                </div>
                </div>

                <div className="Card three">
                <div className="Card-inner" >
                    <h3>Backend Development</h3>
                    <span className="emojis">
                        <img src={database} alt="database" />
                    </span>
                    <p>I am also familiar with backend development with REST</p>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Skills;