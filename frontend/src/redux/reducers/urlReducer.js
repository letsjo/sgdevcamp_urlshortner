import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  full:'',
  short:'',
};

const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers:{
    setUrl(state, action){
      state.full = action.payload.full;
      state.short = action.payload.short;
    },
  }
});

export const urlSliceAction = urlSlice.actions;
export default urlSlice.reducer;