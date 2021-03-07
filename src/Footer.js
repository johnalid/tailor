import React from 'react'
import logo from './image/logo.jpg'


function Footer() {
    const lnk = "https://www.facebook.com";
    const twi = "https://www.twitter.com";
    const ins = "https://www.instagram.com";


    return (
        <div>


   <footer className="footer text-center p-2 bg-primary mt-3">
      <div className="container">
        <span className="text-white">Place sticky footer content here.</span>
        <div className="text-center mt-2 d-flex justify-content-center text-white">
        <a href={lnk} target="_blank" rel="noreferrer" className="mx-3 text-white">Facebook</a>
        <a href={twi} target="_blank" rel="noreferrer" className="mx-3 text-white">Twitter</a>
        <a href={ins} target="_blank" rel="noreferrer" className="mx-3 text-white">Instagram</a>
       
        </div>
        <img src={logo} alt="logo" className="logo mt-3"/>
      </div>


    </footer>
            
        </div>
    )
}

export default Footer
