import React from "react"
import "../App.css";
// import logo from "../images/logo.jpg";

function Navname({title}) {
    return (
        <li className="list-inline"><a className="toplink" href="#Service-part"> {title} </a></li>
    )
}

function navbar() {
    return (
        <div>
            <nav className="navigation">
                {/* <a href="/#" target="_blank" className=".nav-brand" ><img src={logo} alt="nav-brand" /></a> */}
                <ul className="list-non-bullet list">
                    <Navname title="SERVICES" />
                    <Navname title="CLIENTS" />
                    <Navname title="REVIEWS" />
                    <Navname title="GALLERY" />
                    <Navname title="ABOUT US" />
                    <Navname title="CONTACT" />
                </ul>
            </nav>
            {/* {
                window.addEventListener("scroll",function(){
                    var header = document.querySelector("header");
                    header.classList.toggle("sticky", window.scrollY > 0);
                })
            } */}
            {/* <section className="Banner"></section> */}
        </div>
    )   
}

export default navbar


