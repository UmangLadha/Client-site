import styled from "styled-components";

export const CarouselImage = styled.img`
    /* display: block; */
    align-items: center;
    vertical-align: center;
    width: 100%;
    height: ${props => props.height ? props.height : "500px"};
    width: ${props => props.width ? props.width : "500px"};
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
