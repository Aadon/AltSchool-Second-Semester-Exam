import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <div className="error">
          <h1>404</h1>
        <p>Oops!!. The path you entered is incorrect.</p>
        <h2>
          Do you want to return to 
          <Link className='btn' to='/'>Home Page</Link>
        </h2>
        </div>
        
    </div>
  )
}

export default NotFound