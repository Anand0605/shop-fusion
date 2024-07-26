import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebaseAppConfig from '../util/firebase-config';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

const auth = getAuth(firebaseAppConfig);

const Login = () => {
    const navigate = useNavigate();
    const [passwordType, setPasswordType] = useState("password");
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });

    const login = async (e) => {
        try {
            e.preventDefault();
            setLoader(true);
            await signInWithEmailAndPassword(auth, formValue.email, formValue.password);
            navigate('/');
        } catch (err) {
            setError("Invalid credential information");
        } finally {
            setLoader(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
        setError(null);
    };

    const togglePasswordVisibility = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    };

    return (
        <div className='grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn'>
            <img src="/images/signup1.avif" alt="" className='w-full md:h-full h-25 object-cover ' />
            <div className='flex flex-col  md:p-16 p-8'>
                <h1 className='text-4xl font-bold'>Sign In</h1>
                <p className='text-lg text-gray-600'>Enter Profile Details to login</p>
                <form className='mt-5 space-y-4' onSubmit={login}>
                    <div className='flex flex-col'>
                        <label className='text-lg font-semibold mb-1'>Email Id</label>
                        <input
                            name='email'
                            onChange={handleChange}
                            value={formValue.email}
                            required
                            type="email"
                            placeholder='example@gmail.com'
                            className='p-2 border border-gray-300'
                        />
                    </div>
                    <div className='flex flex-col relative'>
                        <label className='text-lg font-semibold mb-1'>Password</label>
                        <input
                            name='password'
                            onChange={handleChange}
                            value={formValue.password}
                            required
                            type={passwordType}
                            placeholder='Enter password'
                            className='p-2 border border-gray-300'
                        />
                        <button
                            type='button'
                            onClick={togglePasswordVisibility}
                            className='absolute top-11 right-4 hover:bg-blue-200 rounded-full px-1 hover:text-blue-400'
                        >
                            {passwordType === "password" ? <i className="ri-eye-line"></i> : <i className="ri-eye-off-line"></i>}
                        </button>
                    </div>
                    {loader ? (
                        <h1>Loading...</h1>
                    ) : (
                        <button className='bg-indigo-500 text-white py-2 px-5 rounded text-lg hover:bg-rose-600'>Login</button>
                    )}
                </form>
                <div className='mt-2'>
                    Don't have an account? <Link to="/signup" className='text-blue-800 font-semibold'>Register Now</Link>
                </div>
                {error && (
                    <div className='flex justify-between items-center mt-2 bg-rose-600 text-white p-3 rounded font-semibold animate__animated animate__pulse'>
                        <p>{error}</p>
                        <button onClick={() => setError(null)}><i className="ri-close-line"></i></button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
