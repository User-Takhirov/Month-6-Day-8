import React from "react";
import { useGetCompsQuery } from "../../redux/service/computer";
import { Link } from "react-router-dom";
import { HomeCard } from "../../components/homeCard";
export const Computer = () => {
  const { data } = useGetCompsQuery();
  return (
    <>
      <div className="container mb-[50px]">
        <div className="grid grid-cols-4 gap-[20px]">
          {data?.map((item) => (
            <Link key={item.id} to={`/app/comp-detail/${item.id}`}>
              <HomeCard key={item.id} item={item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
