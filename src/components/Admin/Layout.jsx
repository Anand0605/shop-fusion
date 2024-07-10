import { useState } from "react"
const Layout = ({children}) => {
    const [size, setSize] = useState(280)
    const [accountMenu, setAccountMenu] = useState(false)

    return (
        <div>
            <aside className="w-[280px] bg-indigo-600 fixed top-0 left-0 h-full"
                style={{ width: size, transition: "0.3s" }}
            >

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
    )
}
export default Layout