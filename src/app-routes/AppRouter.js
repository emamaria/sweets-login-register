import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import CartPage from '../pages/cart/CartPage'
import Drinks from '../pages/drinks/Drinks'
import Header from '../components/Header/Header'
import Home from '../pages/home/Home'
import Navbar from '../components/Navbar/Navbar'
import Sweets from '../pages/sweets/Sweets'
import LoginForm from '../pages/forms/LoginForm'
import RegisterForm from '../pages/forms/RegisterForm'
import { UserAuthAsync } from '../thunks/userAuth'
import { useSelector } from 'react-redux'
import User from '../pages/user/User'
import { PrivateRoute } from './PrivateRoute'
//la ruta que quiero proteger es el :user entonces envuelvo el componente User con el componente PrivateRoute siendo
//este componente User el children de PrivateRoute
const AppRouter = () => {
 const {checkUserToken} = UserAuthAsync()

 const {status} = useSelector(state => state.authUser)

 console.log(status)
 
  //se ha colocado aquí para que  al recargar cualquier pagina de mi app se ejecute para validar y renovar el token
  //para mantener o no la sesion del usuario según si está logeado(autenticado) o no. se coloca array porque solo quiero que se
  //ejecute al cargarse la pagina
 useEffect(() => {
  checkUserToken()

}, []);
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
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/:user" element={
        <PrivateRoute>
            <User/>
        </PrivateRoute>}/>
        </Routes>
    </Router>
    
  )
}

export default AppRouter