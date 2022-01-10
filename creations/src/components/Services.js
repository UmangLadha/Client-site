import React from "react";
import "../App.css";
import Figure from "react-bootstrap/Figure";
import logo from "../images/logo.jpg";


function services() {
    return (
        <div  id="#Service-part">
            <h1 className="heading">SERVICES</h1>
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
        </div>    
    )
}

export default services
