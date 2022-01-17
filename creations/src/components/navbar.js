import React from "react"
import "../App.css";

function Navname({nav}) {
    return (
        <li className="list-inline"><a className="toplink" href="#Service-part"> {nav} </a></li>
    )
}

function navbar() {
    return (
        <div>
            <nav className="navigation">
                <ul className="list-non-bullet list">
                    <Navname nav="SERVICES" />
                    <Navname nav="CLIENTS" />
                    <Navname nav="REVIEWS" />
                    <Navname nav="GALLERY" />
                    <Navname nav="ABOUT US" />
                    <Navname nav="CONTACT" />
                </ul>
            </nav>
        </div>
    )
}

export default navbar


