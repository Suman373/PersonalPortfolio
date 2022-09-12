import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/Scroller.css';

const Scroller = ()=>{

    const [ showScroll , setShowScroll] = useState(true);

    let pos;
    window.addEventListener('scroll',()=>{
        pos = window.scrollY;
        pos > 300 ? setShowScroll(true) : setShowScroll(false); 
    });

    const scrollTop=()=>{
        window.scrollTo(0,0);
    }
    return(
        <button 
        onClick={scrollTop}
        style={showScroll ? {display:'block'} : {display:'none'}}
        className="scroller-btn">
           <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
}
export default Scroller;