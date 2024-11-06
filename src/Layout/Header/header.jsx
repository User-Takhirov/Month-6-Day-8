import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="bg-black py-[10px]">
        <h1 className="text-white text-[25px] text-center">Header</h1>
      </div>
      <div className="  bg-blue-500 py-[20px]">
        <div className="container flex gap-[20px] text-white text-[20px] ">
          <Link to={"/app"}>Home</Link>
          <Link to={"/app/computer"}>Computer</Link>
        </div>
      </div>
    </>
  );
};
