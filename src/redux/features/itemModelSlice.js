import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  type:null,
  currId:null
  
}

export const itemModelSlice = createSlice({
    name: 'itemmodel',
    initialState,
    reducers: {
      
      setModelData: (state,{payload}) => {
        state.isOpen = payload.isOpen;
        state.type = payload.type;
        state.currId = payload.currId;
      },
     
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setModelData } = itemModelSlice.actions
  
  export default itemModelSlice.reducer
  
  