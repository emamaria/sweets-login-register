import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'authUser',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated'
        user: {},
    },
    reducers: {
       checkState: (state) => state,
       login: (state, action) => {
          console.log(action.payload)
       },
       logout: (state, action) => {
        console.log(action)
       },
      
    } 
});



export const  {checkState, login, logout} =  authSlice.actions


export default authSlice.reducer