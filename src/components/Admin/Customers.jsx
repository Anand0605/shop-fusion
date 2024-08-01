import React from 'react'
import Layout from './Layout'
import { useState } from 'react'

const Customers = () => {

  const [customers, setCustomers] = useState([
    {
      customername: 'er saurav',
      email: 'ersaurav@gmail.com',
      mobile: '5555555555',
      date: '12-10-2024 10:15:14 AM',
      address:'Surajpur Greater Noida uttar Pradesh'
    },
    {
      customername: 'er saurav',
      email: 'ersaurav@gmail.com',
      mobile: '5555555555',
      date: '12-10-2024 10:15:14 AM',
      address:'Surajpur Greater Noida uttar Pradesh'
    },
    {
      customername: 'er saurav',
      email: 'ersaurav@gmail.com',
      mobile: '5555555555',
      date: '12-10-2024 10:15:14 AM',
      address:'Surajpur Greater Noida uttar Pradesh'
    },
    {
      customername: 'er saurav',
      email: 'ersaurav@gmail.com',
      mobile: '5555555555',
      date: '12-10-2024 10:15:14 AM',
      address:'Surajpur Greater Noida uttar Pradesh'
    },
    {
      customername: 'er saurav',
      email: 'ersaurav@gmail.com',
      mobile: '5555555555',
      date: '12-10-2024 10:15:14 AM',
      address:'Surajpur Greater Noida uttar Pradesh'
    },
    {
      customername: 'er saurav',
      email: 'ersaurav@gmail.com',
      mobile: '5555555555',
      date: '12-10-2024 10:15:14 AM',
      address:'Surajpur Greater Noida uttar Pradesh'
    },
    {
      customername: 'er saurav',
      email: 'ersaurav@gmail.com',
      mobile: '5555555555',
      date: '12-10-2024 10:15:14 AM',
      address:'Surajpur Greater Noida uttar Pradesh'
    },
    {
      customername: 'er saurav',
      email: 'ersaurav@gmail.com',
      mobile: '5555555555',
      date: '12-10-2024 10:15:14 AM',
      address:'Surajpur Greater Noida uttar Pradesh'
    },
    {
      customername: 'er saurav',
      email: 'ersaurav@gmail.com',
      mobile: '5555555555',
      date: '12-10-2024 10:15:14 AM',
      address:'Surajpur Greater Noida uttar Pradesh'
    },
    {
      customername: 'er saurav',
      email: 'ersaurav@gmail.com',
      mobile: '5555555555',
      date: '12-10-2024 10:15:14 AM',
      address:'Surajpur Greater Noida uttar Pradesh'
    },

  ])




  return (
    <Layout>
      <div>
        <h1 className='text-xl font-semibold'>Customers</h1>
        <div className='mt-6'>
          <table className='w-full'>
            <thead>
              <tr className='bg-rose-600 text-white'>

                <th className='p-4'>Customer's Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Date</th>
                <th>Address</th>

              </tr>
            </thead>
            <tbody>
              {
                customers.map((item, index) => (
                  <tr key={index} className='text-center' style={{
                    background: (index + 1) % 2 === 0 ? '#f1f5f9' : 'white'
                  }}>
                    {/* <td className='py-4'>{item.orderId}</td> */}
                    <td className='capitalize px-4 py-2'>
                      <div className='flex p-2 gap-3 items-center  '>
                        <img src="/images/avatar2.webp" className="h-9 w-9 rounded-full" alt="" />
                        <div className='flex flex-col justify-center '>
                          <span className='font-semibold'>{item.customername}</span>
                          <small className='text-gray-500'>{item.date}</small>
                        </div>
                      </div>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    {/* <td className='capitalize'>{item.product}</td> */}
                    {/* <td>₹{item.amount.toLocaleString()}</td> */}
                    <td>
                      {item.date}
                    </td>
                    <td>
                      {item.address}
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

export default Customers