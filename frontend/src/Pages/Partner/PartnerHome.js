import React, { useEffect } from 'react'
import Head from '../../Components/Head/Head'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

function PartnerHome() {
const navigate = useNavigate()
const token = localStorage.getItem('refresh')
useEffect(()=>{ if (token != null){
  const decode = jwt_decode(token)
  console.log(decode.is_partner);
  if (decode.is_partner===false){
    navigate('/partner_login')
  }
}
else{
  navigate('/partner_login')
}},[navigate])
  return (
    <div>
        <Head></Head>
    </div>
  )
}

export default PartnerHome