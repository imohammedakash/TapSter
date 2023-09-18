import axios from "axios";
const API_URL = process.env.API_URL;
export const LoginUser = (credentials) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });
    const { data } = await axios.post(
      API_URL + "/api/v1/user/login",
      credentials,
      {
        "Content-Type": "application/json",
        withCredentials: true,
      }
    );
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data.user,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "LOGIN_FAILURE",
      payload: err.message,
    });
  }
};
export const register = (credentials) => async (dispatch) => {
  try {
    dispatch({
      type: "REGISTER_REQUEST",
    });
    const { data } = await axios.post(
      API_URL + "/api/v1/user/register",
      credentials,
      {
        "Content-Type": "multipart/form-data",
        withCredentials: true,
      }
    );
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: data.user,
    });
  } catch (err) {
    dispatch({ type: "REGISTER_FAILURE" });
  }
};
export const getProfile = () => async (dispatch) => {};
