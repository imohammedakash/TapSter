import { createReducer } from "@reduxjs/toolkit";
const initialState = {};
export const courseReducer = createReducer(initialState, {
  TOPIC: (state, action) => {
    state.topic = action.payload;
  }
  
});
