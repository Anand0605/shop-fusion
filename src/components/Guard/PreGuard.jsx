
import firebaseAppConfig from '../../util/firebase-config'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(firebaseAppConfig)
import React, { useEffect,useState } from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const PreGuard = () => {
    const[session, setSession] = useState(null)
    const location = useLocation()
    console.log(location)
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                setSession(user)
            }
            else{
                setSession(false)
            }
        })

    },[])

    if(session === null)
        return(
            <div className='bg-gray-100 h-full fixed top-0 left-0 w-full flex justify-center items-center'>
            <span className="relative flex 8-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
            </span>
        </div>
    )
    if(session)
        return <Navigate to='/'/>

  return <Outlet/>
}

export default PreGuard
