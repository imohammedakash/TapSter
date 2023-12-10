import React from 'react'

const CartSummary = ({ userCart, handlePlaceOrder }) => {
    return (
        <>
            <div className="">
                <h1 className='border-b py-2'>Cart Details</h1>
            </div>
            <div className="mt-1 flex items-center justify-between">
                <h4 className="mt-3">
                    Product({userCart?.length})
                </h4>
                <h4 className='mt-3'>
                    ₹ {
                        userCart.reduce((accumulator, currentObject) => {
                            return accumulator + currentObject.sellingPrice * (currentObject.qty || 1)
                        }, 0)
                    }
                </h4>
            </div>
            <div className="mt-1 flex items-center justify-between">
                <h4 className="">
                    Discount
                </h4>
                <h4 className="flex items-center justify-center font-light relative after:absolute after:content-[''] after:w-full after:h-[0.8px] after:bg-[#3c3c3c95]">
                    {
                        userCart.reduce((accumulator, currentObject) => {
                            return accumulator + currentObject.price * (currentObject.qty || 1)
                        }, 0)
                    }
                </h4>
            </div>
            <div className="mt-1 flex items-center justify-between">
                <h4 className="">
                    Tax
                </h4>
                <h4 className="flex items-center justify-center font-light">
                    ₹ 28
                </h4>
            </div>
            <div className="mt-1 flex items-center justify-between">
                <h4 className="">
                    Delivery
                </h4>
                <h4 className="flex items-center justify-center font-light">
                    ₹ 80
                </h4>
            </div>
            <div className="mt-5 flex items-center justify-between border-t py-2">
                <h4 className="">
                    Amount
                </h4>
                <h4 className="flex items-center justify-center">
                    ₹ {
                        parseInt(userCart.reduce((accumulator, currentObject) => {
                            return accumulator + (currentObject.price + 28) * (currentObject.qty || 1)
                        }, 0)) + 80
                    }
                </h4>
            </div>
            <div className="w-full mt-3">
                <button onClick={handlePlaceOrder} className="w-full p-2 bg-[#000000db] text-white rounded hover:shadow-xl transition-all">
                    {window.location.pathname === '/cart' ? 'Place Order' : 'Confirm'}
                </button>
            </div>
        </>
    )
}

export default CartSummary