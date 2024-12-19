import axios from "axios";
import { useEffect, useState } from "react";

export default function BestSeller() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://server.catta.in/products/")
      .then((res) => {
        console.log("API Response:", res.data);
        setProducts(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load products.");
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900">
          Best Seller
        </h2>

        {error && <div className="text-red-500 text-center">{error}</div>}
        {products.length === 0 && !error && (
          <div className="text-gray-500 text-center">
            No products available.
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
          {Array.isArray(products) &&
            products.map((product) => (
              <div
                key={product.id}
                className="group relative shadow-md p-4 hover:shadow-xl rounded-md"
              >
                <a href={`/product/${product.id}`}>
                  <img
                    alt={product.name || "Product image"}
                    src={product.image || "/path/to/placeholder.jpg"}
                    className="aspect-square w-full rounded-md bg-gray-600 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-full"
                  />
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
