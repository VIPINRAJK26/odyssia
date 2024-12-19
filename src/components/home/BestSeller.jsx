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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900">
          Best Seller
        </h2>

        {error && <div className="text-red-500 text-center">{error}</div>}
        {products.length === 0 && !error && (
          <div className="text-gray-500 text-center">
            No products available.
          </div>
        )}

        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-6">
            {Array.isArray(products) &&
              products.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[250px] max-w-[250px] flex-shrink-0 group relative shadow-md p-4 hover:shadow-xl rounded-md"
                >
                  <div>
                    <a href={`/product/${product.id}`}>
                      <img
                        alt={product.name || "Product image"}
                        src={product.image || "/path/to/placeholder.jpg"}
                        className="aspect-square w-full rounded-md bg-gray-600 object-cover group-hover:opacity-75"
                      />
                    </a>
                  </div>
                  <div className="mt-4 pb-2 text-center">
                    <a
                      href="https://wa.me/919061395430?text=hi"
                      target="_blank"
                      type="button"
                      className="p-2 border rounded-md bg-gray-200 hover:bg-gray-400"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
