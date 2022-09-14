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
import nodejs from '../assets/nodejs.png';
import express from '../assets/express.png';
import netlify from '../assets/netlify.png';
import herokuhost from '../assets/herokuhost.png';
import mongodb from '../assets/mongodb.png';
import java from '../assets/java.png';
import python from '../assets/python.png';
import npm from '../assets/npm.png';
import firebase from '../assets/firebase.png';
import c from '../assets/c.png';
import git from '../assets/git.png';
import github from '../assets/github.png';

const Skills = () => {

    // 

    return (
        <div className="skills-wrapper">
            <header className="title-container" id="skills">
                <h2>My Skills and Services</h2>
            <div className="underline" ></div>
            </header>
            <div className="cards-container" >
                <Tilt className="Tilt one" >
                <div className="Tilt-inner">
                    <h3>Website Design</h3>
                    <span className="emojis"> 
                    <img src={palette} alt="palette"/>
                    </span>
                    <p>I design modern webpages, landing pages which are loved by everyone </p>
                </div>
                </Tilt>

                <Tilt className="Tilt two">
                <div className="Tilt-inner" >
                    <h3>Front-end Web Development</h3>
                    <span className="emojis">
                        <img src={frontend} alt="frontend" />
                    </span>
                    <p>I develop the UI of SPAs and webapps using React </p>
                </div>
                </Tilt>

                <Tilt className="Tilt three">
                <div className="Tilt-inner" >
                    <h3>Backend Development</h3>
                    <span className="emojis">
                        <img src={database} alt="database" />
                    </span>
                    <p>I am also familiar with backend development with REST</p>
                </div>
                </Tilt>
            </div>

            <div className="stack-container">
                <h2>Techs I use</h2>
                <div className="underline"></div>
                    <h3>Languages | Libraries | Framework | Hosting</h3>
                    <div className="big-flex-box">
                        <div className="left-side">
                            {/* contains the techs */}
                            <img src={html} alt="html" />
                            <img src={css} alt="css" />
                            <img src={js} alt="js" />
                            <img src={react} alt="react" />
                            <img src={nodejs} alt="node" />
                            <img src={express} alt="express"/>
                            <img src={mongodb} alt="mongo"/>                            
                            <img src={netlify} alt="netlify" />
                            <img src={herokuhost} alt="heroku" />
                            {/* <img src={firebase} alt='firebase' /> */}
                            <img src={mui} alt="mui" />
                            <img src={git} alt="git" />
                            <img src={github} alt="github" />
                            {/* <img src={npm} alt="npm" /> */}
                            {/* <img src={c} alt="c" /> */}
                            {/* <img src={java} alt="java" /> */}
                            {/* <img src={python} alt="python" /> */}
                        </div>
                        <div className="right-side">
                          <p>These are the scripting language,cloud hosting technologies, tools , etc I use while making my projects. I am skilled in them and always learning something new about them. I use MERN stack, although I have plans to explore FIRE stack for smaller serverless projects.</p>
                        </div>
                    </div>
            </div>
        </div>

    )
}

export default Skills;