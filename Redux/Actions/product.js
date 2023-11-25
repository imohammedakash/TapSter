import axios from "axios";
export const getProductList = async () => {
    try {
        const { data } = await axios.get(
            'https://dummyjson.com/products'
        );
        return data;
    } catch (err) {
        return err?.response?.data ? err?.response?.data : err.message;
    }
};
export const getProductDetails = async (id) => {
    try {
        const { data } = await axios.get(
            `https://dummyjson.com/products/${id}`
        );
        return data;
    } catch (err) {
        return err?.response?.data ? err?.response?.data : err.message;
    }
};

