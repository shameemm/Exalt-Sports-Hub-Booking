import React, { useState } from 'react'
import './AdminLogin.css'
import axios from '../../axios'

function AdminLogin() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const data = {
        email:email,
        password:password,
    }
    console.log(data);
    const login = async (e)=>{
        e.preventDefault()
        await axios.post('accounts/api/login/',data).then((res)=>{
            console.log(res);
        })
    }
  return (
    <div>
        <div className="admin-login-card">
            <div className="admin-login-card-header">
                <h2>Admin Login</h2>
            </div>
            <div className="admin-login-card-body">
                <form className='admin-login-form' action="">
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id="" placeholder='Email'/>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" id="" placeholder='Password' />
                    <input type="submit" value="Login" />
                </form>
            </div>

        </div>
    </div>
  )
}

export default AdminLogin