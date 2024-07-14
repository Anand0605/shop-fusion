import React, { useState } from 'react'
// import Layout from './Layout'
import { Link } from 'react-router-dom'


const Login = () => {
    const [passwordType, setPasswordType] = useState("password")
    return (
        <div className='grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn'>
            <img src="/images/signup1.avif" alt="" className='w-full md:h-full h-25 object-cover ' />
            <div className='flex flex-col  md:p-16 p-8'>
                <h1 className='text-4xl font-bold'>Sign In</h1>
                <p className='text-lg text-gray-600'>Enter Profile Details to login</p>
                <form className='mt-5 space-y-4'>

                    <div className='flex flex-col'>
                        <label className='text-lg font-semibold mb-1'>Email Id</label>
                        <input required type="email" placeholder='example@gmail.com' className='p-2 border border-gray-300 ' />
                    </div>
                    <div className='flex flex-col relative'>
                        <label className='text-lg font-semibold mb-1'>Password</label>
                        <input required type={passwordType} placeholder='Enter password' className='p-2 border border-gray-300 ' />
                        <button
                            type='button'
                            onClick={() => setPasswordType(passwordType === "password" ? "text" : "password")}
                            className='
                                 absolute
                                 top-11
                                 right-4
                                 hover:bg-blue-200
                                  rounded-full
                                  px-1
                                 hover:text-blue-400'>
                            {
                                passwordType === "password" ? <i className="ri-eye-line"></i> : <i className="ri-eye-off-line"></i>
                            }


                        </button>
                    </div>
                    <button className='bg-indigo-500 text-white py-2 px-5 rounded text-lg hover:bg-rose-600'>Login</button>
                </form>
                <div className='mt-2'>
                    Dont have an account ? <Link to="/signup" className='text-blue-800 font-semibold'>Register Now</Link>
                    </div>
            </div>

        </div>

    )
}

export default Login