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
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';

const db = getFirestore(firebaseAppConfig)
const auth = getAuth(firebaseAppConfig)

const Home = () => {

    const [products, setProducts] = useState([])
    const [session, setSession] = useState(null)

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
    // console.log(session)

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

    const addToCart = async (item) => {
        try {
            item.userId = session.uid
            await addDoc(collection(db, "carts"), item)
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

    return (
        <Layout>
            <header>
                <Swiper
                    className='z-[-1]'
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    pagination={true}
                >
                    <SwiperSlide><img src="/images/p1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/p2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/p3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/p4.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/p5.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/p6.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/p7.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/p8.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/p9.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </header>
            <div className='md:p-16 p-8'>
                <h1 className='text-3xl font-bold text-center'>Latest Products</h1>
                <p className='text-gray-500 mx-auto md:w-7/12 mt-2 text-center mb-16'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ullam esse aperiam. Quos unde soluta veritatis doloribus dicta itaque cupiditate?</p>
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
                                    <button className='bg-green-700 text-lg font-semibold mt-4 rounded text-white py-2 px-6 w-full'>Buy Now</button>
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