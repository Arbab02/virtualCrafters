'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SiAdobe, SiFigma, SiSketch, SiCoreldraw, SiCanva, SiAdobephotoshop, SiInvision } from 'react-icons/si';

const GraphicDesignStack = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const animationDuration = isMobile ? 0.4 : 0.8; // Faster on mobile

  return (
    <section className="text-gray-400 bg-[#000319] body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.div 
          className="flex flex-col text-center w-full mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: animationDuration }}
        >
          <h1 className="text-5xl font-bold title-font mb-4 text-gray-300">
            Graphic Design Technologies
          </h1>
        </motion.div>
        <div className="flex flex-wrap -m-4 text-center">
          {[
            { id: 1, label: 'Adobe Photoshop', icon: <SiAdobephotoshop className="text-blue-400 w-12 h-12 mb-3 inline-block" /> },
            { id: 2, label: 'Adobe Illustrator', icon: <SiAdobe className="text-yellow-500 w-12 h-12 mb-3 inline-block" /> },
            { id: 3, label: 'Figma', icon: <SiFigma className="text-pink-500 w-12 h-12 mb-3 inline-block" /> },
            { id: 4, label: 'Sketch', icon: <SiSketch className="text-orange-500 w-12 h-12 mb-3 inline-block" /> },
            { id: 5, label: 'CorelDRAW', icon: <SiCoreldraw className="text-green-500 w-12 h-12 mb-3 inline-block" /> },
            { id: 6, label: 'Canva', icon: <SiCanva className="text-blue-500 w-12 h-12 mb-3 inline-block" /> },
            { id: 7, label: 'Adobe XD', icon: <SiAdobe className="text-purple-500 w-12 h-12 mb-3 inline-block" /> },
            { id: 8, label: 'InVision', icon: <SiInvision className="text-red-500 w-12 h-12 mb-3 inline-block" /> },
          ].map((tech, index) => (
            <motion.div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: animationDuration }}
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

export default GraphicDesignStack;
