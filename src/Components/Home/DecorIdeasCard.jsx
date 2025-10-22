import React from 'react';

const DecorIdeasCard = ({ idea }) => {
    return (
        <div className='p-5 bg-[#F2EAE7] rounded-lg'>
            <img src={idea.image} className="w-full rounded-lg h-40 object-cover" />
            <div className="text-left mt-5">
                <h3 className="text-xl font-semibold text-green-700 mb-2">{idea.title}</h3>
                <p className="text-gray-600 text-sm">{idea.description}</p>
            </div>
        </div>
    );
};

export default DecorIdeasCard;