import React from "react";
import { Link } from "react-router-dom";
import Product1 from "../assets/image1/product1.jpg";
import Product2 from "../assets/image1/product2.jpg";
import Product3 from "../assets/image1/product3.jpg";
import Product4 from "../assets/image1/product4.jpg";
import Product5 from "../assets/image1/product5.jpg";
import Product6 from "../assets/image1/product6.jpg";
import Product7 from "../assets/image1/product7.jpg";
const PopularProductData = [
  {
    id: "1",
    product_name: "Tesla",
    product_thumbnail: Product1,
    product_price: "$14993.00",
    product_stock: "341",
  },
  {
    id: "2",
    product_name: "Eye Glass",
    product_thumbnail: Product2,
    product_price: "$1499.00",
    product_stock: 0,
  },
  {
    id: "3",
    product_name: "Android Watch",
    product_thumbnail: Product3,
    product_price: "$1499.00",
    product_stock: "541",
  },
  {
    id: "4",
    product_name: "Nike Shoe",
    product_thumbnail: Product4,
    product_price: "$1499.00",
    product_stock: "301",
  },
  {
    id: "5",
    product_name: "Macbook M1 Pro ",
    product_thumbnail: Product5,
    product_price: "$1499.00",
    product_stock: "211",
  },
  {
    id: "6",
    product_name: "Macbook M ",
    product_thumbnail: Product6,
    product_price: "$1499.00",
    product_stock: 0,
  },
  {
    id: "7",
    product_name: "Ear Phone",
    product_thumbnail: Product7,
    product_price: "$1499.00",
    product_stock: "900",
  },
];

function PopularProducts() {
  return (
    <div className="w-[20rem] bg-white px-4 pt-3 pb-4  rounded-sm  border border-gray-400">
      <strong className=" text-gray-700 font-medium ">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3">
        {PopularProductData.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="flex"
          >
            <div className="  flex fex-col w-10 h-10 min-w-10 bg-gray-200 rounded-sm _overflow-hidden ">
              <img
                className=" w-full h-full object-cover"
                src={product.product_thumbnail}
                alt={product.product_name}
              />
            </div>
            <div className=" flex-1 ml-4">
              <strong className="xs text-gray-600">
                {product.product_name}
              </strong>
              <p
                className={`text-xs text-gray-300 ${
                  product.product_stock === 0
                    ? " text-orange-500"
                    : "text-green-500"
                }`}
              >
                {product.product_stock === 0
                  ? "out of stock"
                  : product.product_stock + "in stock"}
              </p>
            </div>
            <div className="  text-xl font-body text-gray-300 hover:text-gray-500">
              {product.product_price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
