'use client';

import { motion } from 'framer-motion';

const journey = [
  {
    title: 'EVU Internship (Remote, New York, US)',
    period: 'Mid 2025',
    points: [
      'Worked as AI & Backend Engineer',
      'Developed AI-powered features & backend APIs',
      'Collaborated on scalable architecture with MERN + Python',
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
  {
    title: '3D Web & Virtual Try-On',
    period: '2025',
    points: [
      'Integrated MediaPipe for body detection',
      'Used Ready Player Me avatars + Three.js for 3D try-on',
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
    title: 'MERN Stack Development',
    period: 'Early 2024',
    points: [
      'Built full e-commerce website using MERN stack',
      'Implemented CRUD, cart, admin panel',
    ],
  },
  {
    title: 'For University Project',
    period: 'Mid 2023',
    points: [
      'Built Data Science project',
      'Implemented and visualized cricket data in PowerBI using Python',
    ],
  },
  {
    title: 'Getting Started',
    period: '2022',
    points: [
      'Learned HTML, CSS, JavaScript',
      'Created my first static portfolio website',
    ],
  },
];

const Journey = () => {
  return (
    <section id="journey" className="px-6 py-20 max-w-6xl mx-auto text-white">
      <motion.h2
        className="text-3xl font-bold text-teal-400 mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        / my journey
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {journey.map((step, i) => (
          <motion.div
            key={i}
            className="bg-gray-900/40 border border-teal-500 rounded-2xl p-6 shadow-lg hover:shadow-teal-500/30 transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <h3 className="text-xl font-semibold text-teal-300">{step.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{step.period}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
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
