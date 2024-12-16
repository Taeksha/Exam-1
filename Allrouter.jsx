import React from 'react'
import { Route ,Routes } from 'react-router'
import Home from './src/component/Home'
import Product from './src/component/Product'
import Cart from './src/component/cart'
import Login from './src/component/Login' 
import About from './src/component/About'



const Allrouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Product" element={<Product/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="*" element={<h1>page not found</h1>}></Route>
       
    </Routes>
  )
}

export default Allrouter