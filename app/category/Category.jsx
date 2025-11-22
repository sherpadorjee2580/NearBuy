"use client";
import React from "react";
import Image from "next/image";

const Category = () => {
  const categoryOpt = [
    {
      option: "Vegetables & Fruits",
      desc: "Farm-fresh greens,roots and seasonal fruits",
    },
    { option: "Clothes", desc: "Everyday wear and traditional local outfits" },
    {
      option: "Dairy & Local Producsts",
      desc: "Cheese,ghee,milk, and homemade goods.",
    },
    {
      option: "Household Items",
      desc: "Daily essentials,tools and Kitchenware.",
    },
  ];
  return (
    <div className="category w-screen flex items-center justify-center">
      <div className="category__container w-full flex items-start flex-col justify-center max-w-[1280px] gap-[10px]">
        <p className="category__title text-[22px] font-bold">
          Browse by category
        </p>
        <div className="categoty__optionContainer flex gap-[15px] items-center justify-start w-full">
          {categoryOpt.map((item, index) => (
            <div
              className="category__option flex flex-col gap-[5px] border rounded-[10px] border-gray-100 bg-white p-[10px] max-w-[270px]"
              key={index}
            >
              <div className="category__option-title flex items-center justify-start gap-[5px]">
                <Image
                  src="/images/hero.jpg"
                  alt="category"
                  height={30}
                  width={30}
                  className="category__image rounded-[50%]"
                />
                <p className="category__optionTxt font-[600]">{item.option}</p>
              </div>
              <div className="category__option-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
