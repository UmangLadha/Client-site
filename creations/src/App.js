import './App.css';
import logo from './images/logo.jpg';
import Carousel from 'react-bootstrap/Carousel';


function App() {
  return (
    <div className="app">
      <div>
        <div className="header"><img className="logo" src={logo} alt="logo"/></div>
        {/* <div class="nav-brand"><img src={logo} alt="logo"/></div> */}

    <div className="slider">

        <Carousel variant="dark">
      <Carousel.Item>
        <img
          className=" w-100 slider-img "
          src={logo}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={logo}
          alt="Third slide"
        />
      </Carousel.Item>
     </Carousel>
    </div>
           <div className="navigation">
           <div class="nav-brand"><img src={logo} alt="logo"/></div>
            <ul className="list-non-bullet list">
                <li className="list-inline"> <a href="http:#">SERVICE </a> |</li>
                <li className="list-inline"><a href="http:#"> CLIENT </a> |</li>
                <li className="list-inline"><a href="http:#"> REVIEW </a> |</li>
                <li className="list-inline"><a href="http:#"> GALLERY </a> |</li>
                <li className="list-inline"><a href="http:#"> ABOUT US </a> |</li>
                <li className="list-inline"><a href="#contact"> CONTACT </a></li>
            </ul> 
           </div>  
      </div>      
    </div>

  );
}

export default App;
