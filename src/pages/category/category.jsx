import React from "react";
import { useCategory } from "./service/quary/useCategory";
import { CategoryCard } from "../../components/categoryCard";

export const Category = () => {
  const { data } = useCategory();
  console.log(data);
  return (
    <div>
      {data?.map((item) => (
        <CategoryCard key={item.id} {...item} />
      ))}
    </div>
  );
};
