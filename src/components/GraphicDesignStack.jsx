'use client'

import { motion } from 'framer-motion';
import { SiAdobe, SiFigma, SiSketch, SiCoreldraw, SiCanva, SiAdobephotoshop, SiInvision } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const GraphicDesignStack = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const designTools = [
    { id: 1, label: 'Adobe Photoshop', icon: <SiAdobephotoshop className="text-blue-400 w-12 h-12 mb-3 inline-block" /> },
    { id: 2, label: 'Adobe Illustrator', icon: <SiAdobe className="text-yellow-500 w-12 h-12 mb-3 inline-block" /> },
    { id: 7, label: 'Adobe XD', icon: <SiAdobe className="text-purple-500 w-12 h-12 mb-3 inline-block" /> },
    { id: 3, label: 'Figma', icon: <SiFigma className="text-pink-500 w-12 h-12 mb-3 inline-block" /> },
    { id: 4, label: 'Sketch', icon: <SiSketch className="text-orange-500 w-12 h-12 mb-3 inline-block" /> },
    { id: 5, label: 'CorelDRAW', icon: <SiCoreldraw className="text-green-500 w-12 h-12 mb-3 inline-block" /> },
    { id: 6, label: 'Canva', icon: <SiCanva className="text-blue-500 w-12 h-12 mb-3 inline-block" /> },
    { id: 8, label: 'InVision', icon: <SiInvision className="text-red-500 w-12 h-12 mb-3 inline-block" /> },
  ];

  return (
    <section className="text-gray-400 bg-[#000319] body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.div
          className="flex flex-col text-center w-full mb-20"
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-5xl font-bold title-font mb-4 text-gray-300">
            🎨 Graphic Design Technologies
          </h1>
          <p className="text-lg text-gray-400">Tools We Use for Creative Designs</p>
        </motion.div>

        <div className="flex flex-wrap -m-4 text-center">
          {designTools.map((tech, index) => (
            <motion.div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              key={tech.id}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <motion.div
                className="border-2 border-gray-800 px-6 py-8 rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <div className="text-5xl mb-4">
                  {tech.icon}
                </div>
                <h2 className="title-font font-bold text-2xl text-white">{tech.label}</h2>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignStack;
