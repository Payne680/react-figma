import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Stickybar from '../../Components/Stickybar/Stickybar';
import  Hero from '../../Components/Herosection/Hero';

function About() {
  return (
    <>
      <Stickybar />
      <Hero />
      <Navbar />
    </>
  )
}

export default About;
