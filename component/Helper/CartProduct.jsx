import React from 'react'
import { useDispatch } from 'react-redux';
import ReactStars from "react-rating-stars-component"
import { RxCross2 } from "react-icons/rx";
import { handleCart } from '@/Redux/Actions/cart';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
const CartProduct = ({ userCart }) => {
    const dispatch = useDispatch();
    const handleRemove = (id) => {
        let newCartData = userCart.filter(i => i._id !== id)
        alterCart(newCartData)
    }
    let alterCart = (data) => {
        dispatch(handleCart(JSON.stringify(data)))
    }
    const handleQty = (param, item) => {
        let manupulationData = [...userCart];
        let index = manupulationData?.findIndex(i => i._id === item._id);
        if (param === 'i') {
            manupulationData[index] = { ...manupulationData[index], qty: (manupulationData[index].qty || 1) + 1 }
        } else {
            if (!manupulationData[index]?.qty || manupulationData[index]?.qty === 1) {
                return
            }
            manupulationData[index] = { ...manupulationData[index], qty: (manupulationData[index]?.qty || 2) - 1 }
        }
        alterCart(manupulationData)

    }
    return (
        userCart?.map((item) => (
            <div key={item?._id} className='w-full bg-white border-b flex items-center justify-center'>
                <div className='p-2 w-[65%] flex items-start justify-start gap-4  '>
                    <div className="md:h-32 md:w-32 h-16 w-16">
                        <img className='h-full w-full object-contain' src={item.media[0].imageUrl} alt="" />
                    </div>
                    <div className=" w-full flex flex-col">
                        <h1 className="sm:text-xl text-sm font-medium mt-1 whitespace-nowrap">{item?.productName}</h1>
                        <h1 className=" w-full md:block hidden overflow-ellipsis text-normal font-light mt-1">{item?.description?.slice(0, 50)}...</h1>
                        <div className="flex items-center justify-start mt-1 gap-3">
                            <h2 className="font-medium sm:text-xl text-sm whitespace-nowrap">₹ {item.sellingPrice}</h2>
                            <h4 className="text-sm flex items-center justify-center relative after:absolute after:content-['']  after:w-full after:h-[1px] after:bg-black whitespace-nowrap ">₹{item.price}</h4>
                        </div>
                        <ReactStars edit={false} color={"grey"} value={item.rating} activeColor={'tomato'} classNames='text-2' />
                    </div>
                </div>
                <div className='w-[35%] h-full relative flex items-center justify-end pr-3'>
                    {
                        window.location.pathname === '/cart' ?
                            <div className="absolute md:translate-y-[-3.4rem] -translate-y-[130%] right-2 cursor-pointer" onClick={() => handleRemove(item._id)}>
                                <RxCross2 className='text-xl' />
                            </div> : ''
                    }
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
    )
}

export default CartProduct