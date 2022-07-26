import React from "react";
import '../styles/Skills.css'
import  Tilt  from 'react-tilt';
import palette from '../assets/palette.webp';
import frontend from '../assets/frontend.webp';
import database from '../assets/database.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import mui from '../assets/mui.png';
import sass from '../assets/sass.png';
import netlify from '../assets/netlify.png';
import java from '../assets/java.png';
import python from '../assets/python.png';
import npm from '../assets/npm.png';
import firebase from '../assets/firebase.png';
import c from '../assets/c.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import rocketimage from '../assets/rocketimage.png';

const Skills = () => {

    // 

    return (
        <div className="skills-wrapper">
            <header className="title-container" id="skills">
                <h2>My Skills and Services</h2>
            </header>
            <div className="cards-container" >

                <Tilt className="Tilt one" >
                <div className="Tilt-inner">
                    <h3>Website Design</h3>
                    <span className="emojis"> 
                    <img src={palette} alt="palette"/>
                    </span>
                    <p>I design modern webpages using tools like CSS, Mui, Figma,etc which are loved by everyone </p>
                </div>
                </Tilt>

                <Tilt className="Tilt two">
                <div className="Tilt-inner" >
                    <h3>Front-end Web Development</h3>
                    <span className="emojis">
                        <img src={frontend} alt="frontend" />
                    </span>
                    <p>I develop the UI of SPAs and webapps using Reactjs library </p>
                </div>
                </Tilt>

                <Tilt className="Tilt three">
                <div className="Tilt-inner" >
                    <h3>Backend Development</h3>
                    <span className="emojis">
                        <img src={database} alt="database" />
                    </span>
                    <p>I am also familiar with backend development, RESTful APIS, databases and deployment</p>
                </div>
                </Tilt>
            </div>

            <div className="stack-container">
                <h2>Techs I use</h2>
                
                    <h3>Languages | Libraries | Framework | Hosting</h3>
                    <div className="big-flex-box">
                        <div className="left-side">
                            {/* contains the techs */}
                            <img src={html} alt="html" />
                            <img src={css} alt="css" />
                            <img src={js} alt="js" />
                            <img src={react} alt="react" />
                            <img src={mui} alt="mui" />
                            <img src={sass} alt="sass" />
                            <img src={netlify} alt="netlify" />
                            <img src={firebase} alt='firebase' />
                            <img src={git} alt="git" />
                            <img src={github} alt="github" />
                            <img src={npm} alt="npm" />
                            <img src={c} alt="c" />
                            <img src={java} alt="java" />
                            <img src={python} alt="python" />
                        </div>
                        <div className="right-side">
                          <p>These are the programming languages, scripting language, technology, tools , etc I use while making projects. I am skilled in most of them,  won't say master, as it takes time. I am currently learning more about backend implementation.</p>
                          <img src={rocketimage} />
                        </div>
                    </div>
            </div>
        </div>

    )
}

export default Skills;