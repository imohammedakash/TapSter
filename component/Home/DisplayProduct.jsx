import { productCategory } from '@/data'
import React from 'react'


const Wrapper = ({ data }) => {
    return (
        <div className='h-[17rem] w-[17rem] bg-white shadow border rounded hover:shadow-xl hover:scale-105 transition-all cursor-pointer'>
            <img className="h-full w-full object-cover rounded-[inherit]" src={data.image} alt="" />
        </div>
    )
}

const DisplayProduct = () => {
    return (
        <div className='w-full flex items-center justify-center flex-col mb-10'>
            <h1 className="w-full text-center text-5xl font-medium">What we Provide?</h1>
            <div className="w-full flex items-center justify-evenly flex-wrap gap-4 mt-10">
                {
                    productCategory.map((item) => (
                        <Wrapper data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default DisplayProduct