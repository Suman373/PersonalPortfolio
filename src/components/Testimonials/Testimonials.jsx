import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Testimonials.css';
import testimonials from '../../data/testimonials';
import { BsLinkedin } from 'react-icons/bs';
import Slider from 'react-slick';
import { FaQuoteLeft,FaQuoteRight  } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoPlay:true,
        autoPlaySpeed:2000,
        slidesToScroll: 1,
    };

    const { ref: myTitleRef, inView: titleVisible } = useInView();

    return (
        <div className='testimonials-wrapper' id="testimonials">
            <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>
                My <span className="heading-highlight">Testimonials.</span>
            </h2>
            <div className="underline"></div>
            <span id='quote-icon1'><FaQuoteLeft/></span>
            <span id='quote-icon2'><FaQuoteRight/></span>
            <div className="testimonial-carousel">
                <Slider {...settings}>
                    {
                        testimonials.map((item, index) => (
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
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials;
