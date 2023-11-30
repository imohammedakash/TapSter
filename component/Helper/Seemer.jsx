import React from 'react'

const Seemer = () => {
    return (
        <div className="w-[17rem] relative h-[22rem] border shadow-xl transition-all rounded flex flex-col items-center justify-start cursor-pointer overflow-hidden animate-pulse "
        >
            <div
                className="w-full h-[12rem] object-cover rounded-t bg-gray-300 "
            />
            <div className="w-full relative px-4 mt-3">
                <div className="w-full flex items-center justify-start">
                    <h5 className="text-[10px] py-2 px-[3rem] rounded bg-gray-300"></h5>
                </div>
                <h2 className="text-lg font-medium bg-gray-300 p-3 w-2/3 rounded mt-3"></h2>
                <p className="text-xs py-2 px-[3rem] mt-2 w-3/4  bg-gray-300"></p>
                <div className="mt-3 flex items-center justify-start gap-3">
                    <h2 className=" bg-gray-300 font-medium py-2 px-8"></h2>
                    <h4 className=" bg-gray-300 flex items-center justify-center relative py-2 px-12 "></h4>
                </div>
            </div>
        </div>
    )
}

export default Seemer