'use client'


import { motion } from 'framer-motion';

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
          <h1 className="text-5xl font-bold title-font mb-4 text-gray-300">
            Our Statistics
          </h1>
    
        </motion.div>
        <div className="flex flex-wrap -m-4 text-center">
          {[
            { id: 1, value: '2.7K', label: 'Downloads', icon: 'M8 17l4 4 4-4m-4-5v9 M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29' },
            { id: 2, value: '1.3K', label: 'Users', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100 8a4 4 0 100-8' },
            { id: 3, value: '74', label: 'Files', icon: 'M3 18v-6a9 9 0 0118 0v6 M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3 M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3' },
            { id: 4, value: '46', label: 'Places', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
          ].map((stat, index) => (
            <motion.div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-indigo-400 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d={stat.icon}></path>
                </svg>
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
