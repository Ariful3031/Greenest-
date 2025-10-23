import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
// import { useContext } from 'react';

const ProfilePage = () => {

    const { user } = use(AuthContext)
    console.log(user)

    return (
        <div className='w-full mx-auto h-screen flex items-center bg-[#CFF0DC]'>
            <div className='bg-[#CDADA8] w-[400px] h-[250px] flex flex-col justify-center items-center rounded-lg mx-auto'>
                <img className=' w-[150px] h-[150px] rounded-full' src={user.photoURL} alt="" />
                <h2 className='text-xl font-semibold'>{user.displayName}</h2>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default ProfilePage;