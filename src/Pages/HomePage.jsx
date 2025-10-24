import React from 'react';
import HeroSection from '../Components/Home/HeroSection';
import TopRed from '../Components/Home/TopRed';
import PlantCareTips from '../Components/Home/PlantCareTips';
import MeetPlantCare from '../Components/Home/MeetPlantCare';
import EcoDecorIdeas from '../Components/Home/EcoDecorIdeas';
import PlantOfTheWeek from '../Components/Home/PlantOfTheWeek';


const HomePage = () => {

    const plantData = {
        id: 2,
        name: "Peace Lily",
        category: "Indoor Plant",
        price: 22,
        image: "https://prickleplants.co.uk/cdn/shop/products/b95a32ed-5207-4a85-ad06-2f06b67cd046.jpg?v=1661164123",
        description:
            "The Peace Lily (Spathiphyllum wallisii) is one of the most elegant and easy-to-care-for indoor plants, cherished for its lush green leaves and beautiful white blooms that resemble calla lilies. Native to the tropical rainforests of Central and South America, this plant brings a calming, natural ",
    };

    return (
        <div>
            <HeroSection></HeroSection>
            <PlantOfTheWeek plant={plantData}></PlantOfTheWeek>
            <TopRed></TopRed>
            <PlantCareTips ></PlantCareTips>
            <MeetPlantCare></MeetPlantCare>
            <EcoDecorIdeas></EcoDecorIdeas>


        </div>
    );
};

export default HomePage;