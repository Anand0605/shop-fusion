import React from 'react'
import Layout from './Layout'

const Cart = () => {
    return (
        <Layout>

            <div className='my-16 bg-red-500 mx-auto w-7/12 shadow-lg p-8 rounded-md border'>
                <div className='flex items-center gap-2'>
                    <i className="ri-shopping-cart-line text-4xl"></i>
                    <h1 className='text-3xl font-semibold'>cart</h1>
                </div>
                <hr className='my-6' />
            </div>
        </Layout>
    )
}

export default Cart