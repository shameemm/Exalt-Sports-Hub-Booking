import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import './AdminNav.css'

function AdminNav() {
  const navigate = useNavigate()
  const { token,setTokens} = useContext(UserContext)
  const logout = ()=>{
    localStorage.clear()
    setTokens(null)
    navigate('/admin')
  }

  return (
    <div className='admin-nav'>
        <h1>Admin Panel</h1>
        <div className="nav-option">
          <p>OPTION</p>
        </div>
        <div className="nav-option">
          <p>OPTION</p>
        </div>
        <div className="nav-option">
          <p>OPTION</p>
        </div>
        <div className="nav-option">
          <p  onClick={logout}>LOGOUT</p>
        </div>
    </div>
  )
}

export default AdminNav