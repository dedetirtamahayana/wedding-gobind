import React from "react";

const Groom = () => {
  return (
    <div className='bg-groom py-32'>
      <div className='container lg mx-auto'>
        <div className='text-center text-gold text-3xl flex flex-col items-center pb-5 lg:pb-0'>
          <h1>Groom and Bride</h1>
        </div>
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2 text-center text-white'>
          <div className='mx-auto mb-5 lg:mb-0'>
            <img
              className='h-72 w-72 lg:h-96 lg:w-96 rounded-full object-cover object-center'
              src='../fix-lakik.png'
              alt='nature image'
            />
            <h2 className='text-3xl text-gold pb-2'>Sarizaki</h2>
            <p className='w-72 mx-auto'>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam
              sit amet quam vehicula elementum sed sit amet dui. Nulla quis
              lorem ut libero malesuada feugiat.
            </p>
          </div>
          <div className='mx-auto mb-5 lg:mb-0'>
            <img
              className='h-72 w-72 lg:h-96 lg:w-96 rounded-full object-cover object-center'
              src='../fix-women.png'
              alt='nature image'
            />
            <h2 className='text-3xl text-gold pb-2'>Amara</h2>
            <p className='w-72 mx-auto'>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam
              sit amet quam vehicula elementum sed sit amet dui. Nulla quis
              lorem ut libero malesuada feugiat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groom;
