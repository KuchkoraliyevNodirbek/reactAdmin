import React from "react";

export const CatgoryIdCard = ({ img, id, name, onDelete, onEdit }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <img src={img} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-500 text-sm mb-4">ID: {id}</p>
        <div className="flex justify-between">
          <button
            onClick={() => onEdit(id)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
