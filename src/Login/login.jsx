import React from "react";
import { useForm } from "react-hook-form";
import { createUser } from "../redux/reducer/user-reducer";
import { Link, useNavigate } from "react-router-dom";
import { useGetLoginUsersMutation } from "../redux/service/user-login";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export const Login = () => {
  const dispatch = useDispatch();
  const [getLogin] = useGetLoginUsersMutation();
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    getLogin(data)
      .unwrap()
      .then((res) => {
        if (res) {
          console.log(res);
          dispatch(createUser(res));
          navigate("/app", { replace: true });
          toast.success(`Welcome back ${res.user.name}`);
        }
      })
      .catch((error) => toast.error(error.data));

    reset();
  };
  return (
    <>
      <form
        className="text-center mt-[100px] bg-red-400 w-[500px] mx-auto p-[50px] rounded-[20px]"
        onSubmit={handleSubmit(submit)}
      >
        <Link to={"/register"}>
          <h1 className="text-right text-[18px] mb-[10px]">Register</h1>
        </Link>
        <h1 className="text-[25px] mb-[10px]">Login</h1>
        <div>
          <input
            placeholder="Email"
            {...register("email")}
            autoComplete="auto"
            className="py-[10px] w-full bg-cyan-500 mb-[10px] px-[10px] rounded-[10px] outline-none placeholder:text-white text-white"
            type="email"
          />
        </div>
        <div>
          <input
            placeholder="Password"
            {...register("password")}
            autoComplete="auto"
            className="py-[10px] w-full bg-cyan-500 mb-[10px] px-[10px] rounded-[10px] outline-none placeholder:text-white text-white"
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
