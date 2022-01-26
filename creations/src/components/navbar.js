import React from "react"
import "../App.css";
// import logo from "../images/logo.jpg";

function Navname({nav}) {
    return (
        <li className="list-inline"><a className="toplink" href="#Service-part"> {nav} </a></li>
    )
}

function navbar() {
    return (
        <div>
            <nav className="navigation">
                {/* <a href="/#" target="_blank" className=".nav-brand" ><img src={logo} alt="nav-brand" /></a> */}
                <ul className="list-non-bullet list">
                    <Navname nav="SERVICES" />
                    <Navname nav="CLIENTS" />
                    <Navname nav="REVIEWS" />
                    <Navname nav="GALLERY" />
                    <Navname nav="ABOUT US" />
                    <Navname nav="CONTACT" />
                </ul>
            </nav>
            {
                window.addEventListener("scroll",function(){
                    var header = document.querySelector("header");
                    header.classList.toggle("sticky", window.scrollY > 0);
                })
            }
            {/* <section className="Banner"></section> */}
        </div>
    )   
}

export default navbar


