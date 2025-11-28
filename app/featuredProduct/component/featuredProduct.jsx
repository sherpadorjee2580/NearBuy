import React from "react";
import "../featuredProduct.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const featuredProduct = () => {
  const products = [
    {
      image: "/images/banana.jpg",
      title: "Banana",
      merchant: "Thapa Family Farm",
      type: "Local farmer",
      price: "RS : 450",
    },
    {
      image: "/images/banana.jpg",
      title: "Banana",
      merchant: "Thapa Family Farm",
      type: "Local farmer",
      price: "RS : 450",
    },
    {
      image: "/images/banana.jpg",
      title: "Banana",
      merchant: "Thapa Family Farm",
      type: "Local farmer",
      price: "RS : 450",
    },
    {
      image: "/images/banana.jpg",
      title: "Banana",
      merchant: "Thapa Family Farm",
      type: "Local farmer",
      price: "RS : 450",
    },
  ];
  return (
    <div className="feature flex items-center justify-center w-screen my-[50px] ">
      <div className="feature__container flex items-start justify-start w-full max-w-[1080px] flex-col">
        <p className="feature__title font-bold text-4xl">
          Featured products from Jiri
        </p>
        <p className="feature__subtitle text-[20px] text-gray-400">
          Curated picks from local farmers & neighborhood shops.
        </p>
        <div className="feature__productContainer flex w-full items-start justify-start gap-2 ">
          {products.map((item, index) => (
            <div
              className="feature__product flex flex-col items-start justify-center gap-1 border rounded-[10px] p-[10px] border-gray-300"
              key={index}
            >
              <Image
                src={item.image}
                alt="product.img"
                height={100}
                width={250}
                className="feature__product-img rounded-[10px] "
              />
              <p className="feature__product-title text-[18px] font-[600]">
                {item.title}
              </p>
              <div className="feature__merchantContainer flex w-full items-center justify-between">
                <p className="feature__product-mechant text-gray-400">
                  {item.merchant}
                </p>
                <div className="feature__product-type h-[35px] px-[10px] flex items-center justify-center bg-pink-600 text-[14px] rounded-4xl text-pink-300">
                  {item.type}
                </div>
              </div>
              <div className="feature__productPriceContainer flex items-center justify-between w-full">
                <p className="feature__product-price">{item.price}</p>
                <div className="feature__product-rating flex items-center text-amber-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="feature__product-addBtn h-[35px] w-full flex items-center justify-center bg-blue-800 rounded-4xl text-white">
                Add to cart
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default featuredProduct;
