import React, { useEffect, useMemo, useState } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Address from '../Helper/Address'
import OrderReview from '../Helper/OrderReview'
import Billing from '../Helper/Billing'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import CartSummary from '../Helper/CartSummary'
import { toast } from 'react-toastify'

const Checkout = () => {
    const [active, setActive] = useState('address');
    const [payload, setPayload] = useState({ address: null })
    const [obj, setObj] = useState({
        address: false,
        review: false,
        billing: false
    });
    const router = useRouter();
    let cart = useSelector(state => state?.cart?.cart);
    let user = useSelector(state => state?.user?.user);
    let userCart = cart && typeof cart === 'string' ? JSON.parse(cart) : []
    if (!user) {
        router.push(`/login?next=${btoa('/checkout')}`);
    }
    if (!userCart.length) {
        router.push("/cart");
    }

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            const message = 'Are you sure you want to leave? Your changes may not be saved.';
            event.returnValue = message; // Standard for most browsers
            return message; // For some older browsers
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const handleNavigate = (key) => {
        if (obj[key]) {
            setActive(key)
        }
    }
    const handlePlaceOrder = () => {
        if (active === 'address') {
            if (payload.address !== null) {
                setObj(state => ({ ...state, address: true, review: true }));
                setActive('review')
            } else {
                toast.info('Please Select Shipping Address')
            }

        }
        if (active === 'review') {
            if (payload.address !== null) {
                setObj(state => ({ ...state, billing: true }));
                setActive('billing');
            }
        }
    }
    const ComponentSwitcher = () => {
        switch (active) {
            case 'address':
                return <Address payload={payload} setPayload={setPayload} />;
            case 'review':
                return <OrderReview payload={payload} setPayload={setPayload} />;
            case 'billing':
                return <Billing payload={payload} setPayload={setPayload} />;
            default:
                return null;
        }
    };
    return (
        <Wrapper>
            <div className={` w-full min-h-screen flex sm:flex-row flex-col items-start`}>
                <div className='sm:w-[70%] w-full flex flex-col items-center justify-center mt-3'>
                    <div className='w-full flex items-center justify-center'>
                        {
                            Object.keys(obj).map((key, index) => (
                                <div onClick={() => handleNavigate(key)} className={`flex items-center justify-center flex-1 capitalize ${active === key || obj[key] ? 'cursor-pointer' : 'cursor-default'} relative ${Object.keys(obj).length !== index + 1 ? "after:content-[''] after:absolute md:after:w-[60%] after:w-[40%] after:h-[0.7px] after:bg-black after:translate-x-1/2 after:right-0" : ''} `} >
                                    <h2 className={`${active === key ? "text-blue-600" : ""}`}>
                                        {key}
                                    </h2>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full mt-6'>
                        {
                            ComponentSwitcher()
                        }
                    </div>
                </div>
                <div className='sm:w-[30%] w-full sm:ml-6 p-2'>
                    <CartSummary userCart={userCart} handlePlaceOrder={handlePlaceOrder} />
                </div>
            </div>

        </Wrapper>
    )
}

export default Checkout