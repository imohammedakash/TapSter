export const handleCart = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "handleCart_REQUEST",
    });

    dispatch({
      type: "handleCart_SUCCESS",
      payload: data,
    });
    return true
  } catch (err) {
    dispatch({
      type: "handleCart_FAILURE",
      payload: err.message,
    });
    return err?.response?.data ? err?.response?.data : err.message;
  }
};

