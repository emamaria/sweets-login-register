import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

//children son los componetes que recibe este PrivateRoute  y que éste los envuelve
//si el usuario está autenticado muestro el componente que paso como children en caso
//contrario, mando al login.Entonces si tratas de acceder a la ruta qu deseas proteger y 
//no estás autenticado te manda a la pantalla de login
export const PrivateRoute = ({children}) => {

    const {status} = useSelector(state => state.authUser)


  return (status === "authenticated")?children : <Navigate to="/login"/>
}
