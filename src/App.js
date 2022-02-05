import { React } from "react";
import "./App.css";
import logo from "./images/logo.jpg";
import Slider from "./components/Slider";
import Services from "./components/Services";
import Clients from "./components/Clients";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";

function App() {
    return (
        <div className="app">
            <div className="header"><img className="brand" src={logo} alt="logo" /></div>
            <Slider /> 
            <Navbar />
            <Services />
            <Clients />
            <About />
            <Contact />
        </div>
    );
}
export default App;
 