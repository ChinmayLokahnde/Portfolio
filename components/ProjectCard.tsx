'use client';

import { useEffect, useRef, useState } from 'react';
import { FaFolder, FaGithub, FaLink } from "react-icons/fa";

interface ProjectProps {
  title: string;
  desc: string;
  tech: string;
  github: string;
  live?: string;
}

const ProjectCard = ({ title, desc, tech, github, live }: ProjectProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
  const currentCard = cardRef.current; 

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    },
    { threshold: 0.1 }
  );

  if (currentCard) observer.observe(currentCard);

  return () => {
    if (currentCard) observer.unobserve(currentCard); 
  };
}, []);

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-in-out ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } bg-[#112240] p-6 rounded-xl hover:-translate-y-2 shadow-md`}
    >
      <div className="flex justify-between">
        <span><FaFolder size={30} /></span>
        <div className="flex gap-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <FaLink size={20} />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-2xl text-teal-300 font-bold mt-4">{title}</h3>
      <p className="text-xl text-gray-400 mt-2">{desc}</p>
      <p className="text-xl text-gray-500 mt-4">{tech}</p>
    </div>
  );
};

export default ProjectCard;
