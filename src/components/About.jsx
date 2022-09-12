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
                    <p>Hi! My name is Suman Roy and I am from India currently pursuing my bachelors in computer science. I have keen interest and a passion for the web development. </p>
                    <p>I have always fancied hackathons.Thus, participated in few online hackathons with a team and solo too!</p>
                    <p>I also contribute to open source projects occasionally as per the skills and features required!</p>
                    <p>Apart from things related to tech, in my leisure (if any) I spend playing outdoor game, or online games, sketch (seldom) and spend quality time with friends and family.</p>

                    <h3>My achievements</h3>
                    <div className="underline"></div>
                    <ul>
                        <li>Mentee at DSC KGEC Summer of Code 2022. Merged 2 successful PRs on a web project.</li>
                        <li>Top 14 among 65+ teams in Error 404 hackathon organized by Micro. Me and my teammate made a project in the track of web development.</li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default About;