"use client";
import React from "react";
import "./signUp.css";
import Image from "next/image";

const signUpForm = () => {
  return (
    <div className="signUp w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="signUp__container w-full h-full flex items-center justify-center">
        <form
          action="#"
          className="signUp__form min-w-[400px] min-h-[400px] bg-gray-50 border border-gray-400 rounded-[15px] flex items-start justify-start flex-col text-black p-[20px] gap-[5px]"
        >
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          <p className="signUp__title font-bold text-[22px]">Create account</p>
          <p className="signUp__subTitle text-gray-600 text-[14px]">
            Sign up as a customer or merchant
          </p>
          <div className="signUp__accountType w-full flex items-center justify-center gap-[10px] h-[40px] bg-gray-200 rounded-3xl ">
            <div className="signUp__customer h-[30px] bg-gray-50 flex items-center justify-center w-[47%] rounded-2xl text-[14px] ">
              Customer account
            </div>
            <div className="signUp__merchant h-[30px] bg-gray-50 flex items-center justify-center w-[47%] rounded-2xl text-[14px]">
              Merchant account
            </div>
          </div>
          <label
            htmlFor="Full Name"
            className="signUp__label font-bold text-[14px]"
          >
            Full Name
          </label>
          <input
            type="text"
            className="signUp__input"
            placeholder="Your full name"
            required
          />
          <label
            htmlFor="email"
            className="signUp__label font-bold text-[14px]"
          >
            Email
          </label>
          <input
            type="email"
            className="signUp__input"
            placeholder="you@example.com"
            required
          />
          <label
            htmlFor="Phone Number"
            className="signUp__label font-bold text-[14px]"
          >
            Phone Number
          </label>
          <input
            type="number"
            className="signUp__input"
            placeholder="98XXXXXX"
            required
          />
          <label htmlFor="password" className="signUp__label">
            Password
          </label>
          <input
            type="password"
            className="signUp__input"
            placeholder="Create a password"
            required
          />
          <label htmlFor="Confirm Password" className="signUp__label">
            Confirm Passowrd
          </label>
          <input
            type="password"
            className="signUp__input"
            placeholder="Re-enter password"
            required
          />

          <button className="signUp__button h-[40px] w-full bg-blue-600 rounded-[8px] text-white font-bold text-[14px]">
            Create account
          </button>
          <p className="noAccount text-[14px] text-gray-700">
            Already have an account?{" "}
            <a
              href="/Login"
              className="signUp__login text-blue-600 text-[14px]"
            >
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default signUpForm;
