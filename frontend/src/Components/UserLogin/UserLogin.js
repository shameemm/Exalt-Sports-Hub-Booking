import React, { useContext, useEffect, useState } from 'react'
import './UserLogin.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from '../../axios'
import jwt_decode from "jwt-decode";
import { UserContext } from '../../Context/UserContext';
import { GoogleLogin } from '@react-oauth/google';


function UserLogin() {
    
    const navigate = useNavigate()
    
    let passError = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
    let mailError = "Enter valid E-mail address"
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [refresh,setRefresh] = useState('')
    const [access,setAccess] = useState('')
    const [error,setError] = useState('')
    const {token,setTokens}=useContext(UserContext)
    useEffect(()=>{
        const token = localStorage.getItem('refresh')
        if (token){
            navigate("/")
        }
    },[navigate])
    console.log("tokens",token);
    const login = async (e)=>{
        e.preventDefault()
        const data = {
            email:email,
            password:password
        }
        console.log(data)
        if (email.length != 0 && password.length !=0){
        await axios.post('accounts/api/login/',data).then((res)=>{
            if (res.status===200){
                const code = jwt_decode(res.data.refresh)
                console.log(code.is_partner);
                if (code.is_partner === false){
                    localStorage.setItem('refresh',res.data.refresh)
                    localStorage.setItem('access',res.data.access)
                    localStorage.setItem('user',res.data.user)
                    setRefresh(res.data.refresh)
                    setAccess(res.data.access)
                    setError(res.data.error)
                    setTokens(res.data.refresh)
                    navigate('/')
                }
                else{
                    alert('You are not a user')
                }  
            }
            else {
                alert("Invalid Username And Password")
            }
        })}
        else{
            alert("Enter the valid Username And Password")
        }
    }
    
  return (
    <div>
        <div className="container">
            <div className="user-login-title">
                <p>Login as User</p>
                
                <p className="dont-have-account">Don't have an account? <Link className='link-register' to="/register"><p>Sign-Up</p></Link></p>
            </div>
            <div className="user-login-form">
                <form action="" >
                    <input type="email" name="email" value={email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"  onChange={(e)=>{setEmail(e.target.value)}} id="" placeholder='E-mail'/>
                    <span>{mailError}</span>
                    <input type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="" placeholder='Password'/>
                    <span>{passError}</span>
                    <div className="user-login-button">
                        <div className="or-signin">
                            <p>Or Login with - </p>
                             <img  src="/icons/facebook.png" alt="" />
                             <img  src="/icons/google.png" alt="" />
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