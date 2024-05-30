import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myexpRef, inView: expVisible } = useInView();

    return (
        <section className="experience-wrapper" id="experience">
            <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>
                My <span className="heading-highlight"> experience</span> so far
            </h2>
            <div className="underline"></div>

            <div ref={myexpRef}
                className={expVisible ? "list-wrapper show" : "list-wrapper"}>
                <ul>
                    {/*  */}
                    <li>
                        <p className="position">
                            Full Stack Web Developer(Aug 2023 - March 2024)
                        </p>
                        <p className="organisation">
                            Markzin
                        </p>
                        <li>Worked on front-end of an MVP from scratch.</li>
                        <li>Testing and integrating RESTful apis.</li>
                        <li>Localization of the whole app for support of 3+ regional languages.</li>
                        <li>Implemented lazy loading and react suspense boundaries increasing the overall website performance by 25% and improving FCP.</li>
                        <li>Admin portal with administrative features, report filters, etc</li>
                    </li>
                    {/*  */}
                    <li>
                        <p className="position">
                            Freelance Front-end Developer(Mar 2023)
                        </p>
                        <p className="organisation">
                            Markzin
                        </p>
                        <li>Built a website with 10+ pages from scratch using React js and Bootstrap.</li>
                        <li>Pair programmed with another developer to connect the client-end with the server in Node js via Restful API.</li>
                        <li>Took active part in daily standups to discuss daily targets and solve technical and non-technical problems to ensure efficient performance.</li>
                    </li>
                    {/*  */}
                    <li>
                        <p className="position">
                            API Fellow(Jan 2023 - Feb 2023)
                        </p>
                        <p className="organisation">
                            Keploy Inc
                        </p>
                        <li>Completed all the 5 tasks successfully assigned in this cohort.</li>
                        <li>Built a MERN stack website to implement unit testing and integrating Keploy using the typescript SDK to generate mocks and test cases.</li>
                    </li>
                    {/*  */}
                    <li>
                        <p className="position">
                            Full-stack developer intern (Oct 2022 - Dec 2022)
                        </p>
                        <p className="organisation">
                            Symstech IT and Consulting Services
                        </p>
                        <li>Built a web-based software from scratch</li>
                        <li>Created 8+ APIs and tested them for ensuring better performance.</li>
                        <li>Assisted the front-end developer with building reusable components in React from scratch.</li>
                        <li>Led the team of other 2 interns.</li>

                    </li>
                    {/*  */}
                    <li>
                        <p className="position">
                            Open source mentee (Jul 2022 - Aug 2022)
                        </p>
                        <p className="organisation">
                            GDSC Kalyani Government Engineering College
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Experience;
