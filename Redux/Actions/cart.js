import axios from "axios";

export const handleCart = (data, token = null) => async (dispatch) => {
  try {
    dispatch({
      type: "handleCart_REQUEST",
    });

    if (token?.length > 0) {
      let payload = data.map(item => ({
        productId: item._id,
        quantity: item?.quantity || 1
      }))
      await axios.patch("https://tapster-dev.onrender.com/api/users/cart", { products: payload }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
    }

    dispatch({
      type: "handleCart_SUCCESS",
      payload: JSON.stringify(data),
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


export const getCartProduct = (token) => async (dispatch) => {
  try {
    dispatch({
      type: "handleCart_REQUEST",
    });
    const { data } = await axios.get("https://tapster-dev.onrender.com/api/users/cart", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    });
    let mappedData = data.data[0].products.map(prod => ({ ...prod.productId, quantity: prod.quantity }))
    dispatch({
      type: "handleCart_SUCCESS",
      payload: JSON.stringify(mappedData),
    });
    return data;
  } catch (err) {
    dispatch({
      type: "handleCart_FAILURE",
      payload: err.message,
    });
    return err?.response?.data ? err?.response?.data : err.message;
  }
}



