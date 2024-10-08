import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../../config/request";

export const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategories] = useState([]); // O'zgaruvchi nomini tuzatdik
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(""); // Xatolik xabarini ko'rsatish uchun
  const navigate = useNavigate();

  useEffect(() => {
    // Kategoriya ro'yxatini yuklash
    const fetchCategories = async () => {
      try {
        const response = await request.get("/category"); // API yo'nalishini tekshiring
        setCategories(response.data);
      } catch (error) {
        console.error("Kategoriya ro'yxatini olishda xatolik:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSave = () => {
    // Formada barcha maydonlarning to'ldirilganligini tekshirish
    if (!name || !price || !selectedCategory) {
      setError("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    setError(""); // Xatolikni tozalash

    // Yangi mahsulotni saqlash
    request
      .post("/products", { name, price, categoryId: selectedCategory })
      .then(() => {
        navigate("/all-product"); // Saqlangandan keyin mahsulotlar ro'yxatiga qaytish
      })
      .catch((error) => {
        console.error("Mahsulotni saqlashda xatolik:", error);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Yangi Mahsulotni Yaratish</h1>
      {error && (
        <div className="mb-4 p-2 text-red-500 border border-red-500 rounded-md">
          {error}
        </div>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Nom</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Narx</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Kategoriya
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="" disabled>
            Tanlang
          </option>
          {category.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
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
