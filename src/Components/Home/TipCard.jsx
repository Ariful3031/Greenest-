import React from 'react';
import { IoWaterOutline } from 'react-icons/io5';

const TipCard = ({ tip }) => {
    return (
        <div className="border border-green-200 rounded-2xl p-4 shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-2">
                {tip.plantName}</h3>
            <p className="text-sm text-gray-700"><span className='font-semibold'>Watering: </span>{tip.watering}</p>
            <p className="text-sm text-gray-700"><span className='font-semibold'>Sunlight:</span> {tip.sunlight}
            </p>
            <p className="text-sm text-gray-700"> <span className='font-semibold'>Fertilizing: </span>{tip.fertilizing}
            </p>

        </div>
    );
};

export default TipCard;