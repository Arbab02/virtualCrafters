'use client'

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFramer, SiExpress, SiGraphql } from 'react-icons/si';

const TechStack = () => {
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
            Tech Stack
          </h1>
        </motion.div>
        <div className="flex flex-wrap -m-4 text-center">
          {[
            { id: 1, label: 'React', icon: <FaReact className="text-blue-400 w-12 h-12 mb-3 inline-block" /> },
            { id: 2, label: 'Next.js', icon: <SiNextdotjs className="text-gray-400 w-12 h-12 mb-3 inline-block" /> },
            { id: 3, label: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400 w-12 h-12 mb-3 inline-block" /> },
            { id: 4, label: 'Node.js', icon: <FaNodeJs className="text-green-400 w-12 h-12 mb-3 inline-block" /> },
            { id: 5, label: 'Framer Motion', icon: <SiFramer className="text-pink-400 w-12 h-12 mb-3 inline-block" /> },
            { id: 6, label: 'MongoDB', icon: <SiMongodb className="text-green-500 w-12 h-12 mb-3 inline-block" /> },
            { id: 7, label: 'Express', icon: <SiExpress className="text-gray-400 w-12 h-12 mb-3 inline-block" /> },
            { id: 8, label: 'GraphQL', icon: <SiGraphql className="text-pink-500 w-12 h-12 mb-3 inline-block" /> },
          ].map((tech, index) => (
            <motion.div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                {tech.icon}
                <h2 className="title-font font-medium text-2xl text-white">{tech.label}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
