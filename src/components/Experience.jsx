import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Experience.css';

const Experience = () => {

    const {ref: myTitleRef, inView: titleVisible} = useInView();
    const {ref: myexpRef, inView: expVisible} = useInView();

  return (
    <section className="experience-wrapper">
        <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}>
                My <span className="heading-highlight">work experience</span>
             </h2>
             <div className="underline"></div>

             <div ref={myexpRef}
                     className={expVisible ? "list-wrapper show" : "list-wrapper"}>
                    <ul>
                        <li>
                            <p className="organisation">
                                Symstech IT
                            </p>
                            <p className="position">Full-stack developer</p>
                            <p className="work">
                                
                            </p>
                        </li>
                        <li>

                        </li>                        
                    </ul>
                </div>
    </section>
  )
}

export default Experience;
