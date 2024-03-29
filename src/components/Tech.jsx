import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import sass from '../assets/sass.png';
import nodejs from '../assets/nodejs.png';
import express from '../assets/express.png';
import mongodb from '../assets/mongodb.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import '../styles/Tech.css';
import { useInView } from 'react-intersection-observer';

const Tech=()=>{

    const {ref: myTitleRef , inView : titleVisible} = useInView();
    const {ref: myDesRef, inView: despVisible} = useInView();

    return(
        <div className="stack-container" id="tech">
                <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}>
                    <span className="heading-highlight">Technologies</span> I use
                </h2>
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
                            <img src={sass} alt="sass" />
                            <img src={git} alt="git" />
                            <img src={github} alt="github" />
                        </div>
                        <div 
                            ref={myDesRef} 
                            className={despVisible ? "right-side show" : "right-side"}>
                          <p>These are the programming language, scripting language, tools and technologies I use while building projects.I have experience in MERN stack. Right now am focused on sharpening my skills and work on real world project focused on solving problems.</p>
                        </div>
                    </div>
            </div>
    );
}
export default Tech;
