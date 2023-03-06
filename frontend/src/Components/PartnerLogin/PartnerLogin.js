import React,{useState, useEffect,useContext} from 'react'
import jwt_decode from 'jwt-decode'
import axios from '../../axios'
import './PartnerLogin.css'
import { UserContext } from '../../Context/UserContext'
import { useNavigate } from 'react-router-dom'


function PartnerLogin() {
    const navigate = useNavigate()
    let passError = "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
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
            navigate("/partner-home")
        }
    },[navigate])
    // useContext(UserContext.user)
    // console.log(user);
    const login = async (e)=>{
        e.preventDefault()
        const data = {
            email:email,
            password:password
        }
        console.log(data);
        await axios.post('accounts/api/login/',data).then((res)=>{
            if (res.status===200){
                console.log(res.data);
                const code = jwt_decode(res.data.refresh)
                console.log(code.is_partner);
                if (code.is_partner === true){
                    localStorage.setItem('refresh',res.data.refresh)
                    localStorage.setItem('access',res.data.access)
                    localStorage.setItem('user',res.data.user)
                    setRefresh(res.data.refresh)
                    setAccess(res.data.access)
                    setError(res.data.error)
                    setTokens(res.data.refresh)
                    navigate('/partner-home')
                }
                else{
                    alert('You are not a partner')
                }
                
                
            }
        })
    }
  return (
    <div className='partner-login-container'>
        <div className="container">
            <div className="user-login-title">
                <p>Login as Partner</p>
                <p className="dont-have-account">Connect your hub with us..<u> Register</u></p>
            </div>
            <div className="user-login-form">
                <form action="" onSubmit={login}>
                    <input type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Username' />
                    <span>{mailError}</span>
                    <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
                    <span>{passError}</span>
                    <div className="user-login-button">
                        <div className="or-signin">
                            <p>Or Login with - </p>
                             <img src="/icons/facebook.png" alt="" />
                             <img src="/icons/google.png" alt="" />
                        </div>
                        <button type="submit"> Login </button>
                    </div>
                </form>
            </div>
            {/* <div className="login-with-phone">
                <p>Or <u>Login with Phone</u></p>
            </div> */}
        </div>
    </div>
  )
}

export default PartnerLogin