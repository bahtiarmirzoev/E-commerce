import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const articles = [
  {
    title: 'Breaking News 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula mauris non lectus...',
    image: 'https://via.placeholder.com/400',
  },
  {
    title: 'Breaking News 2',
    content: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor...',
    image: 'https://via.placeholder.com/400',
  },
  {
    title: 'Breaking News 3',
    content: 'Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus...',
    image: 'https://via.placeholder.com/400',
  },
  {
    title: 'Breaking News 4',
    content: 'Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus...',
    image: 'https://via.placeholder.com/400',
  },
  {
    title: 'Breaking News 5',
    content: 'Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus...',
    image: 'https://via.placeholder.com/400',
  },
  {
    title: 'Breaking News 6',
    content: 'Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus...',
    image: 'https://via.placeholder.com/400',
  },
];

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-700">{article.content.substring(0, 100)}...</p>
                <button className="mt-4 px-4 py-2 bg-yellow-300 text-white rounded hover:bg-blue-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedArticle && (
          <Transition
            show={!!selectedArticle}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
                <button
                  className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-gray-900"
                  onClick={() => setSelectedArticle(null)}
                >
                  &times;
                </button>
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-64 object-cover rounded" />
                <h2 className="text-3xl font-bold mt-4 mb-2">{selectedArticle.title}</h2>
                <p className="text-gray-700 mb-4">{selectedArticle.content}</p>
              </div>
            </div>
          </Transition>
        )}
      </div>
    </div>
  );
};

export default News;
