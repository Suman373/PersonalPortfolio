import React from "react";
import '../styles/Contact.css';
import {useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    //navigation
    const navigate = useNavigate();

    // submission
    const handleSubmit = (e) => {
        e.preventDefault();
        toast('Submited successfullyy', {theme:'colored',type:'success'});
        setTimeout(()=>{
            navigate('/');
        },3000);
    }

    return (
        <div className="form-container">
            <div className="topLine"> 
            Your email and name are being handled securely. Go back to  
            <a href="/" 
            style={{color:'gold',padding:'4px'}}>
                 home page
            </a>
            </div>
            <h1>Say hello to Suman! <span className="wave">👋</span></h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text" placeholder="Full Name" required />

                <label htmlFor="email">
                    Email
                </label>
                <input type="email" placeholder="your_email@domain.com" required/>

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