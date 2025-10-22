import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import PlantsDetailsPage from '../Pages/PlantsDetailsPage';

const PlantsDetailLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <PlantsDetailsPage></PlantsDetailsPage>

        </div>
    );
};

export default PlantsDetailLayout;