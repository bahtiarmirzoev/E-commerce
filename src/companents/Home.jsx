import React from 'react';
import Slider from 'react-slick';

const Home= () => {
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const laptops = [
    { src: 'https://i.imgur.com/8DuG8DY.jpeg', model: 'Laptop Model 1', price: '999.99 AZN' },
    { src: 'https://i.imgur.com/TR0O4GU.jpeg', model: 'Laptop Model 2', price: '1199.99 AZN' },
    { src: 'https://i.imgur.com/aS2xTJN.jpeg', model: 'Laptop Model 3', price: '1399.99 AZN' },
    { src: 'https://i.imgur.com/pUt0oN6.jpeg', model: 'Laptop Model 4', price: '899.99 AZN' },
    { src: 'https://i.imgur.com/gs1J4Gb.jpeg', model: 'Laptop Model 5', price: '1099.99 AZN' },
    { src: 'https://i.imgur.com/KTWCGII.jpeg', model: 'Laptop Model 6', price: '1299.99 AZN' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-black text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to Laptop Store</h1>
        <p className="mt-2">Find the best laptops for all your needs</p>
      </header>

      {/* Main Content Section */}
      <main className="p-6">
        {/* Feature Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Featured Laptops</h2>
          <Slider {...settings}>
            {laptops.map((laptop, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img src={laptop.src} alt={laptop.model} className="w-full h-full object-cover rounded-t-lg"/>
                <h3 className="text-xl font-bold mt-4">{laptop.model}</h3>
                <p className="text-gray-700 mt-2">{laptop.price}</p>
                <button className="bg-yellow-300 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-700">Buy Now</button>
              </div>
            ))}
          </Slider>
        </section>

        {/* Contact Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Have questions? Need help choosing the right laptop? Contact our friendly and knowledgeable team today!</p>
          <button className="bg-yellow-300 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-700">Contact Us</button>
        </section>
      </main>

    
    </div>
  );
};

export default Home;
