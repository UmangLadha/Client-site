import React from "react";
import "../App.css";
// import Figure from "react-bootstrap/Figure";
// import logo from "../images/logo.jpg";


function services() {
    return (             
        <div  id="#Service-part">             
            <h1 className="heading">SERVICES</h1>             
            <div className="service-cards">                        
                <div className="service-title"><h2 className="heading"> Creative branding </h2></div>                          
                <div className="service-title"><h2 className="heading"> Logo design</h2></div> 
                <div className="service-title"><h2 className="heading"> Neon sign </h2></div>  
                <div className="service-title"><h2 className="heading"> LED letter borad</h2></div> 
                <div className="service-title"><h2 className="heading"> Vinyl stickers</h2></div> 
                <div className="service-title"><h2 className="heading"> Glow sign board</h2></div>
            </div>                

            {/* <Figure className='details'>
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
            </Figure> */}
        </div>    
    )
}

export default services
