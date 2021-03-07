import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap'
import {useState} from 'react'
import lastofa from './image/lastofa.jpg'
import lastofa1 from './image/lastofa1.jpg'
import lastofa2 from './image/lastofa2.jpg'
import {Link} from 'react-router-dom'


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="navImg d-block w-100"
            src={lastofa}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Half Body Smoky</h3>
            <p>This was specially made to fit the body Click the link Below to Check all our custom made gowns and tailored cloth.</p>
            <Link className="btn btn-primary" to="/Gallery">Click Me</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="navImg d-block w-100"
            src={lastofa1}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Full Body Smoky</h3>
            <p>This was specially made to fit the body Click the link Below to Check all our custom made gowns and tailored cloth.</p>
            <Link className="btn btn-primary" to="/Gallery">Click Me</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="navImg d-block w-100"
            src={lastofa2}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Gown smoky</h3>
            <p>This was specially made to fit the body Click the link Below to Check all our custom made gowns and tailored cloth.</p>
            <Link className="btn btn-primary" to="/Gallery">Click Me</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
//   render(<ControlledCarousel />);

  export default ControlledCarousel