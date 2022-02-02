import React from "react";
import "../App.css";
import Figure from "react-bootstrap/Figure"
import img1 from "../images/Clients imgs/img1.png";
// import img2 from "../images/Clients imgs/img 2.png";
import img3 from "../images//Clients imgs/img 3.png";
import img4 from "../images/Clients imgs/img 4.png";
import img5 from "../images/Clients imgs/img 5.png";
import img6 from "../images/Clients imgs/img 6.png";
import img7 from "../images/Clients imgs/img 7.png";
import img8 from "../images/Clients imgs/img 8.png";
import img9 from "../images/Clients imgs/img 9.png";
import img10 from "../images/Clients imgs/img 10.png";
import img11 from "../images/Clients imgs/img 11.png";
import img12 from "../images/Clients imgs/img 12.png";
import img13 from "../images/Clients imgs/img 13.png";
import img14 from "../images/Clients imgs/img 14.png";
import img15 from "../images/Clients imgs/img 15.png";
import img16 from "../images/Clients imgs/img 16.png";
import img17 from "../images/Clients imgs/img 17.png";
import img18 from "../images/Clients imgs/img 18.png";
import img19 from "../images/Clients imgs/img 19.png";


function ClientImage(props) {
    // const { image } = props;
    const images = props.image;
    // hi
    return (
        <Figure.Image 
            className="client-img"
            width={200}
            height={200}
            alt="200*200"
            src={images}
        />
    )
}

function clients() {
    return (
        <div id="#Client-part">
            <h1 className="heading">CLIENTS</h1>
            <Figure className='details'>
                <ClientImage image={img1}/>
                {/* <ClientImage image={img2}/> */}
                <ClientImage image={img3}/>
                <ClientImage image={img4}/>
                <ClientImage image={img5}/>
                <ClientImage image={img6}/>
                <ClientImage image={img7}/>
                <ClientImage image={img8}/>
                <ClientImage image={img9}/>
                <ClientImage image={img10}/>
                <ClientImage image={img11}/>
                <ClientImage image={img12}/>
                <ClientImage image={img13}/>
                <ClientImage image={img14}/>
                <ClientImage image={img15}/>
                <ClientImage image={img16}/>
                <ClientImage image={img17}/>
                <ClientImage image={img18}/>
                <ClientImage image={img19}/>
            </Figure>                

        </div>
    )
}

export default clients;
