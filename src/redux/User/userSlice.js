import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, registerThunk } from './operations'

const initialState = {
  user: {
    name: '',
    email: '',
    phone: '',
    password: ''
  },
  error: '',
  token: '',
  isLoggedIn: false
  
}

const userSlice = createSlice({
  name: 'user',
  initialState,
 extraReducers: builder => {
   builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
    console.log('Payload:', payload);
     state.user = payload.user
     state.isLoggedIn = true
   })
   .addCase(loginThunk.fulfilled, (state, { payload }) => {
     state.user = payload.user
     state.token = payload.token
     state.isLoggedIn = true
   })
   .addCase(logoutThunk.fulfilled, (state) => {
     state.user = initialState.user
     state.token = initialState.token
     state.isLoggedIn = initialState.isLoggedIn
   })
 }
})


export const userReducer = userSlice.reducer