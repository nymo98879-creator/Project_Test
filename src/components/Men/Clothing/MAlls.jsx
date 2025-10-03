// Casual.jsx
import React from "react";

const MAlls = () => {
  const products = [
    {
      id: 1,
      originalPrice: 18.59,
      discount: 10,
      finalPrice: 12.23,
      title: "Regular T-Shirts",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 2,
      originalPrice: 8.59,
      discount: 19.0,
      finalPrice: 6.95,
      title: "Regular T-Shirts",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 3,
      originalPrice: 14.59,
      discount: 10,
      finalPrice: 13.13,
      title: "Regular T-Shirts With Printed",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 4,
      originalPrice: 21.59,
      discount: 0,
      finalPrice: 21.59,
      title: "Straight Leg Trouser With Elastic Watsiba...",
      hasDiscount: false,
      hasPrinted: false,
    },
    {
      id: 5,
      originalPrice: 25.99,
      discount: 15,
      finalPrice: 22.09,
      title: "Premium Cotton T-Shirt",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 6,
      originalPrice: 32.99,
      discount: 20,
      finalPrice: 26.39,
      title: "Casual Crew Neck Sweatshirt",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 7,
      originalPrice: 45.5,
      discount: 25,
      finalPrice: 34.13,
      title: "Designer Hoodie Collection",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 8,
      originalPrice: 28.75,
      discount: 0,
      finalPrice: 28.75,
      title: "Classic Denim Jacket",
      hasDiscount: false,
      hasPrinted: false,
    },
    {
      id: 9,
      originalPrice: 19.99,
      discount: 30,
      finalPrice: 13.99,
      title: "Striped Polo Shirt",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 10,
      originalPrice: 55.0,
      discount: 15,
      finalPrice: 46.75,
      title: "Premium Leather Jacket",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 11,
      originalPrice: 22.49,
      discount: 10,
      finalPrice: 20.24,
      title: "Casual Linen Shirt",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 12,
      originalPrice: 38.99,
      discount: 40,
      finalPrice: 23.39,
      title: "Winter Fleece Jacket",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 13,
      originalPrice: 16.99,
      discount: 0,
      finalPrice: 16.99,
      title: "Basic Tank Top",
      hasDiscount: false,
      hasPrinted: true,
    },
    {
      id: 14,
      originalPrice: 29.5,
      discount: 18,
      finalPrice: 24.19,
      title: "Printed Graphic Hoodie",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 15,
      originalPrice: 42.75,
      discount: 22,
      finalPrice: 33.35,
      title: "Bomber Jacket Casual",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 16,
      originalPrice: 24.99,
      discount: 12,
      finalPrice: 21.99,
      title: "Oversized Sweater",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 17,
      originalPrice: 35.25,
      discount: 0,
      finalPrice: 35.25,
      title: "Corduroy Pants",
      hasDiscount: false,
      hasPrinted: false,
    },
    {
      id: 18,
      originalPrice: 19.75,
      discount: 25,
      finalPrice: 14.81,
      title: "Casual Short Sleeve Shirt",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 19,
      originalPrice: 48.99,
      discount: 35,
      finalPrice: 31.84,
      title: "Designer Windbreaker",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 20,
      originalPrice: 27.5,
      discount: 8,
      finalPrice: 25.3,
      title: "Striped Long Sleeve Tee",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 21,
      originalPrice: 33.99,
      discount: 20,
      finalPrice: 27.19,
      title: "Casual Blazer Jacket",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 22,
      originalPrice: 15.99,
      discount: 15,
      finalPrice: 13.59,
      title: "Basic Beanie Hat",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 23,
      originalPrice: 39.5,
      discount: 0,
      finalPrice: 39.5,
      title: "Premium Wool Sweater",
      hasDiscount: false,
      hasPrinted: false,
    },
    {
      id: 24,
      originalPrice: 22.25,
      discount: 30,
      finalPrice: 15.58,
      title: "Printed Casual Pants",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 25,
      originalPrice: 52.99,
      discount: 25,
      finalPrice: 39.74,
      title: "Designer Parka Jacket",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 26,
      originalPrice: 18.99,
      discount: 10,
      finalPrice: 17.09,
      title: "Casual Baseball Cap",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 27,
      originalPrice: 29.75,
      discount: 18,
      finalPrice: 24.4,
      title: "Striped Cardigan",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 28,
      originalPrice: 44.5,
      discount: 40,
      finalPrice: 26.7,
      title: "Winter Puffer Jacket",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 29,
      originalPrice: 16.5,
      discount: 0,
      finalPrice: 16.5,
      title: "Basic Scarf",
      hasDiscount: false,
      hasPrinted: false,
    },
    {
      id: 30,
      originalPrice: 31.99,
      discount: 22,
      finalPrice: 24.95,
      title: "Printed Casual Dress",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 31,
      originalPrice: 26.75,
      discount: 15,
      finalPrice: 22.74,
      title: "Denim Overalls",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 32,
      originalPrice: 19.99,
      discount: 12,
      finalPrice: 17.59,
      title: "Casual Bucket Hat",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 33,
      originalPrice: 37.25,
      discount: 0,
      finalPrice: 37.25,
      title: "Premium Trench Coat",
      hasDiscount: false,
      hasPrinted: false,
    },
    {
      id: 34,
      originalPrice: 23.5,
      discount: 28,
      finalPrice: 16.92,
      title: "Graphic Print Sweatshirt",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 35,
      originalPrice: 49.99,
      discount: 35,
      finalPrice: 32.49,
      title: "Designer Leather Pants",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 36,
      originalPrice: 17.25,
      discount: 8,
      finalPrice: 15.87,
      title: "Casual Bandana",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 37,
      originalPrice: 34.99,
      discount: 20,
      finalPrice: 27.99,
      title: "Oversized Denim Jacket",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 38,
      originalPrice: 21.75,
      discount: 25,
      finalPrice: 16.31,
      title: "Printed Leggings",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 39,
      originalPrice: 42.5,
      discount: 0,
      finalPrice: 42.5,
      title: "Casual Suit Blazer",
      hasDiscount: false,
      hasPrinted: false,
    },
    {
      id: 40,
      originalPrice: 28.99,
      discount: 30,
      finalPrice: 20.29,
      title: "Graphic Hoodie Dress",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 41,
      originalPrice: 19.5,
      discount: 15,
      finalPrice: 16.58,
      title: "Casual Beanie Set",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 42,
      originalPrice: 36.75,
      discount: 22,
      finalPrice: 28.67,
      title: "Designer Jumpsuit",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 43,
      originalPrice: 24.99,
      discount: 0,
      finalPrice: 24.99,
      title: "Basic Gloves",
      hasDiscount: false,
      hasPrinted: false,
    },
    {
      id: 44,
      originalPrice: 31.25,
      discount: 18,
      finalPrice: 25.63,
      title: "Printed Casual Skirt",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 45,
      originalPrice: 47.99,
      discount: 40,
      finalPrice: 28.79,
      title: "Winter Wool Coat",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 46,
      originalPrice: 16.99,
      discount: 10,
      finalPrice: 15.29,
      title: "Casual Socks Pack",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 47,
      originalPrice: 29.5,
      discount: 25,
      finalPrice: 22.13,
      title: "Graphic Print Pajamas",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 48,
      originalPrice: 39.75,
      discount: 0,
      finalPrice: 39.75,
      title: "Premium Loungewear Set",
      hasDiscount: false,
      hasPrinted: true,
    },
    {
      id: 49,
      originalPrice: 22.99,
      discount: 35,
      finalPrice: 14.94,
      title: "Casual Backpack",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 50,
      originalPrice: 33.25,
      discount: 20,
      finalPrice: 26.6,
      title: "Printed Beachwear Set",
      hasDiscount: true,
      hasPrinted: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
          AllS Clothing Men
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Product Image Placeholder - Bigger */}
              <div className="h-80 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <span className="text-gray-500 text-xl">
                  Product {product.id}
                </span>
              </div>

              <div className="p-6">
                {/* Price Section - Bigger */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.finalPrice.toFixed(2)}
                    </span>

                    {product.hasDiscount && (
                      <>
                        <span className="text-lg text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                        <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-lg font-semibold">
                          -{product.discount}%
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Product Title - Bigger */}
                <h3 className="text-xl text-gray-700 font-semibold mb-6 leading-tight">
                  {product.title}
                </h3>

                {/* Add to Cart Button - Bigger */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl transition-all duration-200 text-lg font-semibold hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MAlls;
