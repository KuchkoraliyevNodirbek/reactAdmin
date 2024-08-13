import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { request } from "../../../config/request";

export const EditProduct = () => {
  const { id } = useParams(); // URL'dan mahsulot ID'sini olish
  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategories] = useState([]); // Kategoriya ro'yxati
  const [selectedCategory, setSelectedCategory] = useState(""); // Tanlangan kategoriya
  const navigate = useNavigate();

  useEffect(() => {
    // Mahsulotni va kategoriya ro'yxatini yuklash
    request.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
      setName(res.data.name);
      setPrice(res.data.price);
      setSelectedCategory(res.data.categoryId); // Mahsulotning mavjud kategoriyasini belgilash
    });

    request.get('/category').then((res) => {
      setCategories(res.data); // Kategoriya ro'yxatini olish
    });
  }, [id]);

  const handleSave = () => {
    // Tahrirlangan mahsulotni saqlash
    request
      .put(`/products/${id}`, { name, price, categoryId: selectedCategory })
      .then(() => {
        navigate("/all-product"); // Saqlangandan keyin mahsulotlar ro'yxatiga qaytish
      })
      .catch((error) => {
        console.error("Mahsulotni saqlashda xatolik:", error);
      });
  };

  if (!product || category.length === 0) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Mahsulotni tahrirlash</h1>
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
        <label className="block text-sm font-medium text-gray-700">Kategoriya</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="" disabled>Tanlang</option>
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
