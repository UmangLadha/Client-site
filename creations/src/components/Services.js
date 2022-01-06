import React from "react";
import "../App.css";
import Figure from "react-bootstrap/Figure";
import logo from "../images/logo.jpg";


function services() {
    return (
        <Figure className='details'>
            <Figure.Image
                width={350}
                height={350}
                alt="200x200"
                src={logo}
            />
            <Figure.Image
                width={350}
                height={350}
                alt="171x180"
                src={logo}
            />
            <Figure.Image
                width={350}
                height={350}
                alt="171x180"
                src={logo}
            />
            <Figure.Image
                width={350}
                height={350}
                alt="171x180"
                src={logo}
            />
        </Figure>
    )
}

export default services
