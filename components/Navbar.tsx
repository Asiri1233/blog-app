"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const navlinks = [
  { label: "About", href: "#about" },
  { label: "Create a blog", href: "/create" },
  { label: "Pricing", href: "#pricing" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
];

const Navbar = () => {
  const [shownav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!shownav);
  };

  return (
    <div>
      <nav className="w-[100%] h-[100px] flex  border-b-[1px] border-gray-900">
        <div className="w-5/6 flex items-center justify-between mx-auto">
          <div className="flex flex-row items-center gap-3 mr-3">
            <Link href="/">
              <img src="/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="gap-4 hidden lg:flex">
            {navlinks.map((item) => (
              <ul className="text-white md:text-xl font-Wsans">
                <a
                  className="hover:text-hover-color transition duration-300"
                  href={item.href}
                >
                  {item.label}
                </a>
              </ul>
            ))}
          </div>
          <div className="flex md:gap-3 gap-2 text-white items-center">
            <input
              className="bg-[#242535] rounded-md text-white outline-none focus:outline-none w-[166px] p-1"
              placeholder="Search..."
            />
            <div className="lg:hidden flex ml-4">
              <FaBars color="white" size={20} onClick={toggleNav} />
            </div>
          </div>
        </div>
      </nav>
      {shownav && (
        <div className="lg:hidden flex w-full h-[100vh] justify-center items-center bg-black text-white">
          <nav className="flex justify-center items-center flex-col">
            {navlinks.map((item) => (
              <ul
                key={item.href}
                className="text-white flex flex-col text-xl mb-12 border-b w-full items-center border-gray-400 "
              >
                <a
                  className="hover:text-hover-color transition duration-300"
                  href={item.href}
                >
                  {item.label}
                </a>
              </ul>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
