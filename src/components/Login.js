import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate,useLocation } from 'react-router-dom'

function Login() {
  const [user,setUser]=useState('')
  const [pass,setPass]=useState('')
  const location =useLocation()
  const auth=useAuth()
  const navigate=useNavigate()
  const redirectPath=location.state?.path||'/'
  const handleLogin=()=>{
    auth.login(user,pass)
    navigate(redirectPath,{replace:true})
  }
  return (
    <div>
      <label>
        Username:{' '}
        <input type='text' onChange={e=>setUser(e.target.value)}/>
      </label>
      <label>
        password:{' '}
        <input type='text' onChange={e=>setPass(e.target.value)}/>
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login