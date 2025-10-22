import React from 'react';
import { FcRating } from 'react-icons/fc';
import { IoLogoUsd } from 'react-icons/io';
import { MdOutlineStar } from 'react-icons/md';

const TopCard = ({ singleData }) => {
    console.log(singleData)
    const { image, plantName, price, rating } = singleData;
    return (
        <div className='p-5 bg-[#F0FDF4] rounded-lg'>
            <img className='w-full h-[300px] rounded-lg' src={image} alt="" />
            <h2 className='text-xl font-semibold mt-5 mb-2'>{plantName}</h2>
            <div className='flex justify-between'>
                <div className='flex items-center px-3 py-1 bg-amber-200 rounded-xl'>
                    <h3 className=''>Price : {price}</h3>
                    <IoLogoUsd />
                </div>
                <div className='flex items-center gap-2 bg-[#00D390] px-2 rounded-lg '>
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
            <button className='btn bg-[#23BE0A] text-white w-full py-2 mt-3 rounded-lg'>View Details</button>

        </div>
    );
};

export default TopCard;