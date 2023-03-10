import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import AdminNav from '../../Components/AdminNav/AdminNav'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'


function AdminHome() {
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem('refresh')
    console.log(token);
    if (token === null){
      navigate('/admin')
    }
    if (token){
      const decode = jwt_decode(token)
      console.log(decode);
      if (decode.is_superuser===false){
        navigate('/admin')
        alert("You are not a ADMIN")
      }
    }
  },[navigate])
  return (
    <div>
        <Grid container >
            <Grid md={2}>
                <AdminNav/>
            </Grid>
        </Grid>
    </div>
  )
}

export default AdminHome