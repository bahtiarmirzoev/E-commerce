import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Catalog from "./Catalog";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const laptops = [
    {
      src: "https://i.imgur.com/8DuG8DY.jpeg",
      model: "Laptop Model 1",
      price: "999.99 AZN",
    },
    {
      src: "https://i.imgur.com/pUt0oN6.jpeg",
      model: "Laptop Model 2",
      price: "1199.99 AZN",
    },
    {
      src: "https://i.imgur.com/pUt0oN6.jpeg",
      model: "Laptop Model 3",
      price: "1399.99 AZN",
    },
    {
      src: "https://i.imgur.com/pUt0oN6.jpeg",
      model: "Laptop Model 4",
      price: "899.99 AZN",
    },
    {
      src: "https://i.imgur.com/gs1J4Gb.jpeg",
      model: "Laptop Model 5",
      price: "1099.99 AZN",
    },
    {
      src: "https://i.imgur.com/KTWCGII.jpeg",
      model: "Laptop Model 6",
      price: "1299.99 AZN",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <header className="bg-gradient-to-r from-black to-gray-800 text-white p-8 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold">Welcome to Laptop Store</h1>
        <p className="mt-4 text-lg">Find the best laptops for all your needs</p>
      </header>

      <main className="p-8">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Featured Laptops
          </h2>
          <Slider {...settings}>
            {laptops.map((laptop, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={laptop.src}
                  alt={laptop.model}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <h3 className="text-2xl font-bold mt-4 text-gray-900">
                  {laptop.model}
                </h3>
                <p className="text-lg text-gray-700 mt-2">{laptop.price}</p>
                <Link to="/Catalog">
                  <button className="bg-yellow-400 text-white px-6 py-3 rounded mt-6 hover:bg-yellow-600 transition-colors duration-300">
                    Buy now
                  </button>
                </Link>
              </div>
            ))}
          </Slider>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions? Need help choosing the right laptop? Contact our
            friendly and knowledgeable team today!
          </p>
          <Link to="/Contact">
            <button className="bg-yellow-400 text-white px-6 py-3 rounded mt-6 hover:bg-yellow-600 transition-colors duration-300">
              Contact Us
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
