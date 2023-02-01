import React,{useState, useEffect} from 'react'


function PartnerLogin() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    useEffect(()=>{
        
    },[])
  return (
    <div>
        <div className="container">
            <div className="user-login-title">
                <p>Login as User</p>
                <p className="dont-have-account">Don't have an account? <u>Sign Up</u></p>
            </div>
            <div className="user-login-form">
                <form action="">
                    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username' />
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
            <div className="login-with-phone">
                <p>Or <u>Login with Phone</u></p>
            </div>
        </div>
    </div>
  )
}

export default PartnerLogin