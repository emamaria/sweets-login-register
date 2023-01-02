import {createSlice} from '@reduxjs/toolkit' 

//tomo del storage el array de carritos para mantener  los datos  si hay algo establezco
//como incitialstate sino le paso un array vacío y tras cada operacion añado al storage la
//ultima actualizacion del carrito
let cartItems =  JSON.parse(localStorage.getItem('cart-items')) || []

export const cartSlice = createSlice({
    name: "cartTasks",
    initialState: cartItems,
    reducers: {
      addCart: (state, action) => {
        state.push(action.payload)
        localStorage.setItem('cart-items', JSON.stringify(state))
      },
      updateCartAdd: (state, action) => {
        console.log(action.payload)
        let itemExist = state.find(item => item.name === action.payload.name)
        if(itemExist){
          itemExist.amount += action.payload.amount
          itemExist.totalPrice += action.payload.totalPrice
          localStorage.setItem('cart-items', JSON.stringify(state))
        }

      }, 
     restFromTotal: (state, action) =>  {
      console.log("state", state)
         
        let itemExist = state.find(item => item.name === action.payload.name)
        console.log("payload name", action.payload.name)
        console.log("restitem", itemExist)
        if(itemExist.name === action.payload.name && itemExist.amount > 0){
          console.log("restitem", itemExist)
          itemExist.amount -= 1
          itemExist.totalPrice -= action.payload.price
          localStorage.setItem('cart-items', JSON.stringify(state))
          
          if(itemExist.amount === 0){
           
            console.log("index", state.findIndex(item => item.name === itemExist.name))
            const index = state.findIndex(item => item.name === itemExist.name)
            //buscar el indice de ese objeto en el array y pasarlo al splice
              state.splice(index, 1)
              localStorage.setItem('cart-items', JSON.stringify(state))

            
          }
        }
      },
      addToTotal: (state, action) =>  {
       
        let itemExist =  state.find(item => item.name === action.payload.name)
     
        if(itemExist){
          itemExist.amount += 1
          itemExist.totalPrice += action.payload.price
          localStorage.setItem('cart-items', JSON.stringify(state))
        }
      },
      deleteProduct: (state, action) =>  {
          console.log("deleteProduct", action)
          // return state.filter( item => item.name !== action.payload.name)
          //cambiado la lógica de return filter por splice para poder hacer setitem después
          const index = state.findIndex(item => item.name === action.payload.name)
          //buscar el índice de ese objeto en el array y pasarlo al splice
            state.splice(index, 1)
            localStorage.setItem('cart-items', JSON.stringify(state))
          
      },
     
    }

    
})
   export const  {addCart, updateCartAdd, restFromTotal, addToTotal, deleteProduct} =  cartSlice.actions


export default cartSlice.reducer