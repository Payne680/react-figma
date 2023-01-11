import React from "react"
import {Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Stickybar from "../../Components/Stickybar/Stickybar";

function About () {
    const navigate = useNavigate();
    
    const goAfter = () => {
        setTimeout(() => {
            navigate('/');
        }, 5000);
    };

    return (
        <>
        <Stickybar />
        <Navbar />

        <h1>About Malone</h1>
         <Link to="/">Go Back</Link>
        <button onClick={goAfter} type="button">
            go after 5
        </button>
        </>
    );
}

export default About;