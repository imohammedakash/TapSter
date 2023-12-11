import React from 'react'
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';
import { fakeAddresses } from '@/data';

const OrderReview = ({ payload, setPayload, setActive }) => {
  let cart = useSelector(state => state?.cart?.cart);
  let userCart = cart && typeof cart === 'string' ? JSON.parse(cart) : [];

  return (
    <div>
      <CartProduct userCart={userCart} />
      {
        fakeAddresses.filter(i => i._id === payload.address).map((address) => (
          <div key={address._id} className='w-full flex items-center justify-between border shadow mt-4 px-2 py-4'>
            <div className='flex items-start'>
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
          </div>
        ))
      }
    </div>
  )
}

export default OrderReview