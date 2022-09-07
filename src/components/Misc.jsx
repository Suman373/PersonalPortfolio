import React from "react";
import thanking from '../assets/thanking.gif';
import '../styles/Misc.css';

const Misc=()=>{
    return(
        <section className="misc-container">
            <div className="misc-image-wrapper">
                <img src={thanking} alt="a miscellaneous picture"/>
            </div>
        </section>
    );
}
export default Misc;