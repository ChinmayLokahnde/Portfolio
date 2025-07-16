"use client";

import { FaGithub, FaInstagram, FaLinkedin, FaViacoin } from "react-icons/fa";

const Navbar = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-[#0a192f] text-white shadow z-50">
   
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold text-teal-400">Chinmay</h1>
        <div className="font-semibold space-x-4 hidden md:block">
          <button onClick={() => scrollTo("hero")} className="hover:text-teal-400 transition">
            Home
          </button>
          <button onClick={() => scrollTo("about")} className="hover:text-teal-400 transition">
            About
          </button>
          <button onClick={() => scrollTo("projects")} className="hover:text-teal-400 transition">
            Projects
          </button>
        </div>
      </div>

      
      <div className="flex items-center gap-4">
        <a href="https://github.com/ChinmayLokahnde" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
          <FaGithub size={20} />
        </a>
        <a href="https://www.instagram.com/chinmayylokhande/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
          <FaInstagram size={20}/>
        </a>
        <a href="https://www.linkedin.com/in/chinmay-lokhande-6b6b08297/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
          <FaLinkedin size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
