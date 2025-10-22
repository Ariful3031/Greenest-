import React from 'react';
import heroImg from '../../assets/naturalHero.webp'

const HeroSection = () => {
    return (
        <div>
            <img className='w-full' src={heroImg} alt="" />
        </div>
    );
};

export default HeroSection;