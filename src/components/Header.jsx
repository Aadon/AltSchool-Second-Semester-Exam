import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <nav>
            <div className="links">
            <Link to='/'>Home</Link>
            <Link to='repos'>Repositories</Link>
            </div>
        </nav>
    </>
  )
}

export default Header