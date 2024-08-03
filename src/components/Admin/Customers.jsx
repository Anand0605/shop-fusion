import React from 'react'
import Layout from './Layout'
import { useState,useEffect } from 'react'
import firebaseAppConfig from '../../util/firebase-config'
import { getFirestore, getDocs, collection } from "firebase/firestore"
import moment from "moment"
const db = getFirestore(firebaseAppConfig)

const Customers = () => {

  const [customers, setCustomers] = useState([])
  useEffect(()=>{
    const req = async ()=>{
        const snapshot = await getDocs(collection(db, "customers"))
        const tmp = []
        snapshot.forEach((doc)=>{
            const document = doc.data()
            tmp.push(document)
        })
        setCustomers(tmp)
    }
    req()
}, [])
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
                {/* <th>Address</th> */}

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
                          <span className='font-semibold'>{item.customerName}</span>
                          <small className='text-gray-500'>{item.date}</small>
                        </div>
                      </div>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{moment(item.createdAt.toDate()).format('DD MMM YYYY, hh:mm:ss A')}</td>                
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