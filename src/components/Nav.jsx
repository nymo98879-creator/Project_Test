import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { FiUser, FiMenu } from "react-icons/fi";
// import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const [openMenu, setOpenMenu] = useState(null); // store which menu is open

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu); // close if same clicked, else open
  };

  return (
    <div className="">
      <nav className="w-full h-[60px] bg-gray-200 flex gap-1  fixed top-0 left-0 z-50">
        {/* Left Side */}
        <div className="w-[20%] lg:w-[25%] h-full flex justify-center items-center">
          <div className="w-full h-full flex justify-center items-center text-3xl">
            {/* Toggle Button */}
            <FiMenu className="cursor-pointer" onClick={() => setNav(!nav)} />
          </div>
        </div>

        {/* Center */}
        <div className="w-[50%] lg:w-[50%] h-full flex justify-start lg:justify-center md:justify-center px-2 items-center">
          <h1 className="font-bold text-xl lg:text-4xl">FASHION SHOP</h1>
        </div>

        {/* Right Side */}
        <div className="w-[30%] lg:w-[15%] h-full b flex justify-center items-center">
          <div className="w-full h-full flex justify-evenly items-center text-2xl">
            <IoIosSearch />
            <FaRegBell />
            <FiUser />
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full text-white transition-all duration-300 ease-in-out 
          ${nav ? "w-[80%] lg:w-[30%] z-50" : "w-0 hidden"}`}
      >
        <div className="w-full h-full bg-red-50 flex flex-col">
          {/* Top Menu */}
          <div className="w-full h-[6%] flex bg-white">
            <div
              className={`w-full flex justify-center items-center ${
                activeTab === "women" ? "border-b border-black font-bold" : ""
              }`}
            >
              <div
                className="w-[10%] text-center text-black cursor-pointer"
                onClick={() => setActiveTab("women")}
              >
                WOMEN
              </div>
            </div>
            <div
              className={`w-full flex justify-center items-center ${
                activeTab === "men" ? "border-b border-black font-bold" : ""
              }`}
            >
              <div
                className={`w-full text-center text-black cursor-pointer `}
                onClick={() => setActiveTab("men")}
              >
                MEN
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full flex-1 bg-white overflow-y-auto">
            {/* Women Div */}
            {activeTab === "women" && (
              <div className="w-full h-full text-black text-3xl ">
                <div className="px-5 py-5 ">
                  <ul className="space-y-5">
                    {/* */}
                    <li>
                      <NavLink
                        to="/"
                        onClick={() => setNav(!nav)}
                        className={({ isActive }) =>
                          isActive ? "text-red-500" : ""
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    {/*  */}
                    <li>
                      <h2
                        className="font-medium text-4xl cursor-pointer flex justify-between items-center"
                        onClick={() => toggleMenu("newin")}
                      >
                        New In
                      </h2>
                      {openMenu === "newin" && (
                        <ul className="ml-4 mt-2 space-y-1 text-gray-600 font-normal">
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/all"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              All
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/life_style"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Lifestyle
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/casual"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Casual
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/dress"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Dress
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    {/* */}
                    <li>
                      <h2
                        className="font-medium text-4xl cursor-pointer flex justify-between items-center"
                        onClick={() => toggleMenu("clothing")}
                      >
                        Clothing
                      </h2>
                      {openMenu === "clothing" && (
                        <ul className="ml-4 mt-2 space-y-1 text-gray-600 font-normal">
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/alls"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              All
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/vest"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Vest
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/blazer"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Blazers
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/shirt"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Shirts
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/PShirt"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Polo Shirts
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/T-Shirt"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              T-Shirts
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/Jacket"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Jackets
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/HS"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Hoodies & Sweatshirts
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/Cardigan"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Cardigans
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/Trouser"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Trousers
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/jean"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Jeans
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/short"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Shorts
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/boxer"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Boxers
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* */}
                    <li>
                      <h2
                        className="font-medium text-4xl cursor-pointer flex justify-between items-center"
                        onClick={() => toggleMenu("shoes")}
                      >
                        Shoes
                      </h2>
                      {openMenu === "shoes" && (
                        <ul className="ml-4 mt-2 space-y-1 text-gray-600 font-normal">
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/allss"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              All
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/sandals"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Sandals
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    {/* */}
                    <li>
                      <h2
                        className="font-medium text-4xl cursor-pointer flex justify-between items-center"
                        onClick={() => toggleMenu("accessories")}
                      >
                        Accessories
                      </h2>
                      {openMenu === "accessories" && (
                        <ul className="ml-4 mt-2 space-y-1 text-gray-600 font-normal">
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/allsss"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              All
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/bows"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Bows
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/socks"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Socks
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/HC"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Caps & Hats
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/backpacks"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Backpacks
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/bags"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Bags
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/belts"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              Belts
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    {/* */}
                    <li>
                      <h2
                        className="font-medium text-4xl cursor-pointer flex justify-between items-center"
                        onClick={() => toggleMenu("shop")}
                      >
                        Shop by collection
                      </h2>
                      {openMenu === "shop" && (
                        <ul className="ml-4 mt-2 space-y-1 text-gray-600 font-normal">
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/allssss"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              All
                            </NavLink>
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            <NavLink
                              to="/WD"
                              onClick={() => setNav(!nav)}
                              className={({ isActive }) =>
                                isActive ? "border-b-2 border-black" : ""
                              }
                            >
                              
                            Women Denim
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    {/* */}
                    <li>
                      <h2
                        className="font-medium text-4xl cursor-pointer flex justify-between items-center text-red-600"
                        onClick={() => toggleMenu("sale")}
                      >
                        SALE
                      </h2>
                      {openMenu === "sale" && (
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
                  </ul>
                </div>
              </div>
            )}

            {/* Men Div */}
            {activeTab === "men" && (
              <div className="w-full h-full text-black text-3xl ">
                <div className="px-5 py-5 ">
                  <ul className="space-y-5">
                    {/* */}
                    <li>
                      <h2
                        className="font-medium text-4xl cursor-pointer flex justify-between items-center"
                        onClick={() => toggleMenu("newinm")}
                      >
                        New In
                      </h2>
                      {openMenu === "newinm" && (
                        <ul className="ml-4 mt-2 space-y-1 text-gray-600 font-normal">
                          <li className="cursor-pointer text-xl hover:text-black">
                            All
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Lifestyle
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Casual
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            New In Top
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            New In Bottom
                          </li>
                        </ul>
                      )}
                    </li>
                    {/* */}
                    <li>
                      <h2
                        className="font-medium text-4xl cursor-pointer flex justify-between items-center"
                        onClick={() => toggleMenu("clothingm")}
                      >
                        Clothing
                      </h2>
                      {openMenu === "clothingm" && (
                        <ul className="ml-4 mt-2 space-y-1 text-gray-600 font-normal">
                          <li className="cursor-pointer text-xl hover:text-black">
                            All
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Vest
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Blazers
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Shirts
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Polo Shirts
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            T-Shirts
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Jackets
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Hoodies & Sweatshirts
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Cardigans
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Trousers
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Jeans
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Shorts
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Boxers
                          </li>
                        </ul>
                      )}
                    </li>
                    {/* */}
                    <li>
                      <h2
                        className="font-medium text-4xl cursor-pointer flex justify-between items-center"
                        onClick={() => toggleMenu("shoesm")}
                      >
                        Shoes
                      </h2>
                      {openMenu === "shoesm" && (
                        <ul className="ml-4 mt-2 space-y-1 text-gray-600 font-normal">
                          <li className="cursor-pointer text-xl hover:text-black">
                            All
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Sneakers
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Sandals
                          </li>
                        </ul>
                      )}
                    </li>
                    {/* */}
                    <li>
                      <h2
                        className="font-medium text-4xl cursor-pointer flex justify-between items-center"
                        onClick={() => toggleMenu("accessoriesm")}
                      >
                        Accessories
                      </h2>
                      {openMenu === "accessoriesm" && (
                        <ul className="ml-4 mt-2 space-y-1 text-gray-600 font-normal">
                          <li className="cursor-pointer text-xl hover:text-black">
                            All
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Caps & hats
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Bags
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Socks
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Belts
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Backpacks
                          </li>
                        </ul>
                      )}
                    </li>
                    {/* */}
                    <li>
                      <h2
                        className="font-medium text-4xl cursor-pointer flex justify-between items-center"
                        onClick={() => toggleMenu("shopm")}
                      >
                        Shop by collection
                      </h2>
                      {openMenu === "shopm" && (
                        <ul className="ml-4 mt-2 space-y-1 text-gray-600 font-normal">
                          <li className="cursor-pointer text-xl hover:text-black">
                            All
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Men Denim
                          </li>
                        </ul>
                      )}
                    </li>
                    {/* */}
                    <li>
                      <h2
                        className="font-medium text-4xl cursor-pointer flex justify-between items-center text-red-600"
                        onClick={() => toggleMenu("salem")}
                      >
                        SALE
                      </h2>
                      {openMenu === "salem" && (
                        <ul className="ml-4 mt-2 space-y-1 text-gray-600 font-normal">
                          <li className="cursor-pointer text-xl hover:text-black">
                            All
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Lifestyle
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            Casual
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            New In Top
                          </li>
                          <li className="cursor-pointer text-xl hover:text-black">
                            New In Bottom
                          </li>
                        </ul>
                      )}
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
          className="fixed top-0 right-0 w-[20%] z-50 lg:w-[70%] h-full bg-black/50"
        ></div>
      )}
    </div>
  );
}
