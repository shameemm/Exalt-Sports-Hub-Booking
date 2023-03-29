import React, { useState } from 'react'
import './PartnerRegistration.css'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fontSize } from '@mui/system';

function PartnerRegistration() {
  const [confirmPass,setConfirmPass] = useState('')
  const [matchPass,setMatchPass] = useState(false)
  const navigate = useNavigate()
  const [arenaName,setArenaName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  
  const [showPassword, setShowPassword] = useState(false);
  const data = {
    name:arenaName,
    phone:phone,
    email:email,
    password:password,
    is_partner:true 
  }
  // if(password===confirmPass){
    // setMatchPass(true)
  // }
  const passError = "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
  let nameError = "Name must be atleast 3 characters long"
  let phoneError = "Enter valid phone number"
  let mailError = "Enter valid E-mail address"
  const register = async (e)=>{
    setLoading(true)
    e.preventDefault()
    if (arenaName.length!==0 &&phone.length!==0&&email.length!==0&&password.length!==0){
      e.preventDefault()
      console.log(data)
      await axios.post('accounts/api/register/',data).then((res)=>{
        if (res.status===200){
          console.log(res)
          toast.success("Registered Successfully")
          setLoading(false)
          navigate('/partner_login')
        }
        else{
          console.log(res.error);
        }
      })
    }
    else{
      toast.error("Fill all the fields");
      
    }
  }
  
  return (
    <div><div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <div className="register-head-card">
      <div className="register_title">
        <p>Register your sports hub</p>
      </div>
    </div>
    <div className="register-part-card">
      <div className="">
        <form className = "register-form" onSubmit={register} action="">
          <input type="text" pattern="[A-Za-z]{2,32}" value={arenaName} onChange={(e)=>{setArenaName(e.target.value)
          setLoading(false)}} name="arena-name" id="" placeholder='Arena Name'/>
          <span>{nameError}</span>
          <input type="tel" pattern="[0-9]{10}" value={phone} onChange={(e)=>{setPhone(e.target.value)
        setLoading(false)}} name="phone" id="" placeholder='Phone'/>
          <span>{phoneError}</span>
          <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"  value={email} onChange={(e)=>{setEmail(e.target.value)
          setLoading(false)}} name="email" id="" placeholder='Email'/>
          <span>{mailError}</span>
          <input type={showPassword ? "text" : "password"} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={password} onChange={(e)=>{setPassword(e.target.value)
          setLoading(false)}} name="password" id="" placeholder='Password'/><p style={{fontSize:'10px',marginLeft:'1rem', cursor:'pointer'}} onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide Password" : "Show Password"}
        </p>
          <span>{passError}</span>
          {/* <input type="text" value={confirmPass} onChange={(e)=>{setConfirmPass(e.target.value)}}  name="confirm-password" id="" placeholder='Confirm Password'/>
          <span>{matchPass ? "Passwords Match" : "Passwords do not match"}</span> */}
          <button type="submit" className="register-button" disabled={loading}>{loading ? 'Loading...' : 'Register'}</button>
          {/* <input type="submit" value="Register" /> */}
        </form>
      </div>
    </div>
  </div></div>
  )
}

export default PartnerRegistration