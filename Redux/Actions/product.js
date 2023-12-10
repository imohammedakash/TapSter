import axios from "axios";
export const getProductList = async () => {
    try {
        const { data } = await axios.get(
            'https://tapster-dev.onrender.com/api/users/product?page=1&pageSize=10'
        );
        return data;
    } catch (err) {
        return err?.response?.data ? err?.response?.data : err.message;
    }
};
export const getProductDetails = async (id) => {
    try {
        const { data } = await axios.get(
            `https://tapster-dev.onrender.com/api/users/product-detail?productId=${id}`
        );
        return data;
    } catch (err) {
        return err?.response?.data ? err?.response?.data : err.message;
    }
};

