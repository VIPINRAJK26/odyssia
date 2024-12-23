import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: "",
    color: "",
    size: "",
    newArrival: "",
  });
  const [filterOptions, setFilterOptions] = useState({
    sizes: [],
    colors: [],
  });
 
  const { category } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const [sizes, colors] = await Promise.all([
          axios.get("https://server.catta.in/sizes/"),
          axios.get("https://server.catta.in/colors/"),
        ]);

        // Map size and color data to a suitable format for the dropdown
        const sizeOptions = sizes.data.map((size) => ({
          id: size.id,
          value: size.size, // Assuming size is the value to be displayed
        }));

        const colorOptions = colors.data.map((color) => ({
          id: color.id,
          value: color.product_color, // Use product_color for the color value
        }));

        setFilterOptions({
          sizes: sizeOptions || [],
          colors: colorOptions || [],
        });
      } catch (error) {
        console.error("Error fetching filter options:", error);
      }
    };

    fetchFilterOptions();
  }, []);

  // Fetch filtered results
  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const filterQuery = Object.entries(filters)
          .filter(([, value]) => value)
          .map(([key, value]) => `${key}=${value}`)
          .join("&");

        const url = `https://server.catta.in/products/?category=${
          category || ""
        }${query ? `&q=${query}` : ""}${filterQuery ? `&${filterQuery}` : ""}`;

        const response = await axios.get(url);
        setResults(response.data || []);
      } catch (error) {
        console.error("Error fetching results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [category, query, filters]);

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  // Reusable Filter Component
  const FilterDropdown = ({ label, name, options }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        name={name}
        id={name}
        value={filters[name]}
        onChange={handleFilterChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">{`Select ${label}`}</option>
        {options.length > 0 ? (
          options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))
        ) : (
          <option disabled>No options available</option>
        )}
      </select>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">
        {query
          ? `Search Results for "${query}"`
          : `Products in ${category || "All"}`}
      </h1>

      <div className="flex">
        {/* Filter Sidebar */}
        <div className="w-1/4 p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          <FilterDropdown
            label="New Arrival"
            name="newArrival"
            options={[
              { id: "true", value: "Yes" },
              { id: "false", value: "No" },
            ]}
          />
          <FilterDropdown
            label="Price Range"
            name="priceRange"
            options={[
              { id: "400-600", value: "400-600" },
              { id: "600-800", value: "600-800" },
              { id: "800-1000", value: "800-1000" },
              { id: "1000+", value: "1000+" },
            ]}
          />
          <FilterDropdown
            label="Size"
            name="size"
            options={filterOptions.sizes}
          />
          <FilterDropdown
            label="Color"
            name="color"
            options={filterOptions.colors}
          />
        </div>

        {/* Product Results */}
        <div className="w-3/4 p-4">
          {loading ? (
            <div>Loading...</div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">
              {results.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[250px] max-w-[300px] group relative shadow-md p-4 hover:shadow-xl rounded-md"
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
                      href={`https://wa.me/919061395430?text=${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border rounded-md bg-gray-200 hover:bg-gray-400"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No results found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
