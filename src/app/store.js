import { configureStore } from '@reduxjs/toolkit'
import cartTasksReducer from '../features/cart/cartSlice'
import authUserReducer from '../features/auth/authSlice'


export const store = configureStore({
  reducer: {
    cartTasks: cartTasksReducer,
    authUser: authUserReducer
  },
})

