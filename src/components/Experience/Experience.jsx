import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Experience.css';
import { experiences } from '../../data/experiences';

const Experience = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myexpRef, inView: expVisible } = useInView();

    return (
        <section className="experience-wrapper" id="experience">
            <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>
                My <span className="heading-highlight"> experience</span> so far.
            </h2>
            <div className="underline"></div>

            <div ref={myexpRef}
                className={expVisible ? "list-wrapper show" : "list-wrapper"}>
                <ul>
                    {
                        experiences?.map((item, index) => (
                            <li key={index}>
                                <p className="position">{item.position}</p>
                                <p className="organisation">{item.organisation}</p>
                                <div className="org-underline"></div>
                                {item?.tasks.map((task,idx)=>(<li key={idx}>{task}</li>))}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Experience;
