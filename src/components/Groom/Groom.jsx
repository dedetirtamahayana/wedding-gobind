import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Groom = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 500,
    });
  }, []);

  return (
    <div className='bg-groom  overflow-hidden'>
      <div className='container py-5 px-5 lg:px-0 lg:py-32 mx-auto'>
        <div className='text-center text-gold text-5xl flex flex-col items-center pb-5 lg:pb-0'>
          <h1>Groom and Bride</h1>
        </div>
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2 text-center text-white'>
          <div className='mx-auto mb-5 lg:mb-0' data-aos='fade-right'>
            <img
              className='h-72 w-72 lg:h-96 lg:w-96 rounded-full object-cover object-center mx-auto'
              src='../fix-lakik.png'
              alt='nature image'
            />
            <h2 className='text-3xl text-gold pb-2'>
              dr. I Dewa Gede Amara Putra Wibawa, S.Ked
            </h2>
            <p className='mx-auto'>Putra Pertama dari Pasangan</p>
            <p className='mx-auto'>I Dewa Made Puspawan,S.IP,MM.</p>
            <p className='mx-auto'>&</p>
            <p className='mx-auto'>Ni Nyoman Sri Utari, S.Sos M.Si</p>
            <p className='mx-auto'>
              Br. Baturiti Klod, Desa Baturiti, Kec. Baturiti Tabanan
            </p>
          </div>
          <div className='mx-auto mb-5 lg:mb-0' data-aos='fade-left'>
            <img
              className='h-72 w-72 lg:h-96 lg:rounded-full object-cover object-center mx-auto'
              src='../fix-women.png'
              alt='nature image'
            />
            <h2 className='text-3xl text-gold pb-2'>
              dr. Komang Sarizki Armidita, S.Ked
            </h2>
            <p className='mx-auto'>Putri Ketiga dari Pasangan</p>
            <p className='mx-auto'>dr. I Ketut Mudita Adnyana</p>
            <p className='mx-auto'>&</p>
            <p className='mx-auto'>dr. Ni Made Armini</p>
            <p className='mx-auto'>
              Br. Anyar, Kelurahan Padangsambian, Kec. Denpasar Barat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groom;
