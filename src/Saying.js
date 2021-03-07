import React from 'react'
import {Carousel} from 'react-bootstrap'
import preschool from './image/preschool.jpg'
import jenny from './image/jenny.jpg'
import jenny1 from './image/jenny1.jpg'
import jenny2 from './image/jenny1.jpg'

function Saying() {
    return (
        <div className="container-fluid mt-4">
            <h3 className="text-center">WHAT PEOPLE ARE SAYING ABOUT US</h3>

<div className="text-center d-flex justify-content-center">
<div className="span"></div>
</div>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mt-5">

                <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block jenny"
      src={jenny}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block jenny"
      src={jenny1}
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block jenny"
      src={jenny2}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
                    







</div>


    <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                <Carousel>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={preschool}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={preschool}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={preschool}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>




            </div>

                </div>

                <div className="d-flex justify-content-between">
 <div className="text-black">Hello</div>

 <div className="text-danger ml-5">word</div>


</div>        


                
    
        </div>
    )
}

export default Saying
