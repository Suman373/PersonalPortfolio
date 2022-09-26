import React,{useState, useRef} from "react";
import { useInView } from "react-intersection-observer";
import '../styles/About.css';
const About =()=>{

    const {ref: myTitleRef , inView : titleVisible} = useInView();
    const {ref: myDesRef, inView: despVisible} = useInView();
    
    return( 
        <>
            <main className="about-wrapper" id="about">
                <div className="about-title">
                    <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}>A brief <span className="heading-highlight">info about</span> me</h2>
                    <div className="underline"></div>
                </div>
                <div ref={myDesRef} className={despVisible ? "about-description show" : "about-description"}>
                    <p>Hey! This is Suman Roy, a passionate web developer from India. I am currently a sophomore, pursuing my bachelors in CSE.</p>
                    <p>I participate in online hackathons with team and sometimes solo too. A great team can execute great ideas, thus, I am currently looking for enthusiastic teammates.</p>
                    <p>I also contribute to open source projects according to the feature requests and issues submitted.</p>
                    <p>Apart from things related to tech, in my leisure (if any) I spend playing outdoor game or online games, sketch (seldom) and socialise with people. </p>

                   
                </div>
            </main>
        </>
    );
}

export default About;