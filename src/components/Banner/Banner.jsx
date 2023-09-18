import React, { useEffect } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const Banner = () => {
  useEffect(() => {
    // Fungsi untuk membuat firefly
    const createFirefly = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      for (let i = 0; i < 10; i++) {
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
    <div className='relative overflow-hidden'>
      {/* Container untuk gambar dan firefly */}
      <div className='relative'>
        <Carousel className='h-800' style={{ height: "800px" }}>
          <div className='relative h-full w-full'>
            <img
              src='../3.jpg'
              alt='image 1'
              className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
              <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'>
                <Typography
                  variant='h1'
                  color='white'
                  className='mb-4 text-3xl md:text-4xl lg:text-5xl'
                >
                  Sarizaki & Amara
                </Typography>
                <Typography
                  variant='lead'
                  color='white'
                  className='mb-3 opacity-80'
                >
                  20 Oktober 2023.
                </Typography>
                <Typography variant='lead' color='white' className='opacity-80'>
                  Save The Date
                </Typography>
              </div>
            </div>
          </div>
          <div className='relative h-full w-full'>
            <img
              src='../banner-2.jpg'
              alt='image 2'
              className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
              <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'>
                <Typography
                  variant='h1'
                  color='white'
                  className='mb-4 text-3xl md:text-4xl lg:text-5xl'
                >
                  Sarizaki & Amara
                </Typography>
                <Typography
                  variant='lead'
                  color='white'
                  className='mb-3 opacity-80'
                >
                  20 Oktober 2023.
                </Typography>
                <Typography variant='lead' color='white' className='opacity-80'>
                  Save The Date
                </Typography>
              </div>
            </div>
          </div>
          <div className='relative h-full w-full'>
            <img
              src='../1.jpg'
              alt='image 3'
              className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
              <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'>
                <Typography
                  variant='h1'
                  color='white'
                  className='mb-4 text-3xl md:text-4xl lg:text-5xl'
                >
                  Sarizaki & Amara
                </Typography>
                <Typography
                  variant='lead'
                  color='white'
                  className='mb-3 opacity-80'
                >
                  20 Oktober 2023.
                </Typography>
                <Typography variant='lead' color='white' className='opacity-80'>
                  Save The Date
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>

        {/* Container untuk firefly */}
        <div className='absolute inset-0 pointer-events-none firefly-container'></div>
      </div>
    </div>
  );
};

export default Banner;
