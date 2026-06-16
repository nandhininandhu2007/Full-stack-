import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav>
            <u1 className="container">
                <li className="list"><Link to= "/">Home</Link></li>
                <li className="list"><Link to= "/about">About</Link></li>
                <li className="list"><Link to= "/contact">Contact</Link></li>
                <li className="list"><Link to= "/service">Service</Link></li>
                <li className="list">
                  <Link className="Link" to='/parent'>props</Link>
                  </li>
                  <li className="List">
                    <Link className="link" to='/useState'>useState</Link>
                  </li>
                  <li className="List">
                    <Link className="link" to='/useEffect'>useEffect</Link>
                    </li>
                  <li className="list">
                    <Link className="link" to='/todo'>Todo</Link>
                  </li>

            </u1>
        </nav>
      
    </div>
  )
}

export default Navbar
