'use client';

import { Typewriter } from 'react-simple-typewriter';
import { FaEnvelope } from 'react-icons/fa';
import HeroCanvas from './HeroCanvas';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 text-white"
    >
      <HeroCanvas />

      <motion.h1
        className="text-5xl md:text-6xl font-sans font-bold text-teal-400 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Typewriter
          words={['hi, Chinmay here']}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={100}
        />
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300 italic max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        I build fullstack, AI, and 3D web experiences that connect code with creativity.
      </motion.p>

      <motion.a
        href="mailto:chinmaylokhande30@gmail.com"
        className="mt-8 inline-flex items-center gap-2 px-6 py-4 border border-teal-400 text-teal-400 rounded-md hover:bg-teal-400 hover:text-[#0a192f] transition duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <FaEnvelope />
        Say hi!
      </motion.a>
    </section>
  );
};

export default Hero;
