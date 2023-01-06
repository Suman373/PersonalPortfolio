import React, { useRef } from "react";
import '../styles/Contact.css';
import {useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useInView } from "react-intersection-observer";
import emailjs from 'emailjs-com';

const Contact = () => {
    // ref
    const ref = useRef();
    // submission
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm(`${process.env.REACT_APP_EJS_SERVICE_ID}`
        ,`${process.env.REACT_APP_EJS_TEMPLATE_ID}`,
        ref.current,
        `${process.env.REACT_APP_EJS_USER_ID}`).then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          toast('Submitted successfully', {theme:'colored',type:'success'});
       }, function(error) {
          console.log('FAILED...', error);
          toast('Something went wrong', {theme:'colored', type:'error'});
       });
       ref.current.reset();
    }

    const {ref: myTitleRef , inView : titleVisible} = useInView();

    return (
        <div className="form-container" id="contact">
            <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}>
                Get in <span className="heading-highlight">touch</span> with me 💬
            </h2>
            <div className="underline"></div>
            <p>Fill up this form with correct details to connect with me</p>
            <form ref={ref} onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your name" required />
                <input type="email" name="email" placeholder="Your email" required/>
                <textarea id="textarea" name="message" placeholder="Your message" required></textarea>
                <button
                    className="submit-btn"
                    type="submit"
                    >
                    Submit
                </button>
                <ToastContainer
                    autoClose={3000} />
            </form>
        </div>
    )
}

export default Contact;