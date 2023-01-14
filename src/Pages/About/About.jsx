import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Stickybar from '../../Components/Stickybar/Stickybar';
import  Hero from '../../Components/Herosection/Hero';
import Aboutus1 from '../../Components/AboutUs/Aboutus1';
import Footer from '../../Components/Footer/Footer'

function About() {
  return (
    <>
      <Stickybar />
      <Hero />
      <Navbar />
      <Aboutus1  />
      <Footer />
    </>
  )
}

export default About;
