import React from "react";
/* import Stickybar from "../../Components/Stickybar/Stickybar";
import Navbar from "../../Components/Navbar/Navbar"; */
import {Link, useNavigate } from "react-router-dom";
import Stickybar from "../../Components/Stickybar/Stickybar";
import Aboutus1 from "../../Components/AboutUs/Aboutus1";
import Hero from "../../Components/Herosection/Hero";
import Navbar from "../../Components/Navbar/Navbar";

function About() {
//  const navigate = useNavigate()
//  const goAfter = () => {
//     setTimeout(() => {
//         navigate('/')
//     },5000)
 
  return (
    <div>
        <Stickybar />
        <Hero />
        <Navbar />
        <Aboutus1 />

        {/* <Link to = "/">back</Link>
      <button type="" onClick={goAfter}></button> */}
    </div>
  );
}

export default About;
