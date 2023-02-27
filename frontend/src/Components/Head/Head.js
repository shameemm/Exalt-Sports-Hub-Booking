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
                <Link className='link-head' to="/"><p>Home</p></Link>
                <Link className='link-head' to="/partner_login"><p>Partner</p></Link>
                <Link className='link-head' to="/login"><p>Login</p></Link>
                <Link className='link-head' to="/contact"><p>Contact</p></Link>

            </div>
        </div>
    </div>
  )
}

export default Head