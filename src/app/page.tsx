"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/products");
      const data = response.data;
      setProducts(data?.products);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch data", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div  className= "">
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
          Processing...
        </div>
      </div>
    );

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <h1 className="text-3xl font-sans">Dynamic Internal API Route.</h1>
      <div className=" flex-wrap grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
        {products.map(({ title, description, thumbnail }) => (
          <div className="p-5">
            <div className="max-w-sm rounded overflow-hidden justify-between shadow-lg">
              <img className="w-full" src={thumbnail} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
