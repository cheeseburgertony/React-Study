import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'Hello World'
  },
  reducers: {
    addNum(state, action) {
      state.count = state.count + action.payload
    },
    subNum(state, action) {
      state.count = state.count - action.payload
    },
    changeMessage(state, action) {
      state.message = action.payload
    }
  }
})

export const { addNum, subNum,changeMessage } = counterSlice.actions
export default counterSlice.reducer