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
        }
    ])
    return (
        <Layout>
            <div className='md:p-16 p-8'>
                <div className='w-10/12  mx-auto'>
                    {
                        category.map((item, index) => (
                            <div key={index}>
                                {item.title}
                            </div>
                        ))
                    }
                </div>

            </div>
        </Layout>
    )
}

export default Category