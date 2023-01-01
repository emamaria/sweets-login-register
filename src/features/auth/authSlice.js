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
        state.status = 'authenticated';
        state.user = { id: action.payload.id, name: action.payload.name, email: action.payload.email};
          console.log("login payload", action.payload)
          console.log("user state", state.user)
       },
       logout: (state) => {
        state.status = 'not-authenticated';
        state.user = {}
    
       },
      
    } 
});



export const  {checkState, login, logout} =  authSlice.actions


export default authSlice.reducer