import { useState } from "react"
import { Link, useLocation } from "react-router-dom"



const menus = [
    {
        lable: 'Dashboard',
        icon: <i className="ri-dashboard-line mr-2"></i>,
        link: '/admin/dashboard'
    },
    {
        lable: 'Customers',
        icon: <i className="ri-customer-service-2-line mr-2"></i>,
        link: '/admin/customers'
    },
    {
        lable: 'Products',
        icon: <i className="ri-shopping-cart-line mr-2"></i>,
        link: '/admin/products'
    },
    {
        lable: 'Orders',
        icon: <i className="ri-shopping-cart-line mr-2"></i>,
        link: '/admin/orders'
    },
    {
        lable: 'Payments',
        icon: <i className="ri-secure-payment-line mr-2"></i>,
        link: '/admin/payments'
    },
    {
        lable: 'Settings',
        icon: <i className="ri-settings-3-line mr-2"></i>,
        link: '/admin/settings'
    },
    
]
const Layout = ({ children }) => {
    const [size, setSize] = useState(280)
    const [mobileSize, setMobileSize] = useState(0)
    const [accountMenu, setAccountMenu] = useState(false)
    const location = useLocation()
    console.log(location)

    return (
        <>
            {/* Desktop */}
            <div className="md:block hidden">
                <aside className="w-[280px] bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden"
                    style={{ width: size, transition: "0.3s" }}
                >
                    <div className=" flex flex-col">
                        {
                            menus.map((item, index) => (
                                <Link
                                    style={{ background: (location.pathname === item.link ? "#e11d48" : "transparent") }}
                                    key={index}
                                    to={item.link}
                                    className=" px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white">
                                    {item.icon}
                                    {item.lable}
                                </Link>
                            ))
                        }
                        <button className=" px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white">
                            <i className="ri-logout-circle-line mr-2"></i>
                            Logout
                        </button>

                    </div>

                </aside>
                <section
                    className="bg-gray-400 h-screen"
                    style={{ marginLeft: size, transition: "0.3s" }}
                >
                    <nav className="bg-white p-3 shadow flex items-center justify-between sticky top-0 left-0">
                        <div className="flex gap-4 items-center">
                            <button onClick={() => setSize(size === 280 ? 0 : 280)} className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8">
                                <i className="ri-menu-2-line text-xl"></i>
                            </button>
                            <h1 className="font-semibold text-md">ShopFusion</h1>
                        </div>
                        <div>
                            <button className="relative">
                                <img src="/images/avatar2.webp" onClick={() => setAccountMenu(!accountMenu)} className="h-9 w-9 rounded-full" alt="" />
                                {
                                    accountMenu && <div className="absolute top-19 right-0 bg-white w-52 p-6 shadow-lg">
                                        <div>
                                            <h1 className="text-lg font-semibold">Er. Akash</h1>
                                            <p className="text-gray-500">example@gmail.com</p>
                                            <dir className="h-px bg-gray-200">
                                                <button className="mr-12"><i className="ri-logout-circle-r-line mr-2"></i>Logout</button>
                                            </dir>
                                        </div>
                                    </div>
                                }

                            </button>
                        </div>
                    </nav>
                    <div>{children}</div>

                </section>
            </div>

            {/* Mobile */}
            <div className="md:hidden block">
                <aside className="w-[280px] bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden z-50"
                    style={{ width: mobileSize, transition: "0.3s" }}
                >

                    <div className=" flex flex-col">
                        <button className="text-left mx-4 mt-4" onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)}>
                            <i className="ri-menu-2-fill text-white text-lg"></i>
                        </button>
                        {
                            menus.map((item, index) => (
                                <Link
                                    style={{ background: (location.pathname === item.link ? "#e11d48" : "transparent") }}
                                    key={index}
                                    to={item.link}
                                    className=" px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white">
                                    {item.icon}
                                    {item.lable}
                                </Link>
                            ))
                        }
                        <button className=" px-4 py-3 text-left text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white">
                        <i className="ri-logout-circle-line mr-2"></i>
                            Logout
                        </button>

                    </div>

                </aside>
                <section
                    className="bg-gray-400 h-screen"
                >
                    <nav className="bg-white p-3 shadow flex items-center justify-between sticky top-0 left-0">
                        <div className="flex gap-4 items-center">
                            <button onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)} className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8">
                                <i className="ri-menu-2-line text-xl"></i>
                            </button>
                            <h1 className="font-semibold text-md">ShopFusion</h1>
                        </div>
                        <div>
                            <button className="relative">
                                <img src="/images/avatar2.webp" onClick={() => setAccountMenu(!accountMenu)} className="h-9 w-9 rounded-full" alt="" />
                                {
                                    accountMenu && <div className="absolute top-19 right-0 bg-white w-52 p-6 shadow-lg">
                                        <div>
                                            <h1 className="text-lg font-semibold">Er. Akash</h1>
                                            <p className="text-gray-500">example@gmail.com</p>
                                            <dir className="h-px bg-gray-200">
                                                <button className="mr-12"><i className="ri-logout-circle-r-line mr-2"></i>Logout</button>
                                            </dir>
                                        </div>
                                    </div>
                                }

                            </button>
                        </div>
                    </nav>
                    <div>{children}</div>

                </section>
            </div>
        </>
    )
}
export default Layout