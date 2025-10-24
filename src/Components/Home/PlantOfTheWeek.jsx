import React from "react";

const PlantOfTheWeek = ({ plant }) => {
  if (!plant) return null;

  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Plant of the Week
        </h2>
        <p className="text-green-700 mb-8">
          Discover the unique benefits and care tips for this special plant!
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-48 h-48 object-cover rounded-xl"
          />
          <div className="text-left md:text-left">
            <h3 className="text-2xl font-semibold text-green-900 mb-2">
              {plant.name}
            </h3>
            <p className="text-gray-700 mb-2">{plant.category}</p>
            <p className="text-gray-600 mb-2">
              Price: <span className="font-medium">${plant.price}</span>
            </p>
            <p className="text-gray-600">
              {plant.description || "A wonderful plant to brighten your home!"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
