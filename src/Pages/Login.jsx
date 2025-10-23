import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { IoMdEyeOff } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const emailRef = useRef();


    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        // console.log('click login', email, password)
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("login success")
                event.target.reset();
                navigate(`${location.state ? location.state : "/"}`)

            })
            .catch(error => {
                console.log(error.message)
                if (error.code === "auth/email-already-in-use") {
                    toast.error("This email is already registered.");
                } else if (error.code === "auth/invalid-email") {
                    toast.error("Please enter a valid email address.");
                } else if (error.code === "auth/user-disabled") {
                    toast.error("This account has been disabled.");
                } else if (error.code === "auth/user-not-found") {
                    toast.error("No account found with this email.");
                } else if (error.code === "auth/wrong-password") {
                    toast.error("Incorrect password.");
                } else if (error.code === "auth/weak-password") {
                    toast.error("Password is too weak. Use at least 6 characters, with numbers and symbols.");
                } else if (error.code === "auth/too-many-requests") {
                    toast.error("Too many attempts. Try again later.");
                } else if (error.code === "auth/operation-not-allowed") {
                    toast.error("This sign-in method is not enabled.");
                } else if (error.code === "auth/requires-recent-login") {
                    toast.error("Please login again to perform this action.");
                } else if (error.code === "auth/invalid-credential") {
                    toast.error("Invalid authentication credential.");
                } else if (error.code === "auth/credential-already-in-use") {
                    toast.error("This credential is already linked to another account.");
                } else if (error.code === "auth/account-exists-with-different-credential") {
                    toast.error("An account with this email exists using a different sign-in method.");
                } else if (error.code === "auth/popup-closed-by-user") {
                    toast.error("Authentication popup closed before completion.");
                } else if (error.code === "auth/network-request-failed") {
                    toast.error("Network error. Check your internet connection.");
                } else {
                    toast.error("Something went wrong. Please try again.");
                }
            })

    }

    const handleForgotPassword = () => {

        const email = emailRef.current.value
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('please check your email')

            })
            .catch((error) => {
                console.log(error)
            })
        console.log(email)
    }
    return (
        <div className='bg-[#F0FDF4] w-full mx-auto h-screen my-auto flex justify-center items-center'>
            <div className="card bg-base-100 w-full mx-auto  max-w-md shrink-0 shadow-2xl">
                <h1 className='text-2xl text-[#15803D] font-semibold text-center mt-5'>Login Now</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">

                            {/* Email */}
                            <label className="label text-black font-semibold">Email</label>
                            <input type="email" ref={emailRef} name='email' required className="input w-full text-[#D9D9D9] outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Email" />

                            {/* password */}
                            <label className="label text-black font-semibold">Password</label>
                            <div className='relative'>
                                <input type={showPassword ? "text" : "password"} name='password' required className="input text-[#D9D9D9] w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="password" />

                                <button type='button' onClick={() => setShowPassword(!showPassword)} className="text-xl absolute right-2 top-2 z-50">{
                                    showPassword ? <IoMdEyeOff /> : <FaEye />}</button>
                            </div>

                            {/* forgot password */}
                            <div onClick={handleForgotPassword} className='mt-3'>
                                <a className="link link-hover">Forgot password?</a>
                            </div>
                            {/* button  */}
                            <button className="btn btn-neutral font-semibold border-none bg-[#02A53B] hover:bg-[#15803D] mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className='mt-2'> Dont’t Have An Account ? please <Link className='cursor-pointer hover:underline text-red-500' to='/signup'>Signup</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;