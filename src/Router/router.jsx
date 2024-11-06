import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Login";
import { Register } from "../Register";
import { MainLayout } from "../Layout";
import { Home } from "../Pages/Home";
import { HomeDetail } from "../components/HomDetail";
import { Computer } from "../Pages/Computer";
import { CompDetail } from "../components/CompDetail";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/app" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="computer" element={<Computer />} />
        <Route path="detail/:id" element={<HomeDetail />} />
        <Route path="comp-detail/:id" element={<CompDetail />} />
      </Route>
    </Routes>
  );
};
