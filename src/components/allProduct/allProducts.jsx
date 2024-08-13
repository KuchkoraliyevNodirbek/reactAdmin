import React from "react";

const ProductCard = ({ id, name, price, img, onDelete, onEdit }) => {
  return (
    <div className="max-w-xs rounded-lg shadow-lg p-4 bg-white">
      <img src={img} alt={name} className="w-32 h-32 mx-auto" />
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">Price: {price}</p>
        <div className="mt-4 flex justify-around">
          <button
            onClick={() => onEdit(id)}
            className="text-blue-500 hover:text-blue-700"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
