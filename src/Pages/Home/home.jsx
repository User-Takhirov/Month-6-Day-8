import React from "react";
import { useGetPhonesQuery } from "../../redux/service/phone";
import { HomeCard } from "../../components/homeCard";
import { Link } from "react-router-dom";
export const Home = () => {
  const { data } = useGetPhonesQuery();
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-4 text-center gap-[20px]">
          {data?.map((item) => (
            <Link key={item.id} to={`/app/detail/${item.id}`}>
              <HomeCard key={item.id} item={item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
