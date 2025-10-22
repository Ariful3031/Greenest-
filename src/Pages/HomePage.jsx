import React from 'react';
import HeroSection from '../Components/Home/HeroSection';
import TopRed from '../Components/Home/TopRed';
import PlantCareTips from '../Components/Home/PlantCareTips';

const HomePage = () => {

    return (
        <div>
            <HeroSection></HeroSection>
            <TopRed></TopRed>
            <PlantCareTips></PlantCareTips>
            <h1>This is homepage</h1>

        </div>
    );
};

export default HomePage;