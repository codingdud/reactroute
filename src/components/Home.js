import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  return (
    <>
    <div>Home</div>
    <button onClick={()=>{navigate('order',{replace:true})}}>Place order</button>
    </>
    
  )
}

export default Home