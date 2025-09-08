'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  'TypeScript',
  'React.js',
  'Node.js',
  'Next.js',
  'Python',
  'Three.js',
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 text-white"
    >
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl w-full">
       
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-4xl font-bold text-teal-400 mb-4">/ about me_________</h2>
          <p className="text-2xl text-gray-300 mb-5 leading-relaxed">
            I am currently a <span className="font-semibold text-white">Software Developer</span>, exploring full-stack
            web, AI, and 3D experiences. I’ve worked on <span className="font-semibold text-white">AI avatars, MediaPipe, Three.js</span> and more.
          </p>

          
          <motion.ul
            className="text-xl grid grid-cols-2 gap-3 text-gray-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="hover:text-white transition-colors duration-200"
              >
                ▸ {skill}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
           className="mt-8 text-xl text-gray-400 font-sans"
          >
            Outside of work, I'm also a <span className=" text-white font-medium">professional video editor</span> with experience in crafting cinematic edits, 3D environment with After Effect, and content for social media (Youtube).
          </motion.div>

        </motion.div>

        
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/profile3.JPG"
            alt="Chinmay's photo"
            width={250}
            height={250}
            className="rounded-b-sm object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
