import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

function User() {
    const [searchparams,setSearchparams]=useSearchParams()
    const show = searchparams.get("filter")==="active"
    return (
        <>
            <div>
                <h1>user 1</h1>
                <h1>user 2</h1>
                <h1>user 3</h1>
            </div>
            <Outlet/>
            <div>
                <button onClick={()=>{setSearchparams({filter:"active"})}}
                >Active user</button>
                <button onClick={()=>{setSearchparams({})}}
                >reset user</button>
                {show?<h2>active user</h2>:<h2> showing all user</h2>}
            </div>
        </>
    )
}

export default User