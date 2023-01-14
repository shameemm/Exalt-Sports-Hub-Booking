import React from 'react'


import Head from '../Components/Head/Head'
import UserLogin from '../Components/UserLogin/UserLogin'
import './Login.css'

function Login() {
  return (
    <div>
        <Head></Head>
        {/* <div className="login"> */}
        <Grid container spacing={1}>
          <Grid md={6} xs={12}>
            <UserLogin></UserLogin>
          </Grid>
          
          <Grid md={6} xs={12} >
            <UserLogin></UserLogin>
          </Grid>
        </Grid>
          
            
        {/* </div> */}
    </div>
  )
}

export default Login