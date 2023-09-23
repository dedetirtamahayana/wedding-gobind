import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 500,
    });
  }, []);

  return (
    <div>
      <div className='bg-gallery p-5 sm:py-8 lg:py-28 lg:px-0'>
        <div
          className='mx-auto max-w-screen-2xl md:px-8'
          data-aos='zoom-in'
          data-aos-duration='2000'
        >
          <div className='mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-12'>
            <div className='text-center'>
              <h2 className='text-5xl text-black custom-text'>
                Sweet Memories
              </h2>
            </div>
          </div>
          <div className='flex flex-wrap space-x-4'>
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a
                href='/banner.png'
                className='block group relative overflow-hidden rounded-lg shadow-lg mb-4'
              >
                <img
                  className='gallery-image transition duration-200 group-hover:scale-110'
                  alt='Wedding'
                  src='/banner.png'
                />
              </a>
              <a
                href='/gallery-men.png'
                className='w-auto canvas-gallery m-0 lg:mr-2 lg:canvas-gallery inline-block group relative overflow-hidden rounded-lg shadow-lg'
              >
                <img
                  className='w-full gallery-image transition duration-200 group-hover:scale-110'
                  alt='Amara'
                  src='/gallery-men.png'
                />
              </a>
              <a
                href='gallery-women.png'
                className='w-auto canvas-gallery m-0 lg:ml-2 lg:canvas-gallery inline-block group relative overflow-hidden rounded-lg shadow-lg'
              >
                <img
                  className='w-full gallery-image transition duration-200 group-hover:scale-110'
                  alt='Sarizki'
                  src='gallery-women.png'
                />
              </a>
            </LightGallery>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
