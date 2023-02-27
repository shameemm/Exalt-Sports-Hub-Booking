import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../axios'
import './UserRegistration.css'

function UserRegistration() {
  const navigate = useNavigate()
  const [name,setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const data = {
    name:name,
    phone:phone,
    email:email,
    password:password
  }
  const passError = "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
  let nameError = "Name must be atleast 3 characters long"
  let phoneError = "Enter valid phone number"
  let mailError = "Enter valid E-mail address"
  const register = async (e)=>{
    if (name.length!==0 &&phone.length!==0&&email.length!==0&&password.length!==0){
      e.preventDefault()
      console.log(data)
      await axios.post('accounts/api/register/',data).then((res)=>{
        if (res.status===200){
          console.log(res)
          navigate('/login')
        }
      })
    }
  }
  

        
  return (
    <div>
      <div className="register-head-card">
        <div className="register_title">
          <p>Register as User</p>
        </div>
      </div>
      <div className="register-part-card">
        <div className="">
          <form className = "register-form" onSubmit={register} action="">
            <input type="text" name="name" value={name}  pattern="[A-Za-z]{2,32}" onChange={(e)=>{setName(e.target.value)}} id="" placeholder='Name' />
            <span>{nameError}</span>
            <input type="tel" name="phone" value = {phone} pattern="[0-9]{10}" onChange={(e)=>{setPhone(e.target.value)}} id="" placeholder='Phone'/>
            <span>{phoneError}</span>
            <input type="email" name="email" value={email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"  onChange={(e)=>{setEmail(e.target.value)}} id="" placeholder='E-mail'/>
            <span>{mailError}</span>
            <div className="password-register">
            <input type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="" placeholder='Password'/>
            <span>{passError}</span>
            {/* <i class="bi bi-eye-slash" id="togglePassword"></i> */}
            </div>
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserRegistration