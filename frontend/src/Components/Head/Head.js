import React from 'react'
import './Head.css'
import { Link } from 'react-router-dom'


function Head() {
  return (
    <div>
        <div className="head">
            <div className="logo">
                <img src="/Logo/logo-trans.png" alt="logo" />
            </div>
            <div className="links">
                <Link className='link' to="/"><p>Home</p></Link>
                <Link className='link' to="/login"><p>Login</p></Link>
                <Link className='link' to="/contact"><p>Contact</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Head