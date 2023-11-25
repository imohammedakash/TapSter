import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import ProductArea from "./ProductArea";

const Cart = () => {
    return (
        <Wrapper>
            <div className="w-full flex items-center justify-center">
                <div className="w-full py-3 font-medium flex flex-col items-center justify-center xl:px-0  px-6">
                    <ProductArea />
                </div>
            </div>
        </Wrapper>
    );
};

export default Cart;
