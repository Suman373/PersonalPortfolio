import React from "react";
import '../styles/About.css';
const About =()=>{
    return(
        <>
            <main className="about-wrapper" id="about">
                <div className="about-title">
                    <h2>Who am I ?</h2>
                    <div className="underline"></div>
                    <p>A brief bio📌</p>
                </div>
                <div className="about-description">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe enim, quas, voluptates reiciendis eum temporibus qui aut maxime provident quae magnam maiores quod, id deleniti? Eveniet fuga officia illum beatae.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eius delectus nisi iste beatae enim vitae sit? Doloremque illum laborum maxime earum cum a, obcaecati dolorem dolor quis repellat quas!</p>
                </div>
            </main>
        </>
    );
}

export default About;