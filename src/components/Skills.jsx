import React from "react";
import '../styles/Skills.css'
import illusFrontend from '../assets/illusFrontend.png';
import illusBackend from '../assets/illusBackend.png';
import illusDatabase from '../assets/illusDatabase.png';
import { useInView } from "react-intersection-observer";

const Skills = () => {

    const {ref: myTitleRef, inView: titleVisible} = useInView();
    const {ref: myCardRef, inView: cardVisible } = useInView();

    return (
        <div className="skills-wrapper">
            <header className="title-container" id="skills">
                <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}><span className="heading-highlight">Skills</span> that I have as a <span className="heading-highlight">good dev</span></h2>
            <div className="underline" ></div>
            </header>
            <div ref={myCardRef} className="cards-container" >
                <div className={cardVisible ? "Card one show" : "Card one"} >
                <div className="Card-inner">
                    <h3>Website Design</h3>
                    <div className="skills-images"> 
                         <img src={illusFrontend} alt="palette"/>
                    </div>
                    <p>I design modern webpages and landing pages using well researched UI/UX principles</p>
                </div>
                </div>

                <div className={cardVisible ? "Card two show" : "Card two"}>
                <div className="Card-inner" >
                    <h3>Frontend Development</h3>
                    <div className="skills-images">
                        <img src={illusBackend} alt="frontend" />
                    </div>
                    <p>I develop the UI components of web apps and SPAs using React</p>
                </div>
                </div>

                <div className={cardVisible ? "Card three show" : "Card three"}>
                <div className="Card-inner" >
                    <h3>Backend Development</h3>
                    <div className="skills-images">
                        <img src={illusDatabase} alt="database" />
                    </div>
                    <p>I am also familiar with backend development with REST apis and nosql databases</p>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Skills;