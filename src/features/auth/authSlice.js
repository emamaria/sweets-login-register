import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'authUser',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated'
        user: {},
    },
    reducers: {
       checkState: (state) => state,
       userLogin: (state, action) => {
          console.log(action)
       },
       userLogout: (state, action) => {
        console.log(action)
       },
      
    } 
});



export const  {checkState, userLogin, userLogout} =  authSlice.actions


export default authSlice.reducer