"use client";
import React from "react";
import Image from "next/image";
import "./login.css";

const loginForm = () => {
  return (
    <div className="login w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="login__container w-full h-full flex items-center justify-center">
        <form
          action="/SignUp"
          className="login__form min-w-[400px] min-h-[400px] bg-gray-50 border border-gray-400 rounded-[15px] flex items-start justify-start flex-col text-black p-[20px] gap-[5px]"
        >
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          <p className="login__title font-bold text-[22px]">Log In</p>
          <p className="login__subTitle text-gray-600 text-[14px]">
            Access your NearBuy account
          </p>
          <label htmlFor="Email" className="login__label font-bold text-[14px]">
            Email
          </label>
          <input
            type="email"
            className="login__input"
            placeholder="you@example.com"
            required
          />
          <label htmlFor="password" className="login__label">
            Password
          </label>
          <input
            type="password"
            className="login__input"
            placeholder="********"
            required
          />
          <div className="login__rememberContainer w-full flex items-center justify-between">
            <div className="login__rememberMe flex items-center justify-center gap-[5px]">
              <input type="checkbox" className="login__checkbox" />
              <label
                htmlFor="remember me"
                className="login__rememberLabel text-[12px]"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="login__forgot text-[14px] text-blue-500">
              Forgot passowrd ?{" "}
            </a>
          </div>
          <button className="login__button h-[40px] w-full bg-blue-600 rounded-[8px] text-white font-bold text-[14px]">
            Log in
          </button>
          <p className="noAccount text-[14px] text-gray-700">
            Don't have an account?
            <a
              href="/SignUp"
              className="login__signUp text-blue-600 text-[14px]"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default loginForm;
