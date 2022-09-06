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
                    <p>Hi! My name is Suman Roy and I am from India currently pursuing my bachelors in computer science. I have keen interest and a passion for the web, so I started learning web development few months ago. With time I kept on honing my skills, moved onto frameworks and other tools. </p>
                    <p>I have always fancied hackathons. It is a great way of letting like minded people from different aspects and domains like dev, designer ,manager, speaker,etc come together to brainstorm ideas and turn them into reality. I have participated in few online hackathons, made it to top teams in one.</p>
                    <p>Open source is something I like. A developer can excel if they start contributing to open source by any means. I have contributed to few projects on github too!</p>

                    <p>Apart from things related to tech, I love to play outdoor games, online games, occasionally sketch, read books and spend quality time with friends and family.</p>

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