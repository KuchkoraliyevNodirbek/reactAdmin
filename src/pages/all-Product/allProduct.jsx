import React from "react";
import { useNavigate } from "react-router-dom";
import { useAllproduct } from "./service/quary/useAllproduct";
import ProductCard from "../../components/allProduct/allProducts";
import { useDeleteProduct } from "./service/quary/useDeleteProduct";

export const AllProduct = () => {
  const { data, isLoading } = useAllproduct();
  const deleteProduct = useDeleteProduct();
  const navigate = useNavigate(); // useNavigate hookini chaqirish

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Mahsulot o'chiriladi. Davom etmoqchimisiz?"
    );
    if (isConfirmed) {
      deleteProduct.mutate(id);
    }
  };

  const handleEdit = (id) => {
    // Mahsulotni tahrirlash sahifasiga yo'naltirish
    navigate(`/edit-product/${id}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {isLoading
        ? "Loading..."
        : data?.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
    </div>
  );
};
