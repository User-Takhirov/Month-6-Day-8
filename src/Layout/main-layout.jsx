import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { loadState } from "../config/storege";
import { Navigate } from "react-router-dom";
export const MainLayout = () => {
  const accessToken = loadState("user");
  if (!accessToken) {
    return <Navigate replace to={"/"} />;
  }
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
