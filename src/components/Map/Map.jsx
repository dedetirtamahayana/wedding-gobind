import { FaMapMarkedAlt } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Map = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 500,
    });
  }, []);
  return (
    <div id='map'>
      <div className='relative bg-map py-9 lg:py-48'>
        <div className='absolute inset-0 bg-black opacity-50'></div>

        <div className='container mx-auto relative'>
          <div className='text-center lg:pb-36 text-white relative z-10'>
            <h2 className='text-5xl custom-text'>Celebrate Our Love</h2>
            <span className='text-3xl custom-text'> 20 OKT 2023</span>
          </div>
        </div>
      </div>

      <div className='container mx-auto '>
        <div
          className='grid grid-cols-1 lg:grid-cols-3 gap-0 m-0 lg:-mt-52 lg:mb-32 drop-shadow-2xl '
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <div className='p-12 bg-white lg:w-auto lg:h-80 w-full'>
            <h2 className='text-2xl'>Sesi 1</h2>
            <p className='mb-6'>
              Jumat, Oktober 20, 2023
              <br />
              16:00 – 18:00
            </p>
            <p className='mb-6'>
              Griya Taksu Event Space
              <br />
              Jl.Ir.Sutami, Kemenuh, Kecamatan Sukawati, Kabupaten Gianyar, Bali
            </p>
          </div>
          <div className='p-12 lg:border-x-2 lg:border-gold bg-white lg:w-auto lg:h-80 w-full'>
            <h2 className='text-2xl'>Sesi 2</h2>
            <p className='mb-6'>
              Jumat, Oktober 20, 2023
              <br />
              18:00 – 19:00
            </p>
            <p className='mb-6'>
              Griya Taksu Event Space
              <br />
              Jl.Ir.Sutami, Kemenuh, Kecamatan Sukawati, Kabupaten Gianyar, Bali
            </p>
            <div className='text-center'>
              <a
                href='https://maps.app.goo.gl/MU7j3naQvcRRx6nw6?g_st=iw'
                className='flex items-center justify-center text-black hover:text-gold'
              >
                <FaMapMarkedAlt className='mr-2' />

                <span className=''>GET DIRECTION</span>
              </a>
            </div>
          </div>
          <div className='p-12  bg-white lg:w-auto lg:h-80 w-full'>
            <h2 className='text-2xl'>Sesi 3</h2>
            <p className='mb-6'>
              Jumat, Oktober 20, 2023
              <br />
              19:00 – Selesai
            </p>
            <p className='mb-6'>
              Griya Taksu Event Space
              <br />
              Jl.Ir.Sutami, Kemenuh, Kecamatan Sukawati, Kabupaten Gianyar, Bali
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
