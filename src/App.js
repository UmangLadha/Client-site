import { React } from "react";
import "./App.css";
import Slider from "./components/Slider/Slider";
import Services from "./components/Services";
import Clients from "./components/Clients";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import HeaderImage from "./components/HeaderImage/HeaderImage";
import { SiteWrapper } from "./App.styled";

function App() {
    return (
        // <div className="app">
        <SiteWrapper>
            <HeaderImage />
            <Slider /> 
            <Navbar />
            <Services />
            <Clients />
            <About />
            <Contact />
        </SiteWrapper>
        // </div>
    );
}
export default App;
 