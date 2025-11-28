import Image from "next/image";
import Hero from "./hero/hero";
import Category from "./category/Category";
import FeaturedProduct from "./featuredProduct/page";
import ShopProducts from "./shopProducts/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <FeaturedProduct />
      <ShopProducts />
    </>
  );
}
