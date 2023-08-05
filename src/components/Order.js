import React from 'react'
import { useNavigate } from 'react-router-dom'

function Order() {
    const navigate=useNavigate()
    return (
        <>
            <div>Order conformed</div>
            <button onClick={()=>{navigate(-1)}}>back</button>
        </>
    )
}

export default Order