import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TopCard from './TopCard';

const AllPlantsCard = () => {
    const data = useLoaderData()
    console.log(data)

    const [sortOrder, setSortOrder] = useState(""); // ascending / descending
    const [filterCategory, setFilterCategory] = useState("");

    // Filtering
    const filteredPlants = data.filter((plant) =>
        filterCategory ? plant.category === filterCategory : true
    );

    // Sorting
    const sortedPlants = [...filteredPlants].sort((a, b) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "desc") return b.price - a.price;
        return 0;
    });

    return (
        <div className='mt-10'>
            <h1 className="text-3xl font-bold text-center my-6 text-green-700">All Plants Categories</h1>
            <div className='flex gap-5 justify-center'>
                <div className='flex flex-col'>
                    {/* Sorting */}
                    <label className="px-3 pb-2 font-medium">Sort by Price: </label>
                    <select className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-400" onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="">None</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    {/* Filtering */}
                    <label className="px-3 pb-2 font-medium">Filter by Category: </label>
                    <select className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-400" onChange={(e) => setFilterCategory(e.target.value)}>
                        <option value="">All</option>
                        <option value="Indoor Plant">Indoor Plant</option>
                        <option value="Air Purifier">Air Purifier</option>
                        <option value="Medicinal">Medicinal</option>
                        <option value="Decorative">Decorative</option>
                        <option value="Lucky Plant">Lucky Plant</option>
                        <option value="Hanging Plant">Hanging Plant</option>
                    </select>
                </div>
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
                {
                    sortedPlants.map(singleData => <TopCard key={singleData.id} singleData={singleData}></TopCard>)
                }
            </div>
        </div>
    );
};

export default AllPlantsCard;