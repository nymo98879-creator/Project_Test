import React from "react";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTiktok, FaLocationDot } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineSecurity, MdCurrencyExchange } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
export default function Footer() {
  return (
    <div>
      <div className="bg-black/85 w-full h-[200px] lg:h-[250px]  grid grid-cols-2 lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 md:px-10 lg:px-28 ">
        {/* <h1 className="text-white">Footer</h1> */}
        <div className="h-full  px-0 py-6 lg:ml-20 max-sm:hidden">
          <h1 className="text-white text-xl font-bold">Fashion App</h1>
          <ul className="mt-2 space-y-2">
            <li className="text-white flex items-center">
              <MdOutlinePhoneAndroid className="" />
              <h1 className="ml-2">IOS App</h1>
            </li>
            <li className="text-white flex items-center">
              <MdOutlinePhoneAndroid />
              <h1 className="ml-2">Antroid App</h1>
            </li>
          </ul>
        </div>
        <div className="h-full  px-3 py-6 lg:ml-20 ">
          <h1 className="text-white text-xl font-bold">Follow Us</h1>
          <ul className="mt-2 space-y-2">
            <li className="text-white flex items-center">
              <ImFacebook className="" />
              <h1 className="ml-2">Facebook</h1>
            </li>
            <li className="text-white flex items-center">
              <PiInstagramLogoFill />
              <h1 className="ml-2">Intragram</h1>
            </li>
            <li className="text-white flex items-center">
              <FaTiktok />
              <h1 className="ml-2">TikTok</h1>
            </li>
            <li className="text-white flex items-center">
              <FaTelegramPlane />
              <h1 className="ml-2">Telegram</h1>
            </li>
          </ul>
        </div>

        <div className="h-full  px-0 py-6 lg:ml-20 ">
          <h1 className="text-white text-xl font-bold">Customer Services</h1>
          <ul className="mt-2 space-y-2">
            <li className="text-white flex items-center">
              <MdCurrencyExchange className="" />
              <h1 className="ml-2">Online exchange policy</h1>
            </li>
            <li className="text-white flex items-center">
              <MdOutlineSecurity />
              <h1 className="ml-2">Privacy Policy</h1>
            </li>
            <li className="text-white flex items-center">
              <AiOutlineMessage />
              <h1 className="ml-2">FAQs & guides</h1>
            </li>
            <li className="text-white flex items-center">
              <FaLocationDot />
              <h1 className="ml-2">Find a store</h1>
            </li>
          </ul>
        </div>
        <div className="h-full  px-0 py-6 lg:ml-20 max-sm:hidden md:ml-10">
          <h1 className="text-white text-xl font-bold">We Accept</h1>
          <ul className="mt-2 space-y-2">
            <li className="text-white flex items-center">
              <MdCurrencyExchange className="" />
              <h1 className="ml-2">Online exchange policy</h1>
            </li>
            <li className="text-white flex items-center">
              <MdOutlineSecurity />
              <h1 className="ml-2">Privacy Policy</h1>
            </li>
            <li className="text-white flex items-center">
              <AiOutlineMessage />
              <h1 className="ml-2">FAQs & guides</h1>
            </li>
            <li className="text-white flex items-center">
              <FaLocationDot />
              <h1 className="ml-2">Find a store</h1>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[100px] bg-black/85 lg:hidden">
        <h1 className="text-xl font-bold text-white px-3">We Accept</h1>
      </div>
    </div>
  );
}
