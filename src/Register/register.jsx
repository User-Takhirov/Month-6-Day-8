import React from "react";
import { useForm } from "react-hook-form";
import { useGetUsersMutation } from "../redux/service/user-register";
import { createUser } from "../redux/reducer/user-reducer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export const Register = () => {
  const [getusers] = useGetUsersMutation();
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submit = (data) => {
    getusers(data)
      .unwrap()
      .then((res) => {
        navigate("/app");
        dispatch(createUser(res));
      })
      .catch((error) => console.log(error));
    reset();
  };
  return (
    <>
      <form
        className="text-center mt-[100px] bg-red-400 w-[500px] mx-auto p-[50px] rounded-[20px]"
        onSubmit={handleSubmit(submit)}
      >
        <h1 className="text-[25px] mb-[10px]">Register</h1>
        <div>
          <input
            placeholder="Name"
            {...register("name")}
            autoComplete="off"
            className="py-[10px] w-full bg-cyan-500 mb-[10px] px-[10px] rounded-[10px] outline-none placeholder:text-white text-white"
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="Email"
            {...register("email")}
            autoComplete="off"
            className="w-full py-[10px] bg-cyan-500 mb-[10px] px-[10px] rounded-[10px] outline-none placeholder:text-white text-white"
            type="email"
          />
        </div>
        <div>
          <input
            placeholder="Password"
            {...register("password")}
            autoComplete="off"
            className="w-full py-[10px]  bg-cyan-500 mb-[10px] px-[10px] rounded-[10px] outline-none placeholder:text-white text-white"
            type="password"
          />
        </div>
        <div>
          <button className="bg-green-500 w-full p-[10px] rounded-[10px] text-white">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
