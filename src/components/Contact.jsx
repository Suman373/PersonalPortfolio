import React from "react";
import '../styles/Contact.css';
import {useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useInView } from "react-intersection-observer";

const Contact = () => {
    // submission
    const handleSubmit = (e) => {
        e.preventDefault();
        toast('Submited successfullyy', {theme:'colored',type:'success'});
    }

    const {ref: myTitleRef , inView : titleVisible} = useInView();

    return (
        <div className="form-container" id="contact">
            <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}>
                Get in <span className="heading-highlight">touch</span> with me 💬
            </h2>
            <div className="underline"></div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text" placeholder="Your name" required />

                <label htmlFor="email">
                    Email
                </label>
                <input type="email" placeholder="johndoe@gmail.com" required/>

                <label htmlFor="textarea">
                    Text
                </label>
                <textarea id="textarea" placeholder="Hey! I was just thinking..." required></textarea>

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