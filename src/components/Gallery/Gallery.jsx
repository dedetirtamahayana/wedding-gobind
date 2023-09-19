import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className='bg-flower'>
        <div className='container mx-auto p-10 lg:py-9 lg:px-0'>
          <h2 className='text-3xl text-center'>Captured Moments</h2>
          <p className='text-center w-auto lg:w-96 mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <div className='bg-gallery p-10 sm:py-8 lg:py-36 lg:px-0'>
        <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
          <div className='mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-12'>
            <div className='text-center'>
              <h2 className='text-2xl font-bold text-gold lg:text-3xl'>
                Sweet Memories
              </h2>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8'>
            {/* image - start */}
            <a
              href='../banner-2.jpg'
              className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80'
            >
              <img
                src='../banner-2.jpg'
                loading='lazy'
                alt='Photo by Minh Pham'
                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />

              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>
            </a>
            {/* image - end */}

            {/* image - start */}
            <a
              href='../3.jpg'
              className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80'
            >
              <img
                src='../3.jpg'
                loading='lazy'
                alt='Photo by Magicle'
                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />

              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>
            </a>
            {/* image - end */}

            {/* image - start */}
            <a
              href='#'
              className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80'
            >
              <img
                src='../1.jpg'
                loading='lazy'
                alt='Photo by Martin Sanchez'
                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />

              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>
            </a>
            {/* image - end */}

            {/* image - start */}
            <a
              href='#'
              className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80'
            >
              <img
                src='../banner-1.jpg'
                loading='lazy'
                alt='Photo by Lorenzo Herrera'
                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />

              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>
            </a>
            {/* image - end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
