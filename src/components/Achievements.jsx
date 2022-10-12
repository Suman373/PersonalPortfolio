import React from "react";
import { useInView } from "react-intersection-observer";
import '../styles/Achievements.css';

const Achievements=()=>{
    const {ref: myTitleRef , inView : titleVisible} = useInView();
    const {ref: myDesRef, inView: despVisible} = useInView();
    return(
        <section className="achievements-wrapper" id="achievements">
             <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}>
                Few <span className="heading-highlight">achievements</span> that am <span className="heading-highlight">proud</span> of 🏆
             </h2>
                    <div className="underline"></div>
                    <div ref={myDesRef}
                     className={despVisible ? "list-wrapper show" : "list-wrapper"}>
                    <ul>
                        <li><p>Open source contributor for Hacktoberfest 2022, merged 6 valid PRs with code contribution.(Oct 2022)</p></li>
                        <li><p>Secured Top 14 position among 70+ teams in Error 404 hackathon organized by Micro.(Aug 2022)</p></li>
                        <li><p>Mentee at DSC KGEC Summer of Code 2022. Merged 2 successful PRs in a web project Seat&Eat.(Jul-Aug 2022)</p></li>
                        
                    </ul>
                    </div>
        </section>
    );
}
export default Achievements;