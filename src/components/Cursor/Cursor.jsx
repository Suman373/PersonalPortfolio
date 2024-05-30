import React, { useEffect, useRef } from 'react';
import './Cursor.css';
// this code does not belong to me
const Cursor = () => {
 
    useEffect(() => {
        const coordinates = { x: 0, y: 0 };
        const circles = document.querySelectorAll('.firecursor');
        circles.forEach(function (circle) {
            circle.x = 0;
            circle.y = 0;
        })
        // animate fire
        const animateCursor = () => {
            let x = coordinates.x;
            let y = coordinates.y;

            circles.forEach(function (circle, index) {
                circle.style.left = x - 12 + "px";
                circle.style.top = y - 12 + "px";

                // trailing with smaller cirlces in end
                circle.style.scale = (circles.length-index)/10;
                circle.x = x;
                circle.y = y;
                const nextCircle = circles[index + 1] || circles[0];

                x += (nextCircle.x - x) * 0.3;
                y += (nextCircle.y - y) * 0.25;
            });
        }

        const handleMouseMove = (e) => {
            coordinates.x = e.clientX;
            coordinates.y = e.clientY;
            requestAnimationFrame(animateCursor);
        };

        // Initial call to set up cursor animation
        animateCursor();

        window.addEventListener('mousemove', handleMouseMove);

        // cleanup remove event listener
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };

    }, []);


    return (
        <>
            <div className="firecursor"></div>
            <div className="firecursor"></div>
            <div className="firecursor"></div>
            <div className="firecursor"></div>
            <div className="firecursor"></div>
            <div className="firecursor"></div>
            <div className="firecursor"></div>
            <div className="firecursor"></div>
            <div className="firecursor"></div>
            <div className="firecursor"></div>
            <div className="firecursor"></div>
            <div className="firecursor"></div>
        </>
    )
}

export default Cursor;