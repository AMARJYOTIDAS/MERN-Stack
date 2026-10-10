import React from "react";

import { useState } from "react";
import authService from "../Appwrite/Auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 p-10 rounded-full border-black/10`}
      >
        <div className="mb-2 flex justify-center ">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p>
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary
                     transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center"> {error}</p>}

        <form onSubmit={handleSubmit(create)} className="">
          <div className="space-y-5">
            //name
            <input
              label="Full nam:"
              placeholder="Enter Your full name"
              {...register("name", {
                required: true,
              })}
            />
            //email
            <input
              label="email"
              placeholder="Enter Your Email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <input
              label="password:"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <button type="submit" className="w-full">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
