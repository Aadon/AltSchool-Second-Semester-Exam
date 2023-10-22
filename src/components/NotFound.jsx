import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <div className="error">
          <h1>404</h1>
        <p>Oops!!. A terrible error has happpened.</p>
        <p>
            Check the URL and <Link className='btn' to='/repos/repoId'>Try again</Link>
        Go to <Link className='btn' to='/'>Home Page</Link>
        </p>
         
        </div>
        
    </div>
  )
}

export default NotFound