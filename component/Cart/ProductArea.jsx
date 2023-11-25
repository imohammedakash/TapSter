import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from "react-rating-stars-component"
import { RxCross2 } from "react-icons/rx";
import { handleCart } from '@/Redux/Actions/cart';
import { toast } from 'react-toastify';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"


const ProductArea = () => {
    const dispatch = useDispatch();
    let cart = useSelector(state => state.cart.cart);
    let [userCart, setUserCart] = useState(cart && typeof cart === 'string' ? JSON.parse(cart) : [])
    const handleRemove = (id) => {
        let newCartData = userCart.filter(i => i.id !== id)
        alterCart(newCartData)
    }
    let alterCart = (data) => {
        dispatch(handleCart(JSON.stringify(data))).then(res => {
            setUserCart(data)
        }).catch(err => {
            toast.error("Something Went Wrong")
        })
    }
    const handleQty = (param, item) => {
        let manupulationData = [...userCart]
        let index = manupulationData.findIndex(i => i.id === item.id);
        if (param === 'i') {
            manupulationData[index] = { ...manupulationData[index], qty: (manupulationData[index].qty || 1) + 1 }
        } else {
            if (!manupulationData[index].qty || manupulationData[index].qty === 1) {
                return
            }
            manupulationData[index] = { ...manupulationData[index], qty: (manupulationData[index].qty || 2) - 1 }
        }
        setUserCart(manupulationData)
        alterCart(manupulationData)

    }
    if (!userCart.length)
        return (
            <div className='h-[90vh] bg-slate-100 w-full flex items-center justify-center flex-col'>
                <h5>Your Cart is Empty</h5>
            </div>
        )
    else
        return (
            <div className='h-[90vh] bg-slate-100 w-full flex items-start justify-start sm:flex-row flex-col gap-2 p-2' >
                <div className="md:w-[73%] w-full">
                    {
                        userCart.map((item) => (
                            <div className='w-full bg-white border-b flex items-center justify-center'>
                                <div className='p-2 w-[65%] flex items-start justify-start gap-4  '>
                                    <div className="md:h-32 md:w-32 h-16 w-16">
                                        <img className='h-full w-full object-contain' src={item.thumbnail} alt="" />
                                    </div>
                                    <div className=" w-full flex flex-col">
                                        <h1 className="sm:text-xl text-sm font-medium mt-1 whitespace-nowrap">{item?.title}</h1>
                                        <h1 className=" w-full md:block hidden overflow-ellipsis text-normal font-light mt-1">{item?.description?.slice(0, 50)}...</h1>
                                        <div className="flex items-center justify-start mt-1 gap-3">
                                            <h2 className="font-medium sm:text-xl text-sm whitespace-nowrap">₹ {item.price - (parseInt(item.price) * (item.discountPercentage / 100)).toFixed(2)}</h2>
                                            <h4 className="text-sm flex items-center justify-center relative after:absolute after:content-['']  after:w-full after:h-[1px] after:bg-black whitespace-nowrap ">₹{item.price}</h4>
                                        </div>
                                        <ReactStars edit={false} color={"grey"} value={item.rating} activeColor={'tomato'} classNames='text-2' />
                                    </div>
                                </div>
                                <div className='w-[35%] h-full relative flex items-center justify-end pr-3'>
                                    <div className="absolute md:translate-y-[-3.4rem] -translate-y-[130%] right-2 cursor-pointer" onClick={() => handleRemove(item.id)}>
                                        <RxCross2 className='text-xl' />
                                    </div>
                                    <div className="flex items-center justify-center gap-4">
                                        <AiOutlineMinus className='md:text-xl cursor-pointer' onClick={() => handleQty('d', item)} />
                                        {
                                            item.qty ?? 1
                                        }
                                        <AiOutlinePlus className='md:text-xl cursor-pointer' onClick={() => handleQty('i', item)} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="sm:w-[27%] w-full md:block sm:hidden block bg-white px-2 py-4">
                    <div className="">
                        <h1 className='border-b py-2'>Product Details</h1>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                        <h4 className="mt-3">
                            Product({userCart.length})
                        </h4>
                        <h4 className='mt-3'>
                            ₹ {userCart.reduce((accumulator, currentObject) => {
                                return accumulator + currentObject.price * (currentObject.qty ?? 1)

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
                                    return parseInt(accumulator) + (parseInt(currentObject.price) * (currentObject.discountPercentage / 100)) * (currentObject.qty ?? 1);
                                }, 0).toFixed(2)
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
                                Math.ceil((userCart.reduce((accumulator, currentObject) => {
                                    return accumulator + currentObject.price * (currentObject.qty ?? 1)

                                }, 0)) - (userCart.reduce((accumulator, currentObject) => {
                                    return parseInt(accumulator) + (parseInt(currentObject.price) * (currentObject.discountPercentage / 100)).toFixed(2) * (currentObject.qty ?? 1);
                                }, 0)) + 80 + 28)

                            }
                        </h4>
                    </div>
                    <div className="w-full mt-3">
                        <button className="w-full p-2 bg-[#000000db] text-white rounded">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        )
}

export default ProductArea