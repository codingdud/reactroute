import React from 'react'
import { NavLink,Outlet} from 'react-router-dom'
import { useAuth } from './Auth'
function Nav() {
  const auth=useAuth()
    const navLinkStyles=({isActive})=>{
        return {
            fontWeight: isActive?"bold":"normal",
            TextDecoration: isActive?"none":"underline",
        }
    }
  return (
    <>
    <nav className='primary-nav'>
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/product">product</NavLink>
        <NavLink style={navLinkStyles} to="/profile">Profile</NavLink>
        <NavLink style={navLinkStyles} to="/about">About</NavLink>
        {!auth.user &&(
          <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
        )}
    </nav>
    <Outlet/>
    </>
  )
}

export default Nav