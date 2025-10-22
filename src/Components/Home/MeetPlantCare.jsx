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
        <div>
            <h2 className="text-3xl font-bold text-green-800 my-5">
                Meet Our Green Experts
            </h2>

            <div className='grid grid-cols-4 gap-4'>
                {
                    meetCare.map(meet => <MeetCard key={meet.id} meet={meet}></MeetCard>)
                }
            </div>
        </div>

    );
};

export default MeetPlantCare;