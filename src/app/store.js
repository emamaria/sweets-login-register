import { configureStore } from '@reduxjs/toolkit'
import cartTasksReducer from '../features/cart/cartSlice'


export const store = configureStore({
  reducer: {
    cartTasks: cartTasksReducer,
  },
})

