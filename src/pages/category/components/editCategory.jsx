import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { request } from "../../../config/request";

export const EditCategory = () => {
  const { id } = useParams(); // URL'dan kategoriya ID'sini olish
  const [category, setCategory] = useState(null);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Kategoriya ma'lumotlarini yuklash
    const fetchCategory = async () => {
      try {
        const response = await request.get(`/category/${id}`);
        setCategory(response.data);
        setName(response.data.name);
      } catch (error) {
        console.error("Kategoriya ma'lumotlarini olishda xatolik:", error);
      }
    };

    fetchCategory();
  }, [id]);

  const handleSave = () => {
    // Tahrirlangan kategoriya ma'lumotlarini saqlash
    request
      .put(`/category/${id}`, { name })
      .then(() => {
        navigate("/category"); // Saqlangandan keyin kategoriya ro'yxatiga qaytish
      })
      .catch((error) => {
        console.error("Kategoriya ma'lumotlarini saqlashda xatolik:", error);
      });
  };

  if (!category) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Kategoriya Tahrirlash</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Nom</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Saqlash
      </button>
    </div>
  );
};
