import './App.css';
import logo from './images/logo.jpg';
import Carousel from 'react-bootstrap/Carousel';


function App() {
  return (
    <div className="App">
      <div>
        <div className="header"><img className="logo" src={logo} alt="logo"/></div>
        {/* <div class="nav-brand"><img src={logo} alt="logo"/></div> */}
        <div>
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className=" w-100 "
      src={logo}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="Second slide"
    />
    {/* <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={logo}
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
        </div>
           <div>
            <ul className="list-non-bullet list">
                <li className="list-inline"> SERVICE |</li>
                <li className="list-inline">| CLIENT |</li>
                <li className="list-inline">| REVIEW |</li>
                <li className="list-inline">| GALLERY |</li>
                <li className="list-inline">| ABOUT US |</li>
                <li className="list-inline">| CONTACT </li>
            </ul> 
           </div>  
      </div>      
    </div>

  );
}

export default App;
