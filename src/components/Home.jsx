import React from 'react'
import Layout from './Layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Home = () => {
  return (
    <Layout>
    <header>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true} 
      modules={[Navigation,Pagination]}
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
    </Layout>
  )
}

export default Home