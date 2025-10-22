import React from 'react';
import { useLoaderData } from 'react-router';
import TopCard from './TopCard';

const TopRed = () => {

    const data = useLoaderData()
    console.log(data)
    return (
        <div className='grid grid-cols-3 gap-5 mt-10'>
            {
                data.map(singleData => <TopCard key={singleData.id} singleData={singleData}></TopCard>)
            }
        </div>
    );
};

export default TopRed;