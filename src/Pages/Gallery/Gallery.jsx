import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Stickybar from "../../Components/Stickybar/Stickybar";
import Gallery1 from '../../Components/Gallery/Gallery1';

function Gallery () {
    return (
        <>
        <Stickybar />
        <Navbar />
        <Gallery1 />
</>
    );
}

export default Gallery;