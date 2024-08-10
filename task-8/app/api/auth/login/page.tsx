"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { useCookies } from "next-client-cookies";

const InputLabel = ({ label, htmlFor }: { label: string; htmlFor: string }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="font-epilogue font-semibold text-[#515B6F]"
    >
      {label}
    </label>
  );
};
const Login = () => {
  const cookies = useCookies();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ email: string; password: string }>();

  const onSubmit = handleSubmit((data) => {
    data = { ...data };
    axios
      .post("https://akil-backend.onrender.com/login", data)
      .then((response) => {
        if (response.status == 200) {
          cookies.set("access-token", response.data.data.accessToken);
          router.push("/");
          router.refresh();
        }
      })
      .catch(function (error) {});
  });
  return (
    <div className="flex flex-col items-center gap-6 w-6/12">
      <h1 className="font-poppins text-[#25324B] text-3xl font-extrabold">
        Welcome Back,
      </h1>

      <div className="text-[#a5a4a7] font-epilogue font-normal text-base flex w-6/12 justify-between items-center">
        <div className="bg-[#a5a4a7] w-8/12 border"></div>
        <p className="w-full text-center"></p>
        <div className="bg-[#a5a4a7] w-8/12 border"></div>
      </div>

      <form
        action=""
        className="flex flex-col w-6/12 gap-5"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-1">
          <InputLabel htmlFor="" label="Email Address" />
          <input
            type="email"
            id=""
            className="border border-[#D6DDEB] p-3 rounded outline-none"
            placeholder="Enter email address"
            {...register("email")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <InputLabel htmlFor="" label="Password" />
          <input
            type="password"
            id=""
            className="border border-[#D6DDEB] p-3 rounded outline-none"
            placeholder="Enter password"
            {...register("password")}
          />
        </div>

        <button
          type="submit"
          className="bg-[#2d298e] hover:bg-[#2d296e] p-3 rounded-full text-white"
        >
          Login
        </button>
      </form>

      <div className="flex gap-2 ">
        <p className="text-[#202430]">Don’t have an account?</p>
        <Link href="/api/auth/signup" className="text-[#425cac]">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
