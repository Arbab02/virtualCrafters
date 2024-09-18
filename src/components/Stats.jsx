'use client'

import { motion } from 'framer-motion';
import { FaGlobe, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Stats = () => {
  return (
    <section className="text-gray-400 bg-[#000319] body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.div 
          className="flex flex-col text-center w-full mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold  title-font mb-4 text-gray-300">
            Our Statistics
          </h1>
        </motion.div>
        <div className="flex flex-wrap font-semibold -m-4 text-center">
          {[
            { id: 1, value: '1k/monthly', label: 'Visiters', icon: <FaGlobe className="text-indigo-400 w-12 h-12 mb-3 inline-block" /> },
            { id: 2, value: '6K', label: 'Followers', icon: <FaFacebookF className="text-indigo-400 w-12 h-12 mb-3 inline-block" /> },
            { id: 3, value: '5k', label: 'Followers', icon: <FaInstagram className="text-indigo-400 w-12 h-12 mb-3 inline-block" /> },
            { id: 4, value: '10k', label: 'Followers', icon: <FaLinkedinIn className="text-indigo-400 w-12 h-12 mb-3 inline-block" /> },
          ].map((stat, index) => (
            <motion.div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                {stat.icon}
                <h2 className="title-font font-medium text-3xl text-white">{stat.value}</h2>
                <p className="leading-relaxed">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
