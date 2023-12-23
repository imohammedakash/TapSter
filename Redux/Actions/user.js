import axios from "axios";
import { persistor } from "../store";
const API_URL = "https://tapster-dev.onrender.com";
export const LoginUser = (credentials) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });
    const { data } = await axios.post(
      API_URL + "/api/users/login",
      credentials,
      {
        "Content-Type": "application/json",
        withCredentials: true,
      }
    );
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data?.data,
    });
    return data;
  } catch (err) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: err.message,
    });
    return err?.response?.data ? err?.response?.data : err.message;
  }
};
export const register = (credentials) => async (dispatch) => {
  try {
    dispatch({
      type: "REGISTER_REQUEST",
    });
    const { data } = await axios.post(
      API_URL + "/api/users/register",
      credentials,
      {
        "Content-Type": "applications/json",
        withCredentials: true,
      }
    );
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: data?.data,
    });
    return data;
  } catch (err) {
    dispatch({ type: "REGISTER_FAILURE" });
    return err?.response?.data ? err?.response?.data : err.message;
  }
};
export const  getProfile = (token) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADUSER_REQUEST",
    });

    const { data } = await axios.get(API_URL + "/api/users/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    dispatch({
      type: "LOADUSER_SUCCESS",
      payload: data?.data,
    });
    return data;
  } catch (err) {
    dispatch({ type: "LOADUSER_FAILURE" });
    return err?.response?.data;
  }
};
export const getSocialProfile = (token) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADUSER_REQUEST",
    });
    const { data } = await axios.get(API_URL + "/api/users/personal-social-profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    dispatch({
      type: "LOADUSER_SUCCESS",
      payload: data?.data,
    });
    return data;
  } catch (err) {
    dispatch({ type: "LOADUSER_FAILURE" });
    return err?.response?.data;
  }
};

export const updateProfile = (token, credentials) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      API_URL + "/api/users/profile",
      credentials,
      {
        headers: {
          "Content-Type":  "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    return data;
  } catch (err) {
    return err?.response?.data ? err?.response?.data : err.message;
  }
};
export const updateSocialProfile = (token, credentials) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATEUSER_REQUEST",
    });
    const { data } = await axios.post(
      API_URL + "/api/users/edit-social-profile",
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: "UPDATEUSER_SUCCESS",
      payload: data?.data,
    });
    return data;
  } catch (err) {
    dispatch({ type: "UPDATEUSER_FAILURE" });
    return err?.response?.data ? err?.response?.data : err.message;
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUTUSER_REQUEST",
    });
    dispatch({
      type: "handleCart_SUCCESS",
      payload: {},
    });
    dispatch({
      type: "LOGOUTUSER_SUCCESS"
    });
    await persistor.purge();
  } catch (err) {
    dispatch({ type: "LOGOUT_FAILURE" });
    return err;
  }
};
