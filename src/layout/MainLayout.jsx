import React from "react";
import { Header } from "./header";
import { Navigate, Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { loadState } from "../config/stroge";

export const MainLayout = () => {
  const user = loadState("user");
  if (!user) {
   return <Navigate to="/login" replace  />
  }
  return (
    <>
      <div className="flex justify-center container">
        <header className="w-[20%] h-[100vh] bg-white">
          <Header />
        </header>
        <main className="w-[80%] bg-blue-100 rounded-md">
          <Outlet />
        </main>
      </div>
      <footer className="container">
        <Footer />
      </footer>
    </>
  );
};
