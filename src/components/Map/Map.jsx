import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const Map = () => {
  return (
    <div className=''>
      <div className='bg-map py-9 lg:py-48 bg-black opacity-50'>
        <div className='container mx-auto '>
          <div className='text-center lg:pb-36  text-white'>
            <h2 className='text-3xl'>Celebrate Our Love</h2>
            <span className='text-3xl'> 20 OKT 2023</span>
          </div>
        </div>
      </div>

      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-0 m-0 lg:-mt-52 lg:mb-32 drop-shadow-2xl '>
          <div className='p-12  bg-white'>
            <h2 className='text-2xl'>Ceremony</h2>
            <p className='mb-6'>
              Friday, February 14, 2020
              <br />
              09:00 – 11:00
            </p>
            <p className='mb-6'>
              St. Patrick’s Cathedral
              <br />
              5th Avenue, New York, NY 10019
              <br />
              United States
            </p>
          </div>
          <div className='p-12  lg:border-x-2 lg:border-gold bg-white'>
            <h2 className='text-2xl'>Ceremony</h2>
            <p className='mb-6'>
              Friday, February 14, 2020
              <br />
              09:00 – 11:00
            </p>
            <p className='mb-6'>
              St. Patrick’s Cathedral
              <br />
              5th Avenue, New York, NY 10019
              <br />
              United States
            </p>
            <div className='text-center'>
              <a
                href=''
                className='flex items-center justify-center text-black hover:text-gold'
              >
                <FaMapMarkedAlt className='mr-2' />{" "}
                {/* Adjust the margin as needed */}
                <span className=''>GET DIRECTION</span>
              </a>
            </div>
          </div>
          <div className='p-12  bg-white'>
            <h2 className='text-2xl'>Ceremony</h2>
            <p className='mb-6'>
              Friday, February 14, 2020
              <br />
              09:00 – 11:00
            </p>

            <p className='mb-6'>
              St. Patrick’s Cathedral
              <br />
              5th Avenue, New York, NY 10019
              <br />
              United States
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
