import React from 'react'
import Layout from './Layout'
import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment/moment'

const Payments = () => {

    const [payments, setPayments] = useState([])

    useEffect(() => {
        const req = async () => {
            try {
                const { data } = await axios.get("http://localhost:8080/payments")
                setPayments(data.items)
            }
            catch (err) {
                console.log(err)
            }
        }
        req()
    }, [])
    console.log(payments)
    return (
        <Layout>
            <div>
                <h1 className='text-xl font-semibold'>Payments</h1>
                <div className='mt-6'>
                    <table className='w-full'>
                        <thead>
                            <tr className='bg-rose-600 text-white'>
                                <th className=''>Payment Id</th>
                                <th className='p-4 pr-16'>Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Amount</th>
                                <th>Product</th>
                                <th>Date</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((item, index) => (
                                    <tr key={index} className='text-center' style={{
                                        background: (index + 1) % 2 === 0 ? '#f1f5f9' : 'white'
                                    }}>
                                        <td className='py-4'>{item.id}</td>
                                        <td className='capitalize px-4 py-2'>
                                            <div className='flex p-2 gap-3 items-center  '>
                                                {/* <img src="/images/avatar2.webp" className="h-9 w-9 rounded-full" alt="" /> */}
                                                <div className='flex flex-col justify-center '>
                                                    <span className='font-semibold'>{item.notes.name ? item.notes.name :"jon doe"}</span>
                                                    <small className='text-gray-500'>{item.date}</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.contact}</td>
                                        <td>₹{item.amount.toLocaleString()}</td>
                                        <td className='capitalize'>{item.description
                                        }</td>
                                        <td>
                                            {moment.unix(item.created_at).format('DD MMM YYYY, hh:mm:ss A')}
                                                
                                        </td>
                                        {/* <td>
                                            <select className='border border-gray-200 p-1'>
                                                <option value="pending">Pending</option>
                                                <option value="processing">Processing</option>
                                                <option value="dispatched">Dispatched</option>
                                                <option value="returned">Returned</option>
                                            </select>
                                        </td>
                                        */}
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

export default Payments