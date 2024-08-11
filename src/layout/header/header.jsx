import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const getBorderStyle = (path) => {
    return location.pathname === path
      ? "border-blue-200 text-blue-500 bg-blue-200"
      : "border-transparent";
  };

  return (
    <div className="text-white">
      <div
        className={`text-black p-4 m-4 border-2 rounded-[10px] ${getBorderStyle(
          "/"
        )}`}
      >
        <Link to={"/"}>Home</Link>
      </div>
      <div
        className={`text-black p-4 m-4 border-2 rounded-[10px] ${getBorderStyle(
          "/all-product"
        )}`}
      >
        <Link to={"/all-product"}>AllProduct</Link>
      </div>

      <div
        className={`text-black p-4 m-4 border-2 rounded-[10px] ${getBorderStyle(
          "/category"
        )}`}
      >
        <Link to={"/category"}>Category</Link>
      </div>
      <div
        className={`text-black p-4 m-4 border-2 rounded-[10px] ${getBorderStyle(
          "/category-product"
        )}`}
      >
        <Link to={"/category-product"}>CategoryProduct</Link>
      </div>
      <div
        className={`text-black p-4 m-4 border-2 rounded-[10px] ${getBorderStyle(
          "/create-product"
        )}`}
      >
        <Link to={"/create-product"}>CreateProduct</Link>
      </div>
      <div
        className={`text-black p-4 m-4 border-2 rounded-[10px] ${getBorderStyle(
          "/single-product"
        )}`}
      >
        <Link to={"/single-product"}>SingleProduct</Link>
      </div>
    </div>
  );
};
