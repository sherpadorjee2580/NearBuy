"use client";
import React from "react";
import Image from "next/image";

const Category = () => {
  const categoryOpt = [
    {
      option: "Vegetables & Fruits",
      desc: "Farm-fresh greens,roots and seasonal fruits",
      img: "/images/vegetableFruits.jpg",
    },
    {
      option: "Clothes",
      desc: "Everyday wear and traditional local outfits",
      img: "/images/clothes.jpg",
    },
    {
      option: "Dairy & Local Producsts",
      desc: "Cheese,ghee,milk, and homemade goods.",
      img: "/images/dairyProducts.jpg",
    },
    {
      option: "Household Items",
      desc: "Daily essentials,tools and Kitchenware.",
      img: "/images/houseItems.jpg",
    },
  ];
  return (
    <div className="category w-screen flex items-center justify-center">
      <div className="category__container w-full flex items-start flex-col justify-center max-w-[1080px] gap-[10px]">
        <p className="category__title text-[22px] font-bold">
          Browse by category
        </p>
        <div className="categoty__optionContainer gap-[15px] grid grid-cols-4  w-full">
          {categoryOpt.map((item, index) => (
            <div
              className="category__option flex flex-col gap-[5px] border rounded-[10px] border-gray-100 bg-white p-[10px] max-w-[270px]"
              key={index}
            >
              <div className="category__option-title flex items-center justify-start gap-[5px]">
                <Image
                  src={item.img}
                  alt="category"
                  height={60}
                  width={60}
                  className="category__image rounded-r-full"
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
