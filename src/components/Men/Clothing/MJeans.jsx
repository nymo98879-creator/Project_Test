// All.jsx
import React from "react";

const MJeans = () => {
  const products = [
    {
      id: 1,

      image: "/Men/Clothing/Jeans/image1.png",
      originalPrice: 18.59,
      discount: 10,
      finalPrice: 12.23,
      title: "Regular T-Shirts",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 2,

      image: "/Men/Clothing/Jeans/image2.png",
      originalPrice: 8.59,
      discount: 19.0,
      finalPrice: 6.95,
      title: "Regular T-Shirts",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 3,

      image: "/Men/Clothing/Jeans/image3.png",
      originalPrice: 14.59,
      discount: 10,
      finalPrice: 13.13,
      title: "Regular T-Shirts With Printed",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 4,

      image: "/Men/Clothing/Jeans/image4.png",
      originalPrice: 21.59,
      discount: 0,
      finalPrice: 21.59,
      title: "Straight Leg Trouser With Elastic Watsiba...",
      hasDiscount: false,
      hasPrinted: false,
    },
    {
      id: 5,

      image: "/Men/Clothing/Jeans/image5.png",
      originalPrice: 25.99,
      discount: 15,
      finalPrice: 22.09,
      title: "Premium Cotton T-Shirt",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 6,

      image: "/Men/Clothing/Jeans/image6.png",
      originalPrice: 12.99,
      discount: 20,
      finalPrice: 10.39,
      title: "Basic Crew Neck T-Shirt",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 7,

      image: "/Men/Clothing/Jeans/image7.png",
      originalPrice: 19.99,
      discount: 25,
      finalPrice: 14.99,
      title: "Graphic Print T-Shirt",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 8,

      image: "/Men/Clothing/Jeans/image8.png",
      originalPrice: 32.5,
      discount: 0,
      finalPrice: 32.5,
      title: "Designer Collection T-Shirt",
      hasDiscount: false,
      hasPrinted: true,
    },
    {
      id: 9,

      image: "/Men/Clothing/Jeans/image9.png",
      originalPrice: 15.75,
      discount: 30,
      finalPrice: 11.03,
      title: "Summer V-Neck T-Shirt",
      hasDiscount: true,
      hasPrinted: false,
    },
    {
      id: 10,
      image: "/Men/Clothing/Jeans/image10.png",
      originalPrice: 28.99,
      discount: 12,
      finalPrice: 25.51,
      title: "Limited Edition Printed Tee",
      hasDiscount: true,
      hasPrinted: true,
    },
    {
      id: 11,
      image: "/Men/Clothing/Jeans/image11.png",
      originalPrice: 9.99,
      discount: 5,
      finalPrice: 9.49,
      title: "Essential Basic T-Shirt",
      hasDiscount: true,
      hasPrinted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
          Jeans
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Product Image Placeholder - Bigger */}
              <div className="h-90 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                {/* <span className="text-gray-500 text-xl">
                  Product {product.id}
                </span> */}
                <img
                  src={product.image}
                  // alt={product.title}
                  className="h-full w-full object-cover"
                />
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

export default MJeans;
