import { useState, useEffect } from 'react';
import React from 'react'
import Layout from './Layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import firebaseAppConfig from '../util/firebase-config';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { getFirestore, addDoc, collection, getDocs, serverTimestamp, query, where, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import axios from 'axios';
import useRazorpay from "react-razorpay";
import { useNavigate } from 'react-router-dom';


const db = getFirestore(firebaseAppConfig)
const auth = getAuth(firebaseAppConfig)

const Home = ({ slider, title = 'Latest products' }) => {

    const navigate = useNavigate()
    const [Razorpay] = useRazorpay();
    const [products, setProducts] = useState([])
    const [session, setSession] = useState(null)
    const[address, setAddress] = useState(null)
    const [updateUi, setUpdateUi]  = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSession(user)
            }
            else {
                setSession(null)
            }
        })
    }, [])


    useEffect(() => {
        const req = async () => {
            const snapshot = await getDocs(collection(db, "products"))
            const tmp = []
            snapshot.forEach((doc) => {
                const allProducts = doc.data()
                allProducts.id = doc.id
                tmp.push(allProducts)
            })
            setProducts(tmp)
        }
        req()
    }, [])
    // console.log(session)
    useEffect(() => {
        const req = async () => {
            if (session) {
                const col = collection(db, "addresses")
                const q = query(col, where('userId', '==', session.uid))
                const snapshot = await getDocs(q)
                snapshot.forEach((doc)=>{
                    const document = doc.data()
                    setAddress(document)
                })
            }
        }
        req()
    }, [session])
    // console.log(address)

    const addToCart = async (item) => {
        try {
            item.userId = session.uid
            await addDoc(collection(db, "carts"), item)
            setUpdateUi(!updateUi)
            new Swal({
                icon: "success",
                title: "Success Add",
                text: "successfull Add item"
            })
        }
        catch (err) {
            new Swal({
                icon: "error",
                title: "failed",
                text: err.message
            })

        }
    }

    const buyNow = async (product) => {
        // alert(price)
        try {
            product.userId = session.uid
            product.status = "pending"
            const amount = product.price - (product.price * product.discount) / 100
            const { data } = await axios.post('http://localhost:8080/order', { amount: amount })
            // console.log(data)
            const options = {
                key: 'rzp_test_elnSpY3EmagiLn',
                amount: data.amount,
                order_id: data.orderId,
                name: 'Shop-fusion',
                description: product.title,
                image: 'https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg',
                handler: async function (response) {
                    product.email = session.email
                    product.customerName = session.displayName
                    product.createdAt = serverTimestamp()
                    product.address = address
                    await addDoc(collection(db, "orders"), product)
                    // console.log(response)
                    navigate('/profile')
                },
                notes: {
                    name: session.displayName

                }
            }

            const rzp = new Razorpay(options)

            rzp.open()

            rzp.on("payment.failed", function (response) {
                navigate('/failed')
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <Layout update={updateUi}>
            {
                slider &&
                <header>
                    <Swiper
                        // className='z-[-1]'
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation, Pagination]}
                        pagination={true}
                    >
                        <SwiperSlide><img className='w-full ' src="/images/b11.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='' src="/images/b99.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="/images/44.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="/images/55.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-full h-auto' src="/images/b88.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-full h-auto' src="/images/b222.jpg" alt="" /></SwiperSlide>
                    </Swiper>
                </header>
            }

            <div className='md:p-16 p-8'>
                <h1 className='text-3xl font-bold text-center'>{title}</h1>
                <p className='text-gray-500 mx-auto md:w-7/12 mt-2 text-center mb-16'>"High-quality, durable, and stylish product perfect for daily use. Enhances your lifestyle with its innovative design and functionality."</p>
                <div className=' mx-auto w-12/12 grid md:grid-cols-4 gap-8'>
                    {
                        products.map((item, index) => (
                            <div key={index} className='bg-white shadow-lg border'>
                                <img src={item.image ? item.image : '/images/tt.jpg'} />
                                <div className='p-4'>
                                    <h1 className='text-lg font-semibold capitalize'>{item.title}</h1>
                                    <div className='space-x-2'>
                                        <label className='font-bold text-lg'>₹{item.price - (item.price * item.discount) / 100}</label>
                                        <del>₹{item.price}</del>
                                        <lable className='text-gray-400' >({item.discount})%</lable>
                                    </div>
                                    <button className='bg-green-700 text-lg font-semibold mt-4 rounded text-white py-2 px-6 w-full' onClick={() => buyNow(item)}>Buy Now</button>
                                    <button onClick={() => addToCart(item)} className='bg-rose-700 text-lg font-semibold mt-2 rounded text-white py-2 px-6 w-full'>
                                        <i className="ri-shopping-cart-line mr-2"></i>Add to cart</button>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>
        </Layout>
    )
}

export default Home