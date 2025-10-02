// All.jsx
import React from "react";

const PoloShirts = () => {
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
      originalPrice: 12.99,
      discount: 20,
      finalPrice: 10.39,
      title: "Basic Crew Neck T-Shirt",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 7,
      originalPrice: 19.99,
      discount: 25,
      finalPrice: 14.99,
      title: "Graphic Print T-Shirt",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 8,
      originalPrice: 32.5,
      discount: 0,
      finalPrice: 32.5,
      title: "Designer Collection T-Shirt",
      hasDiscount: false,
      hasPrinted: true,
    },
    {
      id: 9,
      originalPrice: 15.75,
      discount: 30,
      finalPrice: 11.03,
      title: "Summer V-Neck T-Shirt",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 10,
      originalPrice: 28.99,
      discount: 12,
      finalPrice: 25.51,
      title: "Limited Edition Printed Tee",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 11,
      originalPrice: 9.99,
      discount: 5,
      finalPrice: 9.49,
      title: "Essential Basic T-Shirt",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 12,
      originalPrice: 35.0,
      discount: 40,
      finalPrice: 21.0,
      title: "Premium Printed Oversized Tee",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 13,
      originalPrice: 17.5,
      discount: 0,
      finalPrice: 17.5,
      title: "Classic Fit Cotton T-Shirt",
      hasDiscount: false,
      hasPrinted: false,
    },
    {
      id: 14,
      originalPrice: 22.99,
      discount: 18,
      finalPrice: 18.85,
      title: "Artistic Graphic T-Shirt",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 15,
      originalPrice: 13.25,
      discount: 8,
      finalPrice: 12.19,
      title: "Everyday Comfort T-Shirt",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 16,
      originalPrice: 29.99,
      discount: 35,
      finalPrice: 19.49,
      title: "Exclusive Printed Collection",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 17,
      originalPrice: 11.99,
      discount: 0,
      finalPrice: 11.99,
      title: "Basic Round Neck T-Shirt",
      hasDiscount: false,
      hasPrinted: false,
    },
    {
      id: 18,
      originalPrice: 26.5,
      discount: 22,
      finalPrice: 20.67,
      title: "Fashion Print T-Shirt",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 19,
      originalPrice: 16.75,
      discount: 15,
      finalPrice: 14.24,
      title: "Comfort Fit Daily T-Shirt",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 20,
      originalPrice: 31.99,
      discount: 28,
      finalPrice: 23.03,
      title: "Premium Graphic T-Shirt Collection",
      hasDiscount: true,
      hasPrinted: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
          Polo_Shirts
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8">
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

export default PoloShirts;
