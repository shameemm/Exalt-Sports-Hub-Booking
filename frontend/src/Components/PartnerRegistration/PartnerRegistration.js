import React, { useState } from 'react'
import './PartnerRegistration.css'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom'

function PartnerRegistration() {
  const navigate = useNavigate()
  const [arenaName,setArenaName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const data = {
    name:arenaName,
    phone:phone,
    email:email,
    password:password,
    is_partner:true 
  }
  const passError = "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
  let nameError = "Name must be atleast 3 characters long"
  let phoneError = "Enter valid phone number"
  let mailError = "Enter valid E-mail address"
  const register = async (e)=>{
    if (arenaName.length!==0 &&phone.length!==0&&email.length!==0&&password.length!==0){
      e.preventDefault()
      console.log(data)
      await axios.post('accounts/api/register/',data).then((res)=>{
        if (res.status===200){
          console.log(res)
          navigate('/partner_login')
        }
      })
    }
    else{
      alert("Please fill the fields")
    }
  }
  
  return (
    <div><div>
    <div className="register-head-card">
      <div className="register_title">
        <p>Register your sports hub</p>
      </div>
    </div>
    <div className="register-part-card">
      <div className="">
        <form className = "register-form" onSubmit={register} action="">
          <input type="text" pattern="[A-Za-z]{2,32}" value={arenaName} onChange={(e)=>{setArenaName(e.target.value)}} name="arena-name" id="" placeholder='Arena Name'/>
          <span>{nameError}</span>
          <input type="tel" pattern="[0-9]{10}" value={phone} onChange={(e)=>{setPhone(e.target.value)}} name="phone" id="" placeholder='Phone'/>
          <span>{phoneError}</span>
          <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"  value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id="" placeholder='Email'/>
          <span>{mailError}</span>
          <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" id="" placeholder='Password'/>
          <span>{passError}</span>
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  </div></div>
  )
}

export default PartnerRegistration