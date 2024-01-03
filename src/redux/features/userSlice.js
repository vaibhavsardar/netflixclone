import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isloggedin: false,
  user:null,
  token:null
}

export const userSlice = createSlice({
    name: 'authuser',
    initialState,
    reducers: {
      setAuthuser: (state,{payload}) => {

        state.isloggedin = payload.isloggedin;
        state.user = payload.user;
        state.token = payload.token;

      },
      decrement: (state) => {
       
      },
      incrementByAmount: (state, action) => {
        // state.value += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setAuthuser, decrement, incrementByAmount } = userSlice.actions
  
  export default userSlice.reducer
  
  