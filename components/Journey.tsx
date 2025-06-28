'use client';

import { motion } from 'framer-motion';


const journey = [
  {
    title: 'Getting Started',
    period: '2022',
    points: [
      'Learned HTML, CSS, JavaScript',
      'Created my first static portfolio website',
    ],
  },
  {
    title: 'For University project',
    period: 'Mid 2023',
    points:[
        'Build Data science project',
        'Implemented and Visualized Data of Cricket-Info in PowerBI using Python'
    ],
  },
  {
    title: 'MERN Stack Development',
    period: 'Early 2024',
    points: [
      'Built full e-commerce website using MERN stack',
      'Implemented CRUD, cart, admin panel',
    ],
  },
  {
    title: 'AI + Python Integration',
    period: '2025',
    points: [
      'Created AI blog generator using GPT-2',
      'Connected Python backend with Node.js and React wrapping with Docker',
    ],
  },
  {
    title: '3D Web & Virtual Try-On',
    period: '2025',
    points: [
      'Integrated MediaPipe for body detection',
      'Used Ready Player Me avatars + Three.js for 3D try-on',
    ],
  },
  {
    title: 'Futuristic Portfolio',
    period: '2025',
    points: [
      'Built animated Next.js portfolio',
      'Added canvas-based 3D elements with smooth scroll',
    ],
  },
];

const Journey = () => {
  return (
    <section id="journey" className="px-6 py-20 max-w-5xl mx-auto text-white">
      <motion.h2
        className="text-3xl font-bold text-teal-400 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        / my journey
      </motion.h2>

      <div className="space-y-12">
        {journey.map((step, i) => (
          <motion.div
            key={i}
            className="border-l-4 border-teal-400 pl-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-teal-300">{step.title}</h3>
            <p className="text-sm text-gray-500">{step.period}</p>
            <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
              {step.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
