
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {login, logout} from '../features/auth/authSlice'
//Es una funcion  que me retorna las funciones asíncronas de login, registro como renovar token para
//poderlo usar donde quiera a lo largo de la aplicacion
export const UserAuthAsync = () => {

    const dispatch = useDispatch()

  let baseUrl = process.env.REACT_APP_API
  
    const userRegister = async(name, email, password )  => {
     
      try {

        const {data} = await axios.post(`${baseUrl}/auth/register`, {name,email, password})
        console.log(data)
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(login({...data}))
        
        } catch (error) {
              console.log(error.response.data)
              dispatch(logout())
        }
    }

    const userLogin = async(email, password )  => {
     
      try {

        const {data} = await axios.post(`${baseUrl}/auth/login`, {email, password})
        console.log(data)
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(login({...data}))
        
        } catch (error) {
              console.log(error.response.data)
              dispatch(logout())
        }
    }

    const checkUserToken = async()  => {

      const options = {
        headers: {'user-token': localStorage.getItem('token')}
      };

     
      try {

        const {data} = await axios.get(`${baseUrl}/auth/token`, options)
        console.log(data)
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(login({...data}))
        
        } catch (error) {
              console.log(error.response.data)
              localStorage.clear()
              dispatch(logout())
        }
    }

    
return {
  userRegister,
  userLogin,
  checkUserToken
}
    


}