import { createReducer } from "@reduxjs/toolkit";
const initialState = {};
export const userReducer = createReducer(initialState, {
  LOGIN_REQUEST: (state) => {
    state.loading = true;
  },
  LOGIN_SUCCESS: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.error = ''
  },
  LOGIN_FAILURE: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  REGISTER_REQUEST: (state) => {
    state.loading = true;
  },
  REGISTER_SUCCESS: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.error = ''
  },
  REGISTER_FAILURE: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  LOADUSER_REQUEST: (state) => {
    state.loading = true;
  },
  LOADUSER_SUCCESS: (state, action) => {
    state.loading = false;
    state.user.data = action.payload;
    state.error = ''
  },
  LOADUSER_FAILURE: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UPDATEUSER_REQUEST: (state) => {
    state.loading = true;
  },
  UPDATEUSER_SUCCESS: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.error = ''
  },
  UPDATEUSER_FAILURE: (state, action) => {
    state.loading = false;
    state.error = action.payload;

  },
  LOGOUTUSER_REQUEST: (state) => {
    state.loading = true;
  },
  LOGOUTUSER_SUCCESS: (state, action) => {
    state.loading = false;
    state.user = {};
    state.error = ''
  },
  LOGOUTUSER_FAILURE: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
