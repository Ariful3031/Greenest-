import React, { useEffect, useState } from 'react';
import MeetCard from './MeetCard';

const MeetPlantCare = () => {
    const [meetCare, setMeetCare] = useState([]);

    useEffect(() => {
        fetch("/MeetPlantCare.json")
            .then((res) => res.json())
            .then((data) => setMeetCare(data));
    }, []);

    return (
        <div className='my-10'>
            <h2 className="text-3xl text-center font-bold text-green-700 my-8">
                Meet Our Green Experts
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                {
                    meetCare.map(meet => <MeetCard key={meet.id} meet={meet}></MeetCard>)
                }
            </div>
        </div>

    );
};

export default MeetPlantCare;