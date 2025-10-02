import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import All from "../components/Women/New/All";

import Life_style from "../components/Women/New/life_style";
import Cusual from "../components/Women/New/Casual";
import Dress from "../components/Women/New/Dress";
import Alls from "../components/Women/Clothing/Alls";
import Vest from "../components/Women/Clothing/Vest";
import Blazers from "../components/Women/Clothing/Blazers";
import Shirts from "../components/Women/Clothing/Shirts";
import Polo_Shirts from "../components/Women/Clothing/Polo_Shirts";
import T_Shirts from "../components/Women/Clothing/T_Shirts";
import Jackets from "../components/Women/Clothing/Jackets";
import HS from "../components/Women/Clothing/HS";
import Cardigans from "../components/Women/Clothing/Cardigans";
import Trousers from "../components/Women/Clothing/Trousers";
import Jeans from "../components/Women/Clothing/Jeans";
import Shorts from "../components/Women/Clothing/Shorts";
import Boxers from "../components/Women/Clothing/Boxers";

import Sandals from "../components/Women/Soes/Sandals";
import Allss from "../components/Women/Soes/Allss";
import Allsss from "../components/Women/Accessories/Allsss";
import Bows from "../components/Women/Accessories/Bows";
import Socks from "../components/Women/Accessories/Socks";
import HC from "../components/Women/Accessories/CH";
import Back_Pack from "../components/Women/Accessories/Back_Pack";
import Bags from "../components/Women/Accessories/Bags";
import Belts from "../components/Women/Accessories/Belts";
import Allssss from "../components/Shop_by_collection/Allssss";
import Women_Denim from "../components/Shop_by_collection/Women_Denim";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* New In */}
        <Route path="/all" element={<All />} />
        <Route path="/lifes" element={<Life_style />} />
        <Route path="/casual" element={<Cusual />} />
        <Route path="/dress" element={<Dress />} />
        {/*Clothing */}
        <Route path="/alls" element={<Alls />} />
        <Route path="/vest" element={<Vest />} />
        <Route path="/blazer" element={<Blazers />} />
        <Route path="/Shirt" element={<Shirts />} />
        <Route path="/PShirt" element={<Polo_Shirts />} />
        <Route path="/T-Shirt" element={<T_Shirts />} />
        <Route path="/Jacket" element={<Jackets />} />
        <Route path="/HS" element={<HS />} />
        <Route path="/Cardigan" element={<Cardigans />} />
        <Route path="/Trouser" element={<Trousers />} />
        <Route path="/Jean" element={<Jeans />} />
        <Route path="/Short" element={<Shorts />} />
        <Route path="/Boxer" element={<Boxers />} />
        {/* Shoes */}
        <Route path="/allss" element={<Allss />} />
        <Route path="/sandals" element={<Sandals />} />
        {/* Accesseries */}
        <Route path="/allsss" element={<Allsss />} />
        <Route path="/bows" element={<Bows />} />
        <Route path="/socks" element={<Socks />} />
        <Route path="/HC" element={<HC />} />
        <Route path="/backpacks" element={<Back_Pack />} />
        <Route path="/bags" element={<Bags/>} />
        <Route path="/belts" element={<Belts/>} />
        {/* Sop By Collection */}
        <Route path="/allssss" element={<Allssss/>}/>
        <Route path="/WD" element={<Women_Denim/>}/>
      </Routes>
    </div>
  );
}
