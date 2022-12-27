
import axios from 'axios';

export const userAuthAsync = () => {

 

  let baseUrl = process.env.REACT_APP_API
  
    const userRegister = async(name, email, password )  => {
     
      try {

        const {data} = await axios.post(`${baseUrl}/auth/register`, {name,email, password})
        console.log(data)
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime());
           
        
        } catch (error) {
              console.log(error.response.data)
        }
    }

    const userLogin = async(email, password )  => {
     
      try {

        const {data} = await axios.post(`${baseUrl}/auth/login`, {email, password})
        console.log(data)
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime());
           
        
        } catch (error) {
              console.log(error.response.data)
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
           
        
        } catch (error) {
              console.log(error.response.data)
        }
    }

    
return {
  userRegister,
  userLogin,
  checkUserToken
}
    


}