import {createSlice} from '@reduxjs/toolkit' 

export const cartSlice = createSlice({
    name: "cartTasks",
    initialState: [],
    reducers: {
      addCart: (state, action) => {
        state.push(action.payload)
      },
      updateCartAdd: (state, action) => {
        console.log(action.payload)
        let itemExist = state.find(item => item.name === action.payload.name)
        if(itemExist){
          itemExist.amount += action.payload.amount
          itemExist.totalPrice += action.payload.totalPrice
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

          
          if(itemExist.amount === 0){
           
            console.log("index", state.findIndex(item => item.name === itemExist.name))
            const index = state.findIndex(item => item.name === itemExist.name)
            //buscar el indice de ese objeto en el array y pasarlo al splice
              state.splice(index, 1)
              

            
          }
        }
      },
      addToTotal: (state, action) =>  {
       
        let itemExist =  state.find(item => item.name === action.payload.name)
     
        if(itemExist){
          itemExist.amount += 1
          itemExist.totalPrice += action.payload.price
        }
      },
      deleteProduct: (state, action) =>  {
          console.log("deleteProduct", action)
          return state.filter( item => item.name !== action.payload.name)
      }
      
    }
})
   export const  {addCart, updateCartAdd, restFromTotal, addToTotal, deleteProduct} =  cartSlice.actions


export default cartSlice.reducer