import React from 'react'
import Layout from './Layout'
import { useState } from 'react'

const Orders = () => {

    const[orders, setOrders] = useState([
        {
            orderId:'#bh5452',
            customername:'er saurav',
            email:'ersaurav@gmail.com',
            mobile:'5555555555',
            product:'oppo a5',
            amount:'20000',
            date:'12-10-2024 10:15:14 AM',
            status:'pending'
        },
        {
            orderId:'#bh5452',
            customername:'er saurav',
            email:'ersaurav@gmail.com',
            mobile:'5555555555',
            product:'oppo a5',
            amount:'20000',
            date:'12-10-2024 10:15:14 AM',
            status:'pending'
        },
        {
            orderId:'#bh5452',
            customername:'er saurav',
            email:'ersaurav@gmail.com',
            mobile:'5555555555',
            product:'oppo a5',
            amount:'20000',
            date:'12-10-2024 10:15:14 AM',
            status:'pending'
        },
        {
            orderId:'#bh5452',
            customername:'er saurav',
            email:'ersaurav@gmail.com',
            mobile:'5555555555',
            product:'oppo a5',
            amount:'20000',
            date:'12-10-2024 10:15:14 AM',
            status:'pending'
        },
        {
            orderId:'#bh5452',
            customername:'er saurav',
            email:'ersaurav@gmail.com',
            mobile:'5555555555',
            product:'oppo a5',
            amount:'20000',
            date:'12-10-2024 10:15:14 AM',
            status:'pending'
        },
        {
            orderId:'#bh5452',
            customername:'er saurav',
            email:'ersaurav@gmail.com',
            mobile:'5555555555',
            product:'oppo a5',
            amount:'20000',
            date:'12-10-2024 10:15:14 AM',
            status:'pending'
        },
        {
            orderId:'#bh5452',
            customername:'er saurav',
            email:'ersaurav@gmail.com',
            mobile:'5555555555',
            product:'oppo a5',
            amount:'20000',
            date:'12-10-2024 10:15:14 AM',
            status:'pending'
        },
        {
            orderId:'#bh5452',
            customername:'er saurav',
            email:'ersaurav@gmail.com',
            mobile:'5555555555',
            product:'oppo a5',
            amount:'20000',
            date:'12-10-2024 10:15:14 AM',
            status:'pending'
        },
        {
            orderId:'#bh5452',
            customername:'er saurav',
            email:'ersaurav@gmail.com',
            mobile:'5555555555',
            product:'oppo a5',
            amount:'20000',
            date:'12-10-2024 10:15:14 AM',
            status:'pending'
        },
        {
            orderId:'#bh5452',
            customername:'er saurav',
            email:'ersaurav@gmail.com',
            mobile:'5555555555',
            product:'oppo a5',
            amount:'20000',
            date:'12-10-2024 10:15:14 AM',
            status:'pending'
        },
        {
            orderId:'#bh5452',
            customername:'er saurav',
            email:'ersaurav@gmail.com',
            mobile:'5555555555',
            product:'oppo a5',
            amount:'20000',
            date:'12-10-2024 10:15:14 AM',
            status:'pending'
        },
        {
            orderId:'#bh5452',
            customername:'er saurav',
            email:'ersaurav@gmail.com',
            mobile:'5555555555',
            product:'oppo a5',
            amount:'20000',
            date:'12-10-2024 10:15:14 AM',
            status:'pending'
        },
        {
            orderId:'#bh5452',
            customername:'er saurav',
            email:'ersaurav@gmail.com',
            mobile:'5555555555',
            product:'oppo a5',
            amount:'20000',
            date:'12-10-2024 10:15:14 AM',
            status:'pending'
        }
    ])

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
                                orders.map((item, index)=>(
                                    <tr key={index} className= 'text-center' style={{
                                        background : (index+1)%2 === 0 ?'#f1f5f9':'white'
                                    }}>
                                        <td className='py-4'>{item.orderId}</td>
                                        <td className='capitalize'>{item.customername}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td className='capitalize'>{item.product}</td>
                                        <td>₹{item.amount.toLocaleString()}</td>
                                        <td>{item.date}</td>
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