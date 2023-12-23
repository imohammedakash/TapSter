import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from "next/navigation";
import CartSummary from '../Helper/CartSummary';
import CartProduct from '../Helper/CartProduct';
const ProductArea = () => {
    const router = useRouter()
    let cart = useSelector(state => state?.cart?.cart);
    let user = useSelector(state => state?.user?.user);
    let userCart = cart && typeof cart === 'string' ? JSON.parse(cart) : [];
    const handlePlaceOrder = () => {
        router.push(user.token ? '/checkout' : `/login?next=${btoa('/checkout')}`)
    }
    if (!userCart?.length)
        return (
            <div className='h-[90vh] bg-slate-100 w-full flex items-center justify-center flex-col'>
                <h5>Your Cart is Empty</h5>
                <button onClick={() => router.push('/product')} className=" px-10 mt-1 bg-black text-white py-2 border rounded shadow transition-all">
                    Browse Products
                </button>
            </div>
        )
    else
        return (
            <div className='h-[90vh] bg-slate-100 w-full flex items-start justify-start sm:flex-row flex-col gap-2 p-2' >
                <div className="md:w-[73%] w-full">
                    <CartProduct userCart={userCart} />
                </div>
                <div className="sm:w-[27%] w-full md:block sm:hidden block bg-white px-2 py-4">
                    <CartSummary userCart={userCart} handlePlaceOrder={handlePlaceOrder} />
                </div>
            </div>
        )
}

export default ProductArea