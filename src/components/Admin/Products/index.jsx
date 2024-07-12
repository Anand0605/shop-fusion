import React from 'react'
import Layout from '../Layout'
import { useState } from 'react'

const Product = () => {
    const [products, setProducts] = useState([
        {
            title: 'mens shirt slim blue',
            price: 4500,
            discount: 20,
            description: 'this is best shirt available in inline market',
            image: '/products/a.jpg'
        },
        {
            title: 'mens shirt slim blue',
            price: 4500,
            discount: 20,
            description: 'this is best shirt available in inline market',
            image: '/products/b.jpg'
        },
        {
            title: 'mens shirt slim blue',
            price: 4500,
            discount: 20,
            description: 'this is best shirt available in inline market',
            image: '/products/c.jpg'
        },
        {
            title: 'mens shirt slim blue',
            price: 4500,
            discount: 20,
            description: 'this is best shirt available in inline market',
            image: '/products/d.jpg'
        },
        {
            title: 'mens shirt slim blue',
            price: 4500,
            discount: 20,
            description: 'this is best shirt available in inline market',
            image: '/products/e.jpg'
        },
        {
            title: 'mens shirt slim blue',
            price: 4500,
            discount: 20,
            description: 'this is best shirt available in inline market',
            image: '/products/f.jpg'
        },
        {
            title: 'mens shirt slim blue',
            price: 4500,
            discount: 20,
            description: 'this is best shirt available in inline market',
            image: '/products/g.jpg'
        },
        {
            title: 'mens shirt slim blue',
            price: 4500,
            discount: 20,
            description: 'this is best shirt available in inline market',
            image: '/products/h.jpg'
        },
        {
            title: 'mens shirt slim blue',
            price: 4500,
            discount: 20,
            description: 'this is best shirt available in inline market',
            image: '/products/i.jpg'
        },
        {
            title: 'mens shirt slim blue',
            price: 4500,
            discount: 20,
            description: 'this is best shirt available in inline market',
            image: '/products/j.jpg'
        },
        {
            title: 'mens shirt slim blue',
            price: 4500,
            discount: 20,
            description: 'this is best shirt available in inline market',
            image: '/products/k.jpg'
        },
        {
            title: 'mens shirt slim blue',
            price: 4500,
            discount: 20,
            description: 'this is best shirt available in inline market',
            image: '/products/l.jpg'
        }
    ])
    return (
        <Layout>
            <div className='p-5 bg-teal-300'>
                <h1 className='text-xl font-semibold mb-5'>Products</h1>
                <div className='grid md:grid-cols-4 gap-8'>
                    {
                        products.map((item, index) => (
                            <div key={index} className='bg-white shadow-md rounded-md'>
                                <img className='rounded-t-md h-[250px] w-full object-cover' src={item.image} alt="" />
                                <div className='p-4'>
                                    <h1 className='capitalize font-semibold'>{item.title}</h1>
                                    <p className='text-gray-600'>{item.description.slice(0, 50)}</p>
                                    <div className='flex gap-2 mt-1'>
                                        <del className='font-semibold'>₹{item.price}</del>
                                        <p>₹{item.price - (item.price * item.discount)/100}</p>
                                        {/* <p>{item.price}</p> */}
                                        <label className='text-gray-500'>{item.discount}(% off)</label>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Product