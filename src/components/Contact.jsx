import React from 'react'
import Layout from './Layout'

const Contact = () => {
    return (
        <Layout>
            <header className='md:w-6/12 mx-auto md:my-12 md:shadow-lg bg-white border border-indigo-700'>
                <img src="/images/contact.avif" className='w-full' alt="" />
                <div className='p-6'>
                    <form className='mt-1 space-y-2'>

                        <div className='flex flex-col'>
                            <label className='text-lg font-semibold mb-1'>fullname</label>
                            <input required type="text" placeholder='Enter fullname' className='p-2 border border-gray-300 ' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg font-semibold mb-1'>Email Id</label>
                            <input required type="email" placeholder='example@gmail.com' className='p-2 border border-gray-300 ' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg font-semibold mb-1'>Message</label>
                            <textarea required placeholder='Enter Message' rows={4} className='p-2 border border-gray-300 ' />
                        </div>

                        <button className='bg-indigo-500 text-white py-2 px-5 rounded text-lg hover:bg-rose-600'>Get Quote</button>
                    </form>
                </div>
            </header>
        </Layout>

    )
}

export default Contact