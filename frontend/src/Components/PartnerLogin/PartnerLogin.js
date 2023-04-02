import React,{useState, useEffect,useContext} from 'react'
import jwt_decode from 'jwt-decode'
import axios from '../../axios'
import './PartnerLogin.css'
import { UserContext } from '../../Context/UserContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'


function PartnerLogin() {
    const navigate = useNavigate()
    let passError = "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
    let mailError = "Enter valid E-mail address"
    const [loading,setLoading] = useState(false)
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

    const loginPartner = async (e)=>{
        setLoading(true)
        e.preventDefault()
        const data = {
            email:email,
            password:password
        }
        console.log(data);
        if (email.length!=0 && password.length!=0){
        await axios.post('accounts/api/login/',data).then((res)=>{
            console.log("res",res);
            if (res.status===200){
                console.log(res.data);
                const code = jwt_decode(res.data.refresh)
                console.log(code.is_partner);
                if (code.is_partner === true){
                    localStorage.setItem('token',JSON.stringify(res.data))
                    localStorage.setItem('access',res.data.access)
                    // localStorage.setItem('user',res.data.user)
                    // setRefresh(res.data.refresh)
                    // setAccess(res.data.access)
                    // setError(res.data.error)
                    // setTokens(res.data.refresh)
                    navigate('/partner-home')
                    setLoading(false)
                }
                else{
                    toast.error('You are not a partner')
                    setLoading(false)
                }
            }
            else if(res.data.status===401){
                alert("Enter the valid username and password")
                setLoading(false)
            }
            else{
                toast.error("Something went wrong")
                setLoading(false)
            }
        }).catch((err)=>{
            toast.error("Something went wrong")
            // if( err.response.status===401){
            //     toast.error("Enter the valid username and password")
            //     setLoading(false)
            // }
        })
    }
        else{
            toast.error("Enter username and password")
            setLoading(false)
        }
    }
  return (
    <div className='partner-login-container'>
        <ToastContainer/>
        <div className="container">
            <div className="user-login-title">
                <p>Login as Partner</p>
                <p className="dont-have-account">Connect your hub with us..<u> Register</u></p>
            </div>
            <div className="user-login-form">
                <form action="" onSubmit={loginPartner}>
                    <input type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" value={email} onChange={(e)=>{setEmail(e.target.value);setLoading(false)}} placeholder='Username' />
                    <span>{mailError}</span>
                    <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={password} onChange={(e)=>{setPassword(e.target.value);setLoading(false)}} placeholder='Password' />
                    <span>{passError}</span>
                    <div className="user-login-button">
                        <div className="or-signin">
                            <p>Or Login with - </p>
                             <img src="/icons/facebook.png" alt="" />
                             <img src="/icons/google.png" alt="" />
                        </div>
                        <button type="submit" disabled={loading}>{loading?"loading...": "Login"}</button>
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