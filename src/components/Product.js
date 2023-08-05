import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Product() {
    return (
        <>
            <div>
                <input type='search' placeholder='search' />
            </div>
            <nav>
                <Link to='feature'>feature</Link>
                <Link to='new'>new</Link>
            </nav>
            <Outlet/>
        </>

    )
}

export default Product