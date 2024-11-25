import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detectar scroll para aplicar estilos
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center p-6 bg-white sticky top-0 w-full z-50 transition-all ${
        isScrolled ? 'shadow-md border-b border-gray-200' : 'shadow-none'
      }`}
    >
      <h2 className='text-black text-[40px] font-lacquer'>Sun<span className='font-lacquer text-orange-500'>CAPE</span></h2>
      {/* <img src="/logo.jpg" alt="" className='w-[5%]'/> */}

      {/* Menu para telas maiores */}
      <ul className='hidden md:flex gap-16'>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="font-medium relative transition-all cursor-pointer
            before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[2px] 
            before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="sobrenos"
            smooth={true}
            duration={500}
            className="font-medium relative transition-all cursor-pointer
            before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[2px] 
            before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full"
          >
            Sobre Nós
          </Link>
        </li>
        <li>
          <Link
            to="produto"
            smooth={true}
            duration={500}
            className="font-medium relative transition-all cursor-pointer
            before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[2px] 
            before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full"
          >
            Produto
          </Link>
        </li>
        <li>
          <Link
            to="footer"
            smooth={true}
            duration={500}
            className="font-medium relative transition-all cursor-pointer
            before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[2px] 
            before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full"
          >
            Contato
          </Link>
        </li>
      </ul>

      {/* Menu hambúrguer para telas menores */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-orange-500 text-2xl'>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <ul className='absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-6 p-6 z-40'>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className='font-medium hover:scale-110 transition-all cursor-pointer hover:text-orange-500'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="sobrenos"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className='font-medium hover:scale-110 transition-all cursor-pointer hover:text-orange-500'
            >
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link
              to="produto"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className='font-medium hover:scale-110 transition-all cursor-pointer hover:text-orange-500'
            >
              Produto
            </Link>
          </li>
          <li>
            <Link
              to="footer"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className='font-medium hover:scale-110 transition-all cursor-pointer hover:text-orange-500'
            >
              Contato
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
