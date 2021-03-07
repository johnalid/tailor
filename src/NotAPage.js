import React from 'react'
import {Link} from 'react-router-dom'

function NotAPage() {
    return (
        <div className="container-fluid text-center mt-4">
            <h2>404 Page</h2>

            <p>page not found</p>

            <Link className="btn bg-primary text-white" to='/'>Back Home</Link>
        </div>
    )
}

export default NotAPage
