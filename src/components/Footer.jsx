import React from "react";
import { Link } from "react-scroll";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-white p-6 sm:p-8 lg:p-10 font-[sans-serif] tracking-wide"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Logo */}
        <div className="lg:flex lg:items-center">
            <h2 className='text-black text-[40px] font-lacquer'>Sun<span className='font-lacquer text-orange-500'>CAPE</span></h2>
        </div>

        {/* Redes sociais */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-orange-500">
            Nossas Redes
          </h4>
          <ul className="flex space-x-4 sm:space-x-6">
            <li>
              <a href="https://www.instagram.com/sun_cape_/">
                <FaInstagram
                  size={30}
                  className="hover:text-orange-500 cursor-pointer"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-orange-500">
            Contato
          </h4>
          <ul className="space-y-3">
            <li>
              <a className="text-gray-800 hover:text-orange-500 text-sm">
                Email - administracao@suncape.com.br
              </a>
            </li>
            <li>
              <a
                className="text-gray-800 hover:text-orange-500 text-sm"
              >
                Telefone - (85) 98914-2027
              </a>
            </li>
          </ul>
        </div>

        {/* Informações */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-orange-500">
            Informações
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-orange-500 text-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="sobrenos"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-orange-500 text-sm"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                to="produto"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-orange-500 text-sm"
              >
                Produto
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-gray-800 text-center text-sm mt-8">
        © SunCape. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
