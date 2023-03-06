import React, { useContext } from 'react'
import './Head.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'


function Head() {
  const {token,setTokens}=useContext(UserContext)
  {token?console.log("head",token):console.log("Null")}
  const logout = ()=>{
    localStorage.clear()
    setTokens(null)
  }
  return (
    <div>
        <div className="head">
            <div className="logo">
                <img src="/Logo/logo-trans.png" alt="logo" />
            </div>
            <div className="links">
            <p><Link className='link-head' to="/">Home</Link></p>
            <p><Link className='link-head' to="/partner_login">Partner</Link></p>
                {token?<span><p onClick={logout}>Logout</p></span>:<span><p><Link className='link-head' to="/login">Login</Link></p></span>}
                <p><Link className='link-head' to="/contact">Contact</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Head