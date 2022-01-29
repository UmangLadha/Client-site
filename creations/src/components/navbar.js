import React from "react"
import "../App.css";
// import logo from "../images/logo.jpg";

function Navname({title}) {
    return (
        <li className="list-item-inline"><a className="link link-active" href="#Service-part"> {title} </a></li>
    )
}

function navbar() {
    return (
        <nav className="navigation">
            {/* <a href="/#" target="_blank" className=".nav-brand" ><img src={logo} alt="nav-brand" /></a> */}
            <ul className="list-non-bullet ">
                <Navname title="SERVICES" />
                <Navname title="CLIENTS" />
                <Navname title="REVIEW" />
                <Navname title="ABOUT US" />
                <Navname title="CONTACT" />
            </ul>
        </nav>
    )   
}

export default navbar


