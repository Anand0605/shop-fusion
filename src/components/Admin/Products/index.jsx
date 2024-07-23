import React from 'react'
import Layout from '../Layout'
import { useState } from 'react'
import firebaseAppConfig from '../../../util/firebase-config'
import { getFirestore,addDoc,collection } from 'firebase/firestore'
import Swal from 'sweetalert2'


const db = getFirestore(firebaseAppConfig)

const Product = () => {
    const [products, setProducts] = useState([
        // {
        //     title: 'mens shirt slim blue',
        //     price: 4500,
        //     discount: 20,
        //     description: 'this is best shirt available in inline market',
        //     image: '/products/a.jpg'
        // },
        // {
        //     title: 'mens shirt slim blue',
        //     price: 4500,
        //     discount: 20,
        //     description: 'this is best shirt available in inline market',
        //     image: '/products/b.jpg'
        // },
        // {
        //     title: 'mens shirt slim blue',
        //     price: 4500,
        //     discount: 20,
        //     description: 'this is best shirt available in inline market',
        //     image: '/products/c.jpg'
        // },
        // {
        //     title: 'mens shirt slim blue',
        //     price: 4500,
        //     discount: 20,
        //     description: 'this is best shirt available in inline market',
        //     image: '/products/d.jpg'
        // },
        // {
        //     title: 'mens shirt slim blue',
        //     price: 4500,
        //     discount: 20,
        //     description: 'this is best shirt available in inline market',
        //     image: '/products/e.jpg'
        // },
        // {
        //     title: 'mens shirt slim blue',
        //     price: 4500,
        //     discount: 20,
        //     description: 'this is best shirt available in inline market',
        //     image: '/products/f.jpg'
        // },
        // {
        //     title: 'mens shirt slim blue',
        //     price: 4500,
        //     discount: 20,
        //     description: 'this is best shirt available in inline market',
        //     image: '/products/g.jpg'
        // },
        // {
        //     title: 'mens shirt slim blue',
        //     price: 4500,
        //     discount: 20,
        //     description: 'this is best shirt available in inline market',
        //     image: '/products/h.jpg'
        // },
        // {
        //     title: 'mens shirt slim blue',
        //     price: 4500,
        //     discount: 20,
        //     description: 'this is best shirt available in inline market',
        //     image: '/products/i.jpg'
        // },
        // {
        //     title: 'mens shirt slim blue',
        //     price: 4500,
        //     discount: 20,
        //     description: 'this is best shirt available in inline market',
        //     image: '/products/j.jpg'
        // },
        // {
        //     title: 'mens shirt slim blue',
        //     price: 4500,
        //     discount: 20,
        //     description: 'this is best shirt available in inline market',
        //     image: '/products/k.jpg'
        // },
        // {
        //     title: 'mens shirt slim blue',
        //     price: 4500,
        //     discount: 20,
        //     description: 'this is best shirt available in inline market',
        //     image: '/products/l.jpg'
        // }
    ])
    const model = {
        title: "",
        description: "",
        price: "",
        discount: ""
    }
    const [productForm, setProductForm] = useState(model)
    const [productModel, setProductModel] = useState(false)
    const [applyCloseAnimation, setApplyCloseAnimation] = useState(false)


    const handleModelClose = () => {
        setApplyCloseAnimation(true)
        setTimeout(() => {
            setProductModel(false)
        }, 700)
    }

    const handleOpenModel = () => {
        setApplyCloseAnimation(false)
        setProductModel(true)
    }

    const handleProductForm = (e) => {
        const input = e.target
        const name = input.name
        const value = input.value
        setProductForm({
            ...productForm,
            [name]: value
        })

    }

    const createProduct = async(e) => {
       try{
        e.preventDefault()
      await addDoc(collection(db, "products"),productForm)
      setProductForm(model)
      handleModelClose()
      new Swal({
        icon:"success",
        title:"product added"
      })
       }
       catch(err)
       {
        new Swal({
            icon:"error",
            title:"Failed !",
            text:err.message
        })
       }
    }

    return (
        <Layout>
            <div className='p-2 '>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold mb-5'>Products</h1>
                    <button onClick={handleOpenModel} className='bg-indigo-500 px-4 py-3 text-white font-semibold text-ms rounded'>
                        <i className="ri-sticky-note-add-line mr-2"></i>
                        New Product
                    </button>
                </div>
                <div className='grid md:grid-cols-4 gap-8'>
                    {
                        products.map((item, index) => (
                            <div key={index} className='bg-white shadow-md rounded-md'>
                                <img className='rounded-t-md h-[250px] w-full object-cover' src={item.image} alt="" />
                                <div className='p-4'>
                                    <h1 className='capitalize font-semibold'>{item.title}</h1>
                                    <p className='text-gray-600'>{item.description.slice(0, 50)}</p>
                                    <div className='flex gap-2 mt-1'>
                                        <del className='font-semibold'>₹{item.price}</del>
                                        <p>₹{item.price - (item.price * item.discount) / 100}</p>
                                        {/* <p>{item.price}</p> */}
                                        <label className='text-gray-500'>{item.discount}(% off)</label>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
                {
                    productModel &&

                    <div className={`animate__animated ${applyCloseAnimation ? 'animate__fadeOut ' : 'animate__fadeIn'}  bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full flex justify-center items-center`}>
                        <div className={`animate__animated ${applyCloseAnimation ? 'animate__zoomOut ' : 'animate__zoomIn'} animate__faster bg-white w-5/12 px-6 py-5 rounded-md border border-1 relative`}>
                            <button onClick={handleModelClose}
                                className='absolute top-2 right-3'>
                                <i className="ri-close-line text-lg"></i>
                            </button>
                            <h1 className='text-lg font-semibold'>New Product</h1>
                            <form className='grid grid-cols-2 gap-6 mt-4' onSubmit={createProduct}>
                                <input
                                    onChange={handleProductForm}
                                    required
                                    name='title'
                                    value={productForm.title}
                                    placeholder='Enter product title here'
                                    className='p-2 border border-gray-300 rounded col-span-2' />
                                <input
                                    onChange={handleProductForm}
                                    required
                                    type='number'
                                    name='price'
                                    value={productForm.price}
                                    placeholder='Price'
                                    className='p-2 border border-gray-300 rounded' />
                                <input
                                    onChange={handleProductForm}
                                    required
                                    type='number'
                                    name='discount'
                                    value={productForm.discount}
                                    placeholder='Discount'
                                    className='p-2 border border-gray-300 rounded' />
                                <textarea
                                    onChange={handleProductForm}
                                    required
                                    name='description'
                                    value={productForm.description}
                                    placeholder='Description'
                                    rows={5}
                                    className='p-2 border border-gray-300 rounded col-span-2' />
                                <div><button className='bg-indigo-600 py-3 px-6 rounded text-white text-lg font-semibold'>Submit</button></div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </Layout>
    )
}

export default Product