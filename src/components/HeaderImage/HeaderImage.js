import React from "react";
import logo from "../../images/logo.jpg";
import { HeaderBar } from "./HeaderImage.styled";

const HeaderImage = () => (
    <HeaderBar>
        <img className="brand" src={logo} alt="logo" />
    </HeaderBar>
);

export default HeaderImage;