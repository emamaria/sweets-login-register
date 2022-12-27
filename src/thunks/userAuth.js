
import axios from 'axios';

export const userAuthAsync = () => {

  const options = {
    headers: {'user-token': localStorage.getItem('token')}
  };

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


    
return {
  userRegister
}
    


}