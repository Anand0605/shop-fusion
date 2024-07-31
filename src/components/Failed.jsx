import React from 'react'
import { Link } from 'react-router-dom'


const Failed = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-4/12 text-center space-y-6 mx-auto'>
        <img src="/images/failed.svg" className='w-full' alt="" />
        <h1 className='text-5xl font-bold'>Payments failed !</h1>
        <Link to={'/'} className='bg-indigo-600 text-white px-4 py-2 font-semibold rounded block w-fit mx-auto'>Go Home</Link>
      </div>
    </div>
  )
}

export default Failed
