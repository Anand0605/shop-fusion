import React from 'react'
import Layout from './Layout'
import { useState, useEffect } from 'react'
import firebaseAppConfig from '../../util/firebase-config'
import { getFirestore, getDocs, collection } from 'firebase/firestore'


const db = getFirestore(firebaseAppConfig)

const Orders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const req = async() => {
          const snapshot =  await getDocs(collection(db, 'orders'))
          const tmp = []
          snapshot.forEach((doc)=>{
            const order = doc.data()
            tmp.push(order)
          })
          setOrders(tmp)
        }
        req()
    }, [])
    console.log(orders)

    return (
        <Layout>
            <div>
                <h1 className='text-xl font-semibold'>Orders</h1>
                <div className='mt-6'>
                    <table className='w-full'>
                        <thead>
                            <tr className='bg-rose-600 text-white'>
                                <th className='p-4'>Order Id</th>
                                <th>Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((item, index) => (
                                    <tr key={index} className='text-center' style={{
                                        background: (index + 1) % 2 === 0 ? '#f1f5f9' : 'white'
                                    }}>
                                        <td className='py-4'>{item.id}</td>
                                        <td className='capitalize'>Er.Ashutosh</td>
                                        <td>vnfkj</td>
                                        <td>vnjkfs</td>
                                        <td className='capitalize'>{item.title}</td>
                                        <td>₹{item.price.toLocaleString()}</td>
                                        <td>rjnfgrkjn</td>
                                        <td>
                                            <select className='border border-gray-200 p-1'>
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