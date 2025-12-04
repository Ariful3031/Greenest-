import React from 'react';

const MeetCard = ({ meet }) => {
    return (
        <div className='shadow-lg bg-[#E3D1CD] rounded-2xl p-6 hover:shadow-2xl transition'>
            <img className="w-30 h-32 mx-auto rounded-full object-cover" src={meet.image} alt="" />
            <h3 className="mt-4 text-xl font-semibold text-center text-green-700">
                {meet.name}
            </h3>
            <p className="text-gray-500 text-center">{meet.role}</p>
        </div>
    );
};

export default MeetCard;