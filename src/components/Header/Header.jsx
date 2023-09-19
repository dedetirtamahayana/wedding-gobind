import React, { useState } from "react";
import { FaHome, FaFeatherAlt, FaImages, FaDove, FaBars } from "react-icons/fa";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  console.log(menuVisible);

  return (
    <nav className='py-7 px-4 bg-biru'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <img src='../logo-asa.png' alt='logo' className='w-12' />

          {/* Tambahkan CSS untuk tampilan tablet */}
          <ul className='hidden lg:flex gap-9 text-white'>
            <li className='text-grey text-lg'>
              <a href=''>Home</a>
            </li>
            <li className='text-grey text-lg'>
              <a href=''>Gallery</a>
            </li>
            <li className='text-grey text-lg'>
              <a href=''>RSVP</a>
            </li>
            <li className='text-grey text-lg'>
              <a href=''>Story</a>
            </li>
          </ul>

          {/* Tombol Menu untuk Tampilan Mobile */}

          <FaBars
            color='white'
            width={100}
            onClick={toggleMenu}
            className='lg:hidden'
          ></FaBars>
        </div>
      </div>

      {/* Menu untuk Tampilan Mobile */}
      <div
        className={`lg:hidden fixed bottom-0 right-0 bg-white left-0 p-4 transition-transform duration-300 z-50 ${
          menuVisible ? "transform translate-y-0" : "transform translate-y-full"
        }`}
      >
        <ul className='flex justify-between'>
          <li>
            <a
              href='#'
              className='flex justify-center flex-col items-center gap-1'
            >
              <FaHome className='text-grey opacity-50' />
              <span className='text-yellow-300'>Home</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex justify-center flex-col items-center gap-1'
            >
              <FaImages className='text-grey opacity-50' />
              <span className='text-grey opacity-50'>Gallery</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex justify-center flex-col items-center gap-1'
            >
              <FaFeatherAlt className='text-grey opacity-50' />
              <span className='text-grey opacity-50'>RSVP</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex justify-center flex-col items-center gap-1'
            >
              <FaDove className='text-grey opacity-50' />
              <span className='text-grey opacity-50'>Story</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
