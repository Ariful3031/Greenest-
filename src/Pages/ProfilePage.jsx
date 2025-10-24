import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import defaultUserImg from '../assets/user.png'
// import { useContext } from 'react';

const ProfilePage = () => {
    const { user, updateUser } = useContext(AuthContext)
    // console.log(user)

    const handleUpdateUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;


        updateUser({ displayName: name, photoURL: image })
            .then(() => {
                // UpdateProfile
                toast.success('Profile Update success')
            })
            .catch(err => {
                console.log(err.message)
            })

    }


    if (!user) {
        return <div className='w-full mx-auto h-screen flex items-center bg-[#CFF0DC]'>
            <div className='bg-[#CDADA8] w-[400px] p-5 flex flex-col justify-center items-center rounded-lg mx-auto'>
                <img className=' w-[150px] h-[150px] rounded-full' src={defaultUserImg} alt="" />
                <h2 className='text-xl font-semibold mt-2'>No have an account</h2>

            </div>
        </div>
    }






    return (
        <div className='w-full mx-auto h-screen flex items-center bg-[#CFF0DC]'>
            <div className='bg-[#CDADA8] w-[400px] p-5 flex flex-col justify-center items-center rounded-lg mx-auto'>
                <img className=' w-[150px] h-[150px] rounded-full' src={user.photoURL ? user.photoURL : defaultUserImg} alt="" />
                <h2 className='text-xl font-semibold mt-2'>{user.displayName}</h2>
                <p>{user.email}</p>

                <form onSubmit={handleUpdateUser}>
                    {/* Name */}
                    <label className="label text-black font-semibold pl-1">Name</label>
                    <input type="text" name='name' required className="input text-[#D9D9D9] w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Name" />
                    {/* image url */}

                    <label className="label pl-1 text-black font-semibold">URL</label>
                    <input type="url" name='image' required className="input w-full text-[#D9D9D9]  outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Image Url" />

                    <button className="btn btn-neutral font-semibold border-none w-full bg-[#02A53B] hover:bg-[#15803D] mt-4">update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;





// import React, { useContext, useState } from "react";
// import { updateProfile } from "firebase/auth";
// import { AuthContext } from "../Context/AuthContext/AuthContext";
// import { toast } from "react-toastify";

// const MyProfilePage = () => {
//     const { user } = useContext(AuthContext);
//     const [displayName, setDisplayName] = useState(user?.displayName || "");
//     const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

//     const handleUpdateProfile = async () => {
//         try {
//             await updateProfile(user, {
//                 displayName,
//                 photoURL,
//             });
//             toast.success("Profile updated successfully!");
//         } catch (error) {
//             console.error(error);
//             toast.error("Failed to update profile.");
//         }
//     };

//     return (
//         <section className="flex justify-center items-center min-h-[80vh] bg-green-50 p-6">
//             <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
//                 {/* Profile Image */}
//                 <div className="flex justify-center mb-4">
//                     <img
//                         src={
//                             user?.photoURL ||
//                             "https://cdn-icons-png.flaticon.com/512/847/847969.png"
//                         }
//                         alt="User"
//                         className="w-28 h-28 rounded-full border-4 border-green-400 object-cover"
//                     />
//                 </div>

//                 {/* User Info */}
//                 <h2 className="text-2xl font-semibold text-gray-800">
//                     {user?.displayName || "No Name Set"}
//                 </h2>
//                 <p className="text-gray-600 mb-4">{user?.email}</p>

//                 {/* Update Form */}
//                 <div className="text-left mt-6 space-y-3">
//                     <label className="block text-gray-700 font-medium">Name:</label>
//                     <input
//                         type="text"
//                         className="w-full border border-gray-300 rounded-lg p-2"
//                         value={displayName}
//                         onChange={(e) => setDisplayName(e.target.value)}
//                     />

//                     <label className="block text-gray-700 font-medium mt-3">
//                         Photo URL:
//                     </label>
//                     <input
//                         type="text"
//                         className="w-full border border-gray-300 rounded-lg p-2"
//                         value={photoURL}
//                         onChange={(e) => setPhotoURL(e.target.value)}
//                     />
//                 </div>

//                 {/* Update Button */}
//                 <button
//                     onClick={handleUpdateProfile}
//                     className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
//                 >
//                     Update Profile
//                 </button>
//             </div>
//         </section>
//     );
// };

// export default MyProfilePage;
