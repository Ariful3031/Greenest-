import React from 'react';
import HeroSection from '../Components/Home/HeroSection';
import TopRed from '../Components/Home/TopRed';
import PlantCareTips from '../Components/Home/PlantCareTips';
import MeetPlantCare from '../Components/Home/MeetPlantCare';
import EcoDecorIdeas from '../Components/Home/EcoDecorIdeas';


const HomePage = () => {

    return (
        <div>
            <HeroSection></HeroSection>
            <TopRed></TopRed>
            <PlantCareTips ></PlantCareTips>
            <MeetPlantCare></MeetPlantCare>
            <EcoDecorIdeas></EcoDecorIdeas>


        </div>
    );
};

export default HomePage;