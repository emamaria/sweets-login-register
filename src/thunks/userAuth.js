
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {login, logout} from '../features/auth/authSlice'
import Swal from "sweetalert2";
//Es una funcion  que me retorna las funciones asíncronas de login, registro como renovar token para
//poderlo usar donde quiera a lo largo de la aplicacion
export const UserAuthAsync = () => {

    const dispatch = useDispatch()

  let baseUrl = process.env.REACT_APP_API
  
    const userRegister = async(name, email, password )  => {
     
      try {

        const {data} = await axios.post(`${baseUrl}/auth/register`, {name,email, password})
        // console.log(data)
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(login({...data}))
        
        } catch (error) {
              // console.log("error data", error.response.data)

          
          if(error.response.data.errors?.password){
            await Swal.fire("Invalid password", error.response.data.errors.password.msg , "incorrect");
          }

          if(error.response.data.errors?.email?.param === "email"){
            await Swal.fire("Invalid email", error.response.data.errors.email.msg , "incorrect");
          }
          
          
          
          if(error.response.data?.msg?.includes("email")){
            await Swal.fire("Invalid email", error.response.data.msg , "incorrect");
          }
              
         
              dispatch(logout())
        }
    }

    const userLogin = async(email, password )  => {
     
      try {

        const {data} = await axios.post(`${baseUrl}/auth/login`, {email, password})
        // console.log(data)
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(login({...data}))
        
        } catch (error) {
              // console.log(error.response.data)

              if(error.response.data?.errors?.password){
                await Swal.fire("Invalid password", error.response.data.errors.password.msg , "incorrect");
              }
              
              if(error.response.data?.msg?.includes("email")){
                await Swal.fire("Invalid email", error.response.data.msg , "incorrect");
              }

              if(error.response.data?.errors?.email?.param === "email"){
                await Swal.fire("Invalid email", error.response.data.errors.email.msg , "incorrect");
              }
              
              
              if(error.response.data?.msg?.includes("password")){
                await Swal.fire("Invalid password", error.response.data.msg , "incorrect");
              }

              dispatch(logout())
        }
    }

    const checkUserToken = async()  => {

      const options = {
        headers: {'user-token': localStorage.getItem('token')}
      };

     
      try {

        const {data} = await axios.get(`${baseUrl}/auth/token`, options)
        // console.log(data)
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(login({...data}))
        
        } catch (error) {
              // console.log(error.response.data)
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