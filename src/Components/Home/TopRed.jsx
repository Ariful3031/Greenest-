import React from 'react';
import { useLoaderData } from 'react-router';
import TopCard from './TopCard';

const TopRed = () => {

    const data = useLoaderData()
    // console.log(data)
    return (
        <div className='mt-10'>
            <h1 className="text-3xl font-bold text-center my-6 text-green-700">All Plants Categories</h1>
            <div className='grid grid-cols-4 gap-5 mt-5'>
                {
                    data.map(singleData => <TopCard key={singleData.id} singleData={singleData}></TopCard>)
                }
            </div>
        </div>
    );
};

export default TopRed;