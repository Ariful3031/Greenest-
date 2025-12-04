import React from 'react';
import appErrorImg from '../assets/App-Error.png'
import { Link } from 'react-router';

const ErrorElementPage = () => {
    return (
        <div className='py-20 text-center'>
            <img className='w-[400px] h-[350px] px-5 py-15 mx-auto' src={appErrorImg} alt="" />
            <h2 className='text-5xl font-semibold text-[#001931]'>OPPS!! APP NOT FOUND</h2>
            <p className='text-xl text-[#627382] mt-2 mb-4'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to='/apps'>
                <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button>
            </Link>

        </div>
    );
};

export default ErrorElementPage;