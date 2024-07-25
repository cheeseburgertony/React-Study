import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 100
  },
  reducers: {
    addNum(state, action) {
      state.counter = state.counter + action.payload
      // console.log(state, action);
    },
    subNum(state, action) {
      state.counter = state.counter - action.payload
    }
  }
})

export const {addNum,subNum} = counterSlice.actions

export default counterSlice.reducer