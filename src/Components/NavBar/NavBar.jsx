import NavIcons from '../../Images/Rectangle 1.png'
import Style from "./Navbar.module.css";
import {Link} from "react-router-dom"
import React from "react";

function Navbar() {
    return <div>
        <div className={Style.menuContent}>
                 <img src={NavIcons} alt="Nav"  className={Style.vector}/>
           <div className= {Style.menu}>
            <p> <Link className={Style.menuChild}to="/">Home </Link> </p>
            <p> <Link className={Style.menuChild}to="about">About</Link> </p>
            <p> <a href="about" className={Style.menuChild}>Tour package</a> </p>
            <p> <Link className={Style.menuChild}to="gallery">Gallery</Link> </p>
            <p> <a href="about" className={Style.menuChild}>Blog</a> </p>
            <p> <a href="about" className={Style.menuChild}>Contact us</a> </p>
           </div>
           <div className={Style.btn_Content}>
           <button className={Style.btn}>Sign In</button>
           </div>
           
        </div>
    </div>
}

export default Navbar