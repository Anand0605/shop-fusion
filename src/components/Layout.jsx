import React from 'react'
// import { useState } from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {

    // const[menus, setMenus] = useState()

    const menus = [
        {
            lable: "Home",
            href: '/'
        },
        {
            lable: "Products",
            href: '/products'
        },
        {
            lable: "Category",
            href: '/category'
        },
        {
            lable: "Contact us",
            href: '/contact-us'
        }
    ]

    return (
        <div>
            <nav className=' stick shadow-lg bg-slate-50'>
                <div className=' w-10/12 mx-auto flex items-center justify-between'>
                    <img src="/images/logo2.jpg"
                        className='w-16'
                        alt="" />

                    <ul className='flex gap-8 items-center'>
                        {
                            menus.map((item, index) => (
                                <li key={index}>
                                    <Link className='block py-5 hover:bg-rose-600  hover:text-white text-center' to={item.href}>{item.lable}</Link>
                                </li>
                            ))
                        }
                        <Link className='block py-5 hover:bg-rose-600  hover:text-white text-center' to='/login'>Login</Link>
                        <Link className='block py-3 px-6 text-sm font-semibold bg-blue-600 text hover:bg-rose-600 text-white rounded-md hover:text-white text-center' to='/signup'>SignUp</Link>
                    </ul>
                </div>
            </nav>
            {children}
            <footer className='bg-orange-500 py-16 '>
                <div className='w-10/12 mx-auto grid grid-cols-4 gap-4 '>
                    <div>
                        <h1 className='text-2xl text-white font-semibold mb-3'>
                            Website Link
                        </h1>
                        <ul className='space-y-2 text-gray-100'>
                            {
                                menus.map((item, index)=>(
                                    <li key={index}>
                                        <Link to={item.href}>{item.lable}</Link>
                                    </li>
                                ))
                            }
                             <li>
                           <Link to='/login'>Login</Link>
                           <Link to='/signup'>SignUp</Link>
                           </li>
                          
                        </ul>

                    </div>
                    <div>
                        <h1 className='text-2xl text-white font-semibold mb-3'>
                           Follow Us
                        </h1>
                        <ul className='space-y-2 text-gray-100'>
                            
                             <li>
                           <Link to='/'>facebook</Link>
                           </li>
                           <li><Link to='/'>Linkdin</Link>
                           </li>
                           <li><Link to='/'>Twitter</Link>
                          </li>
                          <li> <Link to='/'>Instagram</Link>
                         </li>
                         <li> <Link to='/'>YouTube</Link></li>
                          
                        </ul>

                    </div>
                    <div className='pr-8'>
                        <h1 className='text-2xl text-white font-semibold mb-3'>
                            Brand Details
                        </h1>
                        <p className='text-gray-100 mb-6'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus rem dolor eius culpa ipsam saepe ratione vero possimus nulla delectus!
                        </p>
                        <img src="/images/logo2.jpg"
                            className='w-16'
                            alt="" />

                    </div>
                    <div>
                        <h1 className='text-2xl text-white font-semibold mb-3'>
                            Contact us
                        </h1>
                       <form className='space-y-4 '>
                        <input required name='fullname' type="text" className='bg-white w-full p-2' placeholder='Enter fullname' />
                        <input required name='email' type="email" className='bg-white w-full p-2' placeholder='Enter email' />
                        <textarea name='message' className='bg-white w-full p-2'rows={3} placeholder='Enter Message'/>
                        <button className='w-fit bg-black px-4 py-2 text-white rounded'>SUBMIT</button>
                       </form>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Layout