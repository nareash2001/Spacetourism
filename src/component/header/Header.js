import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg"
import navopen from "../../images/icon-hamburger.svg"
import navclose from "../../images/icon-close.svg";
import "./header.css";
const Header = () => {
    const [navact,setNavact]=useState(0);
    return (
        <div className="header-container">
            <div className="header-left">
                <img src={logo} alt="" draggable={false}/>
                <div className="header-line-left"></div>
            </div>
            <div className="header-right" id={navact===1?"opennav":""}>
                <div className="header-line"></div>
                <div className="navimg" ><img src={navact===0?navopen:navclose} alt="" draggable={false} onClick={()=>{navact===1?setNavact(0):setNavact(1)}}/></div>
               <ul id={navact===1?"openlink":""}>
                <NavLink to="/" draggable={false}> <span>00 </span> HOME</NavLink>
                <NavLink to="/destination" draggable={false}><span>01 </span> DESTINATION</NavLink>
                <NavLink to="/crew" draggable={false}><span>02 </span> CREW</NavLink>
                <NavLink to="/technology" draggable={false}> <span>03 </span> TECHNOLOGY</NavLink>
                </ul>
            </div>
        </div>
    )
}
export default Header;