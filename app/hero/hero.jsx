"use client";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Image from "next/image";

const hero = () => {
  return (
    <div className="hero w-screen flex items-center justify-center px-[100px] py-[50px]">
      <div className="hero__container w-full flex items-start justify-center  ">
        <div className="hero__left flex items-start justify-center flex-col flex-1 gap-3 px-[100px]">
          <p className="hero__title text-[60px] font-bold max-w-[400px]">
            Welcome to NearBuy
          </p>
          <p className="hero__subtitle text-[22px] font-[500]">
            Shop locally and support Jiri merchants
          </p>
          <div className="hero__searchSection flex items-center justify-center w-full">
            <input type="text" placeholder="Search for products" className="hero__searchBar h-[40px] w-[90%] border border-r-0 rounded-l-[10px] pl-[15px] " />
            <button className="hero__searchBtn h-[40px] w-[10%] border flex items-center justify-center border-l-0 rounded-r-[10px]">
              <FaMagnifyingGlass />
            </button>
          </div>
        </div>
        <div className="hero__right flex flex-1 items-center justify-center">
          <Image
            src="/images/hero.jpg"
            alt="hero.jpg"
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default hero;
