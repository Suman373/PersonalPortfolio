import { html, css, js, react, sass, nodejs, express, mongodb, git, github } from '../../assets';
import './Tech.css';
import { useInView } from 'react-intersection-observer';

const Tech = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myDesRef, inView: despVisible } = useInView();

    return (
        <div className="stack-container" id="tech">
            <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>
                <span className="heading-highlight">Technologies</span> I use.
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
                    <img src={express} alt="express" />
                    <img src={mongodb} alt="mongo" />
                    <img src={sass} alt="sass" />
                    <img src={git} alt="git" />
                    <img src={github} alt="github" />
                </div>
                <div
                    ref={myDesRef}
                    className={despVisible ? "right-side show" : "right-side"}>
                    <p>I utilize a variety of programming languages, scripting languages, tools, and technologies in my projects. With a strong background in the MERN stack, I am currently dedicated to honing my skills through real-world projects that address and solve practical problems.</p>
                </div>
            </div>
        </div>
    );
}
export default Tech;
