import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { RxCross2 } from "react-icons/rx";
import * as Yup from 'yup';
import AuthInput from './AuthInput';
// Define validation schema using Yup
const Addess = Yup.object().shape({
    street: Yup.string().required('Street address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    postalCode: Yup.string().required('Postal code is required'),
    country: Yup.string().required('Country is required'),
});

const UserAddressForm = ({ onSubmit, handleClose }) => {
    const initialValues = {
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
    };

    return (
        <div className='inset-0 -translate-y-16 p-2 absolute z-[100] flex items-center justify-center bg-[#0000006e]'>

            <Formik
                initialValues={initialValues}
                validationSchema={Addess}
                onSubmit={onSubmit}

            >
                <Form className='sm:w-[55%] w-full bg-white p-2 shadow border rounded'>
                    <div className="w-full flex items-center justify-end" >
                        <RxCross2 className='text-xl cursor-pointer' onClick={() => handleClose(false)} />
                    </div>
                    <div>
                        <AuthInput type="text" id="street" label='Street Address' name="street" />
                        <ErrorMessage name="street" component="h2" className="text-red-600 text-xs" />
                    </div>
                    <div>
                        <AuthInput type="text" id="city" label='City' name="city" />
                        <ErrorMessage name="city" component="div" className="error" />
                    </div>

                    <div>
                        <AuthInput type="text" id="state" label='State' name="state" />
                        <ErrorMessage name="state" component="div" className="error" />
                    </div>

                    <div>
                        <AuthInput type="text" id="postalCode" label='Postal Code' name="postalCode" required={true} />
                        <ErrorMessage name="postalCode" component="div" className="error" />
                    </div>

                    <div>
                        <AuthInput type="text" id="country" name="country" label='Country' placeholder='Enter ' required={true} />
                        <ErrorMessage name="country" component="div" className="error" />
                    </div>

                    <button className="px-16 mt-5 p-2 bg-[#000000db] text-white rounded hover:shadow-xl transition-all">
                        Confirm
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default UserAddressForm;
