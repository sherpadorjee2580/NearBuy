"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav h-[80px] w-screen flex items-center justify-center bg-white border-b border-gray-100">
      <div className="nav__container h-full w-full flex items-center justify-between px-2">
        <div className="nav__left w-[30%] flex items-center justify-center">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" height={100} width={100} />
          </Link>
        </div>
        <div className="nav__mid flex items-center justify-center w-[40%]">
          <div className="nav__navOptContainer w-full flex items-center justify-center">
            <Link className="navOpt flex flex-1" href="/">
              Home
            </Link>

            <Link className="navOpt flex flex-1" href="/shopProducts">
              Shop
            </Link>

            <Link className="navOpt flex flex-1" href="/aboutUs">
              About
            </Link>
            <Link className="navOpt flex flex-1" href="/contactUs">
              Contact
            </Link>
          </div>
        </div>
        <div className="nav__right w-[30%] flex items-center justify-center gap-2">
          <Link href="/login">
            <button className="nav__loginBtn">Login</button>
          </Link>
          <Link href="/signUp">
            <button className="nav__signUpBtn">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
