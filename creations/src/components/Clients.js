import React from "react";
import "../App.css";
import Figure from "react-bootstrap/Figure"
import img1 from "../images/img1.png";


function clients() {
    return (
        <div>
            <Figure className='details'>
                <Figure.Image
                    width={350}
                    height={350}
                    alt="350x350"
                    src={img1}
                />
            </Figure>
        </div>
    )
}

export default clients;
