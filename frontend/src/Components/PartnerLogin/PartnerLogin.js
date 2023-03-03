import React,{useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import axios from '../../axios'
import './PartnerLogin.css'


function PartnerLogin() {
    let passError = "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
    let mailError = "Enter valid E-mail address"
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [refresh,setRefresh] = useState('')
    const [access,setAccess] = useState('')
    const [error,setError] = useState('')
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
                if (code.is_partner == true){
                    localStorage.setItem('refresh',res.data.refresh)
                    localStorage.setItem('access',res.data.access)
                    localStorage.setItem('user',res.data.user)
                    setRefresh(res.data.refresh)
                    setAccess(res.data.access)
                    setError(res.data.error)
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
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Username' />
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
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