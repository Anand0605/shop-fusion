import { useEffect, useState } from 'react'
import firebaseAppConfig from '../util/firebase-config'
import { onAuthStateChanged, getAuth, updateProfile } from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import React from 'react'
import Layout from './Layout'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getFirestore ,collection,addDoc} from 'firebase/firestore'


const auth = getAuth(firebaseAppConfig)
const db = getFirestore(firebaseAppConfig)
const storage = getStorage()

const Profile = () => {
    const [upLoading, setUpLoading] = useState(false)
    const [session, setSession] = useState(null)
    const [formValue, setFormValue] = useState([
        {
            fullname: (session && session.displayName) ? session.displayName : "",
            email: "",
            mobile: "",

        }
    ])
    const [addressFormValue, setAddressFormValue] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: ""
    })
    const navigate = useNavigate()


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSession(user)
            }
            else {
                setSession(false)
                navigate('/login')
            }
        })

    }, [])

    useEffect(() => {
        if (session) {
            setFormValue({
                ...formValue,
                fullname: session.displayName,
                mobile: (session.phoneNumber ? session.phoneNumber : '')
            })
        }
    }, [session])

    const setProfilePicture = async (e) => {
        const input = e.target
        const file = input.files[0]
        const filenameArray = file.name.split('.')
        const ext = (filenameArray[filenameArray.length - 1])
        const filename = Date.now() + "." + ext
        const path = `pictures/${filename}`
        const bucket = ref(storage, path)
        setUpLoading(true)
        const snapshot = await uploadBytes(bucket, file)
        const url = await getDownloadURL(snapshot.ref)
        await updateProfile(auth.currentUser, {
            photoURL: url
        })
        //    console.log("success")
        setUpLoading(false)
        setSession({
            ...session,
            photoURL: url
        })

    }

    const handleFormValue = (e) => {
        const input = e.target
        const name = input.name
        const value = input.value
        setFormValue({
            ...formValue,
            [name]: value
        })

    }

    const saveProfileInfo = async (e) => {
        e.preventDefault()

        await updateProfile(auth.currentUser, {
            displayName: formValue.fullname,
            phoneNumber: formValue.mobile
        })
        new Swal({
            icon: 'success',
            title: 'profile saved'
        })
    }

    const handleAddressFormValue=(e)=>{
        const input = e.target
        const name = input.name
        const value = input.value
        setAddressFormValue({
            ...addressFormValue,
            [name]:value
        })

    }
    const saveAddress=async(e)=>{
       try{
        e.preventDefault()
       
       const x = await addDoc(collection(db,"addresses"),{addressFormValue})
       console.log(x)
       }
       catch(err)
       {
        console.log(err)
       }

    }

    if (session === null) {
        return (
            <div className='bg-gray-100 h-full fixed top-0 left-0 w-full flex justify-center items-center'>
                <span className="relative flex 8-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
                </span>
            </div>
        )
    }

    return (
        <Layout>
            <div className='md:my-16 mx-auto shadow-lg md:w-7/12 rounded-md p-8 border'>
                <div className='flex gap-2'>
                    <i className="ri-user-line text-4xl"></i>
                    <h1 className='text-3xl'>Profile</h1>
                </div>
                <hr className='my-6' />
                <div className='w-24 h-24 mx-auto relative mb-6'>
                    {
                        upLoading ?
                            <img src="/images/loader.gif" alt="" />
                            :
                            <img src={session.photoURL ? session.photoURL : "/images/avatar2.webp"} className='w-24 h-24 rounded-full ' alt="" />
                    }
                    <input type="file" accept='image/*' className='opacity-0 absolute top-0 left-0 w-full h-full' onChange={setProfilePicture} />
                </div>
                <form className='grid grid-cols-2 gap-2' onSubmit={saveProfileInfo}>
                    <div className='flex flex-col gap-2'>
                        <label>Fullname</label>
                        <input onChange={handleFormValue} required name='fullname' value={formValue.fullname} className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Email</label>
                        <input disabled onChange={handleFormValue} required name='email' type='email' value={session.email} className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Mobile</label>
                        <input onChange={handleFormValue} required name='mobile' type='number' value={formValue.mobile} className='p-2 rounded border border-gray-300' />
                    </div>

                    <div>

                    </div>
                    <button className='bg-green-500 hover:bg-rose-500 w-fit px-6 py-2 rounded text-white shadow'>
                        <i className="ri-save-line mr-1"></i>
                        Save
                    </button>

                </form>
            </div>
            <div className='md:my-16 mx-auto shadow-lg md:w-7/12 rounded-md p-8 border'>
                <div className='flex gap-2'>
                    <i className="ri-truck-line text-4xl"></i>
                    <h1 className='text-3xl'>Delivery Address</h1>
                </div>
                <hr className='my-6' />

                <form className='grid grid-cols-2 gap-2' onSubmit={saveAddress}>

                    <div className='flex flex-col gap-2 col-span-2'>
                        <label>Area/Street/Vill</label>
                        <input onChange={handleAddressFormValue} required name='address' type='text' className=' w-full p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>City</label>
                        <input onChange={handleAddressFormValue} required name='city' type='text'  className=' w-full p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>State</label>
                        <input onChange={handleAddressFormValue} required name='state' type='text'  className=' w-full p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Country</label>
                        <input onChange={handleAddressFormValue} required name='country' type='text'  className=' w-full p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Pincode</label>
                        <input onChange={handleAddressFormValue} required name='pincode' type='text'  className=' w-full p-2 rounded border border-gray-300' />
                    </div>
                    <button className='bg-green-500 hover:bg-rose-500 w-fit px-6 py-2 rounded text-white shadow'>
                        <i className="ri-save-line mr-1"></i>
                        Save
                    </button>

                </form>
            </div>
        </Layout>

    )
}

export default Profile