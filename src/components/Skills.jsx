import React from "react";
import '../styles/Skills.css'
import illusFrontend from '../assets/illusFrontend.png';
import illusBackend from '../assets/illusBackend.png';
import illusDatabase from '../assets/illusDatabase.png';

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
                    <div className="emojis"> 
                         <img src={illusFrontend} alt="palette"/>
                    </div>
                    <p>I design modern webpages, landing pages which are loved by everyone </p>
                </div>
                </div>

                <div className="Card two">
                <div className="Card-inner" >
                    <h3>Frontend Development</h3>
                    <div className="emojis">
                        <img src={illusBackend} alt="frontend" />
                    </div>
                    <p>I develop the UI of SPAs and webapps using React </p>
                </div>
                </div>

                <div className="Card three">
                <div className="Card-inner" >
                    <h3>Backend Development</h3>
                    <div className="emojis">
                        <img src={illusDatabase} alt="database" />
                    </div>
                    <p>I am also familiar with backend development with REST</p>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Skills;