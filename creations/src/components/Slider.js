import React from "react";
import logo from "../images/logo.jpg";
// import S1 from "../images/Services imgs/S1.jpg";
// import S2 from "../images/Services imgs/S2.jpg";
// import S3 from "../images/Services imgs/S3.jpg";
import "../App.js";
import Carousel from "react-bootstrap/Carousel";

function slider() {
    return (
        <Carousel className="slider">
            <Carousel.Item interval={1000} >
                <img
                    className="d-block w-100"
                    src={logo}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={logo}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
export default slider;
