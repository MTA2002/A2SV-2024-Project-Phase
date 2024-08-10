"use client";
import { VerifyType } from "@/app/types/VerifyType";
import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";

const VerifyEmail = () => {
  const cookies = useCookies();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VerifyType>();

  const onSubmit = handleSubmit((data) => {
    const otp = data.number1 + data.number2 + data.number3 + data.number4;
    axios
      .post("https://akil-backend.onrender.com/verify-email", {
        email: localStorage.getItem("email"),
        otp: otp,
      })
      .then((response) => {
        cookies.set("access-token", response.data.data.accessToken);
        router.push("/");
      })
      .catch(function (error) {});
    console.log(otp);
  });
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="font-poppins text-[#25324B] text-3xl font-extrabold">
        Verify Email
      </h1>
      <p className="text-[#7C8493] text-left">
        We&apos;ve sent a verification code to the email address you <br />{" "}
        provided. To complete the verification process, please <br /> enter the
        code here.
      </p>

      <form
        action=""
        className="flex flex-col gap-5 items-center"
        onSubmit={onSubmit}
      >
        <div className="flex gap-9">
          <input
            type="text"
            className="border border-[#b2acf3] bg-[#f9f8fd] text-[#8a8e98] outline-none rounded p-3 w-[76px] text-center text-2xl"
            placeholder="0"
            maxLength={1}
            {...register("number1")}
          />
          <input
            type="text"
            className="border border-[#b2acf3] bg-[#f9f8fd] text-[#8a8e98] outline-none rounded p-3 w-[76px] text-center text-2xl"
            placeholder="0"
            maxLength={1}
            {...register("number2")}
          />
          <input
            type="text"
            className="border border-[#b2acf3] bg-[#f9f8fd] text-[#8a8e98] outline-none rounded p-3 w-[76px] text-center text-2xl"
            placeholder="0"
            maxLength={1}
            {...register("number3")}
          />
          <input
            type="text"
            className="border border-[#b2acf3] bg-[#f9f8fd] text-[#8a8e98] outline-none rounded p-3 w-[76px] text-center text-2xl"
            placeholder="0"
            maxLength={1}
            {...register("number4")}
          />
        </div>
        <div>
          <p className="text-[#858b95]">
            You can request to
            <span className="text-[#32278a]"> Resend code</span> in
            <span className="text-[#32278a]"> 0:30.</span>
          </p>
        </div>
        <button
          type="submit"
          className="bg-[#2d298e] hover:bg-[#2d296e] p-3 rounded-full text-white w-full"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
