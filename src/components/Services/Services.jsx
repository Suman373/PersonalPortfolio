import React from "react";
import './Services.css'
import { illusFrontend,illusBackend,illusDatabase } from "../../assets";
import { useInView } from "react-intersection-observer";

const Skills = () => {

    const {ref: myTitleRef, inView: titleVisible} = useInView();
    const {ref: myCardRef, inView: cardVisible } = useInView();

    return (
        <div className="skills-wrapper">
            <header className="title-container" id="skills">
                <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}><span className="heading-highlight">Services</span> I <span className="heading-highlight">provide</span></h2>
            <div className="underline" ></div>
            </header>
            <div ref={myCardRef} className="cards-container" >
                <div className={cardVisible ? "Card one show" : "Card one"} >
                <div className="Card-inner">
                    <h3>Website development</h3>
                    <div className="skills-images"> 
                         <img src={illusFrontend} alt="palette"/>
                    </div>
                    <p>Single and multi landing pages, portfolio websites and more</p>
                </div>
                </div>

                <div className={cardVisible ? "Card two show" : "Card two"}>
                <div className="Card-inner" >
                    <h3>Frontend Development</h3>
                    <div className="skills-images">
                        <img src={illusBackend} alt="frontend" />
                    </div>
                    <p>Reusable components, UI, SPAs and more</p>
                </div>
                </div>

                <div className={cardVisible ? "Card three show" : "Card three"}>
                <div className="Card-inner" >
                    <h3>Backend Development</h3>
                    <div className="skills-images">
                        <img src={illusDatabase} alt="database" />
                    </div>
                    <p>Database, server, auth and REST apis</p>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Skills;