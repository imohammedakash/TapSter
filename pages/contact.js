import dynamic from 'next/dynamic'
import React from 'react'
const Contact = dynamic(() => import('@/component/Contact'))

const index = () => {
    return (
        <Contact />
    )
}

export default index