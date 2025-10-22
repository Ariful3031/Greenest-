import React, { useEffect, useState } from 'react';
import { IoLogoUsd } from 'react-icons/io';
import { MdOutlineStar } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';

const PlantsDetailsPage = () => {
    const [details, setDetails] = useState({});
    const { plantId } = useParams();
    const data = useLoaderData();
    const { image, plantName, price, rating, description, availableStock } = details;
    // console.log(data)
    // console.log(plantId)
    // console.log(details)

    const handleBook = (event) => {
        event.preventDefault();
        const userName = event.target.name.value
        const userEmail = event.target.email.value
        console.log('click book now', userName, userEmail)
        event.target.reset();

    }
    useEffect(() => {
        const datum = data.find(singleData => (singleData.plantId == plantId));
        setDetails(datum)
    }, [data, plantId])




    return (
        <div className='w-11/12 mx-auto px-10 py-10 bg-[#F0FDF4]'>
            <div>
                <img className='w-full h-[500px] rounded-lg object-cover' src={image} alt="" />
                <h2 className='text-2xl font-semibold mt-5 mb-2'>{plantName}</h2>
                <div className='flex items-center gap-5 justify-between mt-5'>
                    <div className='flex items-center px-3 py-1 bg-amber-200 rounded-xl'>
                        <h3 className=''>Price : {price}</h3>
                        <IoLogoUsd />
                    </div>
                    <p className='bg-[#23BE0A] rounded-lg px-3 py-1 text-white'>Stock: {availableStock}</p>
                    <div className='flex items-center gap-2 bg-[#00D390] px-3 py-1 rounded-lg '>
                        <div className='flex'>
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                        </div>
                        <p>{rating}</p>
                    </div>
                </div>

                <div className='grid grid-cols-12  justify-between gap-5 pl-0 p-5'>
                    <p className='col-span-8'>{description}</p>

                    <div className=" card bg-base-100 col-span-4 w-full shrink-0 shadow-2xl">
                        <h1 className='text-2xl text-[#15803D] font-semibold text-center mt-5'>Book Consultation</h1>
                        <div className="card-body">
                            <form onSubmit={handleBook}>
                                <fieldset className="fieldset">
                                    {/* Name */}
                                    <label className="label text-black font-semibold">Name</label>
                                    <input type="text" name='name' required className="input outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Name" />
                                    {/* Email */}
                                    <label className="label text-black font-semibold">Email</label>
                                    <input type="email" name='email' required className="input outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Email" />

                                    <button className="btn btn-neutral font-semibold border-none bg-[#02A53B] hover:bg-[#15803D] mt-4">Book Now</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>




            </div>
        </div>
    );
};

export default PlantsDetailsPage;