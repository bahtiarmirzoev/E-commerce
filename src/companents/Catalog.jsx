import React from "react";
const products = [
  {
    model: "Dell XPS 13",
    purpose: "General Use",
    price: 1200,
    manufacturer: "Dell",
    imageUrl:
      "https://www.dell.com/support/assets/images/dell-laptops/dell-xps-13.jpg",
  },
  {
    model: "MacBook Air M2",
    purpose: "General Use",
    price: 1400,
    manufacturer: "Apple",
    imageUrl:
      "https://www.apple.com/v/macbook-air-m2/g/images/overview/hero_macbook_air_m2__fdr7cwo0c46u_large.jpg",
  },
  {
    model: "HP Spectre x360",
    purpose: "Work and Study",
    price: 1300,
    manufacturer: "HP",
    imageUrl:
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06913230.png",
  },
  {
    model: "Lenovo ThinkPad X1 Carbon",
    purpose: "Business",
    price: 1600,
    manufacturer: "Lenovo",
    imageUrl:
      "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-hero.png",
  },
  {
    model: "Asus ROG Zephyrus G14",
    purpose: "Gaming",
    price: 1500,
    manufacturer: "Asus",
    imageUrl: "https://rog.asus.com/media/16417894681080.jpg",
  },
  {
    model: "Acer Swift 3",
    purpose: "Budget Friendly",
    price: 700,
    manufacturer: "Acer",
    imageUrl:
      "https://static.acer.com/up/Resource/Acer/Laptops/Swift_3/Images/SF314-57/Swift_3_SF314-57_01.jpg",
  },
  {
    model: "Microsoft Surface Laptop 5",
    purpose: "Productivity",
    price: 1200,
    manufacturer: "Microsoft",
    imageUrl: "https://www.microsoft.com/surface/images/surface-laptop-5.png",
  },
  {
    model: "Razer Blade 15",
    purpose: "Gaming",
    price: 2000,
    manufacturer: "Razer",
    imageUrl: "https://www.razer.com/razer-image/razer-blade-15.jpg",
  },
  {
    model: "Samsung Galaxy Book Pro 360",
    purpose: "2-in-1 Convertible",
    price: 1100,
    manufacturer: "Samsung",
    imageUrl:
      "https://images.samsung.com/is/image/samsung/p6pim/uk/galaxy-book-pro-360-13-5-hero.jpg",
  },
  {
    model: "LG Gram 17",
    purpose: "Portability",
    price: 1500,
    manufacturer: "LG",
    imageUrl: "https://www.lg.com/us/images/laptops/md07531428/feature-1.jpg",
  },
  {
    model: "HP Omen 17",
    purpose: "Gamingsssss",
    price: 1700,
    manufacturer: "HP",
    imageUrl:
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06024164.png",
  },

  {
    model: "Apple MacBook Pro 16",
    purpose: "Professional Work",
    price: 2400,
    manufacturer: "Apple",
    imageUrl:
      "https://www.apple.com/v/macbook-pro-16/f/images/overview/hero_macbook_pro_16__5oe3k53p84yu_large.jpg",
  },
];

function Catalog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Product Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.model}
            className="group bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.imageUrl}
              alt={product.model}
              className="w-full h-48 object-cover transition-transform group-hover:scale-110"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.model}</h2>
              <p className="text-gray-600">{product.purpose}</p>
              <p className="text-lg font-bold mt-2">${product.price}</p>
              <p className="text-gray-500 mb-4">
                Manufacturer: {product.manufacturer}
              </p>
              <button className="w-full bg-yellow-300 text-white py-2 rounded-md hover:bg-yellow-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
