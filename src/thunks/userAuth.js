
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
        } catch (error) {
              console.log(error.response.data)
        }
    }


    
return {
  userRegister
}
    


}