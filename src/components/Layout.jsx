import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebaseAppConfig from '../util/firebase-config';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const auth = getAuth()

const Layout = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [session, setSession] = useState(null)
    const [accountMenu, setAccountmenu] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSession(user)
            }
            else {
                setSession(false)
            }
        })
    }, [])

    const menus = [
        { label: "Home", href: '/' },
        { label: "Products", href: '/products' },
        { label: "Category", href: '/category' },
        { label: "Contact us", href: '/contact-us' }
    ];

    const mobileLink = (href) => {
        navigate(href);
        setOpen(false); // Optionally close the menu after navigation
    };
    if (session === null) {
        return (
            <div className='bg-gray-100 h-full fixed top-0 left-0 w-full flex justify-center items-center'>
                <span className="relative flex 8-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
                </span>
            </div>
        )
    }


    return (
        <div>
            <nav className='sticky top-0 shadow-lg bg-slate-50 z-50'>
                <div className='w-10/12 mx-auto flex items-center justify-between'>
                    <img src="/images/logo2.jpg" className='w-16' alt="" />
                    <button className='md:hidden' onClick={() => setOpen(!open)}>
                        <i className="ri-menu-3-fill text-3xl"></i>
                    </button>

                    <ul className='md:flex gap-8 items-center hidden'>
                        {menus.map((item, index) => (
                            <li key={index}>
                                <Link className='block py-5 hover:bg-rose-600 hover:text-white text-center' to={item.href}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        {
                            !session &&
                            <>
                                <Link className='block py-5 hover:bg-rose-600 hover:text-white text-center' to='/login'>Login</Link>
                                <Link className='block py-3 px-6 text-sm font-semibold bg-blue-600 hover:bg-rose-600 text-white rounded-md hover:text-white text-center' to='/signup'>SignUp</Link>
                            </>
                        }
                        {
                            session &&
                            <buton onClick={() => setAccountmenu(!accountMenu)} className="relative">
                                <img src="./images/avatar2.webp" className='w-10 h-10 rounded-full' alt="" />
                                {
                                    accountMenu &&
                                    <div className='flex flex-col items-start w-[150px] py-3 bg-white absolute top-12 right-0 shadow-lg shadow-gray-200'>
                                        <Link to='/profile' className='hover:bg-gray-100 w-full p-2'> <i className="ri-user-line mr-1 "></i>my Profile</Link>
                                        <Link to='/cart' className='hover:bg-gray-100 w-full p-2'> <i className=" mr-1 ri-shopping-cart-line"></i>cart</Link>
                                        <button onClick={() => signOut(auth)} className='hover:bg-gray-100 w-full p-2 text-left'><i className="ri-logout-circle-line mr-1"></i>Logout</button>
                                    </div>
                                }

                            </buton>
                        }

                    </ul>
                </div>
            </nav>
            {children}
            <footer className='bg-orange-500 py-16'>
                <div className='w-10/12 mx-auto grid md:grid-cols-4 md:gap-0 gap-16'>
                    <div>
                        <h1 className='text-2xl text-white font-semibold mb-3'>Website Link</h1>
                        <ul className='space-y-2 text-gray-100'>
                            {menus.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.href}>{item.label}</Link>
                                </li>
                            ))}
                            <li>
                                <Link to='/login'>Login</Link>
                                <Link to='/signup'>SignUp</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-2xl text-white font-semibold mb-3'>Follow Us</h1>
                        <ul className='space-y-2 text-gray-100'>
                            <li><Link to='/'>Facebook</Link></li>
                            <li><Link to='/'>LinkedIn</Link></li>
                            <li><Link to='/'>Twitter</Link></li>
                            <li><Link to='/'>Instagram</Link></li>
                            <li><Link to='/'>YouTube</Link></li>
                        </ul>
                    </div>
                    <div className='pr-8'>
                        <h1 className='text-2xl text-white font-semibold mb-3'>Brand Details</h1>
                        <p className='text-gray-100 mb-6'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus rem dolor eius culpa ipsam saepe ratione vero possimus nulla delectus!
                        </p>
                        <img src="/images/logo2.jpg" className='w-16' alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl text-white font-semibold mb-3'>Contact us</h1>
                        <form className='space-y-4'>
                            <input required name='fullname' type="text" className='bg-white w-full p-2' placeholder='Enter fullname' />
                            <input required name='email' type="email" className='bg-white w-full p-2' placeholder='Enter email' />
                            <textarea name='message' className='bg-white w-full p-2' rows={3} placeholder='Enter Message' />
                            <button className='w-fit bg-black px-4 py-2 text-white rounded'>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </footer>
            {open && (
                <aside className='overflow-hidden bg-gray-900 md:hidden shadow-lg fixed top-0 left-0 h-full z-50' style={{ width: 250, transition: '0.3s' }}>
                    <div className='flex flex-col gap-8 p-6'>
                        {menus.map((item, index) => (
                            <button onClick={() => mobileLink(item.href)} key={index} className='text-white'>
                                {item.label}
                            </button>
                        ))}
                    </div>
                </aside>
            )}
        </div>
    );
};

export default Layout;
