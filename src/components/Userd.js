import React from 'react'
import { useParams } from 'react-router-dom'
function Userd() {
    /* const params=useParams()
    const  id=params.id */
    const {id}=useParams()
  return (
    <div>detailes of user {id}</div>
  )
}

export default Userd