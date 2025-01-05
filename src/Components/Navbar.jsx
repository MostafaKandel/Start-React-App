import React, { useState } from "react";

export default function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-secondary sticky top-0 z-50">
        <div className="container flex items-center justify-between py-10">
          <a
            className="font-extrabold text-3xl text-white tracking-widest uppercase"
            href="#"
          >
            START REACT
          </a> 
          <button
            className="flex items-center px-3 py-2 md:hidden text-white font-bold bg-primary rounded"
            type="button"
            onClick={toggleMenu}  
          >
            Menu <i className="fa-solid fa-bars fa-sm ml-2"></i>
          </button>
           
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:space-x-8 w-full md:w-auto`}
            id="navbarSupportedContent"
          >
            <ul className="flex flex-col md:flex-row justify-center items-center">
              <li className="mx-4 md:mx-10 my-2 md:my-0">
                <a
                  href="#portfolio"
                  className="text-white text-l uppercase font-bold px-4 py-2 rounded-lg hover:text-primary bg-primary"
                >
                  Portfolio
                </a>
              </li>
              <li className="mx-4 md:mx-10 my-2 md:my-0">
                <a
                  href="#about"
                  className="text-white text-l uppercase font-bold px-4 py-2 rounded-lg hover:text-primary"
                >
                  About
                </a>
              </li>
              <li className="mx-4 md:mx-10 my-2 md:my-0">
                <a
                  href="#contact"
                  className="text-white text-l uppercase font-bold px-4 py-2 rounded-lg hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
