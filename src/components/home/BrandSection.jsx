import React from "react";

const BrandsSection = () => {
  const brands = [
    {
      id: 1,
      src: "https://i.pinimg.com/originals/f2/38/3c/f2383cbb83ba83d58a2df873b502d501.png",
      alt: "Odysia Tuff",
    },
    {
      id: 2,
      src: "https://walkmart.walkaroo.in/Walkaroo/image/walkaroo-logo.png",
      alt: "Keery",
    },
    {
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
      alt: "Keery LF-W",
    },
    {
      id: 4,
      src: "https://companieslogo.com/img/orig/PUM.DE_BIG-3030b719.png?t=1720244493",
      alt: "Gorki",
    },
    {
      id: 5,
      src: "https://vivianamalls.com/wp-content/uploads/2023/08/Wildcraft-Viviana-Mall-Thane-Mumbai.png",
      alt: "Avema",
    },
    {
      id: 6,
      src: "https://www.centralvillageoutlet.com/storage/stores/logo/american.png",
      alt: "Beach",
    },
    { id: 7, src: "path-to-image/vuvu.png", alt: "VuVu" },
    { id: 8, src: "path-to-image/classmate.png", alt: "Classmate Shoes" },
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">OUR BRANDS</h2>
      <div className="grid grid-cols-2 lg:px-32  sm:grid-cols-3 md:grid-cols-4 gap-0">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center  border-gray-400 p-4 rounded-lg hover:shadow-lg"
          >
            <img
              src={brand.src}
              alt={brand.alt}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
