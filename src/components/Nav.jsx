import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { FiUser, FiMenu } from "react-icons/fi";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const [activeTab, setActiveTab] = useState("");

    const [openMenu, setOpenMenu] = useState(null); // store which menu is open

    const toggleMenu = (menu) => {
      setOpenMenu(openMenu === menu ? null : menu); // close if same clicked, else open
    };

  return (
    <div>
      <nav className="w-full h-[60px] bg-gray-200 flex gap-1 relative">
        {/* Left Side */}
        <div className="w-[33.33%] h-full  flex justify-center items-center">
          <div className="w-[20%] h-full flex justify-center items-center text-3xl">
            {/* Toggle Button */}
            <FiMenu className="cursor-pointer" onClick={() => setNav(!nav)} />
          </div>
        </div>

        {/* Center */}
        <div className="w-[33.33%] h-full  flex justify-center items-center">
          <h1 className="font-bold text-4xl">TEN ELEVEN</h1>
        </div>

        {/* Right Side */}
        <div className="w-[33.33%] h-full b flex justify-center items-center">
          <div className="w-[30%] h-full flex justify-evenly items-center text-3xl">
            <IoIosSearch />
            <FaRegBell />
            <FiUser />
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full text-white transition-all duration-300 ease-in-out 
            ${nav ? "w-[35%]" : "w-0 hidden"}`}
      >
        <div className="w-full h-screen bg-red-50">
          {/* Top Menu */}
          <div className="w-full h-[6%] flex bg-white">
            <div
              className={`w-[50%] flex justify-center items-center ${
                activeTab === "women" ? "border-b border-black font-bold" : ""
              }`}
            >
              <div
                className="text-center text-black cursor-pointer"
                onClick={() => setActiveTab("women")}
              >
                WOMEN
              </div>
            </div>
            <div
              className={`w-[50%] flex justify-center items-center ${
                activeTab === "men" ? "border-b border-black font-bold" : ""
              }`}
            >
              <div
                className={`text-center text-black cursor-pointer `}
                onClick={() => setActiveTab("men")}
              >
                MEN
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full h-[94%] flex bg-white">
            {/* Women Div */}
            {activeTab === "women" && (
              <div className="w-full h-full text-black text-3xl">
                <div className="px-5 py-5 ">
                  <ul className="space-y-5">
                    {/*  */}
                    <li>
                      <h2
                        className="font-bold text-xl cursor-pointer flex justify-between items-center"
                        onClick={() => toggleMenu("newin")}
                      >
                        New In
                        <span>{openMenu === "newin" ? "−" : "+"}</span>
                      </h2>
                      {openMenu === "newin" && (
                        <ul className="ml-4 mt-2 space-y-1 text-gray-600 font-normal">
                          <li className="cursor-pointer hover:text-black">
                            All
                          </li>
                          <li className="cursor-pointer hover:text-black">
                            Lifestyle
                          </li>
                          <li className="cursor-pointer hover:text-black">
                            Casual
                          </li>
                          <li className="cursor-pointer hover:text-black">
                            New In Top
                          </li>
                          <li className="cursor-pointer hover:text-black">
                            New In Bottom
                          </li>
                        </ul>
                      )}
                    </li>
                    {/*  */}
                    <li className="font-medium cursor-pointer text-4xl">
                      Clothing
                    </li>
                    <li className="font-medium cursor-pointer text-4xl">
                      Shoes
                    </li>
                    <li className="font-medium cursor-pointer text-4xl">
                      Accessories
                    </li>
                    <li className="font-medium cursor-pointer text-4xl">
                      Shop by collection
                    </li>
                    <li className="font-medium cursor-pointer text-4xl">
                      SALE
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Men Div */}
            {activeTab === "men" && (
              <div className="w-full h-full text-black text-3xl">
                <div className="px-5 py-5 ">
                  <ul className="space-y-5">
                    <li className="font-medium cursor-pointer text-4xl">
                      New In Men
                    </li>
                    <li className="font-medium cursor-pointer text-4xl">
                      Clothing
                    </li>
                    <li className="font-medium cursor-pointer text-4xl">
                      Shoes
                    </li>
                    <li className="font-medium cursor-pointer text-4xl">
                      Accessories
                    </li>
                    <li className="font-medium cursor-pointer text-4xl">
                      Shop by collection
                    </li>
                    <li className="font-medium cursor-pointer text-4xl">
                      SALE
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay Background */}
      {nav && (
        <div
          onClick={() => setNav(false)}
          className="fixed top-0 right-0 w-[65%] h-full bg-black/50"
        ></div>
      )}
    </div>
  );
}
