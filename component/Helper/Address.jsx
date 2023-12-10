import React, { useState } from 'react'
import UserAddressForm from './UserAddressForm';
import { fakeAddresses } from '@/data';
import { BsTrash } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
// const ExistingAddress = ({ address }) => {
//     return (

//     )
// }

const Address = ({ payload, setPayload }) => {
    console.log(payload)
    const [isNew, setIsNew] = useState(false);
    const handleIsNew = (param) => {
        setIsNew(param);
        document.body.style.overflow = param ? 'hidden' : 'auto';
    }
    return (
        <div>

            {
                fakeAddresses.map((address) => (
                    <div key={address._id} className='w-full flex items-center justify-between border shadow mt-4 px-2 py-4'>
                        <div className='flex items-start'>
                            <div onClick={() => setPayload(state => ({ ...state, address: address._id }))} className=" cursor-pointer flex h-4 w-4 text-xs font-semibold items-center justify-center  border-2 mt-1">
                                {
                                    address._id === payload.address ? <FaCheck /> : ''
                                }
                            </div>
                            <div className="ml-2">
                                <div className="flex items-center">
                                    <span className=' capitalize'>{address.name}</span>
                                    <div className="ml-3 text-sm bg-black px-2 rounded text-white lowercase">
                                        {address.type}
                                    </div>
                                </div>
                                <p>
                                    {address.street}, {address.postalCode}, {address.state}, {address.country}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <BsPencilSquare className='cursor-pointer' />
                            <BsTrash className='ml-3 cursor-pointer' />
                        </div>
                    </div>
                ))
            }

            <button onClick={() => handleIsNew(true)} className="w-full mt-5 p-2 border rounded shadow transition-all">
                Add New Address
            </button>
            {
                isNew ? <>
                    <UserAddressForm handleClose={handleIsNew} />
                </> : ''
            }
        </div >
    )
}

export default Address