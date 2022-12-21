import React from "react";
import { useInView } from "react-intersection-observer";
import Finance from '../assets/finance_banner.png';
import TravelCompanion from '../assets/TravelCompanion.png';
import HappyGirl from '../assets/happiness.webp';
import EthereumPic from '../assets/ethbanner.png';

import '../styles/Projects.css';

const Projects = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myCardRef, inView: cardVisible } = useInView();

    return (
        <>
            <main className="project-wrapper" id="projects">
                <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>The <span className="heading-highlight">projects</span> I have <span className="heading-highlight">built</span></h2>
                <div className="underline"></div>
                <section
                    ref={myCardRef}
                    className="project-container">

                    <div className={cardVisible ? "project-card show" : "project-card"}>
                        <div className="project-title-container">
                            <h3>Saviee</h3>
                        </div>
                        <div className="banner-container">
                            <a href="https://saviee-web.vercel.app"
                                target="_blank">
                                <img src={Finance}
                                    alt="" />
                            </a>
                        </div>
                        <div className="info-container">
                            <p>A savings tracking app to help you become disciplined with your income.</p>
                        </div>
                    </div>

                    <div className={cardVisible ? "project-card show" : "project-card"}>
                        <div className="project-title-container">
                            <h3>Crypto Catalogue</h3>
                        </div>
                        <div className="banner-container">
                            <a href="https://github.com/Suman373/CryptoCatalogue"
                                target="_blank">
                                <img src={EthereumPic}
                                    alt="A banner for the project" />
                            </a>
                        </div>
                        <div className="info-container">
                            <p>A catalogue of all the trending cryptocurrencies and real-time information about them.</p>
                        </div>
                    </div>

                    <div className={cardVisible ? "project-card show" : "project-card"}>
                        <div className="project-title-container">
                            <h3>Pics-L</h3>
                        </div>
                        <div className="banner-container">
                            <a href="https://github.com/Suman373"
                                target="_blank">
                                <img src={HappyGirl}
                                    alt="Project banner" />
                            </a>
                        </div>
                        <div className="info-container">
                            <p>Pics-L lets user upload images to showcase in public gallery.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Projects;