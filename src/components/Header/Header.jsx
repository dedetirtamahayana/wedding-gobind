import React, { useState, useEffect } from "react";
import { FaHome, FaFeatherAlt, FaImages, FaDove, FaBars } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";
const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  useEffect(() => {
    // Fungsi untuk membuat firefly
    const createFirefly = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      for (let i = 0; i < 5; i++) {
        const firefly = document.createElement("div");
        firefly.className = "firefly";

        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 5 + 2;

        firefly.style.width = `${size}px`;
        firefly.style.height = `${size}px`;
        firefly.style.animationDuration = `${duration}s`;

        const x = Math.random() * (screenWidth - size);
        const y = Math.random() * (screenHeight - size);

        firefly.style.left = `${x}px`;
        firefly.style.top = `${y}px`;

        firefly.addEventListener("animationiteration", () => {
          // Hapus firefly setelah selesai animasi
          firefly.remove();
        });

        document.querySelector(".firefly-container").appendChild(firefly);
      }
    };

    // Buat fireflies setiap beberapa detik
    const interval = setInterval(createFirefly, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='relative overflow-hidden' id='home'>
      <nav
        className={`py-7 px-4 absolute z-50 top-0 left-0 w-full ${
          menuVisible ? "bg-opacity-50" : "bg-transparent"
        }`}
      >
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <img src='../logo-asa.png' alt='logo' className='w-12' />

            <ul className='hidden lg:flex gap-9 text-white'>
              <li className='text-grey text-lg'>
                <a href='#home'>Home</a>
              </li>
              <li className='text-grey text-lg'>
                <a href='#gallery'>Gallery</a>
              </li>
              <li className='text-grey text-lg'>
                <a href='#rsvp'>RSVP</a>
              </li>
              <li className='text-grey text-lg'>
                <a href='#map'>Maps</a>
              </li>
            </ul>

            <FaBars
              color='white'
              width={100}
              onClick={toggleMenu}
              className='lg:hidden'
            ></FaBars>
          </div>
        </div>

        <div
          className={`lg:hidden fixed bottom-0 right-0 left-0 p-4 transition-transform duration-300 z-50 ${
            menuVisible
              ? "transform translate-y-0"
              : "transform translate-y-full"
          }`}
        >
          <ul className='flex justify-between'>
            <li>
              <a
                href='#'
                className='flex justify-center flex-col items-center gap-1'
              >
                <FaHome className='text-gold' />
                <span className='text-biru'>Home</span>
              </a>
            </li>
            <li>
              <a
                href='#gallery'
                className='flex justify-center flex-col items-center gap-1'
              >
                <FaImages className='text-gold' />
                <span className='text-biru text-gold'>Gallery</span>
              </a>
            </li>
            <li>
              <a
                href='#rsvp'
                className='flex justify-center flex-col items-center gap-1'
              >
                <FaFeatherAlt className='text-gold' />
                <span className='text-biru'>RSVP</span>
              </a>
            </li>
            <li>
              <a
                href='#map'
                className='flex justify-center flex-col items-center gap-1'
              >
                <FaDove className='text-gold' />
                <span className='text-biru'>Maps</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ height: "800px" }}>
        <div className='h-full w-full'>
          <img
            src='../banner-1.png'
            alt='image 1'
            className='h-full w-auto object-cover hidden lg:block md:block'
          />
          <img
            src='../banner-mobile.png'
            alt='image 1'
            className='h-full w-auto object-cover bg-right block lg:hidden md:hidden'
          />
          <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'></div>
        </div>
      </div>
      <div className='absolute inset-0 pointer-events-none firefly-container'></div>
      <div className='absolute bottom-0 left-0 right-0 text-center pb-16'>
        <Typography
          variant='h1'
          color='white'
          className='mb-4 text-3xl md:text-4xl lg:text-7xl custom-text'
        >
          Amara & Sarizki
        </Typography>
        <Typography variant='lead' color='white' className='mb-3 opacity-80'>
          20 Oktober 2023.
        </Typography>
        <Typography variant='lead' color='white' className='opacity-80'>
          Save The Date
        </Typography>
      </div>
    </div>
  );
};

export default Header;
