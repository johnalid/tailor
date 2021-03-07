import React from 'react'
import {useState} from 'react'

function About() {
    const [count, setCount] = useState(0);
    return (
        <div className="container-fluid mt-4">
            <h3 className="text-center">ABOUT US</h3>
            <div className="text-center d-flex justify-content-center">
            <div className="span"></div>

            </div>

<div className="text-center mt-5">

            <p className="text-center mt-5">
                Clicked {count} times(s)
            </p>

            <button onClick={()=> setCount(count + 1)} className="btn btn-primary mx-3">
                Increase
            </button>

            <button onClick={()=> setCount(count - 1)} className="btn btn-danger mx-3">
                Decrease
            </button>

</div>

            <p className="mt-5">

            With a made-to-measure shirt from Misura you can choose from 250 beautiful luxury Italian fabrics, of the highest quality. After careful selection, we hand it over to our master tailor, who transforms it into a beautiful and personal tailor-made shirt like a true artist.

            Personalize your custom shirt by choosing your own cuffs, collars and monogram.

            Do you have your own idea? Do not hesitate to share it with us. We are happy to help you realize your tailor-made shirt.

            The delivery time for a Bespoke shirt is an average of four weeks. On request and for special occasions, a delivery time of one week is possible. This should be discussed with the cutter during the measurement
            </p>

            <hr />
        </div>
    )
}

export default About
