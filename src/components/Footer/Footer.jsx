import React from "react";

const Footer = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <img
          className='h-72 w-72 lg:h-96 lg:w-96 rounded-full object-cover object-center mx-auto'
          src='../bulet.png'
          alt='nature image'
        />
        <h1 className='text-4xl text-center'>We Are Expecting You</h1>
      </div>

      <div className='bg-biru py-7 px-4 mt-9'></div>
    </div>
  );
};

export default Footer;
