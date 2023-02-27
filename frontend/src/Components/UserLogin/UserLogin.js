import React, { useContext, useEffect, useState } from 'react'
import './UserLogin.css'
import {Link} from 'react-router-dom'
import axios from '../../axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { UserContext } from '../../Context/UserContext';


function UserLogin() {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [refresh,setRefresh] = useState('')
    const [access,setAccess] = useState('')
    const [error,setError] = useState('')
    const user = ""
    // useContext(UserContext.user)
    console.log(user);
    const login = async (e)=>{
        // e.preventDefault();
        // const data = {
        //     email:email,
        //     password:password,
        // }
        //     await axios.post('accounts/api/login/',data).then((res)=>{
        //         console.log(res.data.refresh)
        //         window.localStorage.setItem("access", res.data.access)
        //         window.localStorage.setItem("refresh", res.data.refresh)

        //     }).catch((err)=>{
        //         console.log(err)
                
        //     })
        
    }
    
  return (
    <div>
        <div className="container">
            <div className="user-login-title">
                <p>Login as User</p>
                <p className="dont-have-account">Don't have an account?<Link className='link-register' to="/register"><p>Sign-Up</p></Link></p>
            </div>
            <div className="user-login-form">
                <form action="" >
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' />
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
                    <div className="user-login-button">
                        <div className="or-signin">
                            <p>Or Login with - </p>
                             <img src="/icons/facebook.png" alt="" />
                             <img src="/icons/google.png" alt="" />
                        </div>
                        <button onClick={login}> Login </button>
                    </div>
                </form>
            </div>
            <div className="login-with-phone">
                <p>Or <u>Login with Phone</u></p>
            </div>
        </div>
    </div>
  )
}

export default UserLogin