import { useInView } from "react-intersection-observer";
import './About.css';

const About = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myDesRef, inView: despVisible } = useInView();

    return (
        <>
            <main className="about-wrapper" id="about">
                <div className="about-title">
                    <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>A brief <span className="heading-highlight">info about</span> me.</h2>
                    <div className="underline"></div>
                </div>
                <div ref={myDesRef} className={despVisible ? "about-description show" : "about-description"}>
                    <p>Hey! I am Suman Roy, a self-taught Software Developer from India. I am currently in my prefinal year of Computer Science and Engineering degree.</p>
                    <p>I got a knack for building and breaking cool applications ✨</p>
                    <p>I am currently exploring Cloud ☁️</p>
                    {/* <p>Me and my team build projects revolving around SaaS, SAPs, Cross platform mobile apps, Cloud ☁️</p> */}
                    <p>I am open to remote opportunities as a software developer, full-stack developer, or React developer</p>
                    <p>My hobbies include a lot of things, like cycling, painting, watching movies & animes, playing outdoor games.</p>
                </div>
            </main>
        </>
    );
}

export default About;