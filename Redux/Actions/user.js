import axios from "axios";
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
export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST",
    });
    const { data } = await axios.get(API_URL + "/api/v1/user/logout", {
      "Content-Type": "applications/json",
      withCredentials: true,
    });
    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: data?.data,
    });
    return data;
  } catch (err) {
    dispatch({ type: "LOGOUT_FAILURE" });
    return err?.response?.data;
  }
};
export const getProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADUSER_REQUEST",
    });
    let AccessToken = localStorage.getItem("AccessToken");
    const { data } = await axios.get(API_URL + "/api/users/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AccessToken}`, // Replace with your actual authorization token
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
