import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Experience.css';

const Experience = () => {

    const {ref: myTitleRef, inView: titleVisible} = useInView();
    const {ref: myexpRef, inView: expVisible} = useInView();

  return (
    <section className="experience-wrapper" id="experience">
        <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}>
                My <span className="heading-highlight">work experience</span>
             </h2>
             <div className="underline"></div>

             <div ref={myexpRef}
                     className={expVisible ? "list-wrapper show" : "list-wrapper"}>
                    <ul>
                        <li>
                            <p className="position">
                                Full-stack developer intern (Oct 2022 - Present)
                            </p>
                            <p className="organisation">
                                Symstech IT and Consulting Services
                            </p>
                        </li>
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
