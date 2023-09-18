import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    showSearch: false,
};
export const searchReducer = createReducer(initialState, {
  SEARCH_TOGGLE: (state) => {
    state.showSearch = !state.showSearch;
  }
  
});
