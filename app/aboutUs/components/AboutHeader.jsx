import React from "react";
import Image from "next/image";

const AboutHeader = () => {
  return (
    <div className="about__heade w-full flex items-center justify-center  max-w-5xl mx-auto px-4 py-12">
      <div className="about__headerContainer w-full max-w-[1080px] flex items-start justify-center gap-[20px]">
        <div className="about__headerLeft">
          <p className="about__route text-sm text-gray-500 mb-2">
            About NearBuy Jiri
          </p>
          <h1 className="about__title text-4xl font-bold mb-4">
            A local marketplace built for Jiri’s merchants and families
          </h1>
          <p className="about__subtitle text-gray-600 max-w-3xl mb-6">
            NearBuy connects neighborhood shops, farmers, and households in one
            simple place...
          </p>

          <div className="about__tags flex flex-wrap gap-2">
            <span className="about__tag bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
              Focused on Jiri & nearby wards
            </span>
            <span className="about__tag bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              Designed for small shops & families
            </span>
            <span className="about__tag bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
              Local first
            </span>
          </div>
        </div>
        <div className="about__heroImg flex justify-center">
          <Image
            src="/images/hero.jpg"
            width={900}
            height={400}
            className="rounded-xl shadow"
            alt="Market"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
