import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ControlledCarousel from './ControlledCarousel'
import About from './About'
import Services from './Services'
import What from './What'
import Saying from './Saying'





function Home() {
    
    return (
        <div>
        
            <ControlledCarousel /> 
            <About />
            <Services />
            <What />
            <Saying />

             
        </div>
        
    )
    
}

export default Home