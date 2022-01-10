import { React } from "react";
import "./App.css";
import logo from "./images/logo.jpg"
import Slider from "./components/Slider";
import Services from "./components/Services";
import Clients from "./components/Clients";
import About from "./components/About";
import Contact from "./components/contact";

function App() {
    return (
        <div className="app">
            <div>
                <div className="header"><img className="logo" src={logo} alt="logo" /></div>
                <Slider />
                <nav className="navigation">
                    <ul className="list-non-bullet list">
                        <li className="list-inline"><a className="toplink" href="#Service-part"> SERVICES </a></li>
                        <li className="list-inline"><a className="toplink" href="#Client-part"> CLIENTS </a></li>
                        <li className="list-inline"><a className="toplink" href="#Review-part"> REVIEWS </a></li>
                        <li className="list-inline"><a className="toplink" href="#Gallery-part"> GALLERY </a></li>
                        <li className="list-inline"><a className="toplink" href="#About-Us"> ABOUT US </a></li>
                        <li className="list-inline"><a className="toplink" href="#contact-part"> CONTACT </a></li>
                    </ul>
                </nav>

            </div>
            <Services />
            <Clients />
            <About />
            <Contact />
        </div>
    );
}
export default App;
 