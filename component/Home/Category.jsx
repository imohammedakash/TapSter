import { getProductCategories } from '@/Redux/Actions/product'
import React, { useEffect, useState } from 'react'

const Category = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        getProductCategories().then(res => setCategory(res.data))
    }, [])
    return (
        <div className='w-full flex items-center justify-center flex-col mb-10'>
            <h1 className="w-full text-center text-5xl font-medium">What we Provide?</h1>
            <div className="w-full flex items-center justify-evenly flex-wrap gap-4 mt-10">
                {
                    category.map((item) => (
                        <div key={item._id} className={`h-[17rem] w-[17rem] bg-white p-1 relative flex items-center justify-center shadow border rounded hover:shadow-xl hover:scale-105 transition-all cursor-pointer after:absolute after:content-[''] after:rounded-[inherit]  after:w-full after:h-full after:z-[2] after:bg-gradient-to-br after:from-transparent after:to-black`}>
                            <img className="h-full w-full object-cover rounded-[inherit]" loading="lazy" src={item.media.imageUrl} alt={item?.categoryName ?? `category-name`} />
                            <span className='absolute z-[4] text-white capitalize text-2xl '>{item.categoryName}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category