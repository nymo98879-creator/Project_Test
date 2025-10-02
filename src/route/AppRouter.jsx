import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "../pages/Home";

// Women
// New In
import All from "../components/Women/New/All";
import LifeStyle from "../components/Women/New/LifeStyle";
import Casual from "../components/Women/New/Casual";
import Dress from "../components/Women/New/Dress";


// Clothing
import Alls from "../components/Women/Clothing/Alls";
import Vest from "../components/Women/Clothing/Vest";
import Blazers from "../components/Women/Clothing/Blazers";
import Shirts from "../components/Women/Clothing/Shirts";
import PoloShirts from "../components/Women/Clothing/PoloShirts";
import TShirts from "../components/Women/Clothing/TShirts";
import Jackets from "../components/Women/Clothing/Jackets";
import HS from "../components/Women/Clothing/HS";
import Cardigans from "../components/Women/Clothing/Cardigans";
import Trousers from "../components/Women/Clothing/Trousers";
import Jeans from "../components/Women/Clothing/Jeans";
import Shorts from "../components/Women/Clothing/Shorts";
import Boxers from "../components/Women/Clothing/Boxers";

// Shoes
import Allss from "../components/Women/Shoes/Allss";
import Sandals from "../components/Women/Shoes/Sandals";

// Accessories
import Allsss from "../components/Women/Accessories/Allsss";
import Bows from "../components/Women/Accessories/Bows";
import Socks from "../components/Women/Accessories/Socks";
import HC from "../components/Women/Accessories/CH";
import BackPack from "../components/Women/Accessories/BackPack";
import Bags from "../components/Women/Accessories/Bags";
import Belts from "../components/Women/Accessories/Belts";

// Shop By Collection
import Allssss from "../components/Women/Shop_by_collection/Allssss";
import WomenDenim from "../components/Women/Shop_by_collection/WomenDenim";

// Men
// New
import MAll from "../components/Men/New/MAll";




export default function AppRouter() {
  return (
    <Routes>

      {/* Womne Route */}
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* New In */}
      <Route path="/all" element={<All/>} />
      <Route path="/lifeStyle" element={<LifeStyle />} />
      <Route path="/casual" element={<Casual/>} />
      <Route path="/dress" element={<Dress/>} />

      {/* Clothing */}
      <Route path="/alls" element={<Alls/>} />
      <Route path="/vest" element={<Vest/>} />
      <Route path="/blazer" element={<Blazers />} />
      <Route path="/shirt" element={<Shirts/>} />
      <Route path="/poloShirt" element={<PoloShirts />} />
      <Route path="/tShirt" element={<TShirts />} />
      <Route path="/jacket" element={<Jackets />} />
      <Route path="/hs" element={<HS />} />
      <Route path="/cardigan" element={<Cardigans />} />
      <Route path="/trouser" element={<Trousers />} />
      <Route path="/jean" element={<Jeans />} />
      <Route path="/short" element={<Shorts />} />
      <Route path="/boxer" element={<Boxers />} />

      {/* Shoes */}
      <Route path="/allShoes" element={<Allss />} />
      <Route path="/sandals" element={<Sandals />} />

      {/* Accessories */}
      <Route path="/allAccessories" element={<Allsss />} />
      <Route path="/bows" element={<Bows />} />
      <Route path="/socks" element={<Socks />} />
      <Route path="/hc" element={<HC/>} />
      <Route path="/backpack" element={<BackPack />} />
      <Route path="/bags" element={<Bags />} />
      <Route path="/belts" element={<Belts />} />

      {/* Shop By Collection */}
      <Route path="/allCollections" element={<Allssss />} />
      <Route path="/womenDenim" element={<WomenDenim />} />


    {/* Men Route */}
    <Route path="mall" element={<MAll/>}/>

    </Routes>
  );
}
