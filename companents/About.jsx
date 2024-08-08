import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Mirzayev Bakhtiar',
    role: 'CEO',
    image: 'https://i.imgur.com/ZQZj0Lg.jpeg',
    bio: 'John is the CEO with over 20 years of experience in the industry.',
  },
  {
    name: 'Yusif Bayramov',
    role: 'CTO',
    image: 'https://i.imgur.com/CjVFoWj.jpeg',
    bio: 'Yusif is the CTO, leading the tech team with innovation and expertise.',
  },
  {
    name: 'Magomed Farmanov',
    role: 'COO',
    image: 'https://i.imgur.com/f4V9uPT.jpeg',
    bio: 'Emily is the COO, ensuring operational excellence across the company.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">About Us</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Welcome to our company! We are dedicated to providing the best service in the industry. Our team of experts works tirelessly to meet and exceed our clients' expectations.
          </p>
        </motion.div>
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
              Our mission is to deliver top-notch services that enhance the lives of our clients. We strive for excellence in every project, ensuring customer satisfaction and long-term success.
            </p>
          </motion.div>
        </section>
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our History</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
              Founded in 2000, our company has grown from a small startup to a leader in the industry. Over the years, we have expanded our services, embraced innovation, and built a reputation for excellence.
            </p>
          </motion.div>
        </section>
        <section>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
        <section className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-6">
              We would love to hear from you! Reach out to us with any questions, comments, or inquiries.
            </p>
            <div className="text-center">
              <a href="mailto:info@company.com" className="text-blue-600 font-semibold text-lg">info@company.com</a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;
