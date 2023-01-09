import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Testimonials.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import testimonials from '../data/testimonials';
import { BsLinkedin } from 'react-icons/bs';


const items = [...testimonials.map((item, index) => {
    return (
        <div
            className="item testimonial-box"
            data-value={item.dataVal}
            key={index}>
            <img src={item.personImg} alt="Person photo" />
            <p className='name'>{item.personName}</p>
            <p className='txt'><span>"</span> {item.personTxt} <span>"</span></p>
            <p className="position">{item.personDesignation}</p>
            <a href={item.personLinkedin} className="social"><BsLinkedin /></a>
        </div>
    )

})];

const Testimonials = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();

    return (
        <div className='testimonials-wrapper' id="testimonials">
            <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>
                My <span className="heading-highlight">Testimonials</span>
            </h2>
            <div className="underline"></div>
           <div style={{height:'100%',display:'grid',placeContent:'center'}}>
           <div className="testimonial-carousel">
                <AliceCarousel
                    items={items}
                    // responsive={responsive}
                    autoPlay
                    disableButtonsControls
                    infinite
                    mouseTracking
                    autoPlayInterval={2500} />
            </div>
           </div>
        </div>
    )
}

export default Testimonials;
