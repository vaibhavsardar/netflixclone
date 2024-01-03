import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mylist:null
}

export const mylistSlice = createSlice({
    name: 'mylist',
    initialState,
    reducers: {
      
      setMylist: (state,{payload}) => {
        state.mylist = payload.mylist;
        
      },
     
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setMylist } = mylistSlice.actions
  
  export default mylistSlice.reducer
  
  