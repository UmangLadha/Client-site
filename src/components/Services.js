import React from "react";
import "../App.css";
// import Figure from "react-bootstrap/Figure";
import logo from "../images/logo.jpg";

function Product({title,image}) {
    return <div>
        <div className='title'><h1>{title}</h1></div>
        <div className="title-img"><img src={image} alt="" width="30%" /></div>
    </div>;
}

function services() {
    return (             
        <div id="#Service-part">             
            <h1 className="heading">SERVICES</h1>             
            <div className="service-cards">                        
                <Product title="Creative Branding" /> 
                <Product image={logo} /> 
                <Product title="Logo Design" />
                <Product image={logo} />   
                <Product title="Neon Sign" />  
                <Product image={logo} /> 
                <Product title="LED Letter Board" />  
                <Product image={logo} /> 
                <Product title="Vinyl Stickers" />  
                <Product image={logo} /> 
                <Product title="Glow Sign Board" /> 
                <Product image={logo} />  
            </div>
        </div>    
    )
}
export default services;
