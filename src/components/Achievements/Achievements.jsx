import React from "react";
import { useInView } from "react-intersection-observer";
import './Achievements.css';

const Achievements=()=>{
    const {ref: myTitleRef , inView : titleVisible} = useInView();
    const {ref: myDesRef, inView: despVisible} = useInView();
    return(
        <section className="achievements-wrapper" id="achievements">
             <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}>
                My <span className="heading-highlight">achievements </span>so far. 
             </h2>
                    <div className="underline"></div>
                    <div ref={myDesRef}
                     className={despVisible ? "list-wrapper show" : "list-wrapper"}>
                    <ul>
                        <li><p>Awarded with the title of Keploy Ninja by Keploy for completing their api fellowship.(Mar-2023)</p></li>
                        <li><p>Qualified for Hacktoberfest 2022. Open source contributor and successfully merged 6 valid PRs with code contribution.(Oct 2022)</p></li>
                        <li><p>Secured Top 14 position among 70+ teams in Error 404 hackathon organized by Micro.(Aug 2022)</p></li>                        
                    </ul>
                    </div>
        </section>
    );
}
export default Achievements;