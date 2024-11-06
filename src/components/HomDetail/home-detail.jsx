import React from "react";
import { useParams } from "react-router-dom";
import { useGetPhoneDetailQuery } from "../../redux/service/phoneDetail";

export const HomeDetail = () => {
  const { id } = useParams();
  const { data: phoneData } = useGetPhoneDetailQuery(id);
 
  return (
    <>
      {phoneData && (
        <div className="container w-[300px] mt-[20px] shadow-2xl rounded-[10px] p-[20px]">
          <img
            className="mx-auto mix-blend-darken"
            src={phoneData.img}
            alt={phoneData.title}
          />
          <div className="text-center">
            <h1 className="text-[20px] mt-[10px]">{phoneData.title}</h1>
            <strong>{phoneData.price}</strong>
            <p className="text-[17px]">{phoneData.color}</p>
            <h3 className="font-[700]">{phoneData.brand}</h3>
            <div>
              <button
                
                className="bg-green-400 p-[10px] w-full mt-[10px] text-white"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
