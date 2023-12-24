import { Customers as CustomerData } from '@/data'
import React from 'react'

const Customers = () => {
    return (
        <div className='w-full flex items-center justify-center flex-col mb-10'>
            <h1 className="w-full text-center text-5xl font-medium">Our Customer</h1>
            <div className="w-full flex items-center justify-evenly flex-wrap gap-2 mt-10">
                {
                    CustomerData.map((item) => (
                        <div key={item._id} className=' w-[14rem] flex items-center justify-center bg-white hover:scale-105 transition-all'>
                            <img className="" loading="lazy" src={item.image} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Customers