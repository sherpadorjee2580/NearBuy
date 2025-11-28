import "./shopProducts.css";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function shopProductsPage() {
  const productType = [
    { type: "vegetables & fruits" },
    { type: "Dairy & local Products" },
    { type: "Clothes" },
    { type: "Household items" },
  ];
  const sellerType = [{ type: "Local farmer" }, { type: "Retail shop" }];

  const products = [
    {
      productImage: "/images/banana.jpg",
      productName: "Banana",
      sellerName: "Green valley Farm",
      sellerType: "Farmer",
      productPrice: "Rs. 120",
      productRating: <FaStar />,
    },
    {
      productImage: "/images/banana.jpg",
      productName: "Banana",
      sellerName: "Green valley Farm",
      sellerType: "Farmer",
      productPrice: "Rs. 120",
      productRating: <FaStar />,
    },
    {
      productImage: "/images/banana.jpg",
      productName: "Banana",
      sellerName: "Green valley Farm",
      sellerType: "Farmer",
      productPrice: "Rs. 120",
      productRating: <FaStar />,
    },
    {
      productImage: "/images/banana.jpg",
      productName: "Banana",
      sellerName: "Green valley Farm",
      sellerType: "Farmer",
      productPrice: "Rs. 120",
      productRating: <FaStar />,
    },
    {
      productImage: "/images/banana.jpg",
      productName: "Banana",
      sellerName: "Green valley Farm",
      sellerType: "Farmer",
      productPrice: "Rs. 120",
      productRating: <FaStar />,
    },
    {
      productImage: "/images/banana.jpg",
      productName: "Banana",
      sellerName: "Green valley Farm",
      sellerType: "Farmer",
      productPrice: "Rs. 120",
      productRating: <FaStar />,
    },
  ];
  return (
    <>
      <div className="products w-screen flex items-center justify-center py-[50px]">
        <div className="products__container w-full flex flex-col items-start justify-start max-w-[1080px] gap-[10px]">
          <p className="products__title text-2xl font-bold">
            Shop all products
          </p>
          <div className="products__innerContainer w-full flex items-start justify-start gap-[15px] ">
            <div className="products__left flex flex-1 flex-col border border-gray-300 p-[10px] rounded-[10px] gap-3 h-screen">
              <div className="product__category w-full flex flex-col">
                <p className="product__category-title font-bold">Categories</p>
                <div className="product__categoryContainer w-full flex flex-col gap-1">
                  {productType.map((item, index) => (
                    <div
                      className="products__type flex w-full gap-2"
                      key={index}
                    >
                      <input type="checkbox" />
                      <label htmlFor={item.type}>{item.type}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="products__range w-full flex flex-col">
                <p className="products__range-title">Price range</p>
                <input
                  type="number"
                  className="product__inputRange border border-gray-300 rounded-[5px]"
                />
                <span className="approximate range text-[12px] text-gray-300">
                  Approximate range
                </span>
              </div>
              <div className="prodcuts__sellerType">
                <p className="products__sellerType-title font-bold">
                  Seller type
                </p>
                <div className="products__sellerTypeContainer w-full">
                  {sellerType.map((item, index) => (
                    <div
                      className="Products__seller-localFarmer w-full flex items-center justify-start gap-1"
                      key={index}
                    >
                      <input type="checkbox" />
                      <label htmlFor={item.type}>{item.type}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="products__right flex flex-3 flex-col gap-[15px]">
              <div className="products__sorting w-full flex items-center justify-end">
                <select
                  name="sorting"
                  id="sorting"
                  className="products__select border border-gray-400 h-[35px] min-w-[120px] rounded-[5px] text-gray-400"
                >
                  <option value="newest">Newest</option>
                  <option value="newest">Oldest</option>
                  <option value="newest">Cheapest</option>
                  <option value="newest">Most Expensive</option>
                </select>
              </div>
              <div className="Products__dashboard w-full grid grid-cols-3 gap-3">
                {products.map((item, index) => (
                  <div
                    className="product__info flex flex-col border rounded-[10px] p-[10px] border-gray-400 gap-[5px] "
                    key={index}
                  >
                    <Image
                      src={item.productImage}
                      alt="image"
                      height={30}
                      width={400}
                      className="product__image rounded-[10px]"
                    />
                    <p className="product__productName font-bold">
                      {item.productName}
                    </p>
                    <div className="product__typeContainer w-full flex items-center gap-4 ">
                      <p className="sellerName text-gray-400 text-[14px]">
                        {item.sellerName}
                      </p>
                      <button className="sellerType h-[30px] bg-red-300 px-[10px] text-[14px] font-bold text-red-400 rounded-[15px]">
                        {item.sellerType}
                      </button>
                    </div>
                    <div className="product__priceContainer w-full flex items-center justify-between">
                      <p className="product__price text-[14px] font-bold">
                        {item.productPrice}
                      </p>
                      <div className="product__rating text-yellow-400">
                        {item.productRating}
                      </div>
                    </div>
                    <button className="product__add h-[35px] w-full bg-blue-700 text-white font-bold rounded-[15px]">
                      Add to cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
