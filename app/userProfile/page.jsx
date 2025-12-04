import React from "react";
import Image from "next/image";
import "./userProfile.css";

const page = () => {
  return (
    <div className="userProfile w-screen flex items-center justify-center mt-[20px]">
      <div className="userProfile__container w-full max-w-[1140px] flex flex-col gap-[20px]">
        <div className="userProfile__head w-full flex items-center justify-between">
          <div className="userProfile__left">
            <p className="userProfile__title font-bold text-[18px]">
              Account profile
            </p>
            <p className="userProfile__subtitle text-[14px] text-gray-400">
              Switch between customer and merchant views for this NearBuy
              account
            </p>
          </div>
          <div className="userProfile__right flex items-center justify-center gap-[20px] bg-gray-200 p-[10px] rounded-[40px]">
            <div className="userProfile__account">Customer</div>
            <div className="userProfile__account">Merchant</div>
          </div>
        </div>
        <div className="userProfile__mainSection w-full flex items-center justify-center gap-[50px]">
          <div className="userProfile__left flex flex-col items-center justify-center flex-1 border border-gray-400 rounded-[10px] p-[20px]">
            <div className="userProfile__imageSection flex w-full items-start justify-start gap-[15px] ">
              <Image
                src="/images/MyProfile.jpg"
                alt="profile images"
                height={80}
                width={80}
                className="userProfile__img rounded-full "
              />
              <div className="userProfile__nameSection w-full flex flex-col items-start justify-center">
                <p className="name font-bold">Dorji Sherpa</p>
                <section className="typeSection flex w-full items-center justify-between">
                  <div className="userType text-gray-500">Customer</div>
                  <div className="userLocation text-gray-500">Jiri Bazaar</div>
                </section>
                <div className="typeOfAccount h-[30px] w-full rounded-[20px] bg-gray-300 flex items-center justify-center text-white text-[14px]">
                  Customer Account
                </div>
              </div>
            </div>
            <table className="user__tableInfo w-full flex items-start justify-center flex-col my-[10px] gap-[5px]">
              <tr>
                <th className="table__heading text-gray-400 text-[14px]">
                  Account overview
                </th>
              </tr>
              <tr className="table__row">
                <td>Member Since</td>
                <td>2023</td>
              </tr>
              <tr className="table__row">
                <td>Orders Place</td>
                <td>32</td>
              </tr>
              <tr className="table__row">
                <td>Favorite Shops</td>
                <td>7</td>
              </tr>
              <tr>
                <th className="tableHeading text-gray-400 text-[14px]">
                  Contact
                </th>
              </tr>
              <tr className="table__row">
                <td>Email</td>
                <td>sherpadorjee2580@gmail.com</td>
              </tr>
              <tr className="table__row">
                <td>Phone</td>
                <td>+977 9823504602</td>
              </tr>
            </table>
            <button className="editProfile">Edit Profile</button>
            <button className="logOut">Log Out</button>
          </div>
          <div className="userProfile__right flex flex-col flex-3 items-center justify-center bg-amber-200">
            right section
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
