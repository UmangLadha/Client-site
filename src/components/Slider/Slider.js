import React from "react";
import logo from "../../images/logo.jpg";
// import S1 from "../images/Services imgs/S1.jpg";
// import S2 from "../images/Services imgs/S2.jpg";
import S3 from "../../images/Services imgs/S3.jpg";
import "../../App.js";
import Carousel from "react-bootstrap/Carousel";
import { CarouselImage, ImageWrapper } from "./Slider.styled";

function slider() {
    return (
        <Carousel className="slider">
            <Carousel.Item interval={100000000} display>
                <ImageWrapper>
                    <CarouselImage
                        width={"900px"}
                        height={"500px"}
                        // className="d-block w-100"
                        src={S3}
                        alt="First slide"
                    />
                </ImageWrapper>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <ImageWrapper >
                    <CarouselImage
                        // className="d-block w-100"
                        src={logo}
                        alt="Second slide"
                    />
                </ImageWrapper>
            </Carousel.Item>
            <Carousel.Item>
                <ImageWrapper>
                    <CarouselImage
                        // className="d-block w-100"
                        src={logo}
                        alt="Third slide"
                    />
                </ImageWrapper>
            </Carousel.Item>
        </Carousel>
    )
}

export default slider;
