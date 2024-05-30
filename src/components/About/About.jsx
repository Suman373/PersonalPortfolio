import { useInView } from "react-intersection-observer";
import './About.css';

const About = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myDesRef, inView: despVisible } = useInView();

    return (
        <>
            <main className="about-wrapper" id="about">
                <div className="about-title">
                    <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>A brief <span className="heading-highlight">info about</span> me</h2>
                    <div className="underline"></div>
                </div>
                <div ref={myDesRef} className={despVisible ? "about-description show" : "about-description"}>
                    <p>Hey! I am Suman Roy, a passionate web developer from India. I am currently in my prefinal year of Computer Science and Engineering.</p>
                    <p>I am aspiring to be a better developer while learning the entire client-side, server-side architecture, serverless, testing and little bit of DevOps ✨</p>
                    <p>I am open for remote opportunites as a OSS collaborator, freelancer, intern or part-time roles.</p>
                    <p>My hobbies include a lot of things, like cycling, painting, watching movies & animes, playing outdoor games.</p>
                </div>
            </main>
        </>
    );
}

export default About;