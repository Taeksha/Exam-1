import React from 'react'
import { NavLink } from 'react-router'


const Navbar = () => {
  return (
   <>
   <div style={{width:"100%" ,display:"flex", justifyContent:'space-evenly',backgroundColor:"lightblue", height:"100px" ,lineHeight:"100px" ,borderBottom:"1px solid gray"} } >
   <NavLink to="/" style={{textDecoration:"none"}}>HOME</NavLink>
   <NavLink to="/About"style={{textDecoration:"none"}}>ABOUT</NavLink>
   <NavLink to="/Product" style={{textDecoration:"none"}}>PRODUCT</NavLink>
   <NavLink to="/Cart" style={{textDecoration:"none"}}>CART</NavLink>
   <NavLink to="/Login" style={{textDecoration:"none"}}>LOGIN</NavLink>
    </div>
   </>
  )
}

export default Navbar