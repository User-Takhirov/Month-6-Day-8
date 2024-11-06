import React from "react";
import { useParams } from "react-router-dom";
import { useGetCompDetailQuery } from "../../redux/service/compDetail";
export const CompDetail = () => {
  const { id } = useParams();
  const { data } = useGetCompDetailQuery(id);
  return (
    <>
      {data && (
        <div className="container w-[300px] mt-[20px]  shadow-2xl rounded-[10px]  p-[20px]">
          <img className="mx-auto mix-blend-darken" src={data.img} alt="#" />
          <div className="text-center">
            <h1 className="text-[20px] mt-[10px]">{data.title}</h1>
            <strong>{data.price}</strong>
            <p className="text-[17px]">{data.color}</p>
            <h3 className="font-[700]">{data.brand}</h3>
            <div>
              <button className="bg-green-400 p-[10px] w-full mt-[10px] text-white">
                buy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
