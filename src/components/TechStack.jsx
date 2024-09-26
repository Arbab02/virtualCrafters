'use client'

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFramer, SiExpress, SiGraphql } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const TechStack = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const techData = [
    { id: 1, label: 'React', icon: <FaReact className="text-blue-400 w-12 h-12 mb-3 inline-block" /> },
    { id: 2, label: 'Next.js', icon: <SiNextdotjs className="text-gray-400 w-12 h-12 mb-3 inline-block" /> },
    { id: 3, label: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400 w-12 h-12 mb-3 inline-block" /> },
    { id: 4, label: 'Node.js', icon: <FaNodeJs className="text-green-400 w-12 h-12 mb-3 inline-block" /> },
    { id: 5, label: 'Framer Motion', icon: <SiFramer className="text-pink-400 w-12 h-12 mb-3 inline-block" /> },
    { id: 6, label: 'MongoDB', icon: <SiMongodb className="text-green-500 w-12 h-12 mb-3 inline-block" /> },
    { id: 7, label: 'Express', icon: <SiExpress className="text-gray-400 w-12 h-12 mb-3 inline-block" /> },
    { id: 8, label: 'GraphQL', icon: <SiGraphql className="text-pink-500 w-12 h-12 mb-3 inline-block" /> },
  ];

  return (
    <section className="text-gray-400 bg-[#000319] body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.div 
          className="flex flex-col text-center w-full mb-20"
          ref={ref}  // Reference for scroll detection
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}  // Animates when inView
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-5xl font-bold title-font mb-4 text-gray-300">
            ⚙️ Tech Stack
          </h1>
          <p className="text-lg text-gray-400">Technologies We Love & Use</p>
        </motion.div>

        <div className="flex flex-wrap -m-4 text-center">
          {techData.map((tech, index) => (
            <motion.div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              key={tech.id}
              ref={ref}  // Reference for each element
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <motion.div
                className="border-2 border-gray-800 px-4 py-8 rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h2 className="title-font font-bold text-2xl text-white">{tech.label}</h2>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
