import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Login } from "./pages/login";
import { Category } from "./pages/category";
import { AllProduct } from "./pages/all-product";
import { CreateProduct } from "./pages/create-product";
import { Home } from "./pages/home";
import { CategoryId } from "./pages/categoryId/categoryId";
import { EditProduct } from "./pages/all-Product/components/editProdutc";
import { EditCategory } from "./pages/category/components/editCategory";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="/category" element={<Category />} />
          <Route path="/all-product" element={<AllProduct />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/categoryId/:id" element={<CategoryId />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/edit-category/:id" element={<EditCategory />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
