import React from "react";
import "../App.css";
// import Figure from "react-bootstrap/Figure";
import logo from "../images/logo.jpg";


function Secondservices({title,image}) {
      
    return <div>
        <div className='title'><h1>{title}</h1></div>
        <div className="title-img"><img src={image} alt="" width="30%"/></div>
    </div>;
}


function services() {
    return (             
        <div id="#Service-part">             
            <h1 className="heading">SERVICES</h1>             
            <div className="service-cards">
                <Secondservices title="Creative Branding" /> 
                <Secondservices image={logo} /> 
                <Secondservices title="Logo Design" />
                <Secondservices image={logo} />   
                <Secondservices title="Neon Sign" />  
                <Secondservices image={logo} /> 
                <Secondservices title="LED Letter Board" />  
                <Secondservices image={logo} /> 
                <Secondservices title="Vinyl Stickers" />  
                <Secondservices image={logo} /> 
                <Secondservices title="Glow Sign Board" /> 
                <Secondservices image={logo} />  
            </div>                
        </div>    
    )
}

export default services
