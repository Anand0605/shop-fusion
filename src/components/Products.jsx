// import { useState } from 'react';
// import React from 'react'
// import Layout from './Layout'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const Products = () => {

//     const [products, setProducts] = useState([
//         {
//             title: 'New blue shirts Mens',
//             price: 1200,
//             discount: 15,
//             thumbnail: '/products/a.jpg'
//         },
//         {
//             title: 'New blue shirts Mens',
//             price: 1200,
//             discount: 15,
//             thumbnail: '/products/b.jpg'
//         },
//         {
//             title: 'New blue shirts Mens',
//             price: 1200,
//             discount: 15,
//             thumbnail: '/products/c.jpg'
//         },
//         {
//             title: 'New blue shirts Mens',
//             price: 1200,
//             discount: 15,
//             thumbnail: '/products/d.jpg'
//         },
//         {
//             title: 'New blue shirts Mens',
//             price: 1200,
//             discount: 15,
//             thumbnail: '/products/e.jpg'
//         },
//         {
//             title: 'New blue shirts Mens',
//             price: 1200,
//             discount: 15,
//             thumbnail: '/products/f.jpg'
//         },
//         {
//             title: 'New blue shirts Mens',
//             price: 1200,
//             discount: 15,
//             thumbnail: '/products/g.jpg'
//         },
//         {
//             title: 'New blue shirts Mens',
//             price: 1200,
//             discount: 15,
//             thumbnail: '/products/h.jpg'
//         },
//         {
//             title: 'New blue shirts Mens',
//             price: 1200,
//             discount: 15,
//             thumbnail: '/products/i.jpg'
//         },
//         {
//             title: 'New blue shirts Mens',
//             price: 1200,
//             discount: 15,
//             thumbnail: '/products/k.jpg'
//         },
//         {
//             title: 'New blue shirts Mens',
//             price: 1200,
//             discount: 15,
//             thumbnail: '/products/l.jpg'
//         },
//         {
//             title: 'New blue shirts Mens',
//             price: 1200,
//             discount: 15,
//             thumbnail: '/products/m.jpg'
//         }
//     ])


//     return (
//         <Layout>
           
//             <div className='md:p-16 p-8'>
//                 <h1 className='text-3xl font-bold text-center'>All Products</h1>
//                 <p className='text-gray-500 mx-auto md:w-7/12 mt-2 text-center mb-16'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ullam esse aperiam. Quos unde soluta veritatis doloribus dicta itaque cupiditate?</p>
//                 <div className=' mx-auto md:w-10/12 grid md:grid-cols-4 gap-10'>
//                     {
// products.map((item,index)=>(
//     <div key={index} className='bg-white shadow-lg border'>
//         <img src={item.thumbnail} alt="" className='object-fill' />
//         <div className='p-4'>
//             <h1 className='text-lg font-semibold'>{item.title}</h1>
//             <div className='space-x-2'>
//                  <label className='font-bold text-lg'>₹{item.price-(item.price*item.discount)/100}</label>
//                 <del>₹{item.price}</del>
//                 <lable className='text-gray-400' >({item.discount})%</lable>
//             </div>
//             <button className='bg-green-700 text-lg font-semibold mt-4 rounded text-white py-2 px-6 w-full'>Buy Now</button>
//             <button className='bg-rose-700 text-lg font-semibold mt-2 rounded text-white py-2 px-6 w-full'>
                
//             <i className="ri-shopping-cart-line mr-2"></i>Add to cart</button>
//         </div>
        
//     </div>
// ))
//                     }
//                 </div>

//             </div>
//         </Layout>
//     )
// }

// export default Products