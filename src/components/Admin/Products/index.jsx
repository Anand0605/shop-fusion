import React from 'react'
import Layout from '../Layout'
import { useState, useEffect } from 'react'
import firebaseAppConfig from '../../../util/firebase-config'
import { getFirestore, addDoc, getDoc, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'
import uploadFile from '../../../util/storage'
import { ref } from 'firebase/storage'


const db = getFirestore(firebaseAppConfig)

const Product = () => {
    const [updateUi, setUpdateUi] = useState(false)
    const [products, setProducts] = useState([])

    const model = {
        title: "",
        description: "",
        price: "",
        discount: ""
    }
    const [productForm, setProductForm] = useState(model)
    const [productModel, setProductModel] = useState(false)
    const [applyCloseAnimation, setApplyCloseAnimation] = useState(false)
    const [edit, setEdit] = useState(null)


    useEffect(() => {
        const req = async () => {
            const snapshot = await getDocs(collection(db, "products"))
            const tmp = []
            snapshot.forEach((doc) => {
                const allProducts = doc.data()
                allProducts.id = doc.id
                tmp.push(allProducts)
                //    console.log(allProducts)
            })
            setProducts(tmp)

        }
        req()
    }, [updateUi])
    // console.log(products)

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

    const createProduct = async (e) => {
        try {
            e.preventDefault()
            await addDoc(collection(db, "products"), productForm)
            setProductForm(model)
            handleModelClose()
            setUpdateUi(!updateUi)
            new Swal({
                icon: "success",
                title: "product added"
            })
        }
        catch (err) {
            new Swal({
                icon: "error",
                title: "Failed !",
                text: err.message
            })
        }
    }


    const uploadProductImage = async (e, id) => {
        const input = e.target
        const file = input.files[0]
        const path = `products/${Date.now()}.png`
        const url = await uploadFile(file, path)
        const ref = doc(db, "products", id)
        await updateDoc(ref, { image: url })
        setUpdateUi(!updateUi)
        // console.log(url)

    }
    const deleteProduct = async (id) => {
        try {
            const ref = doc(db, "products", id)
            await deleteDoc(ref)
            setUpdateUi(!updateUi)
            new Swal({
                icon: 'Delete',
                title: 'successfully delete'
            })
        }
        catch (err) {
            new Swal({
                icon: 'error',
                title: 'Failed to delete this product'
            })
        }
    }

    const editProduct=(item)=>{
        setEdit(item)
        setProductForm(item)
        setProductModel(true)
    }

    const savedData =async(e)=>{
        try{
            e.preventDefault()
            const ref = doc(db,"products",edit.id)
            await updateDoc(ref,productForm)
            setProductForm(model)
            setProductModel(false)
            setEdit(null)
            setUpdateUi(!updateUi)

        }
        catch(err)
        {
            new Swal({
                icon:'error',
                title:'failed to update this product'
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
                <div className='grid md:grid-cols-4 gap-8 mt-8'>
                    {
                        products.map((item, index) => (
                            <div key={index} className='bg-white shadow-md rounded-md'>
                                <div className='relative'>
                                    <img className='rounded-t-md h-[250px] w-full object-cover' src={item.image ? item.image : '/images/tt.jpg'} />
                                    <input onChange={(e) => uploadProductImage(e, item.id)} type='file' className=' w-full h-full top-0 left-0 absolute opacity-0' />
                                </div>
                                <div className='p-4'>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='capitalize font-semibold'>{item.title}</h1>
                                        <div className='space-x-2'>
                                            <button onClick={() => deleteProduct(item.id)}>
                                                <i className="ri-delete-bin-line text-violet-500"></i>
                                            </button>
                                            <button onClick={()=>editProduct(item)}>
                                                <i className="ri-image-edit-line text-rose-500"></i>
                                            </button>
                                        </div>
                                    </div>
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
                            <form className='grid grid-cols-2 gap-6 mt-4' onSubmit={edit ? savedData : createProduct}>
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