import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Login } from "./pages/login";
import { Category } from "./pages/category";
import { CategoryProduct } from "./pages/category-product";
import { AllProduct } from "./pages/all-product";
import { CreateProduct } from "./pages/create-product";
import { SingleProduct } from "./pages/single-product";
import { Home } from "./pages/home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="/category" element={<Category />} />
          <Route path="/category-product" element={<CategoryProduct />} />
          <Route path="/all-product" element={<AllProduct />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/single-product" element={<SingleProduct />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
