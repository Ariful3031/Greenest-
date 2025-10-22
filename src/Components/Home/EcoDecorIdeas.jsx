import React, { useEffect, useState } from 'react';
import DecorIdeasCard from './DecorIdeasCard';

const EcoDecorIdeas = () => {

    const [ecoDecor, setEcoDecor] = useState([]);

    useEffect(() => {
        fetch("/EcoDecorIdeas.json")
            .then((res) => res.json())
            .then((data) => setEcoDecor(data));
    }, []);

    return (
        <div className="py-8 bg-green-50">

            <div className="text-center">
                <h2 className="text-3xl font-bold text-green-800 mb-8">
                    Eco Decor Ideas
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Discover creative ways to style your home and workspace with plants —
                    make your surroundings fresh, vibrant, and eco-friendly.
                </p>
                <div className="grid px-5 gap-5 grid-cols-4">
                    {
                        ecoDecor.map((idea) => <DecorIdeasCard key={idea.id} idea={idea}></DecorIdeasCard>)
                    }
                </div>
            </div>

        </div>
    );
};



export default EcoDecorIdeas;