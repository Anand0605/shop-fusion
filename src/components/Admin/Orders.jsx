import React from 'react'
import Layout from './Layout'
import { useState, useEffect } from 'react'
import firebaseAppConfig from '../../util/firebase-config'
import { getFirestore, getDocs, collection, updateDoc, doc } from 'firebase/firestore'
import Swal from 'sweetalert2'
import moment from 'moment'

const db = getFirestore(firebaseAppConfig)

const Orders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const req = async () => {
            const snapshot = await getDocs(collection(db, 'orders'))
            const tmp = []
            snapshot.forEach((doc) => {
                const order = doc.data()
                order.orderId = doc.id
                if (order.createdAt && order.createdAt.toDate) {
                    order.createdAt = order.createdAt.toDate() // Convert Firestore timestamp to JS Date
                }
                tmp.push(order)
            })
            setOrders(tmp)
        }
        req()
    }, [])

    const updateOrderStatus = async (e, orderId) => {
        try {
            const status = e.target.value
            const ref = doc(db, 'orders', orderId)
            await updateDoc(ref, { status: status })
            Swal.fire({
                icon: 'success',
                title: 'Order status updated!'
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Layout>
            <div>
                <h1 className='text-xl font-semibold'>Orders</h1>
                <div className='mt-6 overflow-auto'>
                    <table className='w-[1800px]'>
                        <thead>
                            <tr className='bg-rose-600 text-white '>
                                <th className='py-4 pl-3'>Order Id</th>
                                <th className='w-[250px]'>Customer's Name</th>
                                <th className='w-[250px]'>Email</th>
                                <th className='w-[250px]'>Mobile</th>
                                <th className='w-[250px]'>Product</th>
                                <th className='w-[150px]'>Amount</th>
                                <th className='w-[150px]'>Date</th>
                                <th className='w-[250px]'>Address</th>
                                <th className='w-[250px]'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((item, index) => (
                                    <tr key={index} className='text-center' style={{
                                        background: (index + 1) % 2 === 0 ? '#f1f5f9' : 'white'
                                    }}>
                                        <td className='py-4 pl-3'>{item.orderId}</td>
                                        <td className='capitalize w-[150px]'>{item.customerName || 'N/A'}</td>
                                        <td className='w-[250px]'>{item.email || 'N/A'}</td>
                                        <td className='w-[250px]'>{item.address?.mobile || 'N/A'}</td>
                                        <td className='capitalize w-[250px]'>{item.title || 'N/A'}</td>
                                        <td className='w-[150px]'>₹{item.price ? item.price.toLocaleString() : 'N/A'}</td>
                                        <td className='w-[150px]'>{item.createdAt ? moment(item.createdAt).format('DD MMM YYYY hh:mm:ss A') : 'N/A'}</td>
                                        <td>
                                            {item.address ? 
                                                `${item.address.address}, ${item.address.city}, ${item.address.state}, ${item.address.country}, ${item.address.pincode}, Mob-${item.address.mobile}` 
                                                : 'N/A'}
                                        </td>
                                        <td>
                                            <select className='border border-gray-200 p-1 w-[150px]' onChange={(e) => updateOrderStatus(e, item.orderId)}>
                                                <option value="pending">Pending</option>
                                                <option value="processing">Processing</option>
                                                <option value="dispatched">Dispatched</option>
                                                <option value="returned">Returned</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default Orders
