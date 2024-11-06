import React from "react";

export const HomeCard = ({ item }) => {
  return (
    <>
      <div className="h-[480px] container mt-[20px] mb-[50px] w-full shadow-2xl flex flex-col  rounded-[10px]  p-[20px]">
        <img
          className="mx-auto mix-blend-darken w-full"
          src={item.img}
          alt="#"
        />
        <div>
          <h1 className="text-[20px] mt-[10px]">{item.title}</h1>
          <strong>{item.price}</strong>
          <p className="text-[17px]">{item.color}</p>
          <h3 className="font-[700]">{item.brand}</h3>
        </div>
      </div>
    </>
  );
};
