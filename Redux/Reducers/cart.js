import { createReducer } from "@reduxjs/toolkit";
const initialState = {};
export const cartReducer = createReducer(initialState, {
    handleCart_REQUEST: (state) => {
        state.loading = true;
    },
    handleCart_SUCCESS: (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        state.error = ''
    },
    handleCart_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
});
