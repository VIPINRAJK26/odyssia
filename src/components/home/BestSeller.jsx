const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/shot-black-leather-heels-decorated-with-leather-belt-isolated-white_181624-32608.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/original-black-mens-sports-shoes-isolated_94064-692.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/black-boots-leather-men-isolated-white-background_250899-339.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/shot-elegant-beautiful-leather-heels-isolated-white_181624-32574.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/elegant-male-shoes-white-background_392895-575797.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/leather-black-men-s-shoes-white-background_113913-502.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/fashion-shoes_74190-2601.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/elegant-women-s-shoes-with-laces-isolated-white-surface-fashionable-school-shoes_94064-4330.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  
];

export default function BestSeller() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900">
          Best Seller
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
          {products.map((product) => (
            <div key={product.id} className="group relative border border-gray-500 p-4 rounded-md">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-600 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
              />
              <div className="mt-4 flex justify-between bg-gray-100 p-2 rounded-lg">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
