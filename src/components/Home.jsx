import { useState } from 'react';
import React from 'react'
import Layout from './Layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Home = () => {

    const [products, setProducts] = useState([
        {
            title: 'New blue shirts Mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/a.jpg'
        },
        {
            title: 'New blue shirts Mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/b.jpg'
        },
        {
            title: 'New blue shirts Mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/c.jpg'
        },
        {
            title: 'New blue shirts Mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/d.jpg'
        },
        {
            title: 'New blue shirts Mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/e.jpg'
        },
        {
            title: 'New blue shirts Mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/f.jpg'
        },
        {
            title: 'New blue shirts Mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/g.jpg'
        },
        {
            title: 'New blue shirts Mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/h.jpg'
        },
        {
            title: 'New blue shirts Mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/i.jpg'
        },
        {
            title: 'New blue shirts Mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/k.jpg'
        },
        {
            title: 'New blue shirts Mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/l.jpg'
        },
        {
            title: 'New blue shirts Mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/m.jpg'
        }
    ])


    return (
        <Layout>
            <header>
                <Swiper
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
products.map((item,index)=>(
    <div key={index} className='bg-white shadow-lg border'>
        <img src={item.thumbnail} alt="" />
        <div className='p-4'>
            <h1 className='text-lg font-semibold'>{item.title}</h1>
            <div className='space-x-2'>
                 <label className='font-bold text-lg'>₹{item.price-(item.price*item.discount)/100}</label>
                <del>₹{item.price}</del>
                <lable className='text-gray-400' >({item.discount})%</lable>
            </div>
            <button className='bg-green-700 text-lg font-semibold mt-4 rounded text-white py-2 px-6 w-full'>Buy Now</button>
            <button className='bg-rose-700 text-lg font-semibold mt-2 rounded text-white py-2 px-6 w-full'>
                
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