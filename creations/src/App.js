import './App.css';
import logo from './images/logo.jpg';
import Slider from './components/Slider.js';
import Services from './components/Services.js';
import Clients from './components/Clients.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
// import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
     <div className="app">
      <div>
        <div className="header"><img className="logo" src={logo} alt="logo" /></div>
        <Slider />
        <nav className="navigation">
          <ul className="list-non-bullet list">
            <li className="list-inline"><a className="toplink" href="http:#"> SERVICE </a></li>
            <li className="list-inline"><a className="toplink" href="http:#"> CLIENT </a></li>
            <li className="list-inline"><a className="toplink" href="http:#"> REVIEW </a></li>
            <li className="list-inline"><a className="toplink" href="http:#"> GALLERY </a></li>
            <li className="list-inline"><a className="toplink" href="http:#"> ABOUT US </a></li>
            <li className="list-inline"><a className="toplink" href="#contact"> CONTACT </a></li>
          </ul>
        </nav>

      </div>
      <Services/>
      <Clients />
      <About />
      <Contact />
    </div>
  );
}
export default App;
 