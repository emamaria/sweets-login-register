import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import { setCartEmpty } from "../../features/cart/cartSlice";



const CheckOut = ({total, totalItems}) => {
  
    let cartItems = useSelector(state => state.cartTasks)
    let {status,user} = useSelector(state => state.authUser)
    let dispatch = useDispatch()
    let totalPrice = total.toFixed(2)
    
    function getToken(token) {
    console.log("1", token, totalPrice, cartItems);

    const sendCheckOut = async (token, totalPrice, cartItems) => {
      
        
      let userData = {
        name: user.name,
        email: user.email,
        _id: user.id,
      };

      console.log(userData);

      try {

        const options = {
            headers: {'user-token': localStorage.getItem('token')}
          };

         console.log("options", options) 
        console.log("2", token, total);
        const response = await axios.post(
          "http://localhost:4000/api/checkout",
          { token, totalPrice, cartItems, userData}, options
        );

        console.log(response);
        if (response.data === "Payment done") {
          Swal.fire("Ok", "Your payment has done successfully", "success");
          dispatch(setCartEmpty())
        }
      } catch (err) {
        console.log(err);
      }
    };

    sendCheckOut(token, totalPrice, cartItems);
  }

  return (
    <div>
      <StripeCheckout
        amount={totalPrice*100}
        shippingAddress
        token={getToken}
        stripeKey={
          "pk_test_51KubPTDR9kHMYlDcVQVuEQhOSH2dE8pW7ynTtxR8IcEEbmaV0P1DbvJ0vdmpi9paBKjSnLHX1VhRyxpPLJKMUbRU00g1kOAOaV"
        }
        
        currency="EUR"
      >
      <button disabled={totalItems===0 || (status !== "authenticated")} className='pay_button'>Pay</button>
       
     </StripeCheckout>
    </div>
  );
};

export default CheckOut;
