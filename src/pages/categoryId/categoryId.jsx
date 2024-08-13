import React from "react";
import { useParams } from "react-router-dom";
import { categoryGetSingle } from "./service/categoryGetSingle";
import { CatgoryIdCard } from "../../components/categoryCard/catgoryIdCard";
import { useDeleteProduct } from "../all-Product/service/quary/useDeleteProduct";
import { useNavigate } from "react-router-dom";

export const CategoryId = () => {
  const { id } = useParams();
  const { data, isLoading } = categoryGetSingle(id);
  const deleteProduct = useDeleteProduct();
  const navigate = useNavigate();
  // console.log(data);

  const handleDelete = (id) => {
    // Tasdiqlash so'rovini ko'rsatish
    const isConfirmed = window.confirm(
      "Mahsulot o'chiriladi. Davom etmoqchimisiz?"
    );
    if (isConfirmed) {
      deleteProduct.mutate(id);
    }
  };

  const handleEdit = (id) => {
    // Mahsulotni tahrirlash logikasi, masalan, tahrirlash sahifasiga o'tish yoki modal ochish
    console.log("Mahsulot tahrirlanmoqda, ID:", id);
    navigate(`/edit-product/${id}`);
  };

  return (
    <div>
      {data?.length > 0 ? (
        data?.map((item) => (
          <CatgoryIdCard
            key={item.id}
            {...item}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))
      ) : (
        <p>yoq</p>
      )}
    </div>
  );
};
