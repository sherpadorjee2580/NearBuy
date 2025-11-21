"use client";
import React from "react";
import Image from "next/image";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav h-[80px] w-screen flex items-center justify-center bg-gray-200">
      <div className="nav__container h-full w-full flex items-center justify-between px-2">
        <div className="nav__left w-[30%] flex items-center justify-center">
          <Image src="/images/logo.png" alt="logo" height={100} width={100} />
        </div>
        <div className="nav__mid flex items-center justify-center w-[40%]">
          <ul className="nav__navOptContainer w-full">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav__right w-[30%] flex items-center justify-center gap-2">
          <button className="nav__loginBtn">Login</button>
          <button className="nav__signUpBtn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
