import React from "react";
import { useCategory } from "../category/service/quary/useCategory";
import { useDeleteCate } from "../category/service/quary/useDeleteCate";
import { CategoryCard } from "../../components/categoryCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Category = () => {
  const { data } = useCategory();
  const deleteCategory = useDeleteCate();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // Tasdiqlash so'rovini ko'rsatish
    const isConfirmed = window.confirm(
      "Kategoriya o'chiriladi. Davom etmoqchimisiz?"
    );
    if (isConfirmed) {
      deleteCategory.mutate(id);
    }
  };

  const handleEdit = (id) => {
    // Kategoriya tahrirlash sahifasiga yo'naltirish
    navigate(`/edit-category/${id}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Kategoriya Ro'yxati</h1>
      <div className="grid grid-cols-1 gap-4">
        {data?.map((item) => (
          <CategoryCard
            key={item.id}
            {...item}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};
