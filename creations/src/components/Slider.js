import React from "react";
import logo from "../images/logo.jpg";
// import S1 from "../images/Services imgs/S1.jpg";
// import S2 from "../images/Services imgs/S2.jpg";
// import S3 from "../images/Services imgs/S3.jpg";
import "../App.js";
import Carousel from "react-bootstrap/Carousel";

function slider() {
    return (
        <div>
            <Carousel className="slider">
                <Carousel.Item interval={1000} >
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default slider;
