import React from 'react'
import logo from './image/logo.jpg'


function Footer() {
    const lnk = "https://www.facebook.com";
    const twi = "https://www.twitter.com";
    const ins = "https://www.instagram.com";
    const lg = logo;


    return (
        <div>


   <footer className="footer text-center p-5">
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
        <div className="text-center mt-2 d-flex justify-content-center">
        <a href={lnk} target="_blank" rel="noreferrer" className="mx-3">Facebook</a>
        <a href={twi} target="_blank" rel="noreferrer" className="mx-3">Twitter</a>
        <a href={ins} target="_blank" rel="noreferrer" className="mx-3">Instagram</a>
       
        </div>
        <img src={lg} className="logo mt-3 fade" />
      </div>


    </footer>
            
        </div>
    )
}

export default Footer
