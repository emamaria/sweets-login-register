import React from 'react'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import CartPage from '../pages/cart/CartPage'
import Drinks from '../pages/drinks/Drinks'
import Header from '../components/Header/Header'
import Home from '../pages/home/Home'
import Navbar from '../components/Navbar/Navbar'


import Sweets from '../pages/sweets/Sweets'
import LoginForm from '../pages/forms/LoginForm'

const AppRouter = () => {
  
  
  return (
    
     <Router>
      <Header/>
      <Navbar/>
       <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/sweets" element={<Sweets/>}/>
        <Route path="/drinks" element={<Drinks/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        </Routes>
    </Router>
    
  )
}

export default AppRouter