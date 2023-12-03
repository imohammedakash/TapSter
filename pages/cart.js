import React from 'react'
const Cart = dynamic(() => import('@/component/Cart'));
const cart = () => {
    return (
        <Cart />
    )
}

export default cart