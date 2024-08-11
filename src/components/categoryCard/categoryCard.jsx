import React from "react";

export const CategoryCard = ({ img, id, name }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <img src={img} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-500 text-sm">ID: {id}</p>
      </div>
    </div>
  );
};
