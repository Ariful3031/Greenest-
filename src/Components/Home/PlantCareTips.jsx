import React, { useEffect, useState } from "react";
import TipCard from "./TipCard";

const PlantCareTips = () => {
    const [careTips, setCareTips] = useState([]);

    useEffect(() => {
        fetch("/plantCareTips.json")
            .then((res) => res.json())
            .then((data) => setCareTips(data));
    }, []);

    return (
        <div className="">
            <h2 className="text-3xl font-bold text-center my-6 text-green-700">
                Plant Care Tips
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
                {careTips.map((tip) => <TipCard key={tip.id} tip={tip}></TipCard>)}
            </div>
        </div>
    );
};

export default PlantCareTips;
