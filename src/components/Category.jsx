import { useState } from 'react'
import React from 'react'
import Layout from './Layout'


const Category = () => {
    const [category, setcategory] = useState([
        {
            title: 'Electronics'
        },
        {
            title: 'Fashion'
        },
        {
            title: 'SmartPhone'
        },
        {
            title: 'Furniture'
        },
        {
            title: 'men s'
        },
        {
            title: 'Women s'
        },
        {
            title: 'Electronics'
        },
        {
            title: 'Electronics'
        }
    ])
    return (
        <Layout>
            <div className='md:p-16 p-8'>
                <div className='md:w-10/12  mx-auto grid md:grid-cols-4 md:gap-16 gap-8'>
                    {
                        category.map((item, index) => (
                            <div key={index} className='bg-white hover:bg-orange-600 hover:text-white shadow-lg border rounded-lg flex flex-col p-8 justify-center items-center'>
                                <i className="ri-menu-search-line text-6xl"></i>
                                <h1 className='text-xl font-bold'>{item.title}</h1>
                            </div>
                        ))
                    }
                </div>

            </div>
        </Layout>
    )
}

export default Category